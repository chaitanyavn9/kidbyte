"use client";
import { motion } from "framer-motion";

const HEX = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

export default function HexTable({ accent = "#A21CAF" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF4FF,#FAE8FF)" }}>
      <div className="px-5 py-3 border-b border-fuchsia-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Hexadecimal — 16 Symbols (0–9, A–F)</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {HEX.map((h, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.03 }}
              className="rounded-lg py-2 text-center"
              style={{ background: i > 9 ? `${accent}20` : "rgba(0,0,0,0.05)", border: i > 9 ? `1.5px solid ${accent}50` : "1.5px solid transparent" }}>
              <p className="text-sm font-black" style={{ color: i > 9 ? accent : "#374151" }}>{h}</p>
              <p className="text-[9px] text-gray-400">{i}</p>
            </motion.div>
          ))}
        </div>
        <div className="rounded-xl px-4 py-3 text-center bg-white/70">
          <p className="text-xs font-bold text-gray-600">Hex <strong style={{ color: accent }}>FF</strong> = decimal <strong>255</strong> = binary <strong>11111111</strong> = one full byte at maximum</p>
        </div>
      </div>
    </div>
  );
}
