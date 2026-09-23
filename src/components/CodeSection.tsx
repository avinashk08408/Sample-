import Reveal from "./Reveal";
import { WaxSeal } from "./motifs";
import { siteConfig } from "@/lib/site";

const standards = [
  {
    numeral: "01",
    title: "Eligibility",
    plain: "Who gets a seat",
    body: `Open to all full-time students of ${siteConfig.college}, from any department and year. Register solo or with a team of up to ${siteConfig.teamSize.max} participants.`,
  },
  {
    numeral: "02",
    title: "The sandbox",
    plain: "Where the operation happens",
    body: "Only the provided application and credentials are in scope. External hosts, the scoring platform, and other teams' systems are off limits.",
  },
  {
    numeral: "03",
    title: "The hunt",
    plain: "How the work is done",
    body: "Research, test, document, and patch with discipline. The internet stays on for documentation, but every exploit must stay aimed at the assigned target.",
  },
  {
    numeral: "04",
    title: "The verdict",
    plain: "How the council scores",
    body: "Judges weigh findings, severity, patch quality, clarity of reasoning, and the final defence. A clean explanation matters as much as a clever exploit.",
  },
  {
    numeral: "05",
    title: "Conduct",
    plain: "The standard we keep",
    body: "Respect competitors, mentors, organisers, and staff. Report anything unfair immediately. The House Committee's decision is final.",
  },
];

export default function CodeSection() {
  return (
    <section
      id="code"
      className="standards-section relative overflow-hidden scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(8,18,22,.88) 0%, rgba(8,18,22,.72) 42%, rgba(8,18,22,.5) 100%), url('/Sample-/batman-standards.png')",
        backgroundPosition: "center right",
        backgroundSize: "cover",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,22,.72),rgba(8,18,22,.35)_35%,rgba(8,18,22,.72))]" />
      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="eyebrow">Mission standards</p>
            <h2 className="mt-6 max-w-xl font-head text-5xl font-bold leading-[.95] text-parchment sm:text-6xl lg:text-7xl">
              More than a challenge.
              <span className="gold-text mt-2 block">A controlled operation.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-parchment/70">
              Reverse Hackathon is built around clear boundaries, fair play, and the judgement to know what to break — and what to protect.
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-parchment/60">
              Read the standards before you enter the room. Every participant signs the same brief, receives the same target, and earns their result in the open.
            </p>
            <div className="mt-10 flex items-center gap-4 text-gold">
              <span className="h-px w-12 bg-gold/70" aria-hidden />
              <span className="font-typewriter text-[11px] uppercase tracking-[0.25em]">Built for disciplined curiosity</span>
            </div>
            <div className="mt-14 flex items-center gap-5 border-l border-gold/40 pl-5">
              <WaxSeal className="h-20 w-20 shrink-0" />
              <div>
                <p className="font-typewriter text-[10px] uppercase tracking-[0.25em] text-gold">The standard</p>
                <p className="mt-2 font-head text-2xl font-semibold text-parchment">Creative energy, backed by structure.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="standards-rail max-h-[78vh] overflow-y-auto overscroll-contain pr-2 sm:pr-4" aria-label="Operation standards">
            {standards.map((standard) => (
              <article key={standard.numeral} className="standards-row border-t border-parchment/15 py-7 first:border-t-0 first:pt-0 sm:py-9">
                <div className="grid gap-4 sm:grid-cols-[54px_1fr] sm:gap-5">
                  <span className="font-typewriter text-sm tracking-[0.18em] text-gold">{standard.numeral}</span>
                  <div>
                    <h3 className="font-head text-3xl font-bold text-parchment sm:text-4xl">{standard.title}</h3>
                    <p className="mt-1 font-typewriter text-[10px] uppercase tracking-[0.22em] text-gold/80">{standard.plain}</p>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-parchment/70">{standard.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
