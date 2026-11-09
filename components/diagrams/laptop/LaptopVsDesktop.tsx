"use client";
import { motion } from "framer-motion";

const COMPARE = [
  { feature: "Screen",      laptop: "Built-in 13–17\"",   desktop: "Separate monitor" },
  { feature: "Keyboard",    laptop: "Attached, compact",  desktop: "Full-size, separate" },
  { feature: "Battery",     laptop: "Yes — 8–12 hrs",     desktop: "No — needs outlet" },
  { feature: "Portability", laptop: "Carry anywhere",     desktop: "Stays on desk" },
  { feature: "Upgrade",     laptop: "Limited — RAM/SSD",  desktop: "Easy — swap any part" },
  { feature: "Price",       laptop: "More for same power", desktop: "Better value" },
];

export default function LaptopVsDesktop({ accent = "#0369A1" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0F9FF,#E0F2FE)" }}>
      <div className="px-5 py-3 border-b border-blue-200 flex items-center gap-6">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Laptop vs Desktop</p>
        <div className="flex gap-4 ml-auto">
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-500"></div><p className="text-[10px] font-black text-blue-700">Laptop</p></div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-gray-400"></div><p className="text-[10px] font-black text-gray-600">Desktop</p></div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-1.5">
        {COMPARE.map((row, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }}
            className="grid grid-cols-3 gap-2 items-center rounded-lg px-2 py-1.5 bg-white border border-blue-50">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-wide">{row.feature}</p>
            <p className="text-[10px] text-blue-700 font-bold">{row.laptop}</p>
            <p className="text-[10px] text-gray-600">{row.desktop}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
