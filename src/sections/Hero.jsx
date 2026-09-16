import DecorativeLine from "../components/DecorativeLine.jsx";
import ScrollHint from "../components/ScrollHint.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient glow di belakang judul */}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute left-1/2 top-[-10%] h-[60vh] w-[110vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(107,72,31,0.55) 0%, rgba(42,27,13,0.35) 35%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      {/* Vignette halus di sudut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(5,4,3,0.9) 100%)",
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        <p className="eyebrow animate-fade-in text-[10px] text-cream/60 sm:text-xs">
          Welcome to our website
        </p>

        <h1 className="text-glow mt-8 font-display text-[17vw] uppercase leading-[0.88] text-cream sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="animate-fade-up block" style={{ animationDelay: "120ms" }}>
            Legacy
          </span>
          <span className="animate-fade-up block" style={{ animationDelay: "260ms" }}>
            Company
          </span>
        </h1>

        <DecorativeLine
          variant="arc"
          className="mt-12 w-64 animate-fade-in sm:w-96"
        />

        <ScrollHint className="mt-14" />
      </div>
    </section>
  );
}
