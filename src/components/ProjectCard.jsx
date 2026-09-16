import CornerFrame from "./CornerFrame.jsx";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, active = false }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden border bg-gradient-to-b from-bark/50 to-ink/30 transition-[border-color,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active
          ? "border-brass/60 shadow-[0_0_60px_-12px_rgba(107,72,31,0.55)]"
          : "border-brass/15 opacity-55 hover:opacity-80"
      }`}
    >
      {active && <CornerFrame />}

      {/* Area image — bagian terbesar card. Ganti dengan <img> saat asset asli tersedia */}
      <div className="relative w-full flex-1 overflow-hidden bg-gradient-to-b from-umber/35 via-bark/25 to-ink/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass/25 bg-bronze/10 blur-[2px]"
          />
        )}
      </div>

      <div className="flex items-end justify-between gap-4 px-6 pb-6 pt-5">
        <div className="min-w-0">
          <p className="eyebrow text-[9px] text-brass/80">{project.category}</p>
          <h3 className="text-glow mt-2 truncate font-display text-xl uppercase text-cream sm:text-2xl">
            {project.title}
          </h3>
          {active && (
            <p className="mt-2 hidden max-w-md text-[13px] leading-relaxed text-cream/60 sm:block">
              {project.description}
            </p>
          )}
        </div>

        <a
          href={project.link}
          aria-label={`View project: ${project.title}`}
          className={`group/link flex shrink-0 items-center gap-2 border border-brass/30 px-4 py-2 transition-colors duration-300 hover:border-brass/60 hover:bg-bronze/10 ${
            active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <span className="eyebrow text-[9px] text-cream/80">View Project</span>
          <ArrowUpRight
            className="size-3.5 text-brass transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </article>
  );
}
