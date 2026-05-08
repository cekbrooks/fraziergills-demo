"use client";

import { motion, useReducedMotion } from "motion/react";

// Mercury-style: deep navy/charcoal base with a warm amber glow that drifts.
// Pure presentation — pointer-events disabled.
export function Aurora() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-[480px] w-[480px] rounded-full bg-[#F5A623]/15 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[560px] w-[560px] rounded-full bg-[#3B5BDB]/12 blur-3xl" />
        <div className="absolute bottom-[-15%] left-1/4 h-[520px] w-[520px] rounded-full bg-[#F5A623]/8 blur-3xl" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full bg-[#F5A623]/18 blur-3xl"
        initial={{ x: "-12%", y: "8%" }}
        animate={{ x: ["-12%", "15%", "-12%"], y: ["8%", "20%", "8%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[640px] w-[640px] rounded-full bg-[#3B5BDB]/14 blur-3xl"
        initial={{ x: "65%", y: "10%" }}
        animate={{ x: ["65%", "50%", "65%"], y: ["10%", "35%", "10%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full bg-[#F5A623]/10 blur-3xl"
        initial={{ x: "20%", y: "55%" }}
        animate={{ x: ["20%", "40%", "20%"], y: ["55%", "40%", "55%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
