"use client";
import { useEffect, useRef } from "react";
import { data } from "@/app/data";

const iconColors = [
  "bg-coral text-white",
  "bg-denim text-white",
  "bg-mustard text-ink",
  "bg-mint text-ink",
  "bg-lav text-white",
  "bg-pink text-white",
];

export default function Certs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certs" ref={ref} className="py-16 px-6 max-w-[1100px] mx-auto">
      <div
        className="inline-block text-[1.85rem] font-extrabold bg-mustard border-[3px] border-ink rounded-lg px-5 py-1.5 shadow-comic mb-11"
        style={{ transform: "rotate(1.2deg)" }}
      >
        🏆 Sertifikasi & Prestasi
      </div>

      {/* Main cert grid */}
      <div className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.certs.map((c, i) => (
          <div
            key={i}
            className="cert-card bg-white border-[2.5px] border-ink rounded-xl p-4 shadow-comic flex items-start gap-3"
          >
            <div
              className={`w-[44px] h-[44px] flex items-center justify-center text-[1.5rem] border-2 border-ink rounded-[10px] flex-shrink-0 ${iconColors[i]}`}
            >
              {c.emoji}
            </div>
            <div>
              <div className="text-[0.84rem] font-extrabold mb-0.5">{c.name}</div>
              <div className="text-[0.73rem] text-[#888]">{c.org}</div>
              <div className="text-[0.7rem] font-bold text-denim mt-1">📅 {c.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Also attended */}
      <div className="fade-in flex flex-wrap gap-2.5 mt-6 items-center">
        <span className="text-[0.78rem] font-bold text-[#888]">Also attended:</span>
        {data.alsoAttended.map((item, i) => (
          <span
            key={i}
            className="skill-chip text-[0.75rem] font-extrabold px-3 py-1.5 border-[2.5px] border-ink rounded-[20px] bg-white shadow-[3px_3px_0_#111]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
