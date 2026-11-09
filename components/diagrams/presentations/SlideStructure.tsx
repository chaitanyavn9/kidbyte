"use client";
import { motion } from "framer-motion";

export default function SlideStructure({ accent = "#7C3AED" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F5F3FF,#EDE9FE)" }}>
      <div className="px-5 py-3 border-b border-purple-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>What Makes a Good Slide?</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-white border-2 border-purple-200 p-4 aspect-video flex flex-col mb-3 shadow-sm">
          <div className="border-b-2 border-purple-100 pb-2 mb-2">
            <p className="text-sm font-black text-gray-800">How Computers Work</p>
            <p className="text-[10px] text-gray-500">Input → Process → Output</p>
          </div>
          <div className="flex gap-3 flex-1 items-center">
            <div className="flex flex-col gap-1 flex-1">
              {["Keyboard/mouse sends input", "CPU processes instructions", "Screen shows output"].map((pt, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></div>
                  <p className="text-[9px] text-gray-700">{pt}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-purple-50 w-20 h-14 flex items-center justify-center border border-purple-100">
              <p className="text-2xl">💻</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Title", tip: "Big + clear" },
            { label: "3–5 bullets", tip: "Not walls of text" },
            { label: "One image", tip: "Worth 1000 words" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="rounded-lg bg-white border border-purple-100 p-2 text-center">
              <p className="text-[10px] font-black text-purple-700">{item.label}</p>
              <p className="text-[9px] text-gray-500">{item.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
