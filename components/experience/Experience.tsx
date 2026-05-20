const experiences = [
  {
    period: "2022 – Present",
    role: "Software Engineer 3",
    company: "Impelsys",
    summary:
      "Building scalable backend and full-stack systems focused on integrations, search platforms and high-volume data processing.",
    tech: ["Go", "Redis", "MySQL", "OpenSearch", "React", "AWS", "Docker", "Kubernetes"],
    highlights: [
      "Built distributed credit claim processing platform",
      "Migrated 40M+ records to OpenSearch",
      "Designed reporting and async indexing systems",
    ],
  },
  {
    period: "2020 – 2022",
    role: "Senior System Engineer",
    company: "Infosys",
    summary:
      "Worked on React and Golang enterprise applications contributing to frontend development, APIs and platform upgrades.",
    tech: ["Go", "React", "TypeScript", "REST"],
    highlights: [
      "Developed React interfaces and REST APIs",
      "Contributed to upgrades and security fixes",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 pt-20 pb-24"
    >
      {/* Heading */}
      <div className="mb-14">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Experience
        </p>

        <h2 className="heading-font text-4xl md:text-5xl">
          My professional journey
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Building scalable backend systems, integrations and cloud-native
          applications across search, reporting and high-volume workflows.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.period}
            className="rounded-3xl border border-zinc-800/80 bg-zinc-900/20 p-8 transition duration-300 hover:border-[var(--accent)]/20"
          >
            <div className="space-y-6">

              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-4">

                <p className="text-sm text-zinc-500">
                  {exp.period}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-3xl font-semibold">
                  {exp.company}
                </h3>

                <p className="mt-1 text-zinc-500">
                  {exp.role}
                </p>
              </div>

              {/* Summary */}
              <p className="max-w-3xl leading-7 text-zinc-400">
                {exp.summary}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 pt-2">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}