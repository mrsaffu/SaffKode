/**
 * BrandIcons.jsx — minimal inline SVG icons for third-party brands
 * (LinkedIn, GitHub, X/Twitter). lucide-react removed all brand/trademark
 * icons from its library, so these are maintained locally instead of
 * depending on icon-package version availability. Each accepts the same
 * `size` prop convention as lucide-react icons for drop-in consistency.
 */

export function LinkedinIcon({ size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function GithubIcon({ size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.35-1.16-1.63-.4-.22-.97-.75-.01-.76.9-.01 1.54.84 1.76 1.19 1.03 1.75 2.67 1.26 3.32.96.1-.75.4-1.26.72-1.55-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function XIcon({ size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M18.9 2H22l-7.6 8.68L23.4 22h-7.1l-5.55-7.26L4.32 22H1.2l8.13-9.29L1 2h7.28l5.02 6.63L18.9 2zm-1.25 18.17h1.75L7.45 3.73H5.57l12.08 16.44z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M22 12s0-3.2-.41-4.74a2.78 2.78 0 0 0-1.96-1.97C18.09 5 12 5 12 5s-6.09 0-7.63.29a2.78 2.78 0 0 0-1.96 1.97C2 8.8 2 12 2 12s0 3.2.41 4.74c.24.9.98 1.63 1.96 1.97C5.91 19 12 19 12 19s6.09 0 7.63-.29a2.78 2.78 0 0 0 1.96-1.97C22 15.2 22 12 22 12zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}
