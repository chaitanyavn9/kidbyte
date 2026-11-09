"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = [
  { hex: "#FF0000", name: "Red" }, { hex: "#FF7F00", name: "Orange" },
  { hex: "#FFFF00", name: "Yellow" }, { hex: "#00FF00", name: "Green" },
  { hex: "#0000FF", name: "Blue" }, { hex: "#8B00FF", name: "Violet" },
  { hex: "#FF1493", name: "DeepPink" }, { hex: "#00CED1", name: "DarkTurquoise" },
  { hex: "#FF6347", name: "Tomato" }, { hex: "#7B68EE", name: "MedSlateBlue" },
  { hex: "#20B2AA", name: "LightSeaGreen" }, { hex: "#FFD700", name: "Gold" },
];

export default function HexColorWheel({ accent = "#BE185D" }: { accent?: string }) {
  const [selected, setSelected] = useState(COLORS[0]);
  const r = parseInt(selected.hex.slice(1, 3), 16);
  const g = parseInt(selected.hex.slice(3, 5), 16);
  const b = parseInt(selected.hex.slice(5, 7), 16);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF2F8,#FCE7F3)" }}>
      <div className="px-5 py-3 border-b border-pink-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Hex Colour Codes — Click a Colour</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-6 gap-1.5 mb-4">
          {COLORS.map(c => (
            <motion.button key={c.hex} onClick={() => setSelected(c)} whileTap={{ scale: 0.9 }}
              className="h-8 rounded-lg border-2"
              style={{ background: c.hex, borderColor: selected.hex === c.hex ? "#000" : "transparent" }}
              title={c.name} />
          ))}
        </div>
        <div className="flex items-center gap-4 rounded-xl p-3 bg-white/60">
          <div className="w-14 h-14 rounded-xl border-4 border-white shadow" style={{ background: selected.hex }} />
          <div>
            <p className="text-lg font-black font-mono text-gray-800">{selected.hex}</p>
            <p className="text-xs text-gray-500">{selected.name}</p>
            <p className="text-[10px] text-gray-400 font-mono">R:{r} G:{g} B:{b}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
