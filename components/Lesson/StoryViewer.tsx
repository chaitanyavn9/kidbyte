"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lesson, AgeGroup } from "@/lib/types";

/* ── Per-lesson decorative theme ── */
const LESSON_THEMES: Record<string, { from: string; to: string; mid: string; floaters: string[] }> = {
  folder:              { from: "#FEF3C7", to: "#FDE68A", mid: "#F59E0B", floaters: ["📁","📂","📄","🗂️","📋"] },
  cpu:                 { from: "#DBEAFE", to: "#BFDBFE", mid: "#3B82F6", floaters: ["🧠","⚡","💡","🔌","⚙️"] },
  ram:                 { from: "#EDE9FE", to: "#DDD6FE", mid: "#7C3AED", floaters: ["📚","📖","✏️","🗒️","💭"] },
  binary:              { from: "#D1FAE5", to: "#A7F3D0", mid: "#059669", floaters: ["0️⃣","1️⃣","💡","🔢","⚡"] },
  pixels:              { from: "#FCE7F3", to: "#FBCFE8", mid: "#EC4899", floaters: ["🖼️","🎨","🌈","✨","🔴"] },
  computer:            { from: "#DBEAFE", to: "#EFF6FF", mid: "#1D7CFF", floaters: ["🖥️","⌨️","🖱️","💻","🤖"] },
  laptop:              { from: "#F5F3FF", to: "#EDE9FE", mid: "#7B61FF", floaters: ["💻","🔋","📶","🌐","⌨️"] },
  tablet:              { from: "#FFF7ED", to: "#FFEDD5", mid: "#FF8A00", floaters: ["📱","👆","📸","🎮","🎵"] },
  phone:               { from: "#FFF1F2", to: "#FFE4E6", mid: "#FF4081", floaters: ["📱","📸","🛰️","🔊","📡"] },
  gpu:                 { from: "#DCFCE7", to: "#BBF7D0", mid: "#16A34A", floaters: ["🎨","🖼️","✨","🌟","🎮"] },
  rom:                 { from: "#FFFBEB", to: "#FEF3C7", mid: "#D97706", floaters: ["📖","🔒","💾","⚙️","📋"] },
  ssd:                 { from: "#ECFEFF", to: "#CFFAFE", mid: "#0891B2", floaters: ["💿","⚡","🗂️","💾","🚀"] },
  "cooling-fan":       { from: "#E0F2FE", to: "#BAE6FD", mid: "#0284C7", floaters: ["❄️","💨","🌀","🔧","🌡️"] },
  motherboard:         { from: "#F5F3FF", to: "#EDE9FE", mid: "#9333EA", floaters: ["🔌","⚙️","🔧","💡","🔩"] },
  battery:             { from: "#DCFCE7", to: "#BBF7D0", mid: "#15803D", floaters: ["🔋","⚡","🌱","💚","🔌"] },
  files:               { from: "#FEFCE8", to: "#FEF9C3", mid: "#CA8A04", floaters: ["📄","📝","🗒️","✏️","📌"] },
  os:                  { from: "#FFF1F2", to: "#FFE4E6", mid: "#E11D48", floaters: ["🖱️","🚦","⚙️","🏗️","🖥️"] },
  software:            { from: "#ECFEFF", to: "#CFFAFE", mid: "#06B6D4", floaters: ["📦","🎯","⚙️","🎮","🌐"] },
  "drag-drop":         { from: "#FFF7ED", to: "#FFEDD5", mid: "#EA580C", floaters: ["🖱️","👆","🎯","📁","✋"] },
  "bits-bytes":        { from: "#F0FDF4", to: "#DCFCE7", mid: "#65A30D", floaters: ["0️⃣","1️⃣","📦","🔢","💾"] },
  hexadecimal:         { from: "#FDF4FF", to: "#FAE8FF", mid: "#A21CAF", floaters: ["🔣","🔢","🎨","🔤","💜"] },
  "machine-language":  { from: "#ECFDF5", to: "#D1FAE5", mid: "#047857", floaters: ["⚙️","🔢","💻","🤖","⚡"] },
  rgb:                 { from: "#FFF1F2", to: "#FFE4E6", mid: "#DC2626", floaters: ["🔴","🟢","🔵","🌈","🎨"] },
  "hex-colors":        { from: "#FDF2F8", to: "#FCE7F3", mid: "#BE185D", floaters: ["🎨","🌈","🖌️","✨","💜"] },
  resolution:          { from: "#EFF6FF", to: "#DBEAFE", mid: "#1E40AF", floaters: ["🖥️","📺","🔍","✨","🖼️"] },
  "hard-disk":         { from: "#F8FAFC", to: "#F1F5F9", mid: "#475569", floaters: ["💿","💾","🔄","🔧","📀"] },
  "ssd-deep":          { from: "#ECFDF5", to: "#D1FAE5", mid: "#0F766E", floaters: ["⚡","💾","🔬","💡","🚀"] },
  "memory-allocation": { from: "#FFFBEB", to: "#FEF3C7", mid: "#B45309", floaters: ["🗂️","📦","🔍","💾","🗃️"] },
  "what-is-code":      { from: "#EEF2FF", to: "#E0E7FF", mid: "#4F46E5", floaters: ["👩‍💻","💻","⌨️","🐛","✅"] },
  "python-intro":      { from: "#FFFBEB", to: "#FEF3C7", mid: "#2563EB", floaters: ["🐍","💻","⌨️","🎯","✅"] },
  "scratch-intro":     { from: "#FFF1F2", to: "#FFE4E6", mid: "#FF6B35", floaters: ["🧱","🎮","🎨","🤖","✨"] },
  "pc-hardware":       { from: "#F5F3FF", to: "#EDE9FE", mid: "#7C3AED", floaters: ["🖥️","⚙️","🔧","🔩","💡"] },
  "internet-www":      { from: "#EFF6FF", to: "#DBEAFE", mid: "#1D4ED8", floaters: ["🌐","📡","🔗","📶","🌍"] },
  "cyber-hygiene":     { from: "#F0FDF4", to: "#DCFCE7", mid: "#047857", floaters: ["🛡️","🔒","🦠","🔑","✅"] },
  "word-processing":   { from: "#FFFBEB", to: "#FEF3C7", mid: "#B45309", floaters: ["📝","📄","✏️","📖","🖊️"] },
  "spreadsheets":      { from: "#ECFDF5", to: "#D1FAE5", mid: "#15803D", floaters: ["📊","📈","🔢","📉","💹"] },
  "presentations":     { from: "#FFF1F2", to: "#FFE4E6", mid: "#BE185D", floaters: ["🎯","📊","🎤","✨","🖥️"] },
  "linux-os":          { from: "#F8FAFC", to: "#F1F5F9", mid: "#374151", floaters: ["🐧","💻","⌨️","🔧","🐚"] },
  "dual-boot":         { from: "#EEF2FF", to: "#E0E7FF", mid: "#4338CA", floaters: ["⚙️","🪟","🐧","🔄","💿"] },
};

const DEFAULT_THEME = { from: "#EEF4FF", to: "#F0EEFF", mid: "#7B61FF", floaters: ["✨","⭐","💡","🚀","🎉"] };

/* ── Simple markdown renderer: **bold**, # heading, blank line = paragraph break ── */
function renderStory(text: string, mid: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const paragraphs = text.split(/\n{2,}/);

  paragraphs.forEach((para, pi) => {
    const trimmed = para.trim();
    if (!trimmed) return;

    /* Section heading: "**Title**" on its own or starts with "**...:**" */
    const headingMatch = trimmed.match(/^\*\*([^*]+)\*\*$/);
    if (headingMatch) {
      nodes.push(
        <h3 key={`h-${pi}`} className="text-xl font-black mt-6 mb-2" style={{ color: mid }}>
          {headingMatch[1]}
        </h3>
      );
      return;
    }

    /* Otherwise render as a paragraph with inline bold */
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    nodes.push(
      <p key={`p-${pi}`} className="text-[17px] leading-[1.85] text-gray-800 mb-4">
        {parts.map((part, i) => {
          const bold = part.match(/^\*\*([^*]+)\*\*$/);
          if (bold) return <strong key={i} className="font-black" style={{ color: mid }}>{bold[1]}</strong>;
          return <span key={i}>{part}</span>;
        })}
      </p>
    );
  });

  return nodes;
}

interface Props {
  lesson: Lesson;
  ageGroup: AgeGroup;
  onContinue: () => void;
}

export default function StoryViewer({ lesson, ageGroup, onContinue }: Props) {
  const theme = LESSON_THEMES[lesson.id] ?? DEFAULT_THEME;
  const [showAnalogy, setShowAnalogy] = useState(false);

  const storyText = lesson.story[ageGroup] ?? lesson.story["11-14"] ?? lesson.story["8-10"] ?? "";
  const analogyText = lesson.analogy[ageGroup] ?? lesson.analogy["11-14"] ?? lesson.analogy["8-10"] ?? "";

  return (
    <div className="relative overflow-hidden rounded-3xl" style={{ background: `linear-gradient(160deg, ${theme.from} 0%, ${theme.to} 100%)` }}>

      {/* Floating background decorations */}
      {theme.floaters.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl pointer-events-none select-none"
          style={{ left: `${5 + i * 19}%`, top: `${8 + (i % 3) * 28}%`, opacity: 0.09 }}
          animate={{ y: [0, -16, 0], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.5 }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Decorative blob */}
      <div className="absolute w-72 h-72 rounded-full opacity-15 pointer-events-none -top-20 -right-20"
        style={{ background: theme.mid }} />

      {/* Content */}
      <div className="relative z-10 px-8 py-8 lg:px-10 lg:py-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          >
            {lesson.emoji}
          </motion.div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 leading-tight">{lesson.title}</h2>
            <p className="text-sm font-medium text-gray-500 mt-0.5">📖 Story &amp; Explanation</p>
          </div>
        </div>

        {/* Full story text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/75 backdrop-blur-sm rounded-2xl px-7 py-6 shadow-sm mb-6"
        >
          {renderStory(storyText, theme.mid)}
        </motion.div>

        {/* Analogy highlight */}
        {analogyText && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl px-6 py-5 mb-6 flex gap-4 items-start"
            style={{ background: `${theme.mid}18`, border: `2px solid ${theme.mid}40` }}
          >
            <span className="text-3xl mt-0.5 shrink-0">💡</span>
            <div>
              <p className="text-sm font-black mb-1" style={{ color: theme.mid }}>Think of it like this…</p>
              <p className="text-[17px] font-semibold text-gray-700 leading-relaxed italic">"{analogyText}"</p>
            </div>
          </motion.div>
        )}

        {/* Fun fact */}
        {lesson.funFact && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl px-6 py-5 mb-6 flex gap-4 items-start bg-white/60"
          >
            <span className="text-3xl shrink-0">🤩</span>
            <div>
              <p className="text-sm font-black mb-1 text-amber-600">Fun Fact</p>
              <p className="text-[16px] text-gray-700 leading-relaxed">{lesson.funFact}</p>
            </div>
          </motion.div>
        )}

        {/* Continue button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onContinue}
          className="w-full py-4 rounded-2xl font-black text-lg text-white shadow-lg"
          style={{ background: `linear-gradient(90deg, ${theme.mid}, #7B61FF)` }}
        >
          Explore it in Action 🔬 →
        </motion.button>

      </div>
    </div>
  );
}
