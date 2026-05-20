export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[rgba(6,8,22,0.7)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800">
            SN
          </div>

          <div className="font-semibold">
            Sachin Naik
          </div>
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#experience">Experience</a>
          <a className="transition hover:text-white" href="#tech">Tech</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to opportunities
        </div>

        {/* <button className="rounded-2xl  border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 transition">
          <a
            href="/Sachin_Naik_Go_React_5YOE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-medium text-white transition hover:opacity-90"
          >
            Resume
          </a>
        </button> */}
      </div>
    </header>
  );
}