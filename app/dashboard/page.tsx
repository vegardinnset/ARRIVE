"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Home,
  Landmark,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { ProgressRing } from "@/components/progress-ring";
import { StatusPill } from "@/components/status-pill";
import { phases, persona, reminders, tasks, workflows } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const reassurance = [
  "You're ahead of schedule.",
  "Most students complete this within 2 weeks.",
  "Your highest-risk steps are already visible.",
];

const workflowIcons = {
  "NIE / TIE": UserRoundCheck,
  "Student Visa": ShieldCheck,
  Housing: Home,
  Banking: Landmark,
  Healthcare: FileText,
  "SIM Setup": Plane,
};

export default function DashboardPage() {
  const [expanded, setExpanded] = useState(tasks[0].title);

  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm font-bold text-cyan-50">
              <Sparkles className="h-4 w-4" />
              Personalized for {persona.name}
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">Transition command center.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              A calm operating layer for visa proof, housing risk, TIE timing, banking setup, healthcare, and arrival confidence.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-300/12">
                <Plane className="h-6 w-6 text-violet-100" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{persona.city} to {persona.destination}</p>
                <p className="text-xs text-slate-400">Arrival {persona.arrival}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[0.75fr_1.4fr_0.85fr]">
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="space-y-5"
          >
            <GlowCard hover={false} className="p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Readiness</p>
                  <h2 className="mt-2 text-3xl font-black text-white">64% complete</h2>
                </div>
                <StatusPill tone="Active">Ahead</StatusPill>
              </div>
              <div className="grid place-items-center py-3">
                <ProgressRing value={64} label="ready" sublabel="6 weeks out" size={190} />
              </div>
              <div className="mt-6 space-y-3">
                {reassurance.map((message, index) => (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.1 }}
                    className="flex items-start gap-3 rounded-2xl border border-teal-300/14 bg-teal-300/[0.07] p-3 text-sm text-teal-50"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{message}</span>
                  </motion.div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-200">Workflow health</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Connected systems</h2>
                </div>
                <WalletCards className="h-6 w-6 text-violet-100" />
              </div>
              <div className="space-y-4">
                {workflows.map((workflow) => {
                  const Icon = workflowIcons[workflow.title as keyof typeof workflowIcons] || FileText;
                  return (
                    <Link key={workflow.slug} href={`/workflows/${workflow.slug}`} className="group block">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition group-hover:border-cyan-300/30 group-hover:bg-white/[0.07]">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/10">
                              <Icon className="h-4 w-4 text-cyan-100" />
                            </div>
                            <p className="font-bold text-white">{workflow.title}</p>
                          </div>
                          <span className="text-xs font-black text-slate-400">{workflow.progress}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${workflow.progress}%` }}
                            transition={{ duration: 0.9 }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </GlowCard>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <GlowCard hover={false} className="p-6">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Relocation timeline</p>
                  <h2 className="mt-2 text-3xl font-black text-white">Your move, phased.</h2>
                </div>
                <Link href="/architecture" className="button-secondary px-4 py-2 text-sm">
                  System view
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />
                <div className="space-y-5">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase.title}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.08 }}
                      className="relative grid gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 pl-16 md:grid-cols-[180px_1fr_110px]"
                    >
                      <div className="absolute left-[13px] top-6 grid h-7 w-7 place-items-center rounded-full border border-cyan-200/40 bg-slate-950 shadow-glow">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                      </div>
                      <div>
                        <p className="font-black text-white">{phase.title}</p>
                        <p className="mt-1 text-xs text-cyan-100">{phase.window}</p>
                      </div>
                      <p className="text-sm leading-6 text-slate-300">{phase.copy}</p>
                      <div>
                        <div className="text-right text-sm font-black text-white">{phase.progress}%</div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${phase.progress}%` }}
                            transition={{ duration: 1, delay: 0.35 + index * 0.08 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowCard>

            <GlowCard hover={false} className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-200">Priority tasks</p>
                  <h2 className="mt-2 text-3xl font-black text-white">What needs attention now.</h2>
                </div>
                <AlertCircle className="h-7 w-7 text-pink-100" />
              </div>
              <div className="space-y-4">
                {tasks.map((task) => {
                  const isOpen = expanded === task.title;
                  return (
                    <motion.button
                      key={task.title}
                      type="button"
                      onClick={() => setExpanded(isOpen ? "" : task.title)}
                      whileHover={{ y: -3 }}
                      className="focus-ring w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <StatusPill tone={task.workflow === "Housing" ? "Critical" : "Active"}>{task.urgency}</StatusPill>
                            <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-bold text-slate-400">{task.status}</span>
                          </div>
                          <h3 className="text-xl font-black text-white">{task.title}</h3>
                          <p className="mt-2 text-sm text-slate-400">{task.workflow} - estimated {task.duration}</p>
                        </div>
                        <ArrowRight className={cn("h-5 w-5 text-cyan-100 transition", isOpen && "rotate-90")} />
                      </div>
                      <AnimatePresence>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 md:grid-cols-2">
                              <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Required documents</p>
                                <div className="flex flex-wrap gap-2">
                                  {task.docs.map((doc) => (
                                    <span key={doc} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-300">
                                      {doc}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="rounded-2xl border border-teal-300/14 bg-teal-300/[0.07] p-4 text-sm leading-6 text-teal-50">
                                <div className="mb-2 flex items-center gap-2 font-bold">
                                  <MessageCircle className="h-4 w-4" />
                                  Peer tip
                                </div>
                                {task.tip}
                              </div>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </GlowCard>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <GlowCard hover={false} className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Reminder center</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Upcoming</h2>
                </div>
                <BellRing className="h-6 w-6 text-cyan-100" />
              </div>
              <div className="space-y-3">
                {reminders.map((reminder, index) => (
                  <motion.div
                    key={reminder.title}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      <CalendarClock className="h-3.5 w-3.5 text-cyan-200" />
                      {reminder.type}
                    </div>
                    <p className="font-black text-white">{reminder.title}</p>
                    <p className="mt-1 text-sm text-cyan-100">{reminder.time}</p>
                  </motion.div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-200">Official links</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Trusted sources</h2>
                </div>
                <ExternalLink className="h-6 w-6 text-violet-100" />
              </div>
              <div className="space-y-3">
                {workflows.slice(0, 4).map((workflow) => (
                  <a
                    key={workflow.slug}
                    href={workflow.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-violet-300/30 hover:bg-white/[0.07]"
                  >
                    <span className="font-bold text-white">{workflow.title}</span>
                    <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-violet-100" />
                  </a>
                ))}
              </div>
            </GlowCard>

            <GlowCard hover={false} className="overflow-hidden p-0">
              <div className="animated-gradient h-1" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-200">Emotional layer</p>
                <h2 className="mt-2 text-2xl font-black text-white">You are not doing this alone.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  The product notices dependencies, missing documents, and appointment pressure so students feel guided instead of abandoned.
                </p>
              </div>
            </GlowCard>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
