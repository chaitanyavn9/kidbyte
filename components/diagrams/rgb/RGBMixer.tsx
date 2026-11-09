"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PRESETS = [
  { name: "Red", r: 255, g: 0, b: 0 }, { name: "Green", r: 0, g: 200, b: 0 },
  { name: "Blue", r: 0, g: 0, b: 255 }, { name: "Yellow", r: 255, g: 255, b: 0 },
  { name: "Cyan", r: 0, g: 255, b: 255 }, { name: "Purple", r: 128, g: 0, b: 128 },
  { name: "Orange", r: 255, g: 165, b: 0 }, { name: "White", r: 255, g: 255, b: 255 },
];

export default function RGBMixer({ accent = "#DC2626" }: { accent?: string }) {
  const [r, setR] = useState(255);
  const [g, setG] = useState(100);
  const [b, setB] = useState(50);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF1F2,#FFE4E6)" }}>
      <div className="px-5 py-3 border-b border-red-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>RGB Colour Mixer</p>
      </div>
      <div className="p-5">
        <div className="flex gap-4 items-center mb-4">
          <motion.div className="w-20 h-20 rounded-xl border-4 border-white shadow-lg shrink-0"
            animate={{ background: `rgb(${r},${g},${b})` }} />
          <div>
            <p className="text-sm font-black text-gray-700">{`rgb(${r}, ${g}, ${b})`}</p>
            <div className="flex gap-1 mt-2 flex-wrap">
              {PRESETS.map(p => (
                <motion.button key={p.name} onClick={() => { setR(p.r); setG(p.g); setB(p.b); }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 h-6 rounded-full border-2 border-white shadow"
                  style={{ background: `rgb(${p.r},${p.g},${p.b})` }}
                  title={p.name}
                />
              ))}
            </div>
          </div>
        </div>
        {[{ l: "🔴 Red", v: r, s: setR, c: "#EF4444" }, { l: "🟢 Green", v: g, s: setG, c: "#10B981" }, { l: "🔵 Blue", v: b, s: setB, c: "#3B82F6" }].map(x => (
          <div key={x.l} className="flex items-center gap-3 mb-2">
            <p className="text-xs font-black w-16 text-gray-700">{x.l}</p>
            <input type="range" min={0} max={255} value={x.v} onChange={e => x.s(Number(e.target.value))} className="flex-1" style={{ accentColor: x.c }} />
            <p className="text-xs font-mono font-black w-8 text-right" style={{ color: x.c }}>{x.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
