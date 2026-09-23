"use client";

import { motion, useReducedMotion } from "framer-motion";
import useCountdown from "@/hooks/useCountdown";
import { EVENT_DATE, siteConfig, formatEventDate } from "@/lib/site";
import { Marionette, Smoke } from "./motifs";

export function CountdownBoxes({ target }: { target: Date }) {
  const { days, hours, minutes, seconds, isOver } = useCountdown(target);

  if (isOver) {
    return (
      <p className="font-typewriter text-sm uppercase tracking-[0.3em] text-gold">
        The hour has come — the Family assembles today.
      </p>
    );
  }

  const cells: Array<{ v: string; label: string }> = [
    { v: String(days).padStart(2, "0"), label: "Days" },
    { v: String(hours).padStart(2, "0"), label: "Hours" },
    { v: String(minutes).padStart(2, "0"), label: "Minutes" },
    { v: String(seconds).padStart(2, "0"), label: "Seconds" },
  ];

  return (
    <div className="flex items-stretch gap-2 sm:gap-3" role="timer" aria-label={`Counting down to OMERTÀ 2K26 on ${formatEventDate()}`}>
      {cells.map((c, i) => (
        <div key={c.label} className="flex items-stretch gap-2 sm:gap-3">
          <div className="grid h-20 w-16 place-items-center rounded-sm border border-parchment/15 bg-noir/65 backdrop-blur-md sm:h-24 sm:w-20">
            <div className="text-center">
              <span className="block font-head text-3xl font-bold tabular-nums text-parchment sm:text-4xl">{c.v}</span>
              <span className="mt-1 block font-typewriter text-[10px] uppercase tracking-[0.25em] text-parchment/55">{c.label}</span>
            </div>
          </div>
          {i < cells.length - 1 && <span aria-hidden className="hidden self-center font-head text-2xl text-parchment/30 sm:block">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      className="entry-hero relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-14"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(7,10,14,.98) 0%, rgba(7,10,14,.9) 38%, rgba(7,10,14,.48) 72%, rgba(7,10,14,.68) 100%), linear-gradient(180deg, rgba(7,10,14,.35), rgba(7,10,14,.9)), url('/Sample-/batman-gotham.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(188,149,73,.12),transparent_28%),linear-gradient(110deg,transparent_0%,rgba(72,92,110,.08)_48%,transparent_70%)]" />
      <Smoke className="pointer-events-none absolute left-1/2 top-0 hidden w-[70vw] max-w-4xl -translate-x-1/2 opacity-35 md:block" />
      <Marionette className="pointer-events-none absolute right-5 top-28 hidden h-[46vh] opacity-10 lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(290px,.55fr)] lg:gap-24">
        <div className="max-w-4xl">
          <motion.div {...fade(0.1)} className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gold/80" aria-hidden />
            <p className="font-typewriter text-[11px] uppercase tracking-[0.34em] text-gold">{siteConfig.organizer} presents</p>
          </motion.div>

          <motion.p {...fade(0.18)} className="mb-5 max-w-xl font-typewriter text-[11px] uppercase tracking-[0.28em] text-parchment/60 sm:text-xs">
            Reverse hackathon · {formatEventDate()} · {siteConfig.venue.name}
          </motion.p>

          <motion.h1 {...fade(0.28)} className="font-display text-[clamp(3.2rem,10vw,8.5rem)] font-black leading-[.88] tracking-[.04em] text-parchment">
            OMERTÀ
            <span className="mt-3 block font-head text-[clamp(2.3rem,6vw,5.4rem)] font-semibold tracking-[.28em] text-gold">2K26</span>
          </motion.h1>

          <motion.p {...fade(0.48)} className="mt-8 max-w-2xl font-head text-xl leading-relaxed text-parchment/85 italic sm:text-2xl">
            {siteConfig.tagline}
          </motion.p>

          <motion.div {...fade(0.62)} className="mt-9 flex flex-wrap gap-x-6 gap-y-3 font-typewriter text-[10px] uppercase tracking-[0.18em] text-parchment/65 sm:text-[11px]">
            <span>{siteConfig.venue.college}</span>
            <span className="text-gold/80">Department of Cyber Security</span>
            <span>{siteConfig.venue.city}</span>
          </motion.div>

          <motion.div {...fade(0.74)} className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#register" className="btn-gold px-8 py-4 text-[11px] shadow-gold">Lock your seat</a>
            <a href="#contract" className="btn-ghost px-8 py-4 text-[11px]">Read the brief</a>
          </motion.div>
        </div>

        <motion.aside {...fade(0.7)} className="hidden border-l border-parchment/20 pl-7 lg:block">
          <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-gold">Mission status</p>
          <p className="mt-3 font-head text-3xl font-semibold text-parchment">The city is watching.</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-parchment/60">One vulnerable system. One room of defenders. Find the flaw before the clock finds you.</p>
          <div className="mt-8"><CountdownBoxes target={EVENT_DATE} /></div>
        </motion.aside>

        <motion.div {...fade(0.78)} className="lg:hidden">
          <CountdownBoxes target={EVENT_DATE} />
        </motion.div>
      </div>

      <a href="#contract" aria-label="Scroll down to The Contract" className="absolute bottom-8 left-1/2 hidden h-11 w-6 -translate-x-1/2 justify-center rounded-full border border-parchment/25 sm:flex">
        <span className="mt-2 h-2.5 w-1 animate-bounce rounded bg-gold" />
      </a>
    </section>
  );
}
