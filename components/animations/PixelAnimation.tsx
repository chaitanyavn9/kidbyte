"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const RESOLUTIONS = [
  { label: "Very Low (4×4)", size: 4 },
  { label: "Low (8×8)", size: 8 },
  { label: "Medium (16×16)", size: 16 },
  { label: "High (32×32)", size: 32 },
];

const HEART_PATTERN_4 = [
  0,1,0,1,
  1,1,1,1,
  1,1,1,1,
  0,1,1,0,
];

function generateHeart(size: number): number[] {
  const grid: number[] = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const nx = (c / size) * 2 - 1;
      const ny = (r / size) * 2 - 1;
      const heart = Math.pow(nx * nx + ny * ny - 0.5, 3) - nx * nx * ny * ny * ny;
      grid.push(heart < 0 ? 1 : 0);
    }
  }
  return grid;
}

export default function PixelAnimation() {
  const [resIdx, setResIdx] = useState(0);
  const { size } = RESOLUTIONS[resIdx];
  const pixels = generateHeart(size);

  const cellSize = Math.min(200 / size, 24);

  return (
    <div className="flex flex-col items-center gap-5 py-6 select-none">
      <p className="text-sm font-bold text-gray-500 text-center">
        Change the resolution — see how more pixels = sharper image!
      </p>

      {/* Resolution selector */}
      <div className="flex gap-2 flex-wrap justify-center">
        {RESOLUTIONS.map((r, i) => (
          <motion.button
            key={r.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setResIdx(i)}
            className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
            style={{
              backgroundColor: resIdx === i ? "#FF4081" : "#F3F4F6",
              color: resIdx === i ? "white" : "#374151",
            }}
          >
            {r.label}
          </motion.button>
        ))}
      </div>

      {/* Pixel grid */}
      <motion.div
        layout
        className="border-2 border-gray-200 rounded-lg overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
          gap: size <= 8 ? "1px" : 0,
        }}
      >
        {pixels.map((on, i) => (
          <motion.div
            key={`${size}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (i / pixels.length) * 0.3 }}
            style={{
              width: cellSize,
              height: cellSize,
              backgroundColor: on ? "#EF4444" : "#F9FAFB",
            }}
          />
        ))}
      </motion.div>

      <div className="text-center">
        <p className="text-sm font-black" style={{ color: "#FF4081" }}>
          {size}×{size} = {size * size} pixels
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {resIdx === 0 && "Very blocky — hard to see what it is!"}
          {resIdx === 1 && "Getting clearer — looks a bit blocky"}
          {resIdx === 2 && "Better! You can tell it's a heart ❤️"}
          {resIdx === 3 && "Nice and smooth! More pixels = sharper image ✨"}
        </p>
      </div>

      {/* RGB sub-pixel breakdown */}
      <div className="bg-gray-50 rounded-2xl p-4 w-full max-w-xs">
        <p className="text-xs font-bold text-gray-600 mb-3 text-center">
          🔍 Zoom in on ONE red pixel:
        </p>
        <div className="flex items-center gap-3 justify-center">
          <div
            className="w-8 h-8 rounded"
            style={{ backgroundColor: "#EF4444" }}
          />
          <span className="text-gray-400">→</span>
          <div className="flex gap-0.5">
            <div className="w-3 h-8 rounded-sm bg-red-500 flex items-end justify-center pb-0.5">
              <span className="text-[8px] text-white font-bold rotate-90">R</span>
            </div>
            <div className="w-3 h-2 rounded-sm bg-green-500 self-end" />
            <div className="w-3 h-1 rounded-sm bg-blue-500 self-end" />
          </div>
          <span className="text-[10px] font-mono text-gray-600">
            R:239<br />G:68<br />B:68
          </span>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">
          Every pixel has 3 tiny lights: 🔴 Red + 🟢 Green + 🔵 Blue
        </p>
      </div>
    </div>
  );
}
