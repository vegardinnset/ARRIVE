"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Network, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Landing" },
  { href: "/onboarding", label: "Onboarding" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/workflows/nie-tie", label: "Workflows" },
  { href: "/community", label: "Community" },
  { href: "/architecture", label: "System" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 shadow-glass backdrop-blur-2xl"
      >
        <Link href="/" className="group flex items-center gap-3 rounded-full px-2 py-1 focus-ring">
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-glow">
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-500 opacity-80 blur-sm transition group-hover:opacity-100" />
            <Network className="relative h-4 w-4 text-white" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight text-white">ARRIVE</span>
            <span className="block text-[11px] text-slate-400">Move without the chaos.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus-ring"
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08] md:flex"
          >
            <LayoutDashboard className="h-4 w-4 text-cyan-200" />
            Demo
          </Link>
          <Link href="/onboarding" className="button-primary px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            Start
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
