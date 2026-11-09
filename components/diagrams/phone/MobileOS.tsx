"use client";
import { motion } from "framer-motion";

export default function MobileOS({ accent = "#0F766E" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDFA,#ECFDF5)" }}>
      <div className="px-5 py-3 border-b border-teal-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Android vs iOS — Two Mobile OS Worlds</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-3">
        {[
          { name: "Android", color: "#16A34A", points: ["Open-source (Linux)", "Many brands: Samsung, Google…", "Customisable launcher", "Sideload apps", "USB-C universal"] },
          { name: "iOS",     color: "#1D4ED8", points: ["Apple only — tightly integrated", "Smoother animations", "Longer software updates", "App Store only", "Lightning / USB-C"] },
        ].map((os, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
            className="rounded-xl bg-white border-2 p-3" style={{ borderColor: `${os.color}30` }}>
            <p className="text-xs font-black mb-2 pb-1 border-b" style={{ color: os.color, borderColor: `${os.color}20` }}>{os.name}</p>
            {os.points.map((pt, j) => (
              <div key={j} className="flex gap-1.5 items-start mb-1">
                <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: os.color }}></div>
                <p className="text-[9px] text-gray-600 leading-snug">{pt}</p>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
