"use client";
import { motion } from "framer-motion";

const COMPARE = [
  { english: "Say hello to everyone", python: 'print("Hello everyone!")' },
  { english: "If I have more than ₹100, buy a snack", python: "if money > 100:\n  buy('snack')" },
  { english: "Do this 10 times", python: "for i in range(10):\n  do_something()" },
  { english: "Remember my name as Arjun", python: 'name = "Arjun"' },
];

export default function PythonVsEnglish({ accent = "#2563EB" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Python Reads Like English — Almost!</p>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {COMPARE.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="flex gap-3 items-start">
            <div className="flex-1 rounded-xl bg-amber-50 border border-amber-200 px-3 py-2">
              <p className="text-[10px] font-black text-amber-700 mb-0.5">English 🗣️</p>
              <p className="text-xs text-gray-700">{c.english}</p>
            </div>
            <div className="flex items-center pt-4 text-gray-400 font-bold text-sm">→</div>
            <div className="flex-1 rounded-xl bg-gray-900 px-3 py-2">
              <p className="text-[10px] font-black text-green-400 mb-0.5">Python 🐍</p>
              <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap">{c.python}</pre>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
