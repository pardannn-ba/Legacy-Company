export default function SectionTitle({ eyebrow, lines, align = "left" }) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <div className={alignClass}>
      {eyebrow && (
        <p className="eyebrow text-[10px] text-brass/80">{eyebrow}</p>
      )}
      <h2 className="mt-5 font-display text-5xl uppercase leading-[0.92] text-cream text-glow sm:text-6xl lg:text-7xl">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
}
