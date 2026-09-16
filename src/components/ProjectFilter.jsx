import { projectCategories } from "../data/projects.js";

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="no-scrollbar relative -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
      <nav aria-label="Project categories">
        <ul className="flex min-w-max items-center justify-start gap-8 sm:justify-center sm:gap-10">
          {projectCategories.map((category) => {
            const isActive = category === active;
            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => onChange(category)}
                  aria-pressed={isActive}
                  className={`group relative py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-cream"
                      : "text-cream/40 hover:text-cream/75"
                  }`}
                >
                  <span className="eyebrow text-[10px] sm:text-[11px]">
                    {category}
                  </span>
                  {/* underline tipis — indicator kategori aktif */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-px bg-brass transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
