"use client";
import { motion } from "framer-motion";

const STEPS = [
  { emoji: "📝", label: "Your Code", desc: "print('Hello')", color: "#F59E0B", bg: "#FFFBEB" },
  { emoji: "🔄", label: "Compiler", desc: "Translates to machine code", color: "#7C3AED", bg: "#EDE9FE" },
  { emoji: "⚙️", label: "Assembly", desc: "MOV EAX, 1\nINT 0x80", color: "#059669", bg: "#F0FDF4" },
  { emoji: "💾", label: "Machine Code", desc: "10110100 00001010...", color: "#1D4ED8", bg: "#EFF6FF" },
  { emoji: "🧠", label: "CPU Runs", desc: "Hardware executes", color: "#DC2626", bg: "#FEF2F2" },
];

export default function CompilationFlow({ accent = "#047857" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>From Code to Machine — The Compilation Journey</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {STEPS.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12 }}
              className="flex-1 rounded-xl px-4 py-3 flex items-center gap-3 border-2"
              style={{ background: s.bg, borderColor: `${s.color}30` }}>
              <span className="text-2xl">{s.emoji}</span>
              <div>
                <p className="text-xs font-black" style={{ color: s.color }}>{s.label}</p>
                <code className="text-[10px] font-mono text-gray-500 whitespace-pre">{s.desc}</code>
              </div>
            </motion.div>
            {i < STEPS.length - 1 && (
              <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} className="text-gray-400 text-sm">↓</motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
