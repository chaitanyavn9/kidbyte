"use client";
import { motion } from "framer-motion";

const DISTROS = [
  { name: "Ubuntu", emoji: "🟠", desc: "Best for beginners" },
  { name: "Fedora", emoji: "🔵", desc: "Cutting-edge features" },
  { name: "Arch", emoji: "⚫", desc: "Advanced, DIY" },
  { name: "Debian", emoji: "🔴", desc: "Super stable, servers" },
  { name: "Raspberry Pi OS", emoji: "🍓", desc: "For tiny computers" },
  { name: "Android", emoji: "🤖", desc: "Linux on your phone!" },
];

export default function LinuxLayers({ accent = "#374151" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F9FAFB,#F3F4F6)" }}>
      <div className="px-5 py-3 border-b border-gray-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Linux — One Kernel, Thousands of Distros</p>
      </div>
      <div className="p-5">
        <div className="text-center mb-4">
          <div className="inline-block rounded-xl px-6 py-3 bg-gray-800 border-2 border-gray-600">
            <p className="text-sm font-black text-white">🐧 Linux Kernel</p>
            <p className="text-[10px] text-gray-400">The same open-source core</p>
          </div>
          <div className="text-gray-400 text-2xl mt-1">↓</div>
          <p className="text-xs text-gray-500 mb-3">Anyone can build on top of it</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {DISTROS.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="rounded-xl p-2 text-center bg-white border border-gray-200">
              <div className="text-xl mb-0.5">{d.emoji}</div>
              <p className="text-[10px] font-black text-gray-700">{d.name}</p>
              <p className="text-[9px] text-gray-400">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
