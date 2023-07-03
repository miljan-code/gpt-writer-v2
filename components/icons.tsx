import {
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Loader2,
  Zap,
  Database,
  Share,
  LayoutDashboard,
  CaseSensitive,
  FileText,
  Repeat,
  Edit,
  Wand2,
  Settings,
  Receipt,
  LogOut,
  Languages,
  Coins,
  Book,
  DollarSign,
  CircleDollarSign,
  TerminalSquare,
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
  dashboard: LayoutDashboard,
  letters: CaseSensitive,
  textFile: FileText,
  repeat: Repeat,
  edit: Edit,
  wand: Wand2,
  settings: Settings,
  receipt: Receipt,
  logout: LogOut,
  languages: Languages,
  coins: Coins,
  book: Book,
  dollar: DollarSign,
  circleDollar: CircleDollarSign,
  terminal: TerminalSquare,
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
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  twitter: (props: LucideProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="currentColor"
      role="img"
      focusable="false"
      {...props}
    >
      <path d="M16 3.42059C15.4484 3.66118 14.8558 3.82375 14.2328 3.89723C14.8684 3.52268 15.3559 2.92834 15.5858 2.22085C14.9912 2.56809 14.3326 2.82039 13.6317 2.95565C13.0702 2.36781 12.2708 1.99976 11.3856 1.99976C9.68647 1.99976 8.30842 3.35621 8.30842 5.02999C8.30842 5.26669 8.33617 5.49688 8.38769 5.71928C5.82912 5.59247 3.56254 4.38623 2.04444 2.55378C1.78019 3.00247 1.62825 3.52268 1.62825 4.0767C1.62825 5.12753 2.17194 6.05546 2.99705 6.59843C2.49234 6.58218 2.01801 6.44627 1.60314 6.21933V6.25835C1.60314 7.72599 2.66344 8.95045 4.07188 9.22876C3.81291 9.29769 3.5414 9.3341 3.2613 9.3341C3.06311 9.3341 2.86955 9.31589 2.68193 9.28078C3.07368 10.4838 4.20994 11.3603 5.55695 11.3837C4.50326 12.1966 3.17608 12.681 1.73461 12.681C1.48622 12.681 1.24113 12.6667 1 12.6388C2.3622 13.4991 3.97939 13.9998 5.71681 13.9998C11.3783 13.9998 14.4733 9.38417 14.4733 5.38114C14.4733 5.25108 14.47 5.11973 14.4641 4.98968C15.0652 4.5618 15.5871 4.02923 15.9987 3.42254L16 3.42059Z"></path>
    </svg>
  ),
};
