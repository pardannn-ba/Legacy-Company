export default function DecorativeLine({ variant = "h", className = "" }) {
  if (variant === "arc") {
    return (
      <svg
        viewBox="0 0 560 40"
        fill="none"
        aria-hidden="true"
        className={`animate-line-reveal ${className}`}
      >
        <path
          d="M0 4 Q 280 40 560 4"
          stroke="rgba(200,154,94,0.35)"
          strokeWidth="1"
        />
      </svg>
    );
  }

  if (variant === "v") {
    return (
      <span
        aria-hidden="true"
        className={`block w-px bg-gradient-to-b from-transparent via-brass/40 to-transparent ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`animate-line-reveal block h-px bg-gradient-to-r from-transparent via-brass/35 to-transparent ${className}`}
    />
  );
}
