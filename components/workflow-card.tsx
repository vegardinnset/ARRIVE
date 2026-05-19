"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, FileText } from "lucide-react";
import type { Workflow } from "@/lib/data";
import { StatusPill } from "@/components/status-pill";

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/54 p-5 shadow-glass backdrop-blur-xl"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/12 blur-3xl transition group-hover:bg-violet-400/18" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{workflow.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{workflow.title}</h3>
          </div>
          <StatusPill tone={workflow.status}>{workflow.status}</StatusPill>
        </div>
        <p className="mt-4 min-h-20 text-sm leading-6 text-slate-300">{workflow.summary}</p>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${workflow.progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-cyan-200" />
            {workflow.timeframe}
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-violet-200" />
            {workflow.documents.length} docs
          </div>
        </div>
        <Link
          href={`/workflows/${workflow.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-100 transition group-hover:text-white"
        >
          Open workflow
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400">
          <CheckCircle2 className="h-4 w-4 text-teal-200" />
          {workflow.dependency}
        </div>
      </div>
    </motion.div>
  );
}
