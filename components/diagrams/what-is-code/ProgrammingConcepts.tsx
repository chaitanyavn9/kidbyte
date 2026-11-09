"use client";
import { motion } from "framer-motion";

const CONCEPTS = [
  { icon: "📦", name: "Variable", example: 'name = "Alice"', desc: "Store a value with a label" },
  { icon: "🔀", name: "If/Else", example: "if score > 90: ...", desc: "Make decisions" },
  { icon: "🔄", name: "Loop",    example: "for i in range(10):", desc: "Repeat instructions" },
  { icon: "🧩", name: "Function", example: "def greet(name):", desc: "Reusable block of code" },
];

export default function ProgrammingConcepts({ accent = "#4F46E5" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1e1b4b)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">The 4 Core Ideas in Any Programming Language</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-3">
        {CONCEPTS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl p-3 border"
            style={{ background: `${accent}18`, borderColor: `${accent}40` }}
          >
            <div className="text-2xl mb-1">{c.icon}</div>
            <p className="text-xs font-black text-white/80">{c.name}</p>
            <code className="text-[9px] font-mono text-green-400 block mt-1 mb-1">{c.example}</code>
            <p className="text-[10px] text-white/40">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
