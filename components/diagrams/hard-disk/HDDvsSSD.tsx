"use client";
import { motion } from "framer-motion";

export default function HDDvsSSD({ accent = "#475569" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F8FAFC,#F1F5F9)" }}>
      <div className="px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Hard Disk — How It Actually Stores Data</p>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="relative">
            <motion.div className="w-20 h-20 rounded-full border-4 border-gray-400 bg-gray-200 flex items-center justify-center"
              animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
              <div className="w-4 h-4 bg-gray-500 rounded-full" />
              {[0,1,2].map(i => (
                <div key={i} className="absolute inset-0 rounded-full border border-gray-400"
                  style={{ inset: `${5 + i * 5}px` }} />
              ))}
            </motion.div>
            <motion.div className="absolute top-1/2 left-1/2 w-10 h-1 bg-gray-600 rounded origin-left"
              style={{ transformOrigin: "0 50%" }}
              animate={{ rotate: [0, 60, 120, 180, 240, 300, 360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
          </div>
          <div>
            <p className="text-sm font-black text-gray-700 mb-1">🌀 Spinning disk</p>
            <ul className="text-[10px] text-gray-500 space-y-1">
              <li>• Magnetic platters spin at 5400–7200 RPM</li>
              <li>• Read/write head moves to find data</li>
              <li>• Moving = slow + fragile</li>
              <li>• Cheap for large storage (1–20 TB)</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl px-4 py-3 bg-white/80 border border-slate-200 text-center">
          <p className="text-xs text-gray-600">The spinning head must <strong style={{ color: accent }}>physically move</strong> to find data — that's why HDDs are slower but cheaper than SSDs for the same capacity</p>
        </div>
      </div>
    </div>
  );
}
