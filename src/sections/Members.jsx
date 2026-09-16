import SectionTitle from "../components/SectionTitle.jsx";
import MemberCard from "../components/MemberCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { members } from "../data/members.js";

export default function Members() {
  return (
    <section
      id="members"
      className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44"
    >
      {/* glow samar kanan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle align="center" lines={["Meet Our", "Member"]} />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-24 lg:grid-cols-3 lg:gap-10">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={(i % 3) * 110}>
              <MemberCard name={member.name} role={member.role} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
