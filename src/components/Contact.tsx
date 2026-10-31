"use client";
import { useEffect, useRef } from "react";
import { data } from "@/app/data";

const contacts = [
  {
    label: "📧 Email",
    href: `mailto:${data.email}`,
    cls: "sb1 bg-mustard text-ink",
  },
  {
    label: "💼 LinkedIn",
    href: data.linkedin,
    cls: "sb2 bg-denim text-white",
  },
  {
    label: "📱 WhatsApp",
    href: data.whatsapp,
    cls: "sb3 bg-mint text-ink",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 px-6 max-w-[1100px] mx-auto text-center"
    >
      <div
        className="inline-block text-[1.85rem] font-extrabold bg-mustard border-[3px] border-ink rounded-lg px-5 py-1.5 shadow-comic mb-11"
        style={{ transform: "rotate(0.8deg)" }}
      >
        📬 Contact
      </div>

      <div className="flex justify-center">
        <div
          className="fade-in inline-flex flex-col items-center gap-5 bg-white border-[3px] border-ink rounded-[20px] px-14 py-10 shadow-comic-lg max-w-[460px]"
          style={{ transform: "rotate(-0.5deg)" }}
        >
          <div className="text-[2.8rem]">👋</div>
          <h2 className="text-[1.35rem] font-extrabold">Let&apos;s Connect!</h2>
          <p className="text-[0.9rem] text-[#555] leading-[1.7]">
            Mau ngobrol soal tech, kolaborasi project IoT / web, atau sekedar say
            hi? Hit me up!
          </p>

          <div className="flex gap-2.5 flex-wrap justify-center">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-btn text-[0.82rem] font-extrabold px-5 py-2 border-[2.5px] border-ink rounded-xl shadow-[3px_3px_0_#111] no-underline ${c.cls}`}
              >
                {c.label}
              </a>
            ))}
          </div>

          <div className="text-[0.75rem] text-[#aaa] font-mono text-center leading-[1.6]">
            📍 {data.location}
            <br />
            ✉️ {data.email}
          </div>
        </div>
      </div>
    </section>
  );
}
