export default function CornerFrame({ className = "" }) {
  const base = "pointer-events-none absolute size-4 border-brass/40";
  return (
    <span aria-hidden="true" className={className}>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </span>
  );
}
