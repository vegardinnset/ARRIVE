import { cn } from "@/lib/utils";

const tones = {
  Critical: "border-pink-300/30 bg-pink-400/12 text-pink-100",
  Active: "border-cyan-300/30 bg-cyan-400/12 text-cyan-100",
  Ready: "border-teal-300/30 bg-teal-400/12 text-teal-100",
  Optional: "border-violet-300/30 bg-violet-400/12 text-violet-100",
  Verified: "border-teal-300/30 bg-teal-400/12 text-teal-100",
  Moderating: "border-amber-300/30 bg-amber-400/12 text-amber-100",
  "University reviewed": "border-sky-300/30 bg-sky-400/12 text-sky-100",
};

export function StatusPill({
  children,
  tone = "Active",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
