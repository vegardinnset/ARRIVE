"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  FileText,
  HelpCircle,
  Lock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { ProgressRing } from "@/components/progress-ring";
import { StatusPill } from "@/components/status-pill";
import type { Workflow } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const stateStyles = {
  done: "border-teal-300/30 bg-teal-300/12 text-teal-100",
  active: "border-cyan-300/30 bg-cyan-300/12 text-cyan-100",
  waiting: "border-violet-300/30 bg-violet-300/12 text-violet-100",
  locked: "border-slate-500/30 bg-slate-400/8 text-slate-300",
};

const stateIcons = {
  done: Check,
  active: ArrowRight,
  waiting: Clock3,
  locked: Lock,
};

export function WorkflowDetail({ workflow }: { workflow: Workflow }) {
  const [openFaq, setOpenFaq] = useState(workflow.faqs[0]?.question ?? "");

  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link href="/workflows" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            All workflows
          </Link>
          <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <StatusPill tone={workflow.status}>{workflow.status}</StatusPill>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {workflow.eyebrow}
                </span>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl">{workflow.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{workflow.summary}</p>
            </div>
            <GlowCard hover={false} className="grid place-items-center p-6">
              <ProgressRing value={workflow.progress} label="workflow" sublabel={workflow.timeframe} size={180} />
            </GlowCard>
          </div>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[1.28fr_0.72fr]">
          <section className="space-y-5">
            <GlowCard hover={false} className="p-6">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Process map</p>
                  <h2 className="mt-2 text-3xl font-black text-white">Step-by-step flow</h2>
                </div>
                <Clock3 className="h-7 w-7 text-cyan-100" />
              </div>

              <div className="relative">
                <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent sm:block" />
                <div className="space-y-4">
                  {workflow.steps.map((step, index) => {
                    const Icon = stateIcons[step.state];
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.55 }}
                        className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:pl-16"
                      >
                        <div
                          className={cn(
                            "mb-4 grid h-10 w-10 place-items-center rounded-2xl border sm:absolute sm:left-[7px] sm:top-5",
                            stateStyles[step.state],
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_110px]">
                          <div>
                            <p className="text-xl font-black text-white">{step.title}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-slate-950/42 p-3 text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Estimate</p>
                            <p className="mt-2 text-sm font-black text-white">{step.estimate}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </GlowCard>

            <GlowCard hover={false} className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Dependency diagram</p>
                  <h2 className="mt-2 text-3xl font-black text-white">What this unlocks</h2>
                </div>
                <ShieldCheck className="h-7 w-7 text-violet-100" />
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="relative grid gap-4 md:grid-cols-3">
                  {[
                    ["Input", workflow.dependency],
                    ["Workflow", workflow.title],
                    ["Output", `${workflow.title} confidence, reminders, and document readiness`],
                  ].map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + index * 0.08 }}
                      className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">{label}</p>
                      <p className="mt-3 text-sm leading-6 text-white">{value}</p>
                      {index < 2 ? (
                        <ArrowRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-200 md:block" />
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>

            <GlowCard hover={false} className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-200">FAQs</p>
                  <h2 className="mt-2 text-3xl font-black text-white">Questions students actually ask.</h2>
                </div>
                <HelpCircle className="h-7 w-7 text-pink-100" />
              </div>
              <div className="space-y-3">
                {workflow.faqs.map((faq) => {
                  const open = openFaq === faq.question;
                  return (
                    <button
                      key={faq.question}
                      type="button"
                      onClick={() => setOpenFaq(open ? "" : faq.question)}
                      className="focus-ring w-full rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-left transition hover:border-pink-300/30"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-lg font-black text-white">{faq.question}</p>
                        <ChevronDown className={cn("h-5 w-5 text-slate-400 transition", open && "rotate-180 text-pink-100")} />
                      </div>
                      {open ? <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p> : null}
                    </button>
                  );
                })}
              </div>
            </GlowCard>
          </section>

          <aside className="space-y-5">
            <GlowCard hover={false} className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Checklist</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Required documents</h2>
                </div>
                <FileText className="h-6 w-6 text-cyan-100" />
              </div>
              <div className="space-y-3">
                {workflow.documents.map((doc, index) => (
                  <motion.div
                    key={doc}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan-300/10 text-cyan-100">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-200">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/12">
                  <MessageCircle className="h-5 w-5 text-teal-100" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-200">Peer signal</p>
                  <h2 className="text-xl font-black text-white">Recent student tip</h2>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Keep originals and copies separated in a single appointment folder. Students say this reduces stress at counters where instructions change quickly.
              </p>
            </GlowCard>

            <a
              href={workflow.officialLink}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Official source</p>
                  <p className="mt-2 font-black text-white">Open public portal</p>
                </div>
                <ExternalLink className="h-5 w-5 text-cyan-100 transition group-hover:translate-x-1" />
              </div>
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}
