"use client";
import { motion } from "framer-motion";
import Orbit from "../orbit/Orbit";
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* grid bg */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] opacity-15" />

            <div className="relative mx-auto grid min-h-[calc(100vh-80px)] items-center gap-16 px-6 pt-12 md:grid-cols-2 md:pt-0">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-7xl px-9 py-4"
                >

                    <div className="mb-6 inline-flex rounded-full border border-zinc-700/60 px-4 py-2 text-xs uppercase tracking-widest text-zinc-400">
                        Full Stack Engineer
                    </div>

                    <h1 className="heading-font text-5xl font-bold leading-[1.05] text-5xl font-bold leading-[1.05] md:text-6xl xl:text-7xl  ">
                        Building scalable systems.
                        <br />
                        <span className="text-[var(--accent)]">
                            Solving real problems.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-zinc-400">
                        6+ years of experience designing backend systems,
                        integrations and modern applications that are reliable
                        and built for scale.
                    </p>

                    {/* tech pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["Go", "React", "AWS", "Redis", "MySQL", "OpenSearch"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-zinc-700/60 px-3 py-1 text-sm text-zinc-400"
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
                            onClick={() =>
                                document
                                    .getElementById("experience")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            View Experience
                        </button>

                        <a
                           href={`${basePath}/Sachin_Naik_Go_React_5YOE_Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-2xl bg-[var(--accent)] px-6 py-3 font-medium text-white transition hover:opacity-90"
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT VISUAL */}
                <div className="relative hidden items-center justify-center md:flex">

                    {/* glow */}
                    <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--accent)]/8 blur-[120px]" />

                    <Orbit />
                </div>
                {/* <div className="relative hidden md:flex items-center justify-center">
                    <div className="absolute left-1/2 top-1/2 h-px w-72 -translate-x-1/2 bg-zinc-800" />
                    <div className="absolute left-1/2 top-1/2 h-72 w-px -translate-y-1/2 bg-zinc-800" />

                    <div className="relative h-[420px] w-[420px]">

                        <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-[120px]" />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-20 top-20 h-56 w-56 rounded-3xl border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-xl"
                        />

                        <div className="absolute right-10 top-10 h-24 w-24 rounded-2xl border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-sm" />

                        <div className="absolute bottom-10 left-10 h-28 w-28 rounded-2xl border border-zinc-700/60 bg-zinc-900/70 backdrop-blur-sm" />

                        <div className="absolute bottom-20 right-20 h-40 w-40 rounded-3xl border border-zinc-700/60 bg-zinc-900" />
                    </div>
                </div> */}
            </div>
        </section>
    );
}