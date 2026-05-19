const areas = [
  {
    title: "Distributed Systems",
    desc: "Designing systems that scale and communicate efficiently.",
  },
  {
    title: "Performance",
    desc: "Optimizing latency, throughput and resource utilization.",
  },
  {
    title: "Reliability",
    desc: "Building resilient systems with fault tolerance and observability.",
  },
  {
    title: "Integrations",
    desc: "Connecting systems, APIs and external platforms.",
  },
  {
    title: "Search & Data",
    desc: "Indexing, searching and building reporting solutions.",
  },
  {
    title: "Scalability",
    desc: "Handling growth with the right architecture and patterns.",
  },
];

export default function Engineering() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      {/* heading */}
      <div className="mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Engineering Focus
        </p>

        <h2 className="heading-font text-4xl md:text-5xl">
          Areas I work on and care about
        </h2>
      </div>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => (
          <div
            key={area.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
          >
            <h3 className="mb-3 text-xl font-semibold">
              {area.title}
            </h3>

            <p className="leading-7 text-zinc-400">
              {area.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}