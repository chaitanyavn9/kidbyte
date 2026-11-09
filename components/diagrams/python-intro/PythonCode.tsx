"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const EXAMPLES = [
  { label: "Hello World", code: 'print("Hello, World!")', output: "Hello, World!" },
  { label: "Add numbers", code: "x = 5\ny = 3\nprint(x + y)", output: "8" },
  { label: "Make a decision", code: 'score = 85\nif score >= 60:\n  print("Pass!")\nelse:\n  print("Try again")', output: "Pass!" },
  { label: "Repeat 5 times", code: "for i in range(5):\n  print(i)", output: "0\n1\n2\n3\n4" },
];

export default function PythonCode({ accent = "#2563EB" }: { accent?: string }) {
  const [selected, setSelected] = useState(0);
  const ex = EXAMPLES[selected];
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1e3a5f)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Try Python — Pick an Example</p>
      </div>
      <div className="p-5">
        <div className="flex gap-1.5 flex-wrap mb-4">
          {EXAMPLES.map((e, i) => (
            <motion.button key={i} onClick={() => setSelected(i)} whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 rounded-lg text-xs font-black transition-all"
              style={{ background: selected === i ? accent : "rgba(255,255,255,0.08)", color: selected === i ? "white" : "rgba(255,255,255,0.5)" }}>
              {e.label}
            </motion.button>
          ))}
        </div>
        <div className="rounded-xl bg-gray-900 border border-white/10 p-4 mb-3">
          <p className="text-[10px] font-black text-green-400 mb-2">📝 Code</p>
          <pre className="text-sm text-green-300 font-mono leading-relaxed whitespace-pre-wrap">{ex.code}</pre>
        </div>
        <div className="rounded-xl bg-black border border-white/10 p-3">
          <p className="text-[10px] font-black text-yellow-400 mb-1">▶ Output</p>
          <pre className="text-sm text-white font-mono">{ex.output}</pre>
        </div>
      </div>
    </div>
  );
}
