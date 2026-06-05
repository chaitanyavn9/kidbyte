"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { textToBinary } from "@/lib/utils";

export default function BinaryAnimation() {
  const [input, setInput] = useState("HI");

  const rows = input
    .toUpperCase()
    .slice(0, 6)
    .split("")
    .map((char) => ({
      char,
      code: char.charCodeAt(0),
      binary: char.charCodeAt(0).toString(2).padStart(8, "0"),
    }));

  return (
    <div className="flex flex-col items-center gap-5 py-6 select-none">
      <p className="text-sm font-bold text-gray-500 text-center">
        Type your name to see it in binary!
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase().slice(0, 6))}
        maxLength={6}
        placeholder="Type here..."
        className="border-2 border-blue-300 rounded-xl px-4 py-2 text-center text-lg font-black uppercase focus:outline-none focus:border-blue-500 tracking-widest w-40"
      />

      <div className="flex flex-col gap-2 w-full max-w-xs">
        {rows.map(({ char, code, binary }, ri) => (
          <motion.div
            key={`${char}-${ri}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ri * 0.05 }}
            className="flex items-center gap-3 bg-[#082A63] rounded-xl px-3 py-2"
          >
            <span className="text-white font-black w-6 text-center text-lg">{char}</span>
            <span className="text-blue-300 text-xs">→</span>
            <div className="flex gap-0.5 flex-1">
              {binary.split("").map((bit, bi) => (
                <motion.span
                  key={bi}
                  className="binary-text text-sm font-black"
                  style={{ color: bit === "1" ? "#8BEA00" : "#4B6CB7" }}
                  animate={bit === "1" ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ delay: bi * 0.04 + ri * 0.05, duration: 0.2 }}
                >
                  {bit}
                </motion.span>
              ))}
            </div>
            <span className="text-blue-400 text-xs">{code}</span>
          </motion.div>
        ))}
      </div>

      {/* Light switches visual */}
      <div className="bg-gray-100 rounded-2xl p-4 w-full max-w-xs">
        <p className="text-xs font-bold text-gray-500 mb-3 text-center">
          💡 Each bit is a light switch: ON = 1, OFF = 0
        </p>
        {rows[0] && (
          <div className="flex gap-1.5 justify-center flex-wrap">
            {rows[0].binary.split("").map((bit, i) => (
              <motion.div
                key={i}
                className="w-8 h-10 rounded-lg flex items-center justify-center font-black text-sm"
                animate={{
                  backgroundColor: bit === "1" ? "#FCD34D" : "#374151",
                  color: bit === "1" ? "#92400E" : "#6B7280",
                  boxShadow: bit === "1" ? "0 0 8px #FCD34D" : "none",
                }}
                transition={{ duration: 0.2 }}
              >
                {bit}
              </motion.div>
            ))}
          </div>
        )}
        {rows[0] && (
          <p className="text-xs text-center text-gray-500 mt-2">
            &ldquo;{rows[0].char}&rdquo; = {rows[0].binary} = {rows[0].code} in decimal
          </p>
        )}
      </div>
    </div>
  );
}
