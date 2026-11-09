"use client";
import { motion } from "framer-motion";

export default function HeatFlow({ accent = "#0284C7" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0F9FF,#E0F2FE)" }}>
      <div className="px-5 py-3 border-b border-sky-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>How Cooling Works — Heat Must Escape!</p>
      </div>
      <div className="p-5 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 w-full justify-center">
          {/* CPU */}
          <div className="text-center">
            <motion.div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
              style={{ background: "#EF444430", border: "2px solid #EF4444" }}
              animate={{ boxShadow: ["0 0 8px #EF444460", "0 0 20px #EF444480", "0 0 8px #EF444460"] }}
              transition={{ duration: 1.5, repeat: Infinity }}>🧠</motion.div>
            <p className="text-[10px] text-red-500 font-black mt-1">CPU (hot!)</p>
            <p className="text-[9px] text-gray-400">up to 100°C</p>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1, repeat: Infinity }} className="text-orange-500 text-2xl">→</motion.div>
            <p className="text-[9px] text-gray-500">heat flows</p>
          </div>
          {/* Heatsink */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: "#6B728030", border: "2px solid #6B7280" }}>🔧</div>
            <p className="text-[10px] text-gray-600 font-black mt-1">Heatsink</p>
            <p className="text-[9px] text-gray-400">copper/aluminium</p>
          </div>
          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} className="text-blue-500 text-2xl">→</motion.div>
            <p className="text-[9px] text-gray-500">air pushes heat</p>
          </div>
          {/* Fan */}
          <div className="text-center">
            <motion.div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: "#3B82F630", border: "2px solid #3B82F6" }}
              animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>🌀</motion.div>
            <p className="text-[10px] text-blue-600 font-black mt-1">Fan</p>
            <p className="text-[9px] text-gray-400">blows hot air out</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 text-center bg-white/70 rounded-xl px-4 py-2">Without cooling, CPUs and GPUs would destroy themselves in seconds from heat</p>
      </div>
    </div>
  );
}
