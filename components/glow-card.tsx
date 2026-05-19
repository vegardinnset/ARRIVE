"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn("glass-panel glow-border rounded-[1.75rem] p-5", className)}
    >
      {children}
    </motion.div>
  );
}
