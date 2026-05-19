import {
  ArrowUpRight,
  Code2,
  PlugZap,
  Boxes,
} from "lucide-react";

const items = [
  {
    icon: <ArrowUpRight size={20} />,
    title: "6+ Years",
    subtitle: "Experience",
  },
  {
    icon: <Code2 size={20} />,
    title: "Fullstack",
    subtitle: "Engineer",
  },
  {
    icon: <PlugZap size={20} />,
    title: "Problem",
    subtitle: "Solver",
  },
  {
    icon: <Boxes size={20} />,
    title: "Scalable",
    subtitle: "Systems",
  },
];

export default function Snapshot() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 px-5 py-4 transition hover:border-[var(--accent)]/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
              {item.icon}
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}