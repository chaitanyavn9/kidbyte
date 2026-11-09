"use client";
import { motion } from "framer-motion";

const LAYERS = [
  { label: "Your Apps", emoji: "📱", examples: "Chrome, Minecraft, YouTube", color: "#3B82F6", bg: "#DBEAFE" },
  { label: "Middleware / Runtime", emoji: "⚙️", examples: "Node.js, JVM, .NET Runtime", color: "#7C3AED", bg: "#EDE9FE" },
  { label: "Operating System", emoji: "🖱️", examples: "Windows, macOS, Android", color: "#E11D48", bg: "#FEE2E2" },
  { label: "Hardware", emoji: "🔩", examples: "CPU, RAM, Storage, GPU", color: "#64748B", bg: "#F1F5F9" },
];

export default function SoftwareLayers({ accent = "#06B6D4" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#ECFEFF,#CFFAFE)" }}>
      <div className="px-5 py-3 border-b border-cyan-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>The Software Stack — Everything Runs in Layers</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {LAYERS.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3 border-2"
            style={{ background: layer.bg, borderColor: `${layer.color}40` }}
          >
            <span className="text-2xl">{layer.emoji}</span>
            <div className="flex-1">
              <p className="text-sm font-black" style={{ color: layer.color }}>{layer.label}</p>
              <p className="text-[10px] text-gray-500">{layer.examples}</p>
            </div>
            {i < LAYERS.length - 1 && (
              <motion.div animate={{ y: [0, 3, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} className="text-gray-400 text-sm">↓</motion.div>
            )}
          </motion.div>
        ))}
        <p className="text-center text-xs text-gray-500 mt-1">Each layer depends on the one below it. Apps can't run without the OS; OS can't run without hardware.</p>
      </div>
    </div>
  );
}
