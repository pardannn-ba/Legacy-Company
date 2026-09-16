import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";
import CarouselIndicator from "./CarouselIndicator.jsx";
import { projects } from "../data/projects.js";

const GAP = 24;
const SWIPE_THRESHOLD = 60;

export default function ProjectCarousel({ category }) {
  const [displayedCategory, setDisplayedCategory] = useState(category);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | leaving | entering
  const [direction, setDirection] = useState("next");
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const categoryProjects =
    displayedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === displayedCategory);

  const count = categoryProjects.length;

  // Ganti kategori: fade keluar -> reset index -> fade masuk
  useEffect(() => {
    if (category === displayedCategory) return undefined;
    setDirection(category === "ALL" ? "next" : "next");
    setPhase("leaving");
    const t = setTimeout(() => {
      setDisplayedCategory(category);
      setIndex(0);
      setPhase("entering");
    }, 260);
    return () => clearTimeout(t);
  }, [category, displayedCategory]);

  useEffect(() => {
    if (phase !== "entering") return undefined;
    const t = setTimeout(() => setPhase("idle"), 30);
    return () => clearTimeout(t);
  }, [phase]);

  // Ukur lebar card aktif dari DOM (responsive). Re-measure juga saat index berubah
  // karena offset tergantung lebar card aktif
  useLayoutEffect(() => {
    const measure = () => {
      const el = trackRef.current?.querySelector("[data-active-card]");
      if (el) setCardWidth(el.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [displayedCategory, index]);

  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count]
  );
  const prev = useCallback(() => {
    setDirection("prev");
    setIndex((v) => (v - 1 + count) % count);
  }, [count]);
  const next = useCallback(() => {
    setDirection("next");
    setIndex((v) => (v + 1) % count);
  }, [count]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    if ((index === 0 && delta > 0) || (index === count - 1 && delta < 0)) {
      setDragOffset(delta * 0.3); // resist di ujung
    } else {
      setDragOffset(delta);
    }
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (dragOffset <= -SWIPE_THRESHOLD) next();
    else if (dragOffset >= SWIPE_THRESHOLD) prev();
    setDragOffset(0);
    touchStartX.current = null;
  };

  // Track mulai dari center container (left:50%), lalu digeser agar card aktif tepat di tengah
  const trackOffset = -(index * (cardWidth + GAP)) - cardWidth / 2 + dragOffset;
  const hidden = phase === "leaving";

  return (
    <div className="relative">
      {/* Glow subtle di sekitar carousel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/15 blur-3xl"
      />

      {/* Prev / Next — desktop & tablet */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border border-brass/25 bg-ink/70 text-cream/70 backdrop-blur transition-all duration-300 hover:border-brass/60 hover:text-cream md:flex lg:-translate-x-1/2"
      >
        <ChevronLeft className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next project"
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-brass/25 bg-ink/70 text-cream/70 backdrop-blur transition-all duration-300 hover:border-brass/60 hover:text-cream md:flex"
      >
        <ChevronRight className="size-5" strokeWidth={1.5} />
      </button>

      {/* Viewport carousel — overflow di sini saja, body tetap aman */}
      <div
        className="overflow-hidden py-2"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          style={{ gap: `${GAP}px`, transform: `translateX(${trackOffset}px)` }}
          className="relative left-1/2 flex w-max items-stretch transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        >
          {categoryProjects.map((project, i) => {
            const isActive = i === index;
            return (
              <div
                key={project.title}
                data-active-card={isActive ? "" : undefined}
                className="shrink-0"
                style={{ width: "min(72vw, 560px)" }}
              >
                <div
                  className={`h-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "scale-100" : "scale-[0.92]"
                  } ${
                    hidden
                      ? direction === "next"
                        ? "-translate-x-6 opacity-0"
                        : "translate-x-6 opacity-0"
                      : phase === "entering"
                        ? direction === "next"
                          ? "translate-x-6 opacity-0"
                          : "-translate-x-6 opacity-0"
                        : "translate-x-0 opacity-100"
                  }`}
                >
                  <ProjectCard project={project} active={isActive} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <CarouselIndicator count={count} activeIndex={index} onSelect={goTo} />
      </div>

      <p className="sr-only" aria-live="polite">
        {`Project ${index + 1} of ${count}`}
      </p>
    </div>
  );
}
