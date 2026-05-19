"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileWarning,
  GitPullRequestArrow,
  MessageSquarePlus,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { AmbientBackground } from "@/components/ambient-background";
import { GlowCard } from "@/components/glow-card";
import { SectionHeading } from "@/components/section-heading";
import { StatusPill } from "@/components/status-pill";
import { communityUpdates } from "@/lib/data";

const moderationStates = [
  {
    title: "Submitted",
    copy: "Students report a change, correction, or lived experience signal.",
    icon: MessageSquarePlus,
  },
  {
    title: "Clustered",
    copy: "Similar reports are grouped to detect patterns instead of isolated anecdotes.",
    icon: GitPullRequestArrow,
  },
  {
    title: "Verified",
    copy: "University staff, moderators, or trusted contributors validate the update.",
    icon: BadgeCheck,
  },
  {
    title: "Published",
    copy: "The change updates relevant workflows, reminders, and risk states.",
    icon: CheckCircle2,
  },
];

export default function CommunityPage() {
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
            eyebrow="Community intelligence"
            title="Relocation knowledge stays alive."
            copy="ARRIVE lets students submit corrections, peer updates, and outdated information reports without turning the product into an unmoderated forum."
          />
          <button type="button" className="button-primary w-fit">
            Submit Correction
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-[1fr_0.72fr]">
          <GlowCard hover={false} className="overflow-hidden p-0">
            <div className="animated-gradient h-1" />
            <div className="p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Live update feed</p>
                  <h2 className="mt-2 text-3xl font-black text-white">Verified by the network.</h2>
                </div>
                <UsersRound className="h-7 w-7 text-cyan-100" />
              </div>
              <div className="space-y-4">
                {communityUpdates.map((update, index) => (
                  <motion.article
                    key={update.title}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <StatusPill tone={update.status as "Verified" | "Moderating" | "University reviewed"}>{update.status}</StatusPill>
                      <span className="text-xs font-bold text-slate-500">{update.time}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{update.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{update.detail}</p>
                    <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-slate-400">
                      <ShieldCheck className="h-4 w-4 text-teal-100" />
                      {update.author}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </GlowCard>

          <aside className="space-y-5">
            <GlowCard hover={false} className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pink-300/12">
                  <FileWarning className="h-6 w-6 text-pink-100" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-200">Report outdated info</p>
                  <h2 className="text-2xl font-black text-white">Corrections become infrastructure.</h2>
                </div>
              </div>
              <div className="space-y-3">
                {["Official link changed", "Appointment pattern shifted", "Document requirement unclear"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="focus-ring flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-left font-bold text-white transition hover:border-pink-300/30 hover:bg-white/[0.07]"
                  >
                    {item}
                    <ArrowRight className="h-4 w-4 text-pink-100" />
                  </button>
                ))}
              </div>
            </GlowCard>

            <GlowCard hover={false} className="p-6">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-violet-100" />
                <h2 className="text-2xl font-black text-white">Moderation pipeline</h2>
              </div>
              <div className="relative">
                <div className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent" />
                <div className="space-y-4">
                  {moderationStates.map((state, index) => {
                    const Icon = state.icon;
                    return (
                      <motion.div
                        key={state.title}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.08 }}
                        className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-4 pl-14"
                      >
                        <div className="absolute left-0 top-4 grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-slate-950 text-cyan-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="font-black text-white">{state.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{state.copy}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </GlowCard>
          </aside>
        </div>
      </div>
    </main>
  );
}
