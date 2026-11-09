"use client";
import { motion } from "framer-motion";

const FORMULAS = [
  { fn: "=SUM(A1:A10)", what: "Add all numbers in A1 to A10", category: "Math" },
  { fn: "=AVERAGE(B1:B5)", what: "Find the mean of B1 to B5", category: "Math" },
  { fn: "=MAX(C1:C20)", what: "Find the largest value", category: "Math" },
  { fn: "=IF(A1>90,\"A\",\"B\")", what: "Return A if score > 90, else B", category: "Logic" },
  { fn: "=COUNT(D1:D10)", what: "Count how many cells have numbers", category: "Count" },
];

const COLORS: Record<string, string> = { Math: "#2563EB", Logic: "#7C3AED", Count: "#059669" };

export default function Formulas({ accent = "#16A34A" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#ECFDF5)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Spreadsheet Formulas — The Power Feature</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {FORMULAS.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white border border-gray-100">
            <code className="text-xs font-black font-mono text-gray-700 w-44 shrink-0">{f.fn}</code>
            <p className="text-[10px] text-gray-500 flex-1">{f.what}</p>
            <div className="rounded px-1.5 py-0.5 text-[9px] font-black text-white shrink-0" style={{ background: COLORS[f.category] }}>{f.category}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
