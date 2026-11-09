"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DualBootChoice({ accent = "#4338CA" }: { accent?: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF2FF,#E0E7FF)" }}>
      <div className="px-5 py-3 border-b border-indigo-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Dual Boot — Choose Your OS at Startup</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-black border border-gray-700 p-4 mb-4 font-mono">
          <p className="text-green-400 text-xs mb-3">GRUB Bootloader — Select OS:</p>
          {["Windows 11", "Ubuntu 24.04", "Advanced options"].map((os, i) => (
            <motion.div key={os} onClick={() => setSelected(os)} whileHover={{ x: 4 }}
              className="flex items-center gap-2 cursor-pointer py-1 px-2 rounded"
              style={{ background: selected === os ? accent : "transparent" }}>
              <span className="text-gray-400 text-xs">{selected === os ? ">" : " "}</span>
              <span className="text-xs" style={{ color: selected === os ? "white" : "#9CA3AF" }}>{os}</span>
            </motion.div>
          ))}
          <p className="text-gray-600 text-[9px] mt-3">↑↓ Navigate · Enter: Select · Default in 10s</p>
        </div>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div key={selected} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="rounded-xl px-4 py-3 text-center" style={{ background: `${accent}15`, border: `1.5px solid ${accent}40` }}>
              <p className="text-xs font-black" style={{ color: accent }}>Loading {selected}...</p>
              <p className="text-[10px] text-gray-500 mt-1">Each OS lives on its own partition. They share the same hardware but never interfere.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
