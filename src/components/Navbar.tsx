"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Certs", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-10 py-3 bg-white border-b-[3px] border-ink transition-all ${
        scrolled ? "shadow-[0_3px_0_#111]" : ""
      }`}
    >
      <div className="text-[1.15rem] font-extrabold bg-mustard border-[2.5px] border-ink rounded-[20px] px-4 py-1 shadow-[3px_3px_0_#111]">
        ✦ Eka
      </div>
      <ul className="flex gap-1.5 md:gap-2 list-none">
        {links.map((l) => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              className="nav-link text-[0.78rem] md:text-[0.82rem] font-bold text-ink px-3 py-1.5 border-2 border-ink rounded-[20px] bg-transparent"
            >
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
