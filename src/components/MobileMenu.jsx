import { useEffect } from "react";

export default function MobileMenu({ open, onClose, links }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/85 backdrop-blur-md"
      />

      {/* Panel */}
      <div
        className={`relative flex h-full flex-col justify-between overflow-y-auto px-8 py-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-12 ${
          open ? "translate-y-0" : "-translate-y-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="eyebrow text-[10px] text-brass/80">Menu</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="eyebrow text-[10px] text-cream/60 transition-colors hover:text-cream"
          >
            Close ✕
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li
                key={link.href}
                style={{ animationDelay: `${120 + i * 70}ms` }}
                className={open ? "animate-menu-item-in" : "opacity-0"}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-3"
                >
                  <span className="text-[10px] text-brass/70">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl uppercase text-cream/85 transition-colors duration-300 group-hover:text-cream sm:text-4xl">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="eyebrow text-[9px] text-cream/30">
          Legacy Company — Creative Digital Studio
        </p>
      </div>
    </div>
  );
}
