"use client";
import { motion } from "framer-motion";

export default function LightMixing({ accent = "#DC2626" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden p-5" style={{ background: "linear-gradient(135deg,#0F172A,#1a0a0a)" }}>
      <p className="text-xs font-black text-white/50 uppercase tracking-widest mb-4 text-center">Light Mixing: R + G + B = White</p>
      <div className="relative h-40 flex items-center justify-center">
        {/* Red circle */}
        <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-24 h-24 rounded-full" style={{ background: "rgba(255,0,0,0.6)", left: "25%", top: "10%" }} />
        {/* Green circle */}
        <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute w-24 h-24 rounded-full" style={{ background: "rgba(0,255,0,0.6)", right: "25%", top: "10%" }} />
        {/* Blue circle */}
        <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute w-24 h-24 rounded-full" style={{ background: "rgba(0,100,255,0.6)", left: "50%", transform: "translateX(-50%)", bottom: "10%" }} />
        {/* Center */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
          <p className="text-[9px] font-black text-gray-800 text-center leading-tight">R+G+B</p>
        </div>
      </div>
      <p className="text-center text-[10px] text-white/40 mt-2">Your screen has millions of tiny R, G, B lights. Mix them all → white light. Turn them off → black.</p>
    </div>
  );
}
