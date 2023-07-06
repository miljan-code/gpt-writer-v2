import { AIService } from '@/components/dashboard/ai-service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grammar Checker',
  description: 'Write like a pro, everywhere you write.',
};

export default function GrammarCheckerPage() {
  return <AIService service="grammar" />;
}