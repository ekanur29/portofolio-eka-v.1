"use client";
import { useEffect, useRef } from "react";
import { data } from "@/app/data";

const factIconColors = [
  "bg-mustard", "bg-denim", "bg-coral", "bg-mint", "bg-lav",
];

export default function About() {
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
    <section id="about" ref={ref} className="py-16 px-6 max-w-[1100px] mx-auto">
      <div
        className="inline-block text-[1.85rem] font-extrabold bg-mustard border-[3px] border-ink rounded-lg px-5 py-1.5 shadow-comic mb-11"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        ✦ About Me
      </div>

      <div className="fade-in grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <div
            className="tilt-card bg-white border-[3px] border-ink rounded-2xl p-7 shadow-comic"
            style={{ transform: "rotate(-1deg)" }}
          >
            <p className="text-[0.95rem] leading-[1.78] text-[#333]">
              Hai! Aku <strong className="text-denim">Eka Nur Andini Fitriyani</strong> — siswi kelas XII jurusan{" "}
              <strong className="text-denim">SIJA</strong> di SMK Negeri 1 Cimahi. Passion-ku ada di{" "}
              <strong className="text-denim">IoT</strong>, <strong className="text-denim">jaringan komputer</strong>, dan{" "}
              <strong className="text-denim">UI/UX Desain</strong>.
            </p>
            <br />
            <p className="text-[0.95rem] leading-[1.78] text-[#333]">
              Aku punya nilai rata-rata <strong className="text-denim">89</strong> dan aktif belajar hal teknis seperti
              konfigurasi server Linux, MySQL, sensor ultrasonik, hingga platform cloud. Plus aku juga suka sisi
              kreatifnya — <strong className="text-denim">UI/UX Figma</strong>, desain vektor, fotografi, dan video editing! 🎨
            </p>
            <br />
            <p className="text-[0.95rem] leading-[1.78] text-[#333]">
              Rencana ke depan: <strong className="text-denim">kerja dulu</strong> cari experience + tabung, lalu lanjut
              kuliah sambil terus grow. Realistis tapi tetep ambis! 🔥
            </p>
          </div>

          {/* TOEIC badge */}
          <div
            className="toeic-badge bg-white border-[3px] border-ink rounded-xl p-4 shadow-comic flex items-center gap-4"
            style={{ transform: "rotate(1deg)" }}
          >
            <div>
              <div className="text-[0.7rem] font-extrabold text-[#888] mb-0.5">🌐 TOEIC SCORE</div>
              <div className="text-[2.4rem] font-extrabold text-denim font-mono">{data.toeic.total}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[0.76rem] font-bold">
                🎧 Listening: <span className="text-denim">{data.toeic.listening}</span>
              </div>
              <div className="text-[0.76rem] font-bold">
                📖 Reading: <span className="text-coral">{data.toeic.reading}</span>
              </div>
              <div className="text-[0.7rem] text-[#aaa] mt-1">
                Valid until {data.toeic.validUntil} · ETS Official
              </div>
            </div>
          </div>
        </div>

        {/* Right — fact cards */}
        <div className="flex flex-col gap-3">
          {data.facts.map((f, i) => (
            <div
              key={i}
              className="fact-card bg-white border-[2.5px] border-ink rounded-xl px-4 py-3 flex items-center gap-3 shadow-[4px_4px_0_#111]"
            >
              <div
                className={`w-[38px] h-[38px] flex items-center justify-center text-[1.3rem] border-2 border-ink rounded-[9px] flex-shrink-0 ${factIconColors[i]}`}
              >
                {f.icon}
              </div>
              <div>
                <div className="text-[0.73rem] text-[#888] font-semibold">{f.label}</div>
                <div className="text-[0.88rem] font-bold">{f.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
