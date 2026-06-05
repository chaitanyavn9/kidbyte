"use client";
import { motion } from "framer-motion";

const signals = [
  { label: "Screen 🖥️", angle: 0, color: "#1D7CFF" },
  { label: "Sound 🔊", angle: 60, color: "#FF8A00" },
  { label: "Memory 💾", angle: 120, color: "#7B61FF" },
  { label: "Mouse 🖱️", angle: 180, color: "#8BEA00" },
  { label: "Keyboard ⌨️", angle: 240, color: "#FF4081" },
  { label: "Fan ❄️", angle: 300, color: "#00BCD4" },
];

function polarToXY(angle: number, r: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}

export default function CpuAnimation() {
  return (
    <div className="flex flex-col items-center gap-4 py-6 select-none">
      <p className="text-sm font-bold text-gray-500 text-center">
        The CPU sends instructions to every part of the computer!
      </p>

      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Signals */}
        {signals.map((sig, i) => {
          const pos = polarToXY(sig.angle, 100);
          const mid = polarToXY(sig.angle, 55);
          return (
            <g key={sig.label}>
              {/* Animated pulse along the line */}
              <motion.div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: sig.color,
                  left: "50%",
                  top: "50%",
                  marginLeft: -6,
                  marginTop: -6,
                  boxShadow: `0 0 8px ${sig.color}`,
                }}
                animate={{
                  x: [0, pos.x * 0.9],
                  y: [0, pos.y * 0.9],
                  scale: [1, 0.4],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
              {/* Label */}
              <div
                className="absolute text-xs font-bold text-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${pos.x * 1.15}px), calc(-50% + ${pos.y * 1.15}px))`,
                  color: sig.color,
                  whiteSpace: "nowrap",
                }}
              >
                {sig.label}
              </div>
              {/* Line */}
              <div
                className="absolute opacity-20"
                style={{
                  left: "50%",
                  top: "50%",
                  width: 2,
                  height: 90,
                  backgroundColor: sig.color,
                  transformOrigin: "top",
                  transform: `rotate(${sig.angle}deg) translateX(-50%)`,
                }}
              />
            </g>
          );
        })}

        {/* CPU chip center */}
        <motion.div
          className="relative z-10 w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-4xl">🧠</span>
          <span className="text-[10px] font-black text-blue-300 tracking-widest mt-1">CPU</span>
          {/* Blinking light */}
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <p className="text-xs text-gray-400 text-center max-w-xs">
        Every fraction of a second, your CPU sends billions of tiny signals — just like your brain controlling your whole body!
      </p>
    </div>
  );
}
