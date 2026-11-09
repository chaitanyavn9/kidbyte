"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Component {
  id: string;
  name: string;
  emoji: string;
  color: string;
  shortDesc: string;
}

interface Slot {
  id: string;
  label: string;
  accepts: string; // component id
  position: { x: number; y: number }; // % of board
  size: { w: number; h: number };
}

const COMPONENTS: Component[] = [
  { id: "cpu",  name: "CPU",         emoji: "🧠", color: "#3B82F6", shortDesc: "Central Processing Unit — the brain" },
  { id: "ram",  name: "RAM Sticks",  emoji: "📋", color: "#10B981", shortDesc: "Random Access Memory — working desk" },
  { id: "gpu",  name: "GPU",         emoji: "🎨", color: "#F59E0B", shortDesc: "Graphics Card — the artist" },
  { id: "ssd",  name: "M.2 SSD",     emoji: "⚡", color: "#EF4444", shortDesc: "Solid State Drive — the filing room" },
  { id: "psu",  name: "PSU Cable",   emoji: "⚡", color: "#F59E0B", shortDesc: "Power Supply — the electrical board" },
];

const SLOTS: Slot[] = [
  { id: "cpu-slot",  label: "CPU Socket\n(LGA/AM5)",  accepts: "cpu",  position: { x: 28, y: 18 }, size: { w: 18, h: 20 } },
  { id: "ram-slot",  label: "DIMM Slots\n(DDR5)",     accepts: "ram",  position: { x: 50, y: 15 }, size: { w: 16, h: 28 } },
  { id: "pcie-slot", label: "PCIe x16\n(GPU Slot)",   accepts: "gpu",  position: { x: 20, y: 55 }, size: { w: 55, h: 10 } },
  { id: "m2-slot",   label: "M.2 Slot\n(SSD)",        accepts: "ssd",  position: { x: 55, y: 48 }, size: { w: 20, h: 6 } },
];

type PlacedMap = Record<string, string>; // slotId → componentId

interface Props {
  onAllCorrect?: () => void;
}

export default function SlotGame({ onAllCorrect }: Props) {
  const [placed, setPlaced] = useState<PlacedMap>({});
  const [dragging, setDragging] = useState<string | null>(null);
  const [wrongSlot, setWrongSlot] = useState<string | null>(null);
  const [justPlaced, setJustPlaced] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [hintSlot, setHintSlot] = useState<string | null>(null);

  // Components still in the tray
  const placedComponentIds = new Set(Object.values(placed));
  const unplacedComponents = COMPONENTS.filter((c) => !placedComponentIds.has(c.id));

  const handleDrop = useCallback(
    (slotId: string) => {
      if (!dragging) return;
      const slot = SLOTS.find((s) => s.id === slotId)!;

      if (slot.accepts === dragging) {
        const newPlaced = { ...placed, [slotId]: dragging };
        setPlaced(newPlaced);
        setJustPlaced(slotId);
        setTimeout(() => setJustPlaced(null), 800);

        const allDone = SLOTS.every((s) => newPlaced[s.id]);
        if (allDone) {
          setFinished(true);
          onAllCorrect?.();
        }
      } else {
        setWrongSlot(slotId);
        setTimeout(() => setWrongSlot(null), 600);
      }
      setDragging(null);
    },
    [dragging, placed, onAllCorrect]
  );

  function removeFromSlot(slotId: string) {
    const updated = { ...placed };
    delete updated[slotId];
    setPlaced(updated);
    setFinished(false);
  }

  function reset() {
    setPlaced({});
    setFinished(false);
    setDragging(null);
  }

  const correctCount = Object.keys(placed).length;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10" style={{ background: "rgba(0,0,0,0.3)" }}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div>
          <p className="font-black text-sm text-white">🎮 Build Your PC</p>
          <p className="text-xs text-white/50 mt-0.5">Drag each part to its correct slot on the motherboard</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50">{correctCount}/{SLOTS.length} placed</span>
          {correctCount > 0 && (
            <button onClick={reset} className="text-xs px-2 py-1 rounded-lg bg-white/10 text-white/60 hover:bg-white/20">
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">

        {/* Motherboard */}
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ paddingBottom: "65%", background: "linear-gradient(135deg, #1a2a1a, #0d1a0d)", border: "1px solid rgba(0,200,80,0.2)" }}
        >
          {/* PCB texture */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,255,80,0.3) 20px, rgba(0,255,80,0.3) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,255,80,0.3) 20px, rgba(0,255,80,0.3) 21px)" }}
          />

          {/* Motherboard label */}
          <div className="absolute top-2 left-3 text-xs font-bold opacity-40 text-green-400">KIDBYTE ATX Z790</div>

          {/* Slots */}
          {SLOTS.map((slot) => {
            const placedComp = placed[slot.id] ? COMPONENTS.find((c) => c.id === placed[slot.id]) : null;
            const isWrong = wrongSlot === slot.id;
            const isJustPlaced = justPlaced === slot.id;
            const isHint = hintSlot === slot.id;

            return (
              <div
                key={slot.id}
                className="absolute flex items-center justify-center cursor-pointer transition-all"
                style={{
                  left: `${slot.position.x}%`,
                  top: `${slot.position.y}%`,
                  width: `${slot.size.w}%`,
                  height: `${slot.size.h}%`,
                  border: `2px ${placedComp ? "solid" : "dashed"} ${
                    isWrong ? "#EF4444" : isJustPlaced ? "#10B981" : isHint ? "#F59E0B" : placedComp ? (COMPONENTS.find(c => c.id === slot.accepts)?.color ?? "#10B981") : "rgba(0,255,80,0.3)"
                  }`,
                  borderRadius: 6,
                  background: isWrong
                    ? "rgba(239,68,68,0.2)"
                    : isJustPlaced
                    ? "rgba(16,185,129,0.2)"
                    : isHint
                    ? "rgba(245,158,11,0.15)"
                    : placedComp
                    ? `${COMPONENTS.find(c => c.id === slot.accepts)?.color}22`
                    : "rgba(0,255,80,0.05)",
                }}
                onDragOver={(e) => { e.preventDefault(); }}
                onDrop={(e) => { e.preventDefault(); handleDrop(slot.id); }}
                onClick={() => placedComp && removeFromSlot(slot.id)}
              >
                <AnimatePresence mode="wait">
                  {placedComp ? (
                    <motion.div
                      key="placed"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="flex items-center gap-1 px-2"
                    >
                      <span className="text-base">{placedComp.emoji}</span>
                      <span className="text-xs font-bold text-white/90 leading-tight">{placedComp.name}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      className="text-center px-1"
                    >
                      {slot.label.split("\n").map((line, i) => (
                        <p key={i} className="text-xs leading-tight" style={{ color: isHint ? "#F59E0B" : "rgba(0,255,80,0.5)" }}>{line}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Finished overlay */}
          <AnimatePresence>
            {finished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
                style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                  className="text-5xl mb-2"
                >🎉</motion.div>
                <p className="text-white font-black text-lg">PC Assembled!</p>
                <p className="text-white/60 text-xs mt-1">All components placed correctly</p>
                <button onClick={reset} className="mt-3 px-4 py-1.5 rounded-xl text-sm font-bold text-white" style={{ background: "#3B82F6" }}>
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Component tray */}
        <div>
          <p className="text-xs text-white/40 mb-2 font-medium">
            {unplacedComponents.length > 0
              ? "Drag a component to its matching slot above ↑"
              : finished ? "✅ All placed!" : "Remove a component by clicking its slot"}
          </p>
          <div className="flex flex-wrap gap-2">
            {COMPONENTS.map((comp) => {
              const isPlaced = placedComponentIds.has(comp.id);
              return (
                <motion.div
                  key={comp.id}
                  draggable={!isPlaced}
                  onDragStart={() => !isPlaced && setDragging(comp.id)}
                  onDragEnd={() => setDragging(null)}
                  whileHover={!isPlaced ? { scale: 1.05, y: -2 } : {}}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold select-none transition-all"
                  style={{
                    background: isPlaced ? "rgba(255,255,255,0.05)" : `${comp.color}22`,
                    border: `1.5px solid ${isPlaced ? "rgba(255,255,255,0.1)" : comp.color + "66"}`,
                    color: isPlaced ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.9)",
                    cursor: isPlaced ? "default" : "grab",
                    opacity: isPlaced ? 0.5 : 1,
                  }}
                  onMouseEnter={() => {
                    if (!isPlaced) {
                      const slot = SLOTS.find((s) => s.accepts === comp.id);
                      if (slot) setHintSlot(slot.id);
                    }
                  }}
                  onMouseLeave={() => setHintSlot(null)}
                >
                  <span className="text-base">{comp.emoji}</span>
                  <div>
                    <p className="leading-none">{comp.name}</p>
                    <p className="text-xs font-normal opacity-60 leading-tight">{comp.shortDesc}</p>
                  </div>
                  {isPlaced && <span className="text-green-400 text-sm ml-1">✓</span>}
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-white/30 text-center">💡 Hover a component to highlight its slot · Click a placed component to remove it</p>
      </div>
    </div>
  );
}
