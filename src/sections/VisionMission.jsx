import SectionTitle from "../components/SectionTitle.jsx";
import VisionCard from "../components/VisionCard.jsx";
import ScrollHint from "../components/ScrollHint.jsx";
import Reveal from "../components/Reveal.jsx";

const missionPoints = [
  "Menyediakan solusi digital terbaik",
  "Meningkatkan kualitas bisnis melalui teknologi",
  "Mengutamakan inovasi & kreativitas",
  "Memberikan layanan profesional",
];

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44"
    >
      {/* glow samar kiri */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionTitle align="right" lines={["Vision", "Mission &"]} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-2 lg:gap-10">
          <Reveal delay={100}>
            <VisionCard title="Vision">
              <p>
                To become a leading digital company delivering creative,
                innovative, and highly competitive solutions for modern
                business needs, driving digital transformation through
                effective, adaptive, and industry-oriented technology.
              </p>
            </VisionCard>
          </Reveal>

          <Reveal delay={220}>
            <VisionCard title="Mission">
              <ul className="space-y-2.5">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="text-brass/80">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </VisionCard>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-20 flex justify-center md:mt-28">
            <ScrollHint href="#members" label="Scroll for more" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
