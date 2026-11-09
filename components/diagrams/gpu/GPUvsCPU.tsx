"use client";
import { motion } from "framer-motion";

export default function GPUvsCPU({ accent = "#16A34A" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>CPU vs GPU — Different Strengths</p>
      </div>
      <div className="p-5 flex gap-4">
        {/* CPU */}
        <div className="flex-1 rounded-xl bg-blue-50 border-2 border-blue-200 p-4 text-center">
          <p className="text-xs font-black text-blue-700 mb-3">🧠 CPU</p>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {[1,2,3,4].map(i => (
              <motion.div
                key={i}
                className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-black"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              >Core {i}</motion.div>
            ))}
          </div>
          <p className="text-[10px] text-blue-600 font-bold">4–16 powerful cores</p>
          <p className="text-[10px] text-blue-500">Great for complex, sequential tasks</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 text-gray-400 text-xs font-bold">
          <span>vs</span>
        </div>

        {/* GPU */}
        <div className="flex-1 rounded-xl bg-green-50 border-2 border-green-200 p-4 text-center">
          <p className="text-xs font-black text-green-700 mb-3">🎨 GPU</p>
          <div className="flex flex-wrap justify-center gap-0.5 mb-3">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ background: accent }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: (i * 0.05) % 0.8 }}
              />
            ))}
          </div>
          <p className="text-[10px] text-green-700 font-bold">Thousands of tiny cores</p>
          <p className="text-[10px] text-green-600">Great for parallel tasks (pixels!)</p>
        </div>
      </div>
      <div className="px-5 pb-4 text-center">
        <p className="text-xs text-gray-600 bg-white/70 rounded-xl px-4 py-2">Your screen has <strong style={{ color: accent }}>8 million pixels</strong> — the GPU paints them ALL at the same time, 60× per second</p>
      </div>
    </div>
  );
}
