"use client";
import { motion } from "framer-motion";

const PARTS = [
  { name: "SoC (Chip)",    icon: "⚙️", desc: "CPU + GPU + modem in ONE chip — Snapdragon or Apple A-series" },
  { name: "Battery",       icon: "🔋", desc: "3000–5000 mAh Li-ion, charges via USB-C or wireless" },
  { name: "OLED Screen",   icon: "📱", desc: "1080p–4K, 60–120Hz, touch input digitizer layer" },
  { name: "Cameras",       icon: "📷", desc: "Wide + ultra-wide + telephoto, up to 200MP" },
  { name: "RAM",           icon: "💾", desc: "4–16 GB LPDDR — apps run here" },
  { name: "5G Modem",      icon: "📡", desc: "Connects to cell towers for internet" },
];

export default function SmartphoneHardware({ accent = "#0F766E" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDFA,#CCFBF1)" }}>
      <div className="px-5 py-3 border-b border-teal-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Smartphone Hardware — Pocket Supercomputer</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-2">
        {PARTS.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="rounded-xl bg-white border border-teal-100 p-3 flex gap-2 items-start">
            <span className="text-lg mt-0.5">{p.icon}</span>
            <div>
              <p className="text-xs font-black text-gray-700">{p.name}</p>
              <p className="text-[9px] text-gray-500 leading-snug">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
