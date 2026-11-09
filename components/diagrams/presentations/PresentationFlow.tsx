"use client";
import { motion } from "framer-motion";

const SLIDES = [
  { num: 1, type: "Title Slide",   desc: "Topic + your name",          color: "#7C3AED" },
  { num: 2, type: "Introduction",  desc: "What is this about? Why care?", color: "#2563EB" },
  { num: 3, type: "Main Content",  desc: "Key points with visuals",    color: "#059669" },
  { num: 4, type: "Example",       desc: "Real-world case or demo",    color: "#EA580C" },
  { num: 5, type: "Conclusion",    desc: "Summary + call to action",   color: "#DC2626" },
];

export default function PresentationFlow({ accent = "#7C3AED" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F5F3FF,#FAF5FF)" }}>
      <div className="px-5 py-3 border-b border-purple-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>A Presentation Is a Story — With Slides</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {SLIDES.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white border border-gray-100">
            <div className="rounded-full w-7 h-7 text-white text-xs font-black flex items-center justify-center shrink-0" style={{ background: s.color }}>{s.num}</div>
            <div className="flex-1">
              <p className="text-xs font-black text-gray-700">{s.type}</p>
              <p className="text-[10px] text-gray-500">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
