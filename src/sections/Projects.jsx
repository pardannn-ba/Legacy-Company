import SectionTitle from "../components/SectionTitle.jsx";
import ProjectFilter from "../components/ProjectFilter.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import Reveal from "../components/Reveal.jsx";
import { useState } from "react";

export default function Projects() {
  const [category, setCategory] = useState("ALL");

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44"
    >
      {/* glow samar kanan, konsisten dengan section lain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle align="center" lines={["Project", "We Made"]} />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 md:mt-16">
            <ProjectFilter active={category} onChange={setCategory} />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 md:mt-16">
            <ProjectCarousel category={category} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
