import { headers } from 'next/headers';
import Stripe from 'stripe';
import { createId } from '@paralleldrive/cuid2';
import { eq, sql } from 'drizzle-orm';
import { stripe } from '@/lib/stripe';
import { creditPlans } from '@/config/credit-plans';
import { db } from '@/db';
import { user, payment } from '@/db/schema';

interface Metadata extends Stripe.Metadata {
  plan:
    | 'STRIPE_PLAN_100'
    | 'STRIPE_PLAN_200'
    | 'STRIPE_PLAN_350'
    | 'STRIPE_PLAN_500';
  userId: string;
}

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response(null, { status: 403 });
  }

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    }
    return new Response(`Webhook Error: ${message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === 'payment_intent.succeeded') {
    const { plan, userId } = session.metadata as Metadata;

    const creditPlan = creditPlans.find(
      creditPlan => creditPlan.stripePriceId === plan
    );

    if (!creditPlan) {
      return new Response('Something went wrong', { status: 400 });
    }

    await db.transaction(async tx => {
      await tx
        .update(user)
        .set({
          credits: sql`${user.credits} + ${creditPlan.creditAmount}`,
        })
        .where(eq(user.id, userId));
      await tx.insert(payment).values({
        id: createId(),
        userId: userId,
        amount: creditPlan.creditAmount,
        price: creditPlan.price.toString(),
      });
    });
  }

  return new Response(null, { status: 200 });
}
