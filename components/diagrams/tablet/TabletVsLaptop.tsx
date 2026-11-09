"use client";
import { motion } from "framer-motion";

const COMPARE = [
  { feature: "Input",      tablet: "Touchscreen + stylus",  laptop: "Keyboard + trackpad" },
  { feature: "Weight",     tablet: "400–700g",               laptop: "1–2.5 kg" },
  { feature: "Battery",    tablet: "10–13 hours",            laptop: "6–12 hours" },
  { feature: "Keyboard",   tablet: "Optional accessory",     laptop: "Built-in always" },
  { feature: "Apps",       tablet: "Mobile apps (iOS/Android)", laptop: "Full desktop software" },
  { feature: "Best for",   tablet: "Consume: watch/read",    laptop: "Create: code/write" },
];

export default function TabletVsLaptop({ accent = "#C026D3" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF4FF,#F0F9FF)" }}>
      <div className="px-5 py-3 border-b border-fuchsia-200 flex items-center gap-4">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Tablet vs Laptop</p>
        <div className="flex gap-3 ml-auto text-[10px]">
          <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded" style={{ background: accent }}></div><span className="font-black text-fuchsia-700">Tablet</span></div>
          <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded bg-blue-500"></div><span className="font-black text-blue-700">Laptop</span></div>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-1.5">
        {COMPARE.map((row, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }}
            className="grid grid-cols-3 gap-2 items-center rounded-lg px-2 py-1.5 bg-white border border-fuchsia-50">
            <p className="text-[10px] font-black text-gray-400 uppercase">{row.feature}</p>
            <p className="text-[10px] font-bold" style={{ color: accent }}>{row.tablet}</p>
            <p className="text-[10px] text-blue-700">{row.laptop}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
