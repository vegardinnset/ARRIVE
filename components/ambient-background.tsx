"use client";

import { motion } from "framer-motion";

export function AmbientBackground({ intensity = "normal" }: { intensity?: "normal" | "low" }) {
  const opacity = intensity === "low" ? "opacity-40" : "opacity-70";

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl ${opacity}`}
        animate={{ x: [0, 120, 40, 0], y: [0, 30, 120, 0], scale: [1, 1.12, 0.92, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute right-[-10%] top-10 h-[34rem] w-[34rem] rounded-full bg-violet-500/20 blur-3xl ${opacity}`}
        animate={{ x: [0, -80, -20, 0], y: [0, 80, 20, 0], scale: [1, 0.9, 1.12, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-pink-400/10 blur-3xl"
        animate={{ x: [0, 80, -60, 0], y: [0, -60, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 dot-grid opacity-[0.16]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_28%)]" />
    </div>
  );
}
