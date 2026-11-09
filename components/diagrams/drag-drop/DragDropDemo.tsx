"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ITEMS = ["📄 Report.pdf", "🖼️ Photo.jpg", "🎵 Song.mp3"];

export default function DragDropDemo({ accent = "#EA580C" }: { accent?: string }) {
  const [inBin, setInBin] = useState<string[]>([]);
  const [available, setAvailable] = useState(ITEMS);
  const [dragging, setDragging] = useState<string | null>(null);

  function move(item: string) {
    setAvailable(a => a.filter(x => x !== item));
    setInBin(b => [...b, item]);
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF7ED,#FFEDD5)" }}>
      <div className="px-5 py-3 border-b border-orange-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Drag & Drop — Click to Move Files</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1 rounded-xl border-2 border-dashed border-orange-300 p-4 bg-white/60">
          <p className="text-xs font-black text-orange-600 mb-3">📂 Source</p>
          {available.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-4">Empty!</p>
          ) : (
            available.map(item => (
              <motion.div key={item} whileHover={{ scale: 1.03, x: 4 }} whileTap={{ scale: 0.97 }}
                onClick={() => move(item)}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 mb-2 cursor-pointer shadow-sm border border-orange-100">
                <span className="text-sm">{item}</span>
                <span className="ml-auto text-orange-400 text-xs">→</span>
              </motion.div>
            ))
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-2xl">→</motion.div>
        </div>
        <div className="flex-1 rounded-xl border-2 border-dashed border-green-300 p-4 bg-green-50/60">
          <p className="text-xs font-black text-green-700 mb-3">📁 Destination</p>
          {inBin.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-4">Drop here</p>
          ) : (
            inBin.map(item => (
              <motion.div key={item} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 mb-2 shadow-sm border border-green-100">
                <span className="text-sm">{item}</span>
              </motion.div>
            ))
          )}
        </div>
      </div>
      <div className="px-5 pb-4 text-center">
        <button onClick={() => { setAvailable(ITEMS); setInBin([]); }} className="text-xs text-orange-500 underline">Reset</button>
      </div>
    </div>
  );
}
