"use client";

import { motion } from "framer-motion";
import { AmbientBackground } from "@/components/ambient-background";
import { SectionHeading } from "@/components/section-heading";
import { WorkflowCard } from "@/components/workflow-card";
import { workflows } from "@/lib/data";

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-32 sm:px-6">
      <AmbientBackground />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            level="h1"
            eyebrow="Workflow library"
            title="Every bureaucratic path becomes structured."
            copy="The demo includes the major relocation surfaces as connected workflows, with realistic documents, dependencies, official links, and student-centered guidance."
          />
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.07, duration: 0.55 }}
            >
              <WorkflowCard workflow={workflow} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
