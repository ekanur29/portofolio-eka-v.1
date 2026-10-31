"use client";
import { useEffect, useRef } from "react";
import { data } from "@/app/data";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const barColors = [
    "from-mint to-[#38967c]",
    "from-denim to-[#1a5a8a]",
    "from-lav to-[#7a5fc9]",
    "from-coral to-[#c44d38]",
    "from-mustard to-[#E0A020]",
  ];

  return (
    <section id="projects" ref={ref} className="py-16 px-6 max-w-[1100px] mx-auto">
      <div
        className="inline-block text-[1.85rem] font-extrabold bg-mustard border-[3px] border-ink rounded-lg px-5 py-1.5 shadow-comic mb-11"
        style={{ transform: "rotate(-1deg)" }}
      >
        🚀 Projects
      </div>

      <div className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-card bg-white border-[3px] border-ink rounded-2xl p-6 shadow-comic relative ${p.rotate}`}
          >
            {p.featured && (
              <span className="absolute top-3.5 right-3.5 text-[0.65rem] font-extrabold bg-mustard border-2 border-ink rounded-lg px-2 py-0.5 shadow-[2px_2px_0_#111]">
                ⭐ Featured
              </span>
            )}
            <div className={`h-1.5 rounded bg-gradient-to-r ${barColors[i]} mb-4`} />
            <span className="text-[2rem] block mb-2">{p.emoji}</span>
            <h3 className="text-[1rem] font-extrabold mb-1.5">{p.title}</h3>
            <p className="text-[0.8rem] leading-[1.6] text-[#555] mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.68rem] font-bold px-2.5 py-1 border-2 border-ink rounded-[9px] bg-cream"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
