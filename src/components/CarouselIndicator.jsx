export default function CarouselIndicator({ count, activeIndex, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Carousel indicators"
      className="flex items-center justify-center gap-2.5"
    >
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => onSelect(i)}
            className="group flex h-6 items-center"
          >
            <span
              aria-hidden="true"
              className={`h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "w-10 bg-cream/90"
                  : "w-4 bg-cream/30 group-hover:bg-cream/60"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
