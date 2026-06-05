"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Device {
  emoji: string;
  label: string;
  color: string;
  parts: { icon: string; name: string; desc: string }[];
}

const DEVICES: Record<string, Device> = {
  computer: {
    emoji: "🖥️",
    label: "Desktop Computer",
    color: "#1D7CFF",
    parts: [
      { icon: "🧠", name: "CPU", desc: "The brain — processes all instructions" },
      { icon: "📚", name: "RAM", desc: "The study table — holds open programs" },
      { icon: "💾", name: "Storage", desc: "The cupboard — saves all your files" },
      { icon: "🎨", name: "GPU", desc: "The painter — draws everything on screen" },
      { icon: "🖥️", name: "Monitor", desc: "Shows you the output as pictures" },
      { icon: "⌨️", name: "Keyboard", desc: "You type instructions with this" },
    ],
  },
  laptop: {
    emoji: "💻",
    label: "Laptop",
    color: "#7B61FF",
    parts: [
      { icon: "🔋", name: "Battery", desc: "Powers the laptop without a plug" },
      { icon: "🧠", name: "CPU", desc: "The brain — same job, less power" },
      { icon: "🌡️", name: "Cooling Fan", desc: "Keeps the CPU from overheating" },
      { icon: "📺", name: "Screen", desc: "Built-in display — folds open/shut" },
      { icon: "🖱️", name: "Trackpad", desc: "Acts as a mouse under your thumb" },
      { icon: "📶", name: "Wi-Fi Chip", desc: "Connects to the internet wirelessly" },
    ],
  },
  tablet: {
    emoji: "📟",
    label: "Tablet",
    color: "#FF8A00",
    parts: [
      { icon: "👆", name: "Touch Screen", desc: "Your finger IS the mouse and keyboard" },
      { icon: "⚡", name: "ARM Chip", desc: "Tiny but efficient SoC processor" },
      { icon: "📸", name: "Camera", desc: "Front + back cameras built in" },
      { icon: "🔋", name: "Battery", desc: "Big battery for all-day use" },
      { icon: "🔊", name: "Speakers", desc: "Stereo sound from the sides" },
      { icon: "📶", name: "Wi-Fi / 4G", desc: "Connect anywhere — home or outside" },
    ],
  },
  phone: {
    emoji: "📱",
    label: "Smartphone",
    color: "#FF4081",
    parts: [
      { icon: "📸", name: "Camera", desc: "12+ megapixels — photos & videos" },
      { icon: "🛰️", name: "GPS", desc: "Satellites tell it exactly where you are" },
      { icon: "🤚", name: "Fingerprint", desc: "Unlocks only for you" },
      { icon: "📡", name: "5G Modem", desc: "Super fast internet anywhere" },
      { icon: "🔊", name: "Microphone", desc: "Records voice for calls and voice search" },
      { icon: "⚡", name: "SoC", desc: "All chips combined: CPU+GPU+RAM on one tiny chip" },
    ],
  },
};

interface Props {
  lessonId: string;
}

export default function DeviceAnimation({ lessonId }: Props) {
  const device = DEVICES[lessonId] ?? DEVICES.computer;
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-6 py-8 select-none px-4">
      <p className="text-sm font-bold text-gray-500 text-center">
        Tap any part to learn what it does!
      </p>

      {/* Device graphic */}
      <motion.div
        className="text-8xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {device.emoji}
      </motion.div>

      {/* Parts grid */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
        {device.parts.map((part, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setSelected(selected === i ? null : i)}
            className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border-2 transition-all text-center"
            style={{
              backgroundColor: selected === i ? device.color + "20" : "white",
              borderColor: selected === i ? device.color : "#E5E7EB",
            }}
          >
            <span className="text-2xl">{part.icon}</span>
            <span
              className="text-xs font-black leading-tight"
              style={{ color: selected === i ? device.color : "#082A63" }}
            >
              {part.name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Description panel */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm rounded-2xl p-4 border-2 text-center"
            style={{ backgroundColor: device.color + "12", borderColor: device.color + "30" }}
          >
            <span className="text-4xl">{device.parts[selected].icon}</span>
            <p className="font-black mt-2" style={{ color: device.color }}>
              {device.parts[selected].name}
            </p>
            <p className="text-gray-600 text-sm mt-1">{device.parts[selected].desc}</p>
          </motion.div>
        )}
        {selected === null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-gray-400 text-center"
          >
            👆 Tap a part above to explore it!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
