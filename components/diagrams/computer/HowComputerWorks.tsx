"use client";
import { motion } from "framer-motion";

const FLOW = [
  { emoji: "⌨️", label: "Input",    examples: "Keyboard, mouse, mic, camera", color: "#F59E0B" },
  { emoji: "🧠", label: "Process",  examples: "CPU + RAM work together",       color: "#3B82F6" },
  { emoji: "💾", label: "Storage",  examples: "SSD/HDD saves your data",       color: "#7C3AED" },
  { emoji: "📺", label: "Output",   examples: "Screen, speakers, printer",     color: "#16A34A" },
];

export default function HowComputerWorks({ accent = "#1D7CFF" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0F9FF,#E0F2FE)" }}>
      <div className="px-5 py-3 border-b border-sky-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>The IPO Model — How Every Computer Works</p>
      </div>
      <div className="p-5 flex gap-2 items-stretch">
        {FLOW.map((f, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
              className="flex-1 rounded-xl p-3 text-center border-2"
              style={{ background: `${f.color}10`, borderColor: `${f.color}30` }}>
              <div className="text-3xl mb-1">{f.emoji}</div>
              <p className="text-xs font-black" style={{ color: f.color }}>{f.label}</p>
              <p className="text-[9px] text-gray-500 mt-1 leading-tight">{f.examples}</p>
            </motion.div>
            {i < FLOW.length - 1 && (
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }} className="text-gray-400 text-sm shrink-0">→</motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
