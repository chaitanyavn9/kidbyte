"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lesson, AgeGroup } from "@/lib/types";

/* ── Per-lesson theme colours + decorative emojis ── */
const LESSON_THEMES: Record<string, { from: string; to: string; mid: string; floaters: string[] }> = {
  folder:             { from: "#FEF3C7", to: "#FDE68A", mid: "#FCD34D", floaters: ["📁","📂","📄","🗂️","📋"] },
  cpu:                { from: "#DBEAFE", to: "#BFDBFE", mid: "#60A5FA", floaters: ["🧠","⚡","💡","🔌","⚙️"] },
  ram:                { from: "#EDE9FE", to: "#DDD6FE", mid: "#A78BFA", floaters: ["📚","📖","✏️","🗒️","💭"] },
  binary:             { from: "#D1FAE5", to: "#A7F3D0", mid: "#34D399", floaters: ["0️⃣","1️⃣","💡","🔢","⚡"] },
  pixels:             { from: "#FCE7F3", to: "#FBCFE8", mid: "#F9A8D4", floaters: ["🖼️","🎨","🌈","✨","🔴"] },
  computer:           { from: "#DBEAFE", to: "#EFF6FF", mid: "#93C5FD", floaters: ["🖥️","⌨️","🖱️","💻","🤖"] },
  laptop:             { from: "#F5F3FF", to: "#EDE9FE", mid: "#C4B5FD", floaters: ["💻","🔋","📶","🌐","⌨️"] },
  tablet:             { from: "#FFF7ED", to: "#FFEDD5", mid: "#FED7AA", floaters: ["📱","👆","📸","🎮","🎵"] },
  phone:              { from: "#FFF1F2", to: "#FFE4E6", mid: "#FCA5A5", floaters: ["📱","📸","🛰️","🔊","📡"] },
  gpu:                { from: "#DCFCE7", to: "#BBF7D0", mid: "#86EFAC", floaters: ["🎨","🖼️","✨","🌟","🎮"] },
  rom:                { from: "#FFFBEB", to: "#FEF3C7", mid: "#FDE68A", floaters: ["📖","🔒","💾","⚙️","📋"] },
  ssd:                { from: "#ECFEFF", to: "#CFFAFE", mid: "#67E8F9", floaters: ["💿","⚡","🗂️","💾","🚀"] },
  "cooling-fan":      { from: "#E0F2FE", to: "#BAE6FD", mid: "#7DD3FC", floaters: ["❄️","💨","🌀","🔧","🌡️"] },
  motherboard:        { from: "#F5F3FF", to: "#EDE9FE", mid: "#D8B4FE", floaters: ["🔌","⚙️","🔧","💡","🔩"] },
  battery:            { from: "#DCFCE7", to: "#BBF7D0", mid: "#86EFAC", floaters: ["🔋","⚡","🌱","💚","🔌"] },
  files:              { from: "#FEFCE8", to: "#FEF9C3", mid: "#FEF08A", floaters: ["📄","📝","🗒️","✏️","📌"] },
  os:                 { from: "#FFF1F2", to: "#FFE4E6", mid: "#FDA4AF", floaters: ["🖱️","🚦","⚙️","🏗️","🖥️"] },
  software:           { from: "#ECFEFF", to: "#CFFAFE", mid: "#A5F3FC", floaters: ["📦","🎯","⚙️","🎮","🌐"] },
  "drag-drop":        { from: "#FFF7ED", to: "#FFEDD5", mid: "#FED7AA", floaters: ["🖱️","👆","🎯","📁","✋"] },
  "bits-bytes":       { from: "#F0FDF4", to: "#DCFCE7", mid: "#D9F99D", floaters: ["0️⃣","1️⃣","📦","🔢","💾"] },
  hexadecimal:        { from: "#FDF4FF", to: "#FAE8FF", mid: "#F5D0FE", floaters: ["🔣","🔢","🎨","🔤","💜"] },
  "machine-language": { from: "#ECFDF5", to: "#D1FAE5", mid: "#6EE7B7", floaters: ["⚙️","🔢","💻","🤖","⚡"] },
  rgb:                { from: "#FFF1F2", to: "#FFE4E6", mid: "#FCA5A5", floaters: ["🔴","🟢","🔵","🌈","🎨"] },
  "hex-colors":       { from: "#FDF2F8", to: "#FCE7F3", mid: "#FBCFE8", floaters: ["🎨","🌈","🖌️","✨","💜"] },
  resolution:         { from: "#EFF6FF", to: "#DBEAFE", mid: "#93C5FD", floaters: ["🖥️","📺","🔍","✨","🖼️"] },
  "hard-disk":        { from: "#F8FAFC", to: "#F1F5F9", mid: "#CBD5E1", floaters: ["💿","💾","🔄","🔧","📀"] },
  "ssd-deep":         { from: "#ECFDF5", to: "#D1FAE5", mid: "#6EE7B7", floaters: ["⚡","💾","🔬","💡","🚀"] },
  "memory-allocation":{ from: "#FFFBEB", to: "#FEF3C7", mid: "#FDE68A", floaters: ["🗂️","📦","🔍","💾","🗃️"] },
  "what-is-code":     { from: "#EEF2FF", to: "#E0E7FF", mid: "#A5B4FC", floaters: ["👩‍💻","💻","⌨️","🐛","✅"] },
  "python-intro":     { from: "#FFFBEB", to: "#FEF3C7", mid: "#FDE68A", floaters: ["🐍","💻","⌨️","🎯","✅"] },
  "scratch-intro":    { from: "#FFF1F2", to: "#FFE4E6", mid: "#FCA5A5", floaters: ["🧱","🎮","🎨","🤖","✨"] },
};

const DEFAULT_THEME = { from: "#EEF4FF", to: "#F0EEFF", mid: "#7B61FF", floaters: ["✨","⭐","💡","🚀","🎉"] };

/* ── Character reactions per story panel ── */
const ROBOT_REACTIONS = ["🤖", "🤩", "😮", "🧐", "😄", "🤯", "👏", "😎"];

interface Props {
  lesson: Lesson;
  ageGroup: AgeGroup;
  onContinue: () => void;
}

export default function StoryViewer({ lesson, ageGroup, onContinue }: Props) {
  const theme = LESSON_THEMES[lesson.id] ?? DEFAULT_THEME;

  /* Split story into sentences */
  const sentences = lesson.story[ageGroup]
    .replace(/([.!?])\s+/g, "$1||")
    .split("||")
    .map(s => s.trim())
    .filter(Boolean);

  const [panelIdx, setPanelIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [showAnalogy, setShowAnalogy] = useState(false);
  const [showFunFact, setShowFunFact] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentSentence = sentences[panelIdx] ?? "";
  const isLastSentence = panelIdx >= sentences.length - 1;

  /* Typewriter effect */
  useEffect(() => {
    setDisplayedText("");
    setTyping(true);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      setDisplayedText(currentSentence.slice(0, i));
      if (i >= currentSentence.length) {
        setTyping(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 28);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [currentSentence]);

  /* Skip typing on tap */
  const skipOrNext = () => {
    if (typing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayedText(currentSentence);
      setTyping(false);
      return;
    }
    if (isLastSentence) {
      setShowAnalogy(true);
      return;
    }
    setPanelIdx(p => p + 1);
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col cursor-pointer select-none"
      style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
      onClick={skipOrNext}
    >
      {/* ── Floating background emojis ── */}
      {theme.floaters.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl pointer-events-none"
          style={{
            left: `${8 + i * 18}%`,
            top: `${10 + (i % 3) * 25}%`,
            opacity: 0.12,
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, i % 2 === 0 ? 12 : -12, 0],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* ── Decorative blobs ── */}
      <div
        className="absolute w-56 h-56 rounded-full opacity-20 pointer-events-none"
        style={{ background: theme.mid, top: -60, right: -40 }}
      />
      <div
        className="absolute w-32 h-32 rounded-full opacity-15 pointer-events-none"
        style={{ background: theme.mid, bottom: -20, left: -20 }}
      />

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: theme.mid }}
          animate={{ width: `${((panelIdx + 1) / sentences.length) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-8 pb-6 gap-5">

        {!showAnalogy && !showFunFact ? (
          <>
            {/* Robot character */}
            <motion.div
              key={`robot-${panelIdx}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="text-6xl"
            >
              {ROBOT_REACTIONS[panelIdx % ROBOT_REACTIONS.length]}
            </motion.div>

            {/* Big lesson emoji */}
            <motion.div
              className="text-5xl"
              animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {lesson.emoji}
            </motion.div>

            {/* Speech bubble */}
            <AnimatePresence mode="wait">
              <motion.div
                key={panelIdx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl px-6 py-5 shadow-xl w-full max-w-sm"
              >
                {/* Bubble tail */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderBottom: "14px solid white",
                  }}
                />
                <p className="text-[#082A63] font-bold text-base leading-relaxed text-center min-h-[60px]">
                  {displayedText}
                  {typing && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="ml-0.5 inline-block w-0.5 h-4 bg-blue-400 align-middle"
                    />
                  )}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Panel counter + tap hint */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex gap-1.5">
                {sentences.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full h-1.5"
                    animate={{
                      width: i === panelIdx ? 24 : 6,
                      backgroundColor: i <= panelIdx ? theme.mid : "#CBD5E1",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <motion.p
                className="text-xs font-bold text-gray-400 mt-1"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {typing ? "Tap to skip →" : isLastSentence ? "Tap to continue →" : "Tap for next →"}
              </motion.p>
            </div>
          </>
        ) : showAnalogy && !showFunFact ? (
          /* ── Analogy card ── */
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="flex flex-col items-center gap-4 w-full max-w-sm"
            onClick={(e) => { e.stopPropagation(); setShowFunFact(true); }}
          >
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              💡
            </motion.div>
            <p className="font-black text-xl text-[#082A63] text-center">Think of it like this…</p>
            <div
              className="bg-white rounded-3xl px-6 py-5 shadow-xl w-full text-center border-4"
              style={{ borderColor: theme.mid }}
            >
              <p className="text-lg font-bold text-gray-700 italic leading-relaxed">
                &ldquo;{lesson.analogy[ageGroup]}&rdquo;
              </p>
            </div>
            {lesson.funFact && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                className="bg-white/80 backdrop-blur font-black text-sm px-5 py-2.5 rounded-2xl shadow"
                style={{ color: theme.mid === "#FCD34D" ? "#92400E" : "#082A63" }}
              >
                See a Fun Fact! 🤩 →
              </motion.button>
            )}
            {!lesson.funFact && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                onClick={(e) => { e.stopPropagation(); onContinue(); }}
                className="font-black text-sm px-6 py-3 rounded-2xl shadow text-white"
                style={{ background: theme.mid }}
              >
                Explore the Demo! 🔬 →
              </motion.button>
            )}
          </motion.div>
        ) : (
          /* ── Fun Fact card ── */
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="flex flex-col items-center gap-4 w-full max-w-sm"
          >
            {/* Confetti burst */}
            {["🎉","⭐","✨","🌟","🎊"].map((e, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl pointer-events-none"
                style={{ left: `${15 + i * 18}%`, top: "20%" }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -60, opacity: 0, rotate: (i - 2) * 40 }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
              >
                {e}
              </motion.span>
            ))}
            <motion.div
              className="text-6xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.8 }}
            >
              🤩
            </motion.div>
            <p className="font-black text-xl text-[#082A63] text-center">Fun Fact!</p>
            <div
              className="bg-white rounded-3xl px-6 py-5 shadow-xl w-full text-center border-4"
              style={{ borderColor: theme.mid }}
            >
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                {lesson.funFact}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => { e.stopPropagation(); onContinue(); }}
              className="font-black text-base px-8 py-3.5 rounded-2xl shadow-lg text-white"
              style={{ background: `linear-gradient(90deg, ${theme.mid}, ${theme.from === "#DBEAFE" ? "#7B61FF" : "#082A63"})` }}
            >
              Now let&apos;s Explore! 🔬
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
