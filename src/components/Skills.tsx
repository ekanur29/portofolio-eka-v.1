"use client";
import { useState, useEffect, useRef } from "react";
import { data } from "@/app/data";

const tabs = [
  { key: "iot", label: "🤖 IoT & Hardware" },
  { key: "networking", label: "🌐 Networking" },
  { key: "dev", label: "💻 Dev" },
  { key: "design", label: "🎨 Design & AI" },
];

const chipColors = [
  "bg-mustard text-ink",
  "bg-denim text-white",
  "bg-coral text-white",
  "bg-mint text-ink",
  "bg-lav text-white",
  "bg-white text-ink",
  "bg-mustard text-ink",
];

type SkillKey = keyof typeof data.skills;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillKey>("iot");
  const ref = useRef<HTMLElement>(null);

  // IoT live sim
  const [temp, setTemp] = useState("28.4°C");
  const [level, setLevel] = useState("14 cm");
  const [status, setStatus] = useState("NORMAL");
  const [tg, setTg] = useState("IDLE");
  const [uptime, setUptime] = useState("02:14:07");
  const [lcd, setLcd] = useState("OK");

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

  useEffect(() => {
    const temps = [27.8, 28.1, 28.4, 28.7, 29.0, 28.6, 28.2, 27.9];
    const levels = [13, 14, 14, 15, 14, 13, 14, 15];
    let ti = 0;
    let secs = 2 * 3600 + 14 * 60 + 7;

    const interval = setInterval(() => {
      secs++;
      const h = String(Math.floor(secs / 3600)).padStart(2, "0");
      const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
      const s = String(secs % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${s}`);
      ti = (ti + 1) % temps.length;
      const t = temps[ti];
      const lv = levels[ti];
      setTemp(`${t}°C`);
      setLevel(`${lv} cm`);
      const ok = t < 29 && lv > 12;
      setStatus(ok ? "NORMAL" : "WASPADA");
      setTg(ti % 3 === 0 ? "✓ SENT" : "IDLE");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentSkills = data.skills[activeTab];

  return (
    <section id="skills" ref={ref} className="py-16 px-6 max-w-[1100px] mx-auto">
      <div
        className="inline-block text-[1.85rem] font-extrabold bg-mustard border-[3px] border-ink rounded-lg px-5 py-1.5 shadow-comic mb-11"
        style={{ transform: "rotate(1deg)" }}
      >
        ⚙️ Skills
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key as SkillKey)}
            className={`tab-btn text-[0.8rem] font-extrabold px-4 py-1.5 border-[2.5px] border-ink rounded-[20px] ${
              activeTab === t.key ? "active" : "bg-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Chips */}
      <div className="fade-in flex flex-wrap gap-2.5">
        {currentSkills.map((sk, i) => (
          <span
            key={i}
            className={`skill-chip text-[0.83rem] font-extrabold px-4 py-2 border-[3px] border-ink rounded-[28px] shadow-[4px_4px_0_#111] flex items-center gap-1.5 ${
              chipColors[i % chipColors.length]
            }`}
          >
            {sk.emoji} {sk.label}
          </span>
        ))}
      </div>

      {/* IoT Dashboard */}
      <div className="fade-in bg-[#1a1a2e] border-[3px] border-ink rounded-2xl p-6 shadow-comic-lg mt-10">
        <div className="flex items-center gap-2 mb-5 text-mustard font-extrabold text-[0.95rem]">
          <span
            className="w-[9px] h-[9px] bg-[#28ca41] rounded-full"
            style={{ animation: "blink 1.5s ease infinite" }}
          />
          ⚡ SIKOMI — Live Monitoring Kolam Ikan (Simulator)
          <span className="ml-auto text-[0.7rem] text-[#888] font-mono">NodeMCU · DS18B20</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { val: temp, label: "🌡 Suhu Air", color: status === "WASPADA" && temp > "29" ? "text-coral" : "text-mustard" },
            { val: level, label: "📏 Ketinggian Air", color: "text-mustard" },
            { val: status, label: "✅ Status", color: status === "NORMAL" ? "text-mint" : "text-coral" },
            { val: tg, label: "💬 Telegram Bot", color: tg.includes("SENT") ? "text-mint" : "text-mustard" },
            { val: uptime, label: "⏱ Uptime", color: "text-mustard" },
            { val: lcd, label: "📺 LCD Output", color: "text-mustard" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center"
            >
              <div className={`font-mono text-[1.35rem] font-bold ${item.color}`}>{item.val}</div>
              <div className="text-[0.68rem] text-[#aaa] mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
