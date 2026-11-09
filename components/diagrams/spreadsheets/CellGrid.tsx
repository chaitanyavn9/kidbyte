"use client";
import { motion } from "framer-motion";

export default function CellGrid({ accent = "#16A34A" }: { accent?: string }) {
  const data = [
    ["", "A", "B", "C"],
    ["1", "Name", "Score", "Grade"],
    ["2", "Alice", "92", "A"],
    ["3", "Bob", "78", "B+"],
    ["4", "Carol", "85", "B"],
  ];
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Spreadsheet — Data in Rows and Columns</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl overflow-hidden border border-green-200 mb-3">
          <table className="w-full text-xs font-mono border-collapse">
            {data.map((row, i) => (
              <tr key={i} className={i === 0 ? "bg-green-100" : i === 1 ? "bg-green-50 font-black" : "bg-white"}>
                {row.map((cell, j) => (
                  <motion.td key={j} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (i * 4 + j) * 0.02 }}
                    className={`border border-green-100 px-3 py-1.5 text-center ${i === 0 || j === 0 ? "text-gray-500" : "text-gray-800"} ${i === 1 && j > 0 ? "font-black text-green-800" : ""}`}>
                    {cell}
                  </motion.td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="flex gap-2 text-[10px] text-gray-500">
          <div className="bg-green-100 rounded px-2 py-1 font-black text-green-700">Cell B2 = "92"</div>
          <div className="bg-blue-100 rounded px-2 py-1 font-black text-blue-700">=AVERAGE(B2:B4)</div>
          <div className="bg-purple-100 rounded px-2 py-1 font-black text-purple-700">=MAX(B2:B4)</div>
        </div>
      </div>
    </div>
  );
}
