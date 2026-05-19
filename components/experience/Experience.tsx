const experiences = [
  {
    period: "2022 – Present",
    role: "Software Engineer 1",
    company: "Impelsys",
    summary:
      "Building scalable backend systems, integrations and search/reporting solutions.",
    tech: ["Go", "Kafka", "Redis", "MySQL", "OpenSearch"],
  },
  {
    period: "2020 – 2022",
    role: "Senior System Engineer",
    company: "Infosys",
    summary:
      "Developed services, APIs and data processing integrations.",
    tech: ["Go", "JavaScript", "MySQL", "Redis"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 pt-16 pb-24"
    >
      <div className="mb-16">

        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Experience
        </p>

        <h2 className="heading-font text-4xl md:text-5xl">
          My professional journey
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.period}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              {/* left */}
              <div className="space-y-3">

                <p className="text-sm text-zinc-500">
                  {exp.period}
                </p>

                <h3 className="text-2xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-zinc-400">
                  {exp.role}
                </p>

                <p className="max-w-xl text-zinc-400 leading-7">
                  {exp.summary}
                </p>
              </div>

              {/* right */}
              <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}