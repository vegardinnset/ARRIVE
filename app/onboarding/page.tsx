"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  Home,
  Languages,
  Plane,
  School,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { phases, persona, workflows } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const steps = [
  {
    id: "nationality",
    title: "Where are you moving from?",
    copy: "This helps ARRIVE understand visa path, document timing, and consulate assumptions.",
    icon: UserRound,
    options: ["India", "United States", "Brazil", "Turkey"],
  },
  {
    id: "university",
    title: "Which university are you joining?",
    copy: "University context changes enrollment documents, local support, and campus arrival tasks.",
    icon: School,
    options: ["Universitat Pompeu Fabra", "ESADE", "Universitat de Barcelona", "IESE"],
  },
  {
    id: "residency",
    title: "What is your residency path?",
    copy: "Non-EU students usually need visa, NIE/TIE, insurance, and more appointment planning.",
    icon: ShieldCheck,
    options: ["Non-EU student visa", "EU student", "Exchange visitor", "Already resident"],
  },
  {
    id: "arrival",
    title: "When do you arrive in Barcelona?",
    copy: "The roadmap will calculate what should happen now, first week, first month, and later.",
    icon: CalendarDays,
    options: ["Aug 24, 2026", "Sep 1, 2026", "Sep 15, 2026", "Not booked yet"],
  },
  {
    id: "housing",
    title: "What is your housing status?",
    copy: "Housing affects address proof, bank setup, padron planning, and TIE readiness.",
    icon: Home,
    options: ["Shortlisted rooms", "Temporary stay booked", "Still searching", "University housing"],
  },
  {
    id: "spanish",
    title: "How comfortable is your Spanish?",
    copy: "Language support changes how much guidance appears around appointments, calls, and forms.",
    icon: Languages,
    options: ["Beginner", "Conversational", "Advanced", "Prefer English support"],
  },
];

type Answers = Record<string, string>;

export default function OnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    nationality: "India",
    university: "Universitat Pompeu Fabra",
    residency: "Non-EU student visa",
    arrival: "Aug 24, 2026",
    housing: "Shortlisted rooms",
    spanish: "Beginner",
  });
  const [complete, setComplete] = useState(false);
  const step = steps[stepIndex];
  const progress = useMemo(() => Math.round(((stepIndex + (complete ? 1 : 0)) / steps.length) * 100), [complete, stepIndex]);

  function selectOption(value: string) {
    setAnswers((current) => ({ ...current, [step.id]: value }));
  }

  function next() {
    if (stepIndex === steps.length - 1) {
      setComplete(true);
      return;
    }
    setStepIndex((index) => index + 1);
  }

  function back() {
    if (complete) {
      setComplete(false);
      return;
    }
    setStepIndex((index) => Math.max(index - 1, 0));
  }

  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6">
      <AmbientBackground />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.aside
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel-strong sticky top-28 h-fit rounded-[2rem] p-6"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            Guided setup
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white">Build your Barcelona transition map.</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The system learns enough to remove ambiguity without making you feel interrogated.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.045] p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-300">Roadmap generation</span>
              <span className="text-sm font-black text-cyan-100">{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const active = index === stepIndex && !complete;
              const done = index < stepIndex || complete;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border p-3 transition",
                    active
                      ? "border-cyan-300/30 bg-cyan-300/10"
                      : done
                        ? "border-teal-300/20 bg-teal-300/8"
                        : "border-white/8 bg-white/[0.025]",
                  )}
                >
                  <div
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-xl",
                      active ? "bg-cyan-300/14 text-cyan-100" : done ? "bg-teal-300/14 text-teal-100" : "bg-white/7 text-slate-400",
                    )}
                  >
                    {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-slate-500">{answers[item.id] || "Not selected"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.aside>

        <section className="min-h-[720px]">
          <AnimatePresence mode="wait">
            {!complete ? (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -26, filter: "blur(12px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <StepCard step={step} answers={answers} selectOption={selectOption} next={next} back={back} stepIndex={stepIndex} />
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -24 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Completion answers={answers} back={back} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}

function StepCard({
  step,
  answers,
  selectOption,
  next,
  back,
  stepIndex,
}: {
  step: (typeof steps)[number];
  answers: Answers;
  selectOption: (value: string) => void;
  next: () => void;
  back: () => void;
  stepIndex: number;
}) {
  const Icon = step.icon;
  const selected = answers[step.id];

  return (
    <GlowCard hover={false} className="overflow-hidden rounded-[2rem] p-0">
      <div className="relative p-6 sm:p-10">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="relative">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 shadow-glow">
              <Icon className="h-7 w-7 text-cyan-100" />
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-300">
              Step {stepIndex + 1} of {steps.length}
            </div>
          </div>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">{step.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{step.copy}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {step.options.map((option, index) => {
              const active = selected === option;
              return (
                <motion.button
                  key={option}
                  type="button"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectOption(option)}
                  className={cn(
                    "focus-ring min-h-28 rounded-3xl border p-5 text-left transition",
                    active
                      ? "border-cyan-300/50 bg-cyan-300/13 shadow-glow"
                      : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.07]",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-black text-white">{option}</span>
                    <span
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-full border transition",
                        active ? "border-cyan-200/50 bg-cyan-300/20 text-cyan-50" : "border-white/10 bg-white/[0.04] text-slate-500",
                      )}
                    >
                      {active ? <Check className="h-4 w-4" /> : null}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={back}
              disabled={stepIndex === 0}
              className="button-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
              Back
            </button>
            <button type="button" onClick={next} className="button-primary">
              {stepIndex === steps.length - 1 ? "Generate Roadmap" : "Continue"}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

function Completion({ answers, back }: { answers: Answers; back: () => void }) {
  return (
    <GlowCard hover={false} className="overflow-hidden rounded-[2rem] p-0">
      <div className="relative p-6 sm:p-10">
        <div className="absolute inset-x-0 top-0 h-1 animated-gradient" />
        <div className="absolute right-[-10%] top-[-10%] h-96 w-96 rounded-full bg-teal-300/12 blur-3xl" />
        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-sm font-bold text-teal-50">
            <Sparkles className="h-4 w-4" />
            Personalized roadmap generated
          </div>
          <h2 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            {persona.name}, your Barcelona transition is now visible.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Based on a {answers.residency} from {answers.nationality}, arriving {answers.arrival}, ARRIVE has prioritized visa proof, housing risk, and TIE preparation.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/12">
                  <Plane className="h-5 w-5 text-cyan-100" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{answers.university}</p>
                  <p className="text-xs text-slate-400">{persona.program}</p>
                </div>
              </div>
              <div className="space-y-3">
                {workflows.slice(0, 4).map((workflow, index) => (
                  <motion.div
                    key={workflow.slug}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.07 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-white">{workflow.title}</p>
                      <span className="text-xs font-bold text-cyan-100">{workflow.progress}%</span>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${workflow.progress}%` }}
                        transition={{ duration: 0.9, delay: 0.35 + index * 0.08 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/48 p-5">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Generated transition phases</p>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.09 }}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 sm:grid-cols-[150px_1fr]"
                  >
                    <div>
                      <p className="font-black text-white">{phase.title}</p>
                      <p className="mt-1 text-xs text-cyan-100">{phase.window}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{phase.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="button-primary">
              Open Dashboard
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button type="button" onClick={back} className="button-secondary">
              Adjust answers
            </button>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
