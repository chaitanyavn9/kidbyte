"use client";
import { motion } from "framer-motion";

const SIZES = [
  { name: "Bit",      symbol: "b",  value: "0 or 1",        example: "One switch",         color: "#F59E0B", size: 1 },
  { name: "Byte",     symbol: "B",  value: "8 bits",         example: "1 character (A)",   color: "#EF4444", size: 2 },
  { name: "Kilobyte", symbol: "KB", value: "1,024 bytes",    example: "Short text message", color: "#10B981", size: 3 },
  { name: "Megabyte", symbol: "MB", value: "1,048,576 bytes",example: "1 small photo",     color: "#3B82F6", size: 4 },
  { name: "Gigabyte", symbol: "GB", value: "1,073,741,824 B",example: "250 songs",         color: "#7C3AED", size: 5 },
];

export default function BitsBytesSizes({ accent = "#65A30D" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F7FEE7,#ECFCCB)" }}>
      <div className="px-5 py-3 border-b border-lime-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Data Size — From Bits to Gigabytes</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {SIZES.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-3 border-2"
            style={{ background: `${s.color}10`, borderColor: `${s.color}30` }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-black text-white shrink-0"
              style={{ background: s.color }}>{s.symbol}</div>
            <div className="flex-1">
              <p className="text-sm font-black text-gray-800">{s.name}</p>
              <p className="text-[10px] text-gray-500">{s.value}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500">{s.example}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
