"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "@/hooks/useSession";
import { Lesson, AgeGroup } from "@/lib/types";
import QuizComponent from "@/components/Quiz/QuizComponent";
import FolderAnimation from "@/components/animations/FolderAnimation";
import CpuAnimation from "@/components/animations/CpuAnimation";
import RamAnimation from "@/components/animations/RamAnimation";
import BinaryAnimation from "@/components/animations/BinaryAnimation";
import PixelAnimation from "@/components/animations/PixelAnimation";
import DeviceAnimation from "@/components/animations/DeviceAnimation";

function DeviceAnimationWrapper({ lessonId }: { lessonId: string }) {
  return <DeviceAnimation lessonId={lessonId} />;
}

const ANIMATION_MAP: Record<string, React.ComponentType> = {
  folder: FolderAnimation,
  cpu: CpuAnimation,
  ram: RamAnimation,
  binary: BinaryAnimation,
  pixels: PixelAnimation,
  computer: () => <DeviceAnimationWrapper lessonId="computer" />,
  laptop:   () => <DeviceAnimationWrapper lessonId="laptop" />,
  tablet:   () => <DeviceAnimationWrapper lessonId="tablet" />,
  phone:    () => <DeviceAnimationWrapper lessonId="phone" />,
};

type Tab = "story" | "explore" | "quiz";

interface Props {
  lesson: Lesson;
}

export default function LessonPage({ lesson }: Props) {
  const { session, markLessonVisited } = useSession();
  const [tab, setTab] = useState<Tab>("story");
  const [quizDone, setQuizDone] = useState(false);

  const ageGroup: AgeGroup = session?.ageGroup ?? "8-10";
  const AnimComp = ANIMATION_MAP[lesson.id];

  useEffect(() => {
    markLessonVisited(lesson.id);
  }, [lesson.id, markLessonVisited]);

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "story", label: "Story", emoji: "📖" },
    { id: "explore", label: "Explore", emoji: "🔬" },
    { id: "quiz", label: "Quiz", emoji: "🧩" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <motion.div
          className="text-7xl mb-4 inline-block"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          {lesson.emoji}
        </motion.div>
        <h1 className="text-3xl font-black text-[#082A63]">{lesson.title}</h1>
        {session && (
          <p className="text-sm text-gray-400 mt-1">
            Showing content for age {session.age} ({ageGroup} level)
          </p>
        )}
      </motion.div>

      {/* Tab Bar */}
      <div className="flex bg-gray-100 rounded-2xl p-1 mb-8 gap-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              tab === t.id
                ? "bg-white shadow-md text-[#082A63]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <span>{t.emoji}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {tab === "story" && (
          <motion.div
            key="story"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6"
          >
            {/* Story Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-50">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">📖</span>
                <span className="font-black text-[#082A63]">The Story</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {lesson.story[ageGroup]}
              </p>
            </div>

            {/* Analogy Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-6 border-2 border-orange-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">💡</span>
                <span className="font-black text-orange-700">Think of it like this...</span>
              </div>
              <p className="text-orange-800 font-semibold italic text-lg">
                &ldquo;{lesson.analogy[ageGroup]}&rdquo;
              </p>
            </div>

            {/* Fun Fact */}
            {lesson.funFact && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-5 border-2 border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🤩</span>
                  <span className="font-black text-purple-700">Fun Fact!</span>
                </div>
                <p className="text-purple-800 text-sm leading-relaxed">{lesson.funFact}</p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTab("explore")}
              className="btn-shine w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-lg py-4 rounded-2xl shadow-lg"
            >
              Now let&apos;s Explore! 🔬
            </motion.button>
          </motion.div>
        )}

        {tab === "explore" && (
          <motion.div
            key="explore"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-6"
          >
            {/* Interactive Animation */}
            <div className="bg-white rounded-3xl shadow-lg border-2 border-blue-50 overflow-hidden">
              {AnimComp ? (
                <AnimComp />
              ) : (
                <div className="p-12 text-center text-gray-300">
                  <span className="text-6xl">🚧</span>
                  <p className="mt-3 font-bold">Interactive demo coming soon!</p>
                </div>
              )}
            </div>

            {/* Do's and Don'ts */}
            {(lesson.dos || lesson.donts) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lesson.dos && (
                  <div className="bg-green-50 rounded-2xl p-5 border-2 border-green-100">
                    <p className="font-black text-green-700 mb-3">✅ Do&apos;s</p>
                    <ul className="flex flex-col gap-2">
                      {lesson.dos.map((d, i) => (
                        <li key={i} className="text-sm text-green-800 flex gap-2">
                          <span>•</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {lesson.donts && (
                  <div className="bg-red-50 rounded-2xl p-5 border-2 border-red-100">
                    <p className="font-black text-red-700 mb-3">❌ Don&apos;ts</p>
                    <ul className="flex flex-col gap-2">
                      {lesson.donts.map((d, i) => (
                        <li key={i} className="text-sm text-red-800 flex gap-2">
                          <span>•</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTab("quiz")}
              className="btn-shine w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-black text-lg py-4 rounded-2xl shadow-lg"
            >
              Take the Quiz! 🧩
            </motion.button>
          </motion.div>
        )}

        {tab === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <QuizComponent lesson={lesson} ageGroup={ageGroup} onDone={() => setQuizDone(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
