"use client";
import { motion } from "framer-motion";

const PROCESSES = [
  { name: "Chrome", ram: 400, color: "#3B82F6" },
  { name: "Game", ram: 1200, color: "#16A34A" },
  { name: "Spotify", ram: 80, color: "#7C3AED" },
  { name: "OS Kernel", ram: 200, color: "#EF4444" },
];
const TOTAL = 2048;

export default function VirtualMemory({ accent = "#B45309" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" }}>
      <div className="px-5 py-3 border-b border-amber-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Memory Allocation — Who Gets What RAM?</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl overflow-hidden border-2 border-amber-300 h-12 flex mb-4">
          {PROCESSES.map((p, i) => (
            <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${(p.ram / TOTAL) * 100}%` }} transition={{ delay: i * 0.15, duration: 0.5 }}
              className="h-full flex items-center justify-center overflow-hidden" style={{ background: p.color }}>
              <span className="text-[9px] font-black text-white truncate px-1">{p.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {PROCESSES.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: p.color }} />
              <p className="text-xs font-black text-gray-700 w-16">{p.name}</p>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: p.color }}
                  initial={{ width: 0 }} animate={{ width: `${(p.ram / TOTAL) * 100}%` }} transition={{ delay: i * 0.1 }} />
              </div>
              <p className="text-[10px] text-gray-500 w-12 text-right">{p.ram} MB</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-3">The OS gives each program its own section of memory — they can't interfere with each other</p>
      </div>
    </div>
  );
}
