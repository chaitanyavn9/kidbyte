"use client";
import { motion } from "framer-motion";

const PROGRAMS = [
  { emoji: "🌐", label: "Chrome", mb: 400 },
  { emoji: "🎮", label: "Game", mb: 1200 },
  { emoji: "🎵", label: "Music", mb: 80 },
  { emoji: "📝", label: "Notes", mb: 30 },
];

export default function RAMWorkspace({ accent = "#7C3AED" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F5F3FF,#EDE9FE)" }}>
      <div className="px-5 py-3 border-b border-purple-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>RAM = Your Computer's Workspace</p>
      </div>
      <div className="p-5 flex gap-6 items-start">
        {/* RAM - desk */}
        <div className="flex-1">
          <p className="text-xs font-black text-gray-500 mb-2 text-center">🖥️ RAM (what's open NOW)</p>
          <div className="rounded-xl p-3 flex flex-col gap-2" style={{ background: `${accent}15`, border: `2px dashed ${accent}60` }}>
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2"
              >
                <span className="text-lg">{p.emoji}</span>
                <div className="flex-1">
                  <p className="text-xs font-black text-gray-700">{p.label}</p>
                  <div className="mt-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: accent }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(p.mb / 16, 100)}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">{p.mb} MB</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] text-center text-gray-500 mt-2">⚡ Instant access</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1 pt-8">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-xl text-gray-400"
          >⇄</motion.div>
          <p className="text-[9px] text-gray-400 text-center">load/<br/>unload</p>
        </div>

        {/* Storage */}
        <div className="w-28">
          <p className="text-xs font-black text-gray-500 mb-2 text-center">💾 Storage (saved data)</p>
          <div className="rounded-xl p-3 flex flex-col gap-2 bg-gray-100 border-2 border-gray-300">
            {["Photos", "Videos", "Apps", "Documents"].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm bg-gray-400" />
                <p className="text-[10px] text-gray-600">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-center text-gray-500 mt-2">🐢 Slower access</p>
        </div>
      </div>
      <div className="px-5 pb-4">
        <div className="rounded-xl px-4 py-2 text-center bg-white/70 border border-purple-200">
          <p className="text-xs font-bold text-gray-600">Turn off computer → <strong style={{ color: accent }}>RAM clears instantly</strong>. Storage keeps everything.</p>
        </div>
      </div>
    </div>
  );
}
