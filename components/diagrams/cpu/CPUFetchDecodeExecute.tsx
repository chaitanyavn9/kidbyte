"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLE_STEPS = [
  {
    id: "fetch",
    emoji: "📥",
    title: "1. FETCH",
    color: "#3B82F6",
    bg: "#DBEAFE",
    simple: "The CPU goes to RAM and picks up the next instruction waiting to be executed — like a chef picking up the next recipe card.",
    detail: "The Program Counter (PC) register holds the memory address of the next instruction. The CPU reads that address from RAM into the Instruction Register (IR). The PC then increments to point at the next instruction.",
  },
  {
    id: "decode",
    emoji: "🔍",
    title: "2. DECODE",
    color: "#7C3AED",
    bg: "#EDE9FE",
    simple: "The CPU reads the instruction and figures out what to do — 'add two numbers', 'store this value', 'jump to another line'. Like a chef reading and understanding the recipe step.",
    detail: "The Control Unit decodes the binary instruction. It identifies the opcode (what operation: ADD, LOAD, STORE, JUMP) and the operands (which registers or memory addresses to use). It then sends control signals to the right parts of the CPU.",
  },
  {
    id: "execute",
    emoji: "⚡",
    title: "3. EXECUTE",
    color: "#059669",
    bg: "#D1FAE5",
    simple: "The CPU actually does the work — adds the numbers, reads from memory, stores the result. Like a chef actually cooking the dish.",
    detail: "The ALU (Arithmetic Logic Unit) performs arithmetic or logic operations. Results are written to registers or back to RAM. If a branch instruction, the PC jumps to a new address. This takes 1–4 clock cycles depending on the operation.",
  },
];

export default function CPUFetchDecodeExecute({ accent = "#3B82F6" }: { accent?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mode, setMode] = useState<"simple" | "detail">("simple");

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1E3A5F)" }}>
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">The Fetch-Decode-Execute Cycle</p>
        <p className="text-xs text-white/50 mt-1">This repeats <strong className="text-white/80">billions of times per second</strong>. Click a step to understand it.</p>
      </div>

      <div className="p-5">
        {/* Mode toggle */}
        <div className="flex gap-1 mb-4 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.08)" }}>
          {(["simple","detail"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className="flex-1 py-1.5 rounded-lg text-xs font-black capitalize transition-all"
              style={{ background: mode === m ? accent : "transparent", color: mode === m ? "white" : "rgba(255,255,255,0.4)" }}
            >{m === "simple" ? "🎓 Simple" : "🔬 Deep Dive"}</button>
          ))}
        </div>

        {/* Three steps in a cycle */}
        <div className="flex items-center gap-2 mb-5">
          {CYCLE_STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2 flex-1">
              <motion.button
                onClick={() => setActive(active === step.id ? null : step.id)}
                className="flex-1 rounded-xl p-3 text-center transition-all"
                style={{
                  background: active === step.id ? step.bg : "rgba(255,255,255,0.08)",
                  border: `2px solid ${active === step.id ? step.color : "transparent"}`,
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="text-3xl mb-1"
                  animate={active === step.id ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, repeat: active === step.id ? Infinity : 0, repeatDelay: 1 }}
                >{step.emoji}</motion.div>
                <p className="text-xs font-black" style={{ color: active === step.id ? step.color : "rgba(255,255,255,0.7)" }}>{step.title}</p>
              </motion.button>
              {i < CYCLE_STEPS.length - 1 && (
                <motion.div
                  className="text-white/40 text-lg shrink-0"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                >→</motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Cycle arrow */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-1 text-white/30 text-xs font-bold">
            <span>↺ Repeats billions of times per second</span>
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {active && (() => {
            const s = CYCLE_STEPS.find(s => s.id === active)!;
            return (
              <motion.div
                key={active + mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl px-4 py-4"
                style={{ background: s.bg, border: `1.5px solid ${s.color}40` }}
              >
                <p className="text-xs font-black mb-1.5" style={{ color: s.color }}>{s.emoji} {s.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{mode === "simple" ? s.simple : s.detail}</p>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {!active && (
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
            <p className="text-xs text-white/40">👆 Click any step above to understand what happens</p>
          </div>
        )}
      </div>
    </div>
  );
}
