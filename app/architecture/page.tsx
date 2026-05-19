"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  DatabaseZap,
  FileStack,
  GraduationCap,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";

const nodes = [
  { label: "Student actions", x: 50, y: 24, icon: UsersRound, tone: "cyan" },
  { label: "Workflow engine", x: 50, y: 50, icon: Network, tone: "violet" },
  { label: "Official sources", x: 24, y: 58, icon: FileStack, tone: "sky" },
  { label: "Peer updates", x: 76, y: 58, icon: Sparkles, tone: "pink" },
  { label: "Moderation", x: 33, y: 78, icon: ShieldCheck, tone: "teal" },
  { label: "University validation", x: 67, y: 78, icon: GraduationCap, tone: "violet" },
];

const layers = [
  {
    title: "Student interface",
    copy: "Roadmaps, checklists, reminders, reassurance, and next best actions.",
    icon: UsersRound,
  },
  {
    title: "Workflow intelligence",
    copy: "Dependencies, task sequencing, status states, document requirements, and deadlines.",
    icon: DatabaseZap,
  },
  {
    title: "Validation network",
    copy: "Universities, moderators, peer reports, and official source references keep guidance current.",
    icon: BadgeCheck,
  },
];

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <SectionHeading
            level="h1"
            eyebrow="System architecture"
            title="This is transition infrastructure."
            copy="The product connects student actions, workflow systems, backend moderation, peer contributions, official sources, and university validation into one visible operating layer."
          />
          <Link href="/dashboard" className="button-primary w-fit">
            Open dashboard
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <GlowCard hover={false} className="relative min-h-[680px] overflow-hidden p-0">
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.15),transparent_34%)]" />
            <div className="relative h-[680px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#22d3ee" />
                    <stop offset="0.5" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#fb7bcf" />
                  </linearGradient>
                </defs>
                {[
                  "M50 24 L50 50",
                  "M50 50 L24 58",
                  "M50 50 L76 58",
                  "M24 58 L33 78",
                  "M76 58 L67 78",
                  "M33 78 C45 88 55 88 67 78",
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    stroke="url(#lineGradient)"
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.82 }}
                    transition={{ duration: 1.4, delay: 0.2 + index * 0.12 }}
                  />
                ))}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="22"
                  fill="none"
                  stroke="rgba(34,211,238,0.16)"
                  strokeWidth="0.3"
                  animate={{ r: [20, 24, 20], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              {nodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.86 }}
                    animate={{ opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                    transition={{
                      opacity: { delay: 0.25 + index * 0.08, duration: 0.5 },
                      scale: { delay: 0.25 + index * 0.08, duration: 0.5 },
                      y: { duration: 5 + index * 0.6, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute w-52 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/12 bg-slate-950/72 p-4 text-center shadow-glass backdrop-blur-2xl"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 shadow-glow">
                      <Icon className="h-5 w-5 text-cyan-100" />
                    </div>
                    <p className="text-sm font-black text-white">{node.label}</p>
                  </motion.div>
                );
              })}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10"
              />
            </div>
          </GlowCard>

          <aside className="space-y-5">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + index * 0.08 }}
                >
                  <GlowCard className="p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/12">
                        <Icon className="h-6 w-6 text-cyan-100" />
                      </div>
                      <h2 className="text-2xl font-black text-white">{layer.title}</h2>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{layer.copy}</p>
                  </GlowCard>
                </motion.div>
              );
            })}

            <GlowCard hover={false} className="overflow-hidden p-0">
              <div className="animated-gradient h-1" />
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Orbit className="h-6 w-6 text-violet-100" />
                  <h2 className="text-2xl font-black text-white">Why it matters</h2>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  The defensibility is not a checklist. It is a living transition graph: workflows become smarter as universities, students, and official signals feed the system.
                </p>
              </div>
            </GlowCard>
          </aside>
        </div>
      </div>
    </main>
  );
}
