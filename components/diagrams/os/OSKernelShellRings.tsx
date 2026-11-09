"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TASKS = [
  { label: "Chrome", emoji: "🌐" },
  { label: "Music", emoji: "🎵" },
  { label: "Game", emoji: "🎮" },
  { label: "Files", emoji: "📁" },
  { label: "Timer", emoji: "⏱️" },
  { label: "Camera", emoji: "📷" },
  { label: "Notes", emoji: "📝" },
  { label: "Settings", emoji: "⚙️" },
];

/* Build an SVG pie slice path for segment i of n total */
function slicePath(cx: number, cy: number, r1: number, r2: number, i: number, n: number, gap = 0.04) {
  const step = (2 * Math.PI) / n;
  const a1 = -Math.PI / 2 + i * step + gap;
  const a2 = -Math.PI / 2 + (i + 1) * step - gap;
  const x1o = cx + r2 * Math.cos(a1), y1o = cy + r2 * Math.sin(a1);
  const x2o = cx + r2 * Math.cos(a2), y2o = cy + r2 * Math.sin(a2);
  const x1i = cx + r1 * Math.cos(a2), y1i = cy + r1 * Math.sin(a2);
  const x2i = cx + r1 * Math.cos(a1), y2i = cy + r1 * Math.sin(a1);
  return `M ${x1o} ${y1o} A ${r2} ${r2} 0 0 1 ${x2o} ${y2o} L ${x1i} ${y1i} A ${r1} ${r1} 0 0 0 ${x2i} ${y2i} Z`;
}

function labelPos(cx: number, cy: number, r: number, i: number, n: number) {
  const angle = -Math.PI / 2 + (i + 0.5) * (2 * Math.PI / n);
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

export default function OSKernelShellRings({ accent = "#E11D48" }: { accent?: string }) {
  const [mode, setMode] = useState<"single" | "multi">("single");
  const [activeSlice, setActiveSlice] = useState<number | null>(null);

  const cx = 200, cy = 180;
  const kernelR = 60;
  const shellInnerR = 75;
  const shellOuterR = 150;
  const n = TASKS.length;

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1E1B4B)" }}>

      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Kernel & Shell — Ring Model</p>
        <p className="text-xs text-white/40 mt-1">The OS as two concentric rings — tap a shell slice to see its task</p>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-1 mx-5 mt-4 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.07)" }}>
        {(["single", "multi"] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setActiveSlice(null); }}
            className="flex-1 py-2 rounded-lg text-xs font-black transition-all"
            style={{ background: mode === m ? accent : "transparent", color: mode === m ? "white" : "rgba(255,255,255,0.4)" }}
          >
            {m === "single" ? "⭕ Single Tasking" : "🔄 Multi Tasking"}
          </button>
        ))}
      </div>

      {/* Diagram */}
      <div className="flex justify-center px-4 py-4">
        <AnimatePresence mode="wait">
          {mode === "single" ? (
            <motion.div key="single" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <svg width="100%" height="260" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet">

                {/* Outer Shell ellipse */}
                <motion.ellipse cx={200} cy={130} rx={160} ry={110}
                  fill="none" stroke={accent} strokeWidth={2.5} strokeDasharray="6 3" opacity={0.6}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                />
                {/* Shell fill */}
                <ellipse cx={200} cy={130} rx={160} ry={110} fill={`${accent}10`} />

                {/* Shell label */}
                <text x={200} y={28} textAnchor="middle" fill={accent} fontSize={13} fontWeight="900" opacity={0.9}>SHELL</text>
                <text x={200} y={42} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={9}>Outer ring — the interface you interact with</text>

                {/* Gap ring (the gap between kernel and shell) */}
                <ellipse cx={200} cy={130} rx={80} ry={58} fill="#0F172A" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

                {/* Inner Kernel ellipse */}
                <motion.ellipse cx={200} cy={130} rx={70} ry={48}
                  fill={`${accent}25`} stroke={accent} strokeWidth={2.5}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ transformOrigin: "200px 130px" }}
                />

                {/* Kernel label */}
                <text x={200} y={124} textAnchor="middle" fill="white" fontSize={14} fontWeight="900">KERNEL</text>
                <text x={200} y={140} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={9}>Inner ring — ring 0, controls hardware</text>

                {/* One shell task label — placed in the right-side gap between kernel and shell */}
                <text x={312} y={124} textAnchor="middle" fill={accent} fontSize={9} fontWeight="bold">Shell 1</text>
                <text x={312} y={137} textAnchor="middle" fill={accent} fontSize={8} opacity={0.75}>(1 task only)</text>

                {/* Arrow label */}
                <text x={200} y={228} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={10}>One Shell → One task at a time</text>
              </svg>
            </motion.div>
          ) : (
            <motion.div key="multi" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
              <svg width="100%" height="370" viewBox="0 0 400 370" preserveAspectRatio="xMidYMid meet">

                {/* Shell segments (pie slices) */}
                {TASKS.map((task, i) => {
                  const isActive = activeSlice === i;
                  const p = slicePath(cx, cy, shellInnerR, shellOuterR, i, n);
                  const hue = (i * 360 / n);
                  const sliceColor = `hsl(${hue},70%,60%)`;
                  return (
                    <motion.path
                      key={i}
                      d={p}
                      fill={isActive ? sliceColor : `${sliceColor}40`}
                      stroke={isActive ? sliceColor : `${sliceColor}80`}
                      strokeWidth={1.5}
                      style={{ cursor: "pointer", transformOrigin: `${cx}px ${cy}px` }}
                      whileHover={{ scale: 1.04 }}
                      onClick={() => setActiveSlice(isActive ? null : i)}
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                    />
                  );
                })}

                {/* Shell number labels inside slices */}
                {TASKS.map((task, i) => {
                  const mid = labelPos(cx, cy, (shellInnerR + shellOuterR) / 2, i, n);
                  const hue = (i * 360 / n);
                  return (
                    <g key={`lbl-${i}`} style={{ cursor: "pointer" }} onClick={() => setActiveSlice(activeSlice === i ? null : i)}>
                      <text x={mid.x} y={mid.y - 7} textAnchor="middle" fill="white" fontSize={9} fontWeight="900" opacity={0.9}>
                        {task.emoji}
                      </text>
                      <text x={mid.x} y={mid.y + 5} textAnchor="middle" fill="white" fontSize={7.5} fontWeight="700" opacity={0.75}>
                        {i + 1}
                      </text>
                    </g>
                  );
                })}

                {/* Gap ring */}
                <circle cx={cx} cy={cy} r={shellInnerR - 2} fill="#0F172A" />

                {/* Kernel inner ellipse */}
                <circle cx={cx} cy={cy} r={kernelR} fill={`${accent}30`} stroke={accent} strokeWidth={2.5} />
                <text x={cx} y={cy - 8} textAnchor="middle" fill="white" fontSize={13} fontWeight="900">KERNEL</text>
                <text x={cx} y={cy + 8} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={8}>ring 0</text>
                <text x={cx} y={cy + 20} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={7}>controls hardware</text>

                {/* Outer shell boundary circle */}
                <circle cx={cx} cy={cy} r={shellOuterR} fill="none" stroke={accent} strokeWidth={1.5} strokeDasharray="5 3" opacity={0.4} />

                {/* SHELL label at top */}
                <text x={cx} y={cy - shellOuterR - 12} textAnchor="middle" fill={accent} fontSize={12} fontWeight="900" opacity={0.8}>SHELL</text>
                <text x={cx} y={cy - shellOuterR + 2} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={8}>{n} concurrent shell processes</text>

                {/* Bottom label */}
                <text x={cx} y={cy + shellOuterR + 20} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize={9}>Each slice = one Shell assigned one task</text>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Active slice detail card */}
      <AnimatePresence>
        {mode === "multi" && activeSlice !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="mx-5 mb-4 rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span className="text-3xl">{TASKS[activeSlice].emoji}</span>
            <div>
              <p className="text-sm font-black text-white">Shell {activeSlice + 1} → {TASKS[activeSlice].label}</p>
              <p className="text-xs text-white/50 mt-0.5">
                This shell handles <strong className="text-white/80">{TASKS[activeSlice].label}</strong>. The Kernel in the centre serves all shells — it schedules CPU time so each feels like it runs simultaneously.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="flex gap-3 px-5 pb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: accent }} />
          <span className="text-xs text-white/50 font-bold">Kernel (inner)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm opacity-60" style={{ background: "hsl(200,70%,60%)" }} />
          <span className="text-xs text-white/50 font-bold">Shell slices (outer)</span>
        </div>
      </div>
    </div>
  );
}
