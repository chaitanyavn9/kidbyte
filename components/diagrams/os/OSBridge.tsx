"use client";
import { motion } from "framer-motion";

export default function OSBridge({ accent = "#E11D48" }: { accent?: string }) {
  const steps = [
    { from: "👤 You", label: "say something in human language", arrow: true },
    { from: "🖱️ OS", label: "translates your words into machine instructions", arrow: true },
    { from: "💻 Hardware", label: "carries out the instruction, sends result back", arrow: false },
  ];

  return (
    <div className="rounded-2xl overflow-hidden p-6" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <p className="text-center text-xs font-black uppercase tracking-widest mb-5 text-green-700">
        The Operating System as a Bridge
      </p>

      {/* Bridge visual */}
      <div className="flex items-center justify-between gap-1 mb-6">

        {/* You */}
        <div className="flex flex-col items-center gap-1.5 w-20">
          <motion.div className="text-4xl" animate={{ y:[0,-4,0] }} transition={{ duration:2, repeat:Infinity }}>👤</motion.div>
          <div className="rounded-lg px-2 py-1.5 text-center w-full" style={{ background:"#E11D4815", border:"1.5px solid #E11D4840" }}>
            <p className="text-xs font-black" style={{ color: accent }}>You</p>
            <p className="text-[9px] text-gray-500">Human language</p>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <motion.div className="text-xs text-gray-500 font-bold text-center leading-tight"
            animate={{ opacity:[0.4,1,0.4] }} transition={{ duration:1.5, repeat:Infinity }}>
            "Open<br/>Chrome"
          </motion.div>
          <div className="w-full h-0.5 relative" style={{ background: `${accent}60` }}>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: accent }}
              animate={{ left: ["0%","100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* OS */}
        <div className="flex flex-col items-center gap-1.5 w-24">
          <motion.div
            className="text-4xl"
            animate={{ rotate:[0,-5,5,0], scale:[1,1.08,1] }}
            transition={{ duration:2.5, repeat:Infinity }}
          >🖱️</motion.div>
          <div className="rounded-lg px-2 py-1.5 text-center w-full" style={{ background:"#05966915", border:"1.5px solid #05966940" }}>
            <p className="text-xs font-black text-green-700">OS</p>
            <p className="text-[9px] text-gray-500">Translator<br/>+ Manager</p>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <motion.div className="text-[9px] text-gray-500 font-mono font-bold text-center"
            animate={{ opacity:[0.4,1,0.4] }} transition={{ duration:1.5, repeat:Infinity, delay:0.5 }}>
            10110100<br/>01100101
          </motion.div>
          <div className="w-full h-0.5 relative" style={{ background: "#05966960" }}>
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500"
              animate={{ left: ["0%","100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
          </div>
        </div>

        {/* Hardware */}
        <div className="flex flex-col items-center gap-1.5 w-20">
          <motion.div className="text-4xl" animate={{ rotate:[0,-3,3,0] }} transition={{ duration:3, repeat:Infinity }}>💻</motion.div>
          <div className="rounded-lg px-2 py-1.5 text-center w-full" style={{ background:"#1E40AF15", border:"1.5px solid #1E40AF40" }}>
            <p className="text-xs font-black text-blue-700">Hardware</p>
            <p className="text-[9px] text-gray-500">Machine code</p>
          </div>
        </div>

      </div>

      {/* Steps */}
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-3 items-start rounded-xl px-3 py-2.5 bg-white/70"
          >
            <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: "#059669" }}>{i+1}</span>
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-green-700">{step.from}</strong> — {step.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-xl px-4 py-3 text-center bg-white/60">
        <p className="text-sm font-bold text-gray-700">
          Without the OS, you would have to write <span className="font-black text-blue-700">machine code (0s and 1s)</span> for every click, every keystroke. The OS frees you from that — forever.
        </p>
      </div>
    </div>
  );
}
