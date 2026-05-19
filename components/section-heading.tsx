import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className,
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
          {eyebrow}
        </div>
      ) : null}
      <Heading className="text-3xl font-black tracking-tight text-white sm:text-5xl">{title}</Heading>
      {copy ? <p className="mt-5 text-lg leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}
