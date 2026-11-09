"use client";
import { motion } from "framer-motion";

export default function StackHeap({ accent = "#B45309" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#451a03)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Stack vs Heap — Two Memory Regions</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1">
          <p className="text-xs font-black text-center mb-2" style={{ color: accent }}>Stack</p>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: `${accent}50` }}>
            {["main()", "greet()", "print()"].map((fn, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
                className="px-3 py-2 text-xs font-mono border-b text-white/70"
                style={{ background: `${accent}${20 + i * 15}`, borderColor: `${accent}30` }}>{fn}</motion.div>
            ))}
          </div>
          <p className="text-[9px] text-white/30 mt-1 text-center">LIFO — last in, first out<br/>Fixed size, fast</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-black text-blue-400 text-center mb-2">Heap</p>
          <div className="rounded-xl h-24 p-2 relative border border-blue-500/30" style={{ background: "rgba(59,130,246,0.1)" }}>
            {[{ top: "10%", left: "5%", w: "40%", label: "Array" }, { top: "40%", left: "50%", w: "35%", label: "Object" }, { top: "65%", left: "15%", w: "25%", label: "String" }].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }}
                className="absolute rounded flex items-center justify-center text-[9px] font-black text-blue-200"
                style={{ top: b.top, left: b.left, width: b.w, height: "24px", background: "rgba(59,130,246,0.4)" }}>{b.label}</motion.div>
            ))}
          </div>
          <p className="text-[9px] text-white/30 mt-1 text-center">Dynamic — grows as needed<br/>Slower, needs garbage collection</p>
        </div>
      </div>
    </div>
  );
}
