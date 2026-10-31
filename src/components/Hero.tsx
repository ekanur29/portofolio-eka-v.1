"use client";
import { data } from "@/app/data";

const doodles = [
  { emoji: "⚡", cls: "top-[14%] left-[3%]" },
  { emoji: "📡", cls: "top-[28%] right-[4%] animation-delay-700" },
  { emoji: "🐟", cls: "bottom-[22%] left-[6%] animation-delay-[1400ms]" },
  { emoji: "🤖", cls: "bottom-[28%] right-[8%] animation-delay-300" },
  { emoji: "🔌", cls: "top-[50%] left-[1%] animation-delay-900" },
];

const pills = [
  { label: "SIJA Student", cls: "bg-denim text-white" },
  { label: "IoT Developer", cls: "bg-mustard text-ink" },
  { label: "UI/UX Design", cls: "bg-coral text-white" },
  { label: "Generative AI", cls: "bg-lav text-white" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="grid-bg absolute inset-0" />

      {/* Floating doodles */}
      {doodles.map((d, i) => (
        <span
          key={i}
          className={`doodle absolute text-3xl animate-float pointer-events-none opacity-65 ${d.cls}`}
          style={{ animationDelay: `${i * 0.35}s` }}
        >
          {d.emoji}
        </span>
      ))}

      <div className="relative flex items-center gap-14 flex-wrap justify-center max-w-[1000px]">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-[190px] h-[190px] rounded-full bg-denim border-[5px] border-ink shadow-comic-lg flex items-center justify-center text-[4.5rem] animate-float">
            👩‍💻
          </div>
          <span
            className="stk absolute text-[0.7rem] font-extrabold px-3 py-1 border-[2.5px] border-ink rounded-[20px] shadow-[3px_3px_0_#111] bg-mustard whitespace-nowrap animate-float"
            style={{ top: "-16px", right: "-28px", transform: "rotate(8deg)", animationDelay: "0.3s" }}
          >
            ✦ SIJA XII-A
          </span>
          <span
            className="stk absolute text-[0.7rem] font-extrabold px-3 py-1 border-[2.5px] border-ink rounded-[20px] shadow-[3px_3px_0_#111] bg-coral text-white whitespace-nowrap animate-float"
            style={{ bottom: "8px", left: "-38px", transform: "rotate(-6deg)", animationDelay: "0.7s" }}
          >
            🌐 SMKN 1 Cimahi
          </span>
          <span
            className="stk absolute text-[0.7rem] font-extrabold px-3 py-1 border-[2.5px] border-ink rounded-[20px] shadow-[3px_3px_0_#111] bg-mint whitespace-nowrap animate-float"
            style={{ bottom: "-14px", right: "4px", transform: "rotate(4deg)", animationDelay: "1.1s" }}
          >
            IoT ⚙️
          </span>
        </div>

        {/* Text */}
        <div className="hero-txt max-w-[480px]">
          <h1 className="text-[2.8rem] font-extrabold leading-[1.15] mb-2">
            Halo, Aku
            <br />
            <em
              className="not-italic bg-mustard px-2 rounded"
              style={{ transform: "rotate(-1deg)", display: "inline-block" }}
            >
              Eka Nur Andini
            </em>{" "}
            👋
          </h1>

          <div className="flex flex-wrap gap-2 my-4">
            {pills.map((p, i) => (
              <span
                key={i}
                className={`pill text-[0.78rem] font-bold px-3 py-1.5 border-[2.5px] border-ink rounded-[20px] shadow-[3px_3px_0_#111] animate-float ${p.cls}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {p.label}
              </span>
            ))}
          </div>

          {/* Fake terminal */}
          <div
            className="bg-[#1a1a2e] border-[3px] border-ink rounded-xl shadow-comic-lg overflow-hidden max-w-[500px] tilt-card"
            style={{ transform: "rotate(1deg)" }}
          >
            <div className="bg-[#2d2d44] px-4 py-2.5 flex items-center gap-2 border-b-2 border-ink">
              <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#28ca41]" />
              <span className="ml-2 text-[#aaa] font-mono text-[0.72rem]">eka@smkn1cimahi ~ %</span>
            </div>
            <div className="p-4 font-mono text-[0.75rem] text-[#e0e0e0] min-h-[130px]">
              <div className="flex gap-2 mb-1"><span className="text-mint">→</span><span className="text-mustard">whoami</span></div>
              <div className="text-[#aaaacc] mb-1">Eka Nur Andini Fitriyani · XII SIJA A</div>
              <div className="flex gap-2 mb-1"><span className="text-mint">→</span><span className="text-mustard">cat projects.txt</span></div>
              <div className="text-[#aaaacc] mb-1">OccuSense | SIKOMI | SIJALearn</div>
              <div className="flex gap-2 mb-1"><span className="text-mint">→</span><span className="text-mustard">score --toeic</span></div>
              <div className="text-[#aaaacc]">
                TOTAL: 390 (L:205 R:185) · Valid 2027
                <span className="term-cursor" />
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap mt-5">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-comic text-[0.88rem] font-extrabold px-5 py-2.5 border-[3px] border-ink rounded-xl bg-ink text-white shadow-comic"
            >
              Lihat Projects ↓
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-comic text-[0.88rem] font-extrabold px-5 py-2.5 border-[3px] border-ink rounded-xl bg-mustard text-ink shadow-comic"
            >
              Hubungi Aku
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
