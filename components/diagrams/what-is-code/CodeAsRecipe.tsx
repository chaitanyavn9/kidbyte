"use client";
import { motion } from "framer-motion";

const CODE_LINES = [
  { line: 'name = "Priya"', comment: "# Store a value" },
  { line: 'age = 12', comment: "# A number" },
  { line: 'if age > 10:', comment: "# Decision!" },
  { line: '    print("Hello")', comment: "# Do this" },
  { line: 'else:', comment: "# Otherwise" },
  { line: '    print("Hi!")', comment: "# Do this" },
];

export default function CodeAsRecipe({ accent = "#4F46E5" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF2FF,#E0E7FF)" }}>
      <div className="px-5 py-3 border-b border-indigo-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Code = Instructions for the Computer</p>
      </div>
      <div className="p-5 flex gap-4">
        {/* Recipe */}
        <div className="flex-1 rounded-xl bg-amber-50 border-2 border-amber-200 p-3">
          <p className="text-xs font-black text-amber-700 mb-2">🍳 Recipe (for humans)</p>
          {["Take 2 eggs", "Break into bowl", "Add salt", "If runny → cook more", "Else → serve!"].map((s, i) => (
            <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="text-[11px] text-gray-600 py-0.5 flex items-center gap-1.5">
              <span className="text-amber-400">▸</span> {s}
            </motion.p>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 font-bold text-sm">≈</div>
        {/* Code */}
        <div className="flex-1 rounded-xl bg-gray-900 p-3">
          <p className="text-xs font-black text-green-400 mb-2">💻 Code (for computers)</p>
          {CODE_LINES.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="flex items-baseline gap-1 py-0.5">
              <code className="text-[10px] text-green-300 font-mono">{l.line}</code>
              <code className="text-[9px] text-gray-500 font-mono">{l.comment}</code>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-4 text-center">
        <p className="text-xs text-gray-600">Both are step-by-step instructions — computers just need them in a formal language</p>
      </div>
    </div>
  );
}
