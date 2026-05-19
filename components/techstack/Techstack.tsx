const stacks = [
  {
    title: "Languages",
    items: ["Go", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    items: ["REST", "Microservices", "gRPC", "Gin"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Redis", "OpenSearch"],
  },
  {
    title: "Messaging",
    items: ["Kafka", "Redis Streams"],
  },
  {
    title: "Infra",
    items: ["Docker", "Kubernetes", "CI/CD", "Linux"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Swagger"],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="mx-auto max-w-7xl px-6 pt-12 pb-12"
    >
      {/* heading */}
      <div className="mb-16">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Tech Stack
        </p>

        <h2 className="heading-font text-4xl md:text-5xl">
          Technologies I work with
        </h2>
      </div>

      {/* cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-7 transition hover:border-[var(--accent)]/30"
          >
            <h3 className="mb-5 text-xl font-semibold">
              {stack.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}