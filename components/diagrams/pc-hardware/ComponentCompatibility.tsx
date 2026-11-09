"use client";
import { motion } from "framer-motion";

export default function ComponentCompatibility({ accent = "#1D4ED8" }: { accent?: string }) {
  const checks = [
    { q: "CPU + Motherboard",  answer: "Must share same socket — e.g. LGA1700 for Intel 13th Gen", ok: true },
    { q: "RAM type",           answer: "DDR4 or DDR5 — motherboard specifies which", ok: true },
    { q: "GPU power connector", answer: "PCIe 8-pin or 16-pin — PSU must have matching cables", ok: true },
    { q: "Case size",          answer: "ATX case fits ATX motherboard — check form factor", ok: false },
    { q: "Cooling TDP",        answer: "CPU cooler watt rating must exceed CPU TDP", ok: true },
  ];
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#E0F2FE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Compatibility — What Must Match?</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {checks.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
            className={`flex gap-3 items-start rounded-xl px-4 py-2.5 border ${c.ok ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
            <span className="text-sm mt-0.5">{c.ok ? "✅" : "⚠️"}</span>
            <div>
              <p className="text-xs font-black text-gray-700">{c.q}</p>
              <p className="text-[10px] text-gray-500">{c.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
