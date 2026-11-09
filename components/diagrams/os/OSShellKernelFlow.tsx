"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    id: 0,
    from: "👤 You",
    action: 'You type: "Open Chrome"',
    detail: "You speak in human language — a simple English command. You don't know anything about hardware. You just know what you want.",
    color: "#E11D48",
    bg: "#FFF1F2",
  },
  {
    id: 1,
    from: "🟢 Shell",
    action: "Shell receives your command",
    detail: "The Shell is the outer layer of the OS — the part you see (your desktop, your terminal). It understands human-readable commands and converts them into requests the Kernel can understand.",
    color: "#059669",
    bg: "#F0FDF4",
  },
  {
    id: 2,
    from: "🔵 Kernel",
    action: "Kernel translates to hardware instructions",
    detail: 'The Kernel is the innermost part — the "engine" of the OS. It takes the Shell\'s request and figures out the exact hardware operations needed: "allocate memory here, read these disk sectors, start this process."',
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    id: 3,
    from: "💻 Hardware",
    action: "Hardware executes and responds",
    detail: "The CPU, RAM, and disk actually do the work. Chrome's program is loaded from the SSD into RAM, the CPU starts running it, and the GPU draws the window on screen. Hardware sends back a 'done' signal.",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    id: 4,
    from: "🔵 Kernel",
    action: "Kernel receives the result",
    detail: "Hardware reports back to the Kernel: 'Chrome is running, process ID 4821, using 200 MB RAM.' The Kernel organises this result and passes it up to the Shell.",
    color: "#1D4ED8",
    bg: "#EFF6FF",
  },
  {
    id: 5,
    from: "🟢 Shell",
    action: "Shell translates result to human language",
    detail: "The Shell turns the Kernel's raw result into something visible: Chrome's window appears on your screen. The Shell updated the display, your taskbar, everything you see.",
    color: "#059669",
    bg: "#F0FDF4",
  },
  {
    id: 6,
    from: "👤 You",
    action: "You see Chrome open — task complete!",
    detail: "You never saw any of those steps. From your side, you typed a command and Chrome appeared. The entire Shell→Kernel→Hardware→Kernel→Shell journey happened in milliseconds, invisibly.",
    color: "#E11D48",
    bg: "#FFF1F2",
  },
];

export default function OSShellKernelFlow({ accent = "#E11D48" }: { accent?: string }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(-1);

  function startAnimation() {
    setPlaying(true);
    setCurrent(0);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i >= STEPS.length) {
        clearInterval(timer);
        setPlaying(false);
        setCurrent(-1);
        return;
      }
      setCurrent(i);
    }, 1200);
  }

  const displayStep = activeStep !== null ? activeStep : current >= 0 ? current : null;

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">The Journey: You → Shell → Kernel → Hardware → Kernel → Shell → You</p>
        <p className="text-sm text-white/70 mt-1">Click any step to learn what it does. Or press Play to see it animate.</p>
      </div>

      <div className="p-5">

        {/* Flow diagram */}
        <div className="flex flex-col gap-1 mb-5">
          {STEPS.map((step, i) => {
            const isActive = displayStep === i;
            const isDone = current >= 0 && i <= current;
            return (
              <motion.button
                key={i}
                onClick={() => { setActiveStep(activeStep === i ? null : i); }}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all"
                style={{
                  background: isActive ? step.bg : isDone ? `${step.color}18` : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${isActive ? step.color : isDone ? `${step.color}50` : "rgba(255,255,255,0.1)"}`,
                }}
                whileHover={{ x: 3 }}
              >
                {/* Connector line on left */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                    style={{ background: isActive || isDone ? step.color : "rgba(255,255,255,0.1)" }}
                    animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                  >
                    {isDone || isActive ? "✓" : <span className="text-white/40 text-xs">{i + 1}</span>}
                  </motion.div>
                  {i < STEPS.length - 1 && (
                    <div className="w-0.5 h-2 mt-0.5" style={{ background: isDone ? step.color : "rgba(255,255,255,0.1)" }} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-black" style={{ color: isActive ? step.color : "rgba(255,255,255,0.6)" }}>
                    {step.from}
                  </p>
                  <p className="text-xs text-white/50 leading-tight">{step.action}</p>
                </div>

                <span className="text-white/30 text-xs shrink-0">{isActive ? "▴" : "▾"}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {displayStep !== null && (
            <motion.div
              key={displayStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl px-4 py-4 mb-4"
              style={{ background: STEPS[displayStep].bg, border: `1.5px solid ${STEPS[displayStep].color}40` }}
            >
              <p className="text-xs font-black mb-1.5" style={{ color: STEPS[displayStep].color }}>
                Step {displayStep + 1}: {STEPS[displayStep].from}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{STEPS[displayStep].detail}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Play button */}
        <button
          onClick={startAnimation}
          disabled={playing}
          className="w-full py-2.5 rounded-xl font-black text-sm text-white disabled:opacity-40"
          style={{ background: playing ? "#374151" : `linear-gradient(90deg, ${accent}, #7B61FF)` }}
        >
          {playing ? "Animating…" : "▶ Play the full journey"}
        </button>

      </div>
    </div>
  );
}
