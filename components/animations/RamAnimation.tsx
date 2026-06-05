"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const APPS = [
  { label: "Browser 🌐", color: "#1D7CFF" },
  { label: "Game 🎮", color: "#7B61FF" },
  { label: "Music 🎵", color: "#FF8A00" },
  { label: "Photos 🖼️", color: "#FF4081" },
  { label: "Video 📹", color: "#00BCD4" },
  { label: "Chat 💬", color: "#8BEA00" },
];

export default function RamAnimation() {
  const [openApps, setOpenApps] = useState<number[]>([0, 1]);
  const [ramFull, setRamFull] = useState(false);

  useEffect(() => {
    setRamFull(openApps.length >= 5);
  }, [openApps]);

  const toggleApp = (i: number) => {
    setOpenApps((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const ramPercent = Math.min(100, (openApps.length / 5) * 100);

  return (
    <div className="flex flex-col items-center gap-5 py-6 select-none">
      <p className="text-sm font-bold text-gray-500 text-center">
        Click apps to open or close them — watch the RAM table fill up!
      </p>

      {/* Study Table */}
      <div className="relative w-full max-w-xs">
        <div className="bg-amber-100 border-4 border-amber-400 rounded-2xl p-4 min-h-[120px]">
          <p className="text-xs font-black text-amber-700 mb-3 text-center">📚 Study Table (RAM)</p>
          <div className="flex flex-wrap gap-2 justify-center min-h-[60px]">
            <AnimatePresence>
              {openApps.map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="px-2.5 py-1.5 rounded-xl text-white text-xs font-bold"
                  style={{ backgroundColor: APPS[i].color }}
                >
                  {APPS[i].label}
                </motion.div>
              ))}
              {openApps.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-amber-400 text-sm font-bold"
                >
                  Empty table — nothing open!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Table legs */}
        <div className="flex justify-between px-4">
          <div className="w-4 h-6 bg-amber-600 rounded-b-lg" />
          <div className="w-4 h-6 bg-amber-600 rounded-b-lg" />
        </div>
      </div>

      {/* RAM meter */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-xs font-bold mb-1">
          <span className="text-gray-500">RAM Used</span>
          <span style={{ color: ramFull ? "#EF4444" : "#1D7CFF" }}>
            {openApps.length}/5 apps {ramFull && "⚠️ Full!"}
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            animate={{
              width: `${ramPercent}%`,
              backgroundColor: ramPercent >= 100 ? "#EF4444" : ramPercent >= 60 ? "#FF8A00" : "#1D7CFF",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* App buttons */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        {APPS.map((app, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => toggleApp(i)}
            className="px-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all"
            style={{
              backgroundColor: openApps.includes(i) ? app.color : "#E5E7EB",
              color: openApps.includes(i) ? "white" : "#6B7280",
            }}
          >
            {openApps.includes(i) ? "✕ Close" : "＋ Open"}
            <br />
            <span className="text-[10px]">{app.label}</span>
          </motion.button>
        ))}
      </div>

      {ramFull && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 font-bold text-center"
        >
          🐢 Table is full! Your computer might slow down now...
        </motion.p>
      )}

      <p className="text-xs text-gray-400 text-center max-w-xs">
        When you close the browser, the table is cleared — all RAM is wiped!
      </p>
    </div>
  );
}
