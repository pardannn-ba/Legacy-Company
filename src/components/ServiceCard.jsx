import CornerFrame from "./CornerFrame.jsx";

export default function ServiceCard({ lines, description }) {
  return (
    <article className="group relative border border-brass/20 bg-gradient-to-b from-bark/50 to-ink/30 p-6 transition-colors duration-500 hover:border-brass/45 sm:p-8">
      <CornerFrame />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-bronze/15 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ opacity: 0.4 }}
      />

      <h3 className="text-glow relative font-display text-2xl uppercase leading-[1.02] text-cream sm:text-3xl">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p className="relative mt-4 max-w-xs text-[13px] leading-relaxed text-cream/60">
        {description}
      </p>
    </article>
  );
}
