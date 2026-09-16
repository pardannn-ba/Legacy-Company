import SectionTitle from "../components/SectionTitle.jsx";
import DecorativeLine from "../components/DecorativeLine.jsx";
import Reveal from "../components/Reveal.jsx";
import { contactChannels, contactCta } from "../data/contact.js";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44"
    >
      {/* glow samar kanan, konsisten dengan section lain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT — heading + intro */}
          <div>
            <Reveal>
              <SectionTitle lines={["Get In", "Touch"]} />
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/60 sm:text-[15px]">
                Have a project in mind?
                <br />
                Let&apos;s create something meaningful together.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <DecorativeLine className="mt-10 w-40" />
            </Reveal>
          </div>

          {/* RIGHT — contact channels editorial list */}
          <div className="flex flex-col justify-center">
            <Reveal delay={150}>
              <ul>
                {contactChannels.map((channel, i) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-baseline justify-between gap-6 py-6 transition-colors duration-300 lg:py-7"
                    >
                      <span className="eyebrow shrink-0 text-[10px] text-brass/80">
                        {channel.label}
                      </span>
                      <span className="min-w-0 flex-1 border-b border-transparent pb-1 text-right text-sm text-cream/70 transition-all duration-300 group-hover:text-cream sm:text-[15px]">
                        <span className="break-words">{channel.value}</span>
                        <span
                          aria-hidden="true"
                          className="mt-2 block h-px w-full origin-right scale-x-100 bg-brass/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-0 group-hover:opacity-0"
                        />
                        <span
                          aria-hidden="true"
                          className="-mt-px block h-px w-full origin-left scale-x-0 bg-brass/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                        />
                      </span>
                    </a>
                    {i < contactChannels.length - 1 && (
                      <DecorativeLine className="opacity-60" />
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTA */}
            <Reveal delay={250}>
              <a
                href={contactCta.href}
                className="group mt-12 inline-flex w-fit items-center gap-3 border border-brass/30 px-7 py-3.5 transition-all duration-500 hover:border-brass/70 hover:bg-bronze/10"
              >
                <span className="text-glow font-display text-sm uppercase tracking-wide text-cream">
                  {contactCta.label}
                </span>
                <ArrowUpRight
                  className="size-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
