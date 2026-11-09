"use client";
import { motion } from "framer-motion";

const USES = [
  { ctx: "Colour in CSS", example: "#FF5733", desc: "Red=FF(255), Green=57(87), Blue=33(51)" },
  { ctx: "Memory address", example: "0x7FFF5FBFF8A0", desc: "Where data lives in RAM" },
  { ctx: "File signature", example: "FF D8 FF E0", desc: "Start of every JPEG file" },
  { ctx: "Unicode char", example: "U+1F600 = 😀", desc: "Every emoji has a hex code" },
];

export default function HexInCode({ accent = "#A21CAF" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#4a044e)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Hex is Everywhere in Computing</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {USES.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: `${accent}18`, border: `1.5px solid ${accent}40` }}>
            <div>
              <p className="text-xs font-black text-white/70">{u.ctx}</p>
              <code className="text-xs font-mono" style={{ color: accent }}>{u.example}</code>
              <p className="text-[10px] text-white/30 mt-0.5">{u.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
