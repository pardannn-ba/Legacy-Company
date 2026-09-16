import CornerFrame from "./CornerFrame.jsx";

export default function VisionCard({ title, children }) {
  return (
    <article className="group relative overflow-hidden border border-brass/20 bg-gradient-to-b from-bark/60 to-ink/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-brass/40 sm:p-10">
      {/* glow dalam card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-2/3 -translate-x-1/2 rounded-full bg-bronze/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ opacity: 0.5 }}
      />
      <CornerFrame />

      <div className="relative">
        <h3 className="text-glow font-display text-3xl uppercase text-cream/90 sm:text-4xl">
          {title}
        </h3>
        <span
          aria-hidden="true"
          className="mt-5 block h-px w-16 bg-gradient-to-r from-brass/60 to-transparent"
        />
        <div className="mt-6 text-sm leading-relaxed text-cream/65">
          {children}
        </div>
      </div>
    </article>
  );
}
