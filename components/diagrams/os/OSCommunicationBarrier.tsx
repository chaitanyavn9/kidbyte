"use client";
import { motion } from "framer-motion";

export default function OSCommunicationBarrier({ accent = "#E11D48" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden p-6" style={{ background: "linear-gradient(135deg,#FFF1F2,#FFE4E6)" }}>
      <p className="text-center text-xs font-black uppercase tracking-widest mb-5" style={{ color: accent }}>
        The Communication Problem
      </p>

      <div className="flex items-center justify-between gap-2">

        {/* Human side */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <motion.div
            className="text-5xl"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >👤</motion.div>
          <div className="rounded-xl px-3 py-2 text-center" style={{ background: "#E11D4815", border: "1.5px solid #E11D4840" }}>
            <p className="text-xs font-black" style={{ color: accent }}>You</p>
            <p className="text-[11px] text-gray-600 mt-0.5">Speaks English,<br/>Telugu, Hindi…</p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {["Open Chrome", "Save my file", "Print this"].map((cmd) => (
              <div key={cmd} className="text-[10px] px-2 py-0.5 rounded-full bg-white shadow-sm text-gray-700 font-medium border border-gray-200">
                "{cmd}"
              </div>
            ))}
          </div>
        </div>

        {/* Barrier */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <motion.div
            className="text-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >🚧</motion.div>
          <div className="flex flex-col gap-1 items-center">
            {["?","?","?"].map((q, i) => (
              <motion.div
                key={i}
                className="w-8 h-7 rounded-lg flex items-center justify-center font-black text-sm text-white"
                style={{ background: "#94A3B8" }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
              >{q}</motion.div>
            ))}
          </div>
          <p className="text-[9px] text-gray-500 font-bold text-center max-w-[70px]">No common language</p>
        </div>

        {/* Hardware side */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >💻</motion.div>
          <div className="rounded-xl px-3 py-2 text-center" style={{ background: "#1E40AF15", border: "1.5px solid #1E40AF40" }}>
            <p className="text-xs font-black text-blue-700">Hardware</p>
            <p className="text-[11px] text-gray-600 mt-0.5">Speaks only<br/>0s and 1s</p>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            {["10110100 01101001", "00110010 11001010", "11110000 00001111"].map((cmd) => (
              <div key={cmd} className="text-[10px] px-2 py-0.5 rounded-full bg-white shadow-sm text-gray-400 font-mono border border-gray-200">
                {cmd}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-5 rounded-xl px-4 py-3 text-center" style={{ background: "#E11D4810", border: `1px solid ${accent}30` }}>
        <p className="text-sm font-bold text-gray-700">
          <span style={{ color: accent }}>The gap:</span> You cannot directly talk to hardware. Hardware cannot understand you. <strong>Something must bridge this gap.</strong>
        </p>
      </div>
    </div>
  );
}
