"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/hooks/useSession";
import { Lesson, AgeGroup } from "@/lib/types";
import QuizComponent from "@/components/Quiz/QuizComponent";
import StoryViewer from "@/components/Lesson/StoryViewer";
import FolderAnimation from "@/components/animations/FolderAnimation";
import CpuAnimation from "@/components/animations/CpuAnimation";
import RamAnimation from "@/components/animations/RamAnimation";
import BinaryAnimation from "@/components/animations/BinaryAnimation";
import PixelAnimation from "@/components/animations/PixelAnimation";
import DeviceAnimation from "@/components/animations/DeviceAnimation";

/* ── Page-level background gradients per lesson ── */
const PAGE_BG: Record<string, string> = {
  folder:             "from-yellow-50 via-amber-50 to-orange-50",
  cpu:                "from-blue-50 via-indigo-50 to-blue-50",
  ram:                "from-purple-50 via-violet-50 to-purple-50",
  binary:             "from-emerald-50 via-green-50 to-teal-50",
  pixels:             "from-pink-50 via-rose-50 to-fuchsia-50",
  computer:           "from-blue-50 via-sky-50 to-indigo-50",
  laptop:             "from-violet-50 via-purple-50 to-indigo-50",
  tablet:             "from-orange-50 via-amber-50 to-yellow-50",
  phone:              "from-rose-50 via-pink-50 to-red-50",
  gpu:                "from-green-50 via-emerald-50 to-teal-50",
  rom:                "from-amber-50 via-yellow-50 to-lime-50",
  ssd:                "from-cyan-50 via-sky-50 to-blue-50",
  "cooling-fan":      "from-sky-50 via-blue-50 to-cyan-50",
  motherboard:        "from-purple-50 via-fuchsia-50 to-violet-50",
  battery:            "from-green-50 via-lime-50 to-emerald-50",
  files:              "from-yellow-50 via-amber-50 to-orange-50",
  os:                 "from-red-50 via-rose-50 to-pink-50",
  software:           "from-cyan-50 via-teal-50 to-sky-50",
  "drag-drop":        "from-orange-50 via-amber-50 to-yellow-50",
  "bits-bytes":       "from-lime-50 via-green-50 to-emerald-50",
  hexadecimal:        "from-fuchsia-50 via-purple-50 to-violet-50",
  "machine-language": "from-emerald-50 via-teal-50 to-green-50",
  rgb:                "from-red-50 via-pink-50 to-purple-50",
  "hex-colors":       "from-pink-50 via-rose-50 to-fuchsia-50",
  resolution:         "from-blue-50 via-indigo-50 to-violet-50",
  "hard-disk":        "from-slate-50 via-gray-50 to-zinc-50",
  "ssd-deep":         "from-teal-50 via-emerald-50 to-green-50",
  "memory-allocation":"from-amber-50 via-yellow-50 to-orange-50",
  "what-is-code":     "from-indigo-50 via-blue-50 to-violet-50",
  "python-intro":     "from-yellow-50 via-blue-50 to-indigo-50",
  "scratch-intro":    "from-rose-50 via-orange-50 to-amber-50",
};

/* ── Accent colours for tab highlight per lesson ── */
const ACCENT: Record<string, string> = {
  folder:"#F59E0B", cpu:"#3B82F6", ram:"#7C3AED", binary:"#059669", pixels:"#EC4899",
  computer:"#1D7CFF", laptop:"#7B61FF", tablet:"#FF8A00", phone:"#FF4081",
  gpu:"#16A34A", rom:"#D97706", ssd:"#0891B2", "cooling-fan":"#0284C7",
  motherboard:"#9333EA", battery:"#15803D", files:"#CA8A04", os:"#E11D48",
  software:"#06B6D4", "drag-drop":"#EA580C", "bits-bytes":"#65A30D",
  hexadecimal:"#A21CAF", "machine-language":"#047857", rgb:"#DC2626",
  "hex-colors":"#BE185D", resolution:"#1E40AF", "hard-disk":"#475569",
  "ssd-deep":"#0F766E", "memory-allocation":"#B45309", "what-is-code":"#4F46E5",
  "python-intro":"#2563EB", "scratch-intro":"#FF6B35",
};

function DeviceAnimationWrapper({ lessonId }: { lessonId: string }) {
  return <DeviceAnimation lessonId={lessonId} />;
}

const ANIMATION_MAP: Record<string, React.ComponentType> = {
  folder: FolderAnimation, cpu: CpuAnimation, ram: RamAnimation,
  binary: BinaryAnimation, pixels: PixelAnimation,
  computer: () => <DeviceAnimationWrapper lessonId="computer" />,
  laptop:   () => <DeviceAnimationWrapper lessonId="laptop" />,
  tablet:   () => <DeviceAnimationWrapper lessonId="tablet" />,
  phone:    () => <DeviceAnimationWrapper lessonId="phone" />,
};

type Tab = "story" | "explore" | "quiz";

interface Props { lesson: Lesson; }

export default function LessonPage({ lesson }: Props) {
  const { session, markLessonVisited } = useSession();
  const [tab, setTab] = useState<Tab>("story");

  const ageGroup: AgeGroup = session?.ageGroup ?? "8-10";
  const AnimComp = ANIMATION_MAP[lesson.id];
  const pageBg = PAGE_BG[lesson.id] ?? "from-blue-50 via-indigo-50 to-purple-50";
  const accent = ACCENT[lesson.id] ?? "#1D7CFF";

  useEffect(() => { markLessonVisited(lesson.id); }, [lesson.id, markLessonVisited]);

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "story",   label: "Story",   emoji: "📖" },
    { id: "explore", label: "Explore", emoji: "🔬" },
    { id: "quiz",    label: "Quiz",    emoji: "🧩" },
  ];

  return (
    /* ── Animated page background ── */
    <div className={`min-h-screen bg-gradient-to-br ${pageBg} relative overflow-hidden`}>

      {/* Drifting background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 60 + i * 30,
            height: 60 + i * 30,
            background: accent,
            opacity: 0.04,
            left: `${5 + i * 16}%`,
            top: `${10 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">

        {/* ── Lesson Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-7"
        >
          {/* Bouncing big emoji */}
          <motion.div
            className="inline-block text-7xl mb-3 drop-shadow-md"
            animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          >
            {lesson.emoji}
          </motion.div>
          <h1 className="text-3xl font-black" style={{ color: "#082A63" }}>{lesson.title}</h1>
          {session && (
            <div
              className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ background: accent }}
            >
              <span>
                {session.avatar === "robot" ? "🤖" : session.avatar === "astronaut" ? "👨‍🚀" :
                 session.avatar === "scientist" ? "🧑‍🔬" : session.avatar === "artist" ? "🧑‍🎨" :
                 session.avatar === "ninja" ? "🥷" : "🦸"}
              </span>
              <span>{session.name} · Age {session.age} · {ageGroup} level</span>
            </div>
          )}
        </motion.div>

        {/* ── Tab Bar ── */}
        <div className="flex bg-white/70 backdrop-blur-sm rounded-2xl p-1.5 mb-6 gap-1 shadow-sm">
          {tabs.map((t) => (
            <motion.button
              key={t.id}
              onClick={() => setTab(t.id)}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-sm transition-all"
              style={{
                background: tab === t.id ? accent : "transparent",
                color: tab === t.id ? "white" : "#94A3B8",
                boxShadow: tab === t.id ? `0 4px 12px ${accent}40` : "none",
              }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </motion.button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <AnimatePresence mode="wait">

          {/* ────── STORY TAB ────── */}
          {tab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <StoryViewer
                lesson={lesson}
                ageGroup={ageGroup}
                onContinue={() => setTab("explore")}
              />
            </motion.div>
          )}

          {/* ────── EXPLORE TAB ────── */}
          {tab === "explore" && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-5"
            >
              {/* Interactive animation panel */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white overflow-hidden">
                {AnimComp ? (
                  <AnimComp />
                ) : (
                  <div className="p-14 text-center">
                    <motion.span
                      className="text-6xl block mb-3"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚧
                    </motion.span>
                    <p className="font-bold text-gray-400">Interactive demo coming soon!</p>
                  </div>
                )}
              </div>

              {/* Do's and Don'ts */}
              {(lesson.dos || lesson.donts) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {lesson.dos && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white/80 backdrop-blur rounded-2xl p-5 border-2 border-green-200"
                    >
                      <p className="font-black text-green-700 mb-3 flex items-center gap-2">
                        <span className="text-xl">✅</span> Do&apos;s
                      </p>
                      <ul className="flex flex-col gap-2">
                        {lesson.dos.map((d, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                            className="text-sm text-green-800 flex gap-2"
                          >
                            <span className="text-green-400 mt-0.5">▸</span> {d}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  {lesson.donts && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="bg-white/80 backdrop-blur rounded-2xl p-5 border-2 border-red-200"
                    >
                      <p className="font-black text-red-700 mb-3 flex items-center gap-2">
                        <span className="text-xl">❌</span> Don&apos;ts
                      </p>
                      <ul className="flex flex-col gap-2">
                        {lesson.donts.map((d, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.08 }}
                            className="text-sm text-red-800 flex gap-2"
                          >
                            <span className="text-red-400 mt-0.5">▸</span> {d}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setTab("quiz")}
                className="btn-shine w-full text-white font-black text-lg py-4 rounded-2xl shadow-lg"
                style={{ background: `linear-gradient(90deg, ${accent}, #7B61FF)` }}
              >
                Take the Quiz! 🧩
              </motion.button>
            </motion.div>
          )}

          {/* ────── QUIZ TAB ────── */}
          {tab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-1 shadow-lg border border-white">
                <QuizComponent lesson={lesson} ageGroup={ageGroup} onDone={() => {}} />
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
