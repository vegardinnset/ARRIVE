"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  FileCheck2,
  Globe2,
  GraduationCap,
  Layers3,
  Map,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { ProgressRing } from "@/components/progress-ring";
import { Reveal, fadeUp, stagger } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { StatusPill } from "@/components/status-pill";
import { phases, persona, tasks, workflows } from "@/lib/data";

const painPoints = [
  "Visa uncertainty",
  "NIE / TIE appointment confusion",
  "Housing scam risk",
  "Missing document anxiety",
];

const systemLayers = [
  {
    title: "Transition intelligence",
    copy: "Turns fragmented bureaucracy into a timed, dependent workflow.",
    icon: Sparkles,
  },
  {
    title: "Administrative clarity",
    copy: "Maps documents, official portals, deadlines, and appointment logic.",
    icon: FileCheck2,
  },
  {
    title: "Peer-verified updates",
    copy: "Keeps local changes visible through moderated student contributions.",
    icon: ShieldCheck,
  },
];

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <AmbientBackground />
      <Hero />
      <ProblemSolution />
      <RoadmapShowcase />
      <WorkflowShowcase />
      <SystemCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:pt-36">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/open-transition-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]"
      >
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-bold text-cyan-50 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.8)]" />
            Infrastructure for International Students
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Move to Barcelona without the chaos.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl">
            An intelligent relocation system for international students. From uncertainty to clarity, one guided transition at a time.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/onboarding" className="button-primary">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/dashboard" className="button-secondary">
              Explore Demo
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["84%", "roadmap clarity"],
              ["6", "core workflows"],
              ["24/7", "deadline context"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs font-medium text-slate-400">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative hidden min-h-[620px] lg:block"
        >
          <FloatingDashboard />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingDashboard() {
  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-20 w-[520px] rounded-[2rem] border border-white/14 bg-slate-950/88 p-5 shadow-glass backdrop-blur-2xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Anika's transition</p>
            <h3 className="mt-1 text-2xl font-black text-white">Barcelona readiness</h3>
          </div>
          <StatusPill tone="Active">Ahead</StatusPill>
        </div>
        <div className="grid grid-cols-[170px_1fr] gap-5">
          <ProgressRing value={64} label="ready" sublabel="6 weeks out" />
          <div className="space-y-3">
            {tasks.slice(0, 3).map((task, index) => (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.12 }}
                className="rounded-2xl border border-white/10 bg-slate-950/58 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-white">{task.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{task.workflow} - {task.duration}</p>
                  </div>
                  <CircleDot className="h-4 w-4 text-cyan-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-5 rounded-2xl border border-cyan-300/18 bg-cyan-300/10 p-4">
          <div className="flex items-center gap-3">
            <BellRing className="h-5 w-5 text-cyan-100" />
            <p className="text-sm font-semibold text-cyan-50">You're ahead of schedule. Most students finish these steps within 2 weeks.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [-1, 0.6, -1] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-4 w-64 rounded-[1.5rem] border border-white/14 bg-slate-950/76 p-4 shadow-violet backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-400/18">
            <GraduationCap className="h-5 w-5 text-violet-100" />
          </div>
          <div>
            <p className="text-sm font-black text-white">{persona.university}</p>
            <p className="text-xs text-slate-400">{persona.program}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-0 w-80 rounded-[1.5rem] border border-white/14 bg-slate-950/82 p-4 shadow-glow backdrop-blur-2xl"
      >
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-teal-300/14">
            <Map className="h-5 w-5 text-teal-100" />
          </div>
          <div>
            <p className="text-sm font-black text-white">Next best action</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">Verify housing deposit before transfer. This unlocks banking and TIE address prep.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProblemSolution() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="The relocation gap"
            title="Students do not need more tabs. They need a transition system."
            copy="ARRIVE converts fragmented official portals, university PDFs, student rumors, and personal deadlines into one calm operating layer."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <GlowCard className="h-full p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-200">Before</p>
                  <h3 className="mt-2 text-3xl font-black text-white">Chaos load</h3>
                </div>
                <Zap className="h-8 w-8 text-pink-200" />
              </div>
              <div className="space-y-3">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3 rounded-2xl border border-pink-200/10 bg-pink-300/[0.045] p-4 text-slate-200"
                  >
                    <span className="h-2 w-2 rounded-full bg-pink-300 shadow-[0_0_16px_rgba(251,113,133,0.85)]" />
                    {point}
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlowCard className="h-full p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">After</p>
                  <h3 className="mt-2 text-3xl font-black text-white">Guided control</h3>
                </div>
                <Layers3 className="h-8 w-8 text-cyan-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {systemLayers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div key={layer.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/12">
                        <Icon className="h-6 w-6 text-cyan-100" />
                      </div>
                      <h4 className="text-lg font-black text-white">{layer.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{layer.copy}</p>
                    </div>
                  );
                })}
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RoadmapShowcase() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Personalized roadmap"
              title="The move becomes visible."
              copy="Every task knows what it depends on, what documents it needs, and what happens if it slips."
            />
            <div className="mt-8 rounded-3xl border border-teal-300/18 bg-teal-300/[0.07] p-5 text-teal-50">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5" />
                <p className="font-semibold">You are making great progress. The system is keeping the hard parts sequenced.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative rounded-[2rem] border border-white/12 bg-slate-950/62 p-6 shadow-glass backdrop-blur-2xl">
              <div className="absolute left-12 right-12 top-[72px] hidden h-px bg-gradient-to-r from-cyan-300/20 via-cyan-300 to-violet-400/20 md:block" />
              <div className="grid gap-4 md:grid-cols-5">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.6 }}
                    className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="relative z-10 mb-5 grid h-10 w-10 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/12 shadow-glow">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                    </div>
                    <p className="text-sm font-black text-white">{phase.title}</p>
                    <p className="mt-1 text-xs text-cyan-100">{phase.window}</p>
                    <p className="mt-4 min-h-24 text-xs leading-5 text-slate-400">{phase.copy}</p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.15 + index * 0.08 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorkflowShowcase() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Transition infrastructure"
              title="Six connected workflows. One calm journey."
              copy="Visa, housing, identity, banking, healthcare, and connectivity stop living as separate anxieties."
            />
            <Link href="/workflows" className="button-secondary w-fit">
              View all workflows
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflows.map((workflow, index) => (
            <Reveal key={workflow.slug} delay={index * 0.04}>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-slate-950/54 p-5 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="mb-5 flex items-center justify-between">
                  <StatusPill tone={workflow.status}>{workflow.status}</StatusPill>
                  <span className="text-sm font-bold text-slate-500">{workflow.progress}%</span>
                </div>
                <h3 className="text-2xl font-black text-white">{workflow.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-slate-400">{workflow.summary}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${workflow.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <Link
                  href={`/workflows/${workflow.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-100"
                >
                  Open workflow
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemCta() {
  return (
    <section className="px-4 pb-28 pt-16 sm:px-6">
      <Reveal>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/72 shadow-glass backdrop-blur-2xl lg:grid-cols-[0.8fr_1.2fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mb-5 inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-violet-100">
              Investor ready narrative
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">This is not another checklist app.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              ARRIVE is the operating system for international relocation: student actions, workflow systems, university validation, and peer intelligence moving together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/onboarding" className="button-primary">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/architecture" className="button-secondary">
                See the system
                <Globe2 className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] border-t border-white/10 bg-white/[0.03] p-8 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="relative grid h-full place-items-center">
              <div className="relative h-72 w-72">
                {["Student", "University", "Peer updates", "Moderation", "Official portals"].map((node, index) => {
                  const positions = [
                    "left-20 top-0",
                    "right-0 top-20",
                    "bottom-0 right-12",
                    "bottom-8 left-0",
                    "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  ];
                  return (
                    <motion.div
                      key={node}
                      animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute ${positions[index]} rounded-2xl border border-white/12 bg-slate-950/76 px-4 py-3 text-sm font-bold text-white shadow-glass backdrop-blur-xl`}
                    >
                      {node}
                    </motion.div>
                  );
                })}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 288 288" fill="none">
                  <motion.path
                    d="M144 144 C80 40 230 70 240 132 C246 206 102 250 48 202 C0 160 82 80 144 144Z"
                    stroke="url(#systemLine)"
                    strokeWidth="2"
                    strokeDasharray="8 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2 }}
                  />
                  <defs>
                    <linearGradient id="systemLine" x1="0" x2="1" y1="0" y2="1">
                      <stop stopColor="#22d3ee" />
                      <stop offset="0.5" stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#fb7bcf" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
