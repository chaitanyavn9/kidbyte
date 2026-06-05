"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FolderAnimation() {
  const [knocked, setKnocked] = useState(0);
  const [open, setOpen] = useState(false);

  const handleKnock = () => {
    if (open) {
      setOpen(false);
      setKnocked(0);
      return;
    }
    const next = knocked + 1;
    setKnocked(next);
    if (next >= 2) {
      setTimeout(() => setOpen(true), 300);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8 select-none">
      <p className="text-center font-bold text-gray-600 text-sm">
        {open
          ? "📂 The folder is open! Click to close."
          : knocked === 0
          ? "👆 Double-click the folder to open it!"
          : "👆 One more click to open!"}
      </p>

      <motion.div
        className="relative cursor-pointer"
        onClick={handleKnock}
        whileTap={{ scale: 0.93 }}
        animate={knocked === 1 && !open ? { x: [0, -6, 6, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Folder body */}
        <motion.div
          className="relative"
          animate={open ? { rotateX: -30 } : { rotateX: 0 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Folder tab */}
          <div className="w-16 h-5 bg-yellow-400 rounded-tl-xl rounded-tr-xl absolute -top-4 left-0" />

          {/* Main folder */}
          <motion.div
            className="w-40 h-28 rounded-xl border-4 border-yellow-500 flex items-center justify-center overflow-hidden"
            animate={{
              backgroundColor: open ? "#FEF3C7" : "#FCD34D",
            }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-2 gap-2 p-3"
                >
                  {["📄", "🖼️", "🎵", "📊"].map((icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="text-2xl text-center"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {!open && (
                <motion.span
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-5xl"
                >
                  📁
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Knock indicators */}
        {knocked > 0 && !open && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-2 -right-2 text-lg"
          >
            👆
          </motion.div>
        )}
      </motion.div>

      {/* Knock counter */}
      <div className="flex gap-3">
        {[1, 2].map((n) => (
          <motion.div
            key={n}
            className="w-10 h-10 rounded-full border-3 border-yellow-400 flex items-center justify-center font-black text-yellow-600"
            animate={{
              backgroundColor: knocked >= n ? "#FCD34D" : "transparent",
              scale: knocked === n ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {knocked >= n ? "✓" : n}
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center max-w-xs">
        Just like knocking on a door twice — <strong>double-click</strong> opens a folder!
      </p>
    </div>
  );
}
