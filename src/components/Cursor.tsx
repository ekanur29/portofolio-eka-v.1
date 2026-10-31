"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tx = 0, ty = 0, mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + "px";
        curRef.current.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", onMove);

    const raf = setInterval(() => {
      tx += (mx - tx) * 0.35;
      ty += (my - ty) * 0.35;
      if (trailRef.current) {
        trailRef.current.style.left = tx + "px";
        trailRef.current.style.top = ty + "px";
      }
    }, 16);

    return () => {
      document.removeEventListener("mousemove", onMove);
      clearInterval(raf);
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
