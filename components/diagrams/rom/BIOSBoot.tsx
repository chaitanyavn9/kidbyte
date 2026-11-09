"use client";
import { motion } from "framer-motion";

const STEPS = [
  { emoji: "🔌", label: "Power On", desc: "Electricity flows to motherboard" },
  { emoji: "💿", label: "ROM Runs", desc: "BIOS/UEFI in ROM chip wakes up — first code to run" },
  { emoji: "🔍", label: "POST Check", desc: "Tests CPU, RAM, keyboard — is everything working?" },
  { emoji: "📂", label: "Find OS", desc: "Looks for bootable OS on SSD/HDD" },
  { emoji: "🖥️", label: "Load OS", desc: "Hands control to Windows/macOS/Linux" },
];

export default function BIOSBoot({ accent = "#D97706" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#451a03)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">ROM = First Code on Power-On</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {STEPS.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: `${accent}20`, border: `1.5px solid ${accent}40` }}>
            <span className="text-xl">{s.emoji}</span>
            <div>
              <p className="text-xs font-black" style={{ color: accent }}>{s.label}</p>
              <p className="text-[10px] text-white/40">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
