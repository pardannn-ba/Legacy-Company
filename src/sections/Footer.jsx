import DecorativeLine from "../components/DecorativeLine.jsx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-14 pt-24">
      {/* Glow horizon besar di dasar halaman */}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute bottom-[-55%] left-1/2 h-[80vh] w-[160vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,72,31,0.55) 0%, rgba(42,27,13,0.35) 40%, transparent 72%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <DecorativeLine variant="arc" className="mx-auto w-full max-w-3xl" />

        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <p className="text-glow font-display text-2xl uppercase text-cream/90">
            Legacy Company
          </p>
          <p className="eyebrow text-[9px] text-cream/35">
            Creative Digital Studio
          </p>
          <p className="mt-6 text-[11px] text-cream/25">
            © {new Date().getFullYear()} Legacy Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
