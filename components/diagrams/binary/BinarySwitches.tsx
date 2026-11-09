"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BinarySwitches({ accent = "#059669" }: { accent?: string }) {
  const [bits, setBits] = useState([0, 1, 0, 0, 0, 0, 0, 1]);
  const decimal = parseInt(bits.join(""), 2);
  const ascii = String.fromCharCode(decimal);

  function toggle(i: number) {
    const next = [...bits];
    next[i] = next[i] === 0 ? 1 : 0;
    setBits(next);
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Binary = ON/OFF Switches</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Click any switch to flip it!</p>
      </div>
      <div className="p-5">
        <div className="flex justify-center gap-1 mb-4 flex-wrap">
          {bits.map((b, i) => (
            <motion.button
              key={i}
              onClick={() => toggle(i)}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-0.5"
            >
              <motion.div
                className="w-8 h-12 rounded-lg flex items-center justify-center text-lg font-black border-2 cursor-pointer"
                animate={{ background: b === 1 ? accent : "#E5E7EB", borderColor: b === 1 ? accent : "#D1D5DB", color: b === 1 ? "white" : "#9CA3AF" }}
                transition={{ duration: 0.2 }}
              >
                {b}
              </motion.div>
              <motion.div
                className="w-4 h-4 rounded-full text-[8px] font-black flex items-center justify-center"
                animate={{ background: b === 1 ? "#FEF08A" : "#F3F4F6", color: b === 1 ? "#713F12" : "#9CA3AF" }}
              >
                {b === 1 ? "💡" : "⚫"}
              </motion.div>
            </motion.button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 font-bold">Binary</p>
            <p className="text-lg font-black font-mono" style={{ color: accent }}>{bits.join("")}</p>
          </div>
          <div className="text-gray-400 text-xl">→</div>
          <div className="text-center">
            <p className="text-xs text-gray-500 font-bold">Decimal</p>
            <p className="text-2xl font-black" style={{ color: accent }}>{decimal}</p>
          </div>
          <div className="text-gray-400 text-xl">→</div>
          <div className="text-center">
            <p className="text-xs text-gray-500 font-bold">Character</p>
            <p className="text-2xl font-black" style={{ color: accent }}>{ascii.match(/[\x20-\x7E]/) ? ascii : "?"}</p>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-3">8 switches = 1 byte = 1 character. The letter 'A' = 01000001</p>
      </div>
    </div>
  );
}
