import CornerFrame from "./CornerFrame.jsx";

export default function MemberCard({ name, role }) {
  return (
    <article className="group relative border border-brass/20 bg-gradient-to-b from-bark/50 to-ink/30 p-3 transition-colors duration-500 hover:border-brass/45">
      <CornerFrame />

      {/* Area foto — placeholder kosong mengikuti UI reference */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-umber/25 via-bark/20 to-transparent">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/20 bg-bronze/10 blur-[2px] transition-all duration-700 group-hover:scale-105 group-hover:border-brass/40"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-8 bottom-8 h-px bg-brass/25"
        />
      </div>

      <div className="px-3 pb-4 pt-5 text-center sm:px-4">
        <h3 className="text-glow font-display text-2xl uppercase text-cream sm:text-3xl">
          {name}
        </h3>
        <p className="eyebrow mt-2 text-[9px] text-brass/80 sm:text-[10px]">
          {role}
        </p>
      </div>
    </article>
  );
}
