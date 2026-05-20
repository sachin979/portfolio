import {
  Mail,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/30 p-10 md:p-14">

        {/* heading */}
        <div className="max-w-2xl">

          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Contact
          </p>

          <h2 className="heading-font text-4xl md:text-5xl">
            Open to interesting opportunities.
          </h2>

          <p className="mt-5 leading-7 text-zinc-400">
            Currently exploring backend and full-stack opportunities.
            Feel free to reach out or explore my resume and profiles.
          </p>
        </div>

        {/* actions */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={`${basePath}/Sachin_Naik_Go_React_5YOE_Resume.pdf`}
            target="_blank"
            className="flex items-center gap-2 rounded-2xl bg-[var(--accent)] px-5 py-3 font-medium text-white transition hover:opacity-90"
          >
            <FileText size={18} />
            Resume
          </a>

          <a
            href="https://github.com/sachin979"
            target="_blank"
            className="flex items-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 transition hover:bg-zinc-900"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sachin.naik979"
            target="_blank"
            className="flex items-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 transition hover:bg-zinc-900"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="mailto:sachin.naik979@gmail.com"
            className="flex items-center gap-2 rounded-2xl border border-zinc-800 px-5 py-3 transition hover:bg-zinc-900"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}