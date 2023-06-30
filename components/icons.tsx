import {
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Loader2,
  Zap,
  Database,
  Share,
  type LucideProps,
} from 'lucide-react';

export const Icons = {
  menu: Menu,
  close: X,
  sparkles: Sparkles,
  chevronRight: ChevronRight,
  spinner: Loader2,
  zap: Zap,
  database: Database,
  share: Share,
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="36px"
      height="36px"
      baseProfile="basic"
      className="pt-0.5"
      {...props}
    >
      <path
        fill="#fff"
        d="M12.5,41L12.5,41C8.91,41,6,38.09,6,34.5v-2c0-3.59,2.91-6.5,6.5-6.5h0c1.933,0,3.5,1.567,3.5,3.5v8	C16,39.433,14.433,41,12.5,41z"
      />
      <path
        fill="#fff"
        d="M51.5,41L51.5,41c3.59,0,6.5-2.91,6.5-6.5v-2c0-3.59-2.91-6.5-6.5-6.5h0c-1.933,0-3.5,1.567-3.5,3.5	v8C48,39.433,49.567,41,51.5,41z"
      />
      <rect width="4" height="7" x="30" y="10" fill="#fff" />
      <path
        fill="#198cff"
        d="M43,52H21c-5.523,0-10-4.477-10-10V25c0-5.523,4.477-10,10-10h22c5.523,0,10,4.477,10,10v17	C53,47.523,48.523,52,43,52z"
      />
      <path
        fill="#fff"
        d="M11,25v5c2.762,0,5-2.239,5-5c0-2.757,2.243-5,5-5c2.762,0,5-2.239,5-5h-5 C15.477,15,11,19.477,11,25z"
        opacity=".3"
      />
      <path
        d="M53,42v-5c-2.762,0-5,2.239-5,5c0,2.757-2.243,5-5,5c-2.762,0-5,2.239-5,5h5 C48.523,52,53,47.523,53,42z"
        opacity=".15"
      />
      <circle cx="32" cy="8" r="4" fill="#fff" />
      <circle cx="22" cy="33" r="4" fill="#fff" />
      <circle cx="42" cy="33" r="4" fill="#fff" />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="144px"
      height="144px"
      {...props}
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  ),
};
