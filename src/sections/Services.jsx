import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle lines={["Service", "We Offer"]} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-24 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.lines.join(" ")} delay={(i % 3) * 110}>
              <ServiceCard
                lines={service.lines}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
