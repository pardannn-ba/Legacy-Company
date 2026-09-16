export default function ScrollHint({
  href = "#vision-mission",
  label = "Scroll for more",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`group animate-fade-in flex items-center gap-4 ${className}`}
    >
      <span className="animate-scroll-hint size-1 rounded-full bg-brass/80" />
      <span className="eyebrow text-[9px] text-cream/45 transition-colors duration-300 group-hover:text-cream sm:text-[10px]">
        {label}
      </span>
      <span className="animate-scroll-hint size-1 rounded-full bg-brass/80" />
    </a>
  );
}
