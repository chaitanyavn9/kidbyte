"use client";
import { motion } from "framer-motion";

const INSTRUCTIONS = [
  { opcode: "MOV", binary: "10001011", desc: "Move data between registers/memory" },
  { opcode: "ADD", binary: "00000011", desc: "Add two numbers" },
  { opcode: "CMP", binary: "00111011", desc: "Compare two values" },
  { opcode: "JMP", binary: "11101001", desc: "Jump to another instruction" },
  { opcode: "CALL", binary: "11101000", desc: "Call a function" },
];

export default function InstructionSet({ accent = "#047857" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#052e16)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Machine Code — The CPU's Native Language</p>
      </div>
      <div className="p-5">
        <div className="flex gap-2 text-[10px] font-black text-white/30 px-2 mb-2">
          <span className="w-16">Instruction</span>
          <span className="flex-1">Binary Opcode</span>
          <span className="flex-1">What it does</span>
        </div>
        {INSTRUCTIONS.map((ins, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex gap-2 items-center rounded-lg px-2 py-2 mb-1" style={{ background: "rgba(255,255,255,0.05)" }}>
            <span className="text-xs font-black font-mono w-16" style={{ color: accent }}>{ins.opcode}</span>
            <span className="font-mono text-[10px] text-white/50 flex-1">{ins.binary}</span>
            <span className="text-[10px] text-white/40 flex-1">{ins.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
