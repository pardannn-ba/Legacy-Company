import { useEffect, useState } from "react";
import { navLinks } from "../data/site.js";
import MobileMenu from "./MobileMenu.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "border-b border-brass/10 bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Hamburger — kiri atas, selalu tampil seperti reference */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="group flex h-10 w-10 shrink-0 flex-col items-start justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-cream/70 transition-all duration-300 group-hover:bg-cream ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-cream/70 transition-all duration-300 group-hover:bg-cream ${
                open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"
              }`}
            />
          </button>

          {/* Desktop nav — kanan */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="eyebrow group relative text-[10px] text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Wordmark kecil di tengah untuk layar kecil (mengikuti feel reference) */}
          <a
            href="#home"
            className="eyebrow text-[10px] text-cream/50 transition-colors hover:text-cream lg:hidden"
          >
            Legacy Company
          </a>
          <span className="hidden w-10 lg:block" aria-hidden="true" />
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  );
}
