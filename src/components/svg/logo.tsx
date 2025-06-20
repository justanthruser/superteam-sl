import type { SVGProps } from 'react';

export function SuperteamSLLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Superteam SL Logo"
      {...props}
    >
      <rect width="100" height="100" rx="15" fill="hsl(var(--primary))" />
      <path
        d="M30 75L30 25L50 25C61.0457 25 70 33.9543 70 45C70 56.0457 61.0457 65 50 65L40 65"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 65L70 75"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
