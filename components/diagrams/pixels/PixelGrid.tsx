"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = ["#EF4444","#F59E0B","#10B981","#3B82F6","#8B5CF6","#EC4899","#06B6D4","#F97316"];

export default function PixelGrid({ accent = "#EC4899" }: { accent?: string }) {
  const [pixels, setPixels] = useState<string[]>(Array(64).fill("#E5E7EB"));
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  function paint(i: number) {
    const next = [...pixels];
    next[i] = selectedColor;
    setPixels(next);
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF2F8,#FCE7F3)" }}>
      <div className="px-5 py-3 border-b border-pink-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>A Screen is Just a Grid of Pixels — Paint One!</p>
      </div>
      <div className="p-5">
        {/* Color picker */}
        <div className="flex gap-1.5 mb-3 justify-center">
          {COLORS.map(c => (
            <motion.button key={c} onClick={() => setSelectedColor(c)} whileTap={{ scale: 0.9 }}
              className="w-7 h-7 rounded-lg border-2"
              style={{ background: c, borderColor: selectedColor === c ? "black" : "transparent" }}
            />
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-8 gap-0.5 mx-auto w-fit">
          {pixels.map((color, i) => (
            <motion.div
              key={i}
              onClick={() => paint(i)}
              className="w-7 h-7 rounded-sm cursor-pointer border border-gray-200"
              style={{ background: color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-2">This tiny 8×8 grid = 64 pixels. Your phone has 2–6 <strong>million</strong> pixels!</p>
      </div>
    </div>
  );
}
