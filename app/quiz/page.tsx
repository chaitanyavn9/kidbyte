"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "@/hooks/useSession";
import lessons from "@/content/lessons";
import QuizComponent from "@/components/Quiz/QuizComponent";

const LESSON_IDS = Object.keys(lessons);

export default function QuizPage() {
  const { session } = useSession();
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const ageGroup = session?.ageGroup ?? "8-10";

  if (selectedLesson) {
    const lesson = lessons[selectedLesson];
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <button
          onClick={() => setSelectedLesson(null)}
          className="mb-6 flex items-center gap-2 text-blue-500 font-bold hover:text-blue-700"
        >
          ← Back to Quiz Hub
        </button>
        <div className="text-center mb-8">
          <div className="text-5xl mb-2">{lesson.emoji}</div>
          <h1 className="text-2xl font-black text-[#082A63]">{lesson.title} Quiz</h1>
          {session && (
            <p className="text-sm text-gray-400 mt-1">Age group: {ageGroup}</p>
          )}
        </div>
        <QuizComponent lesson={lesson} ageGroup={ageGroup} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="text-6xl mb-4 bounce-slow inline-block">🧩</div>
        <h1 className="text-4xl font-black text-[#082A63]">Quiz Zone!</h1>
        <p className="text-gray-500 mt-2">
          {session
            ? `Questions matched for age ${session.age} — let's see what you know!`
            : "Test your knowledge across all topics!"}
        </p>
      </motion.div>

      {!session && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center mb-8">
          <p className="text-blue-700 font-bold">
            💡 <Link href="/" className="underline">Set up your profile</Link> to get age-matched questions!
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {LESSON_IDS.map((id, i) => {
          const lesson = lessons[id];
          const score = session?.quizScores?.[id];
          const hasQuiz = lesson.quiz.some((q) => q.for === ageGroup);

          return (
            <motion.button
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedLesson(id)}
              className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-blue-200 text-center relative transition-all"
            >
              {score !== undefined && (
                <div className="absolute top-2 right-2 text-xs bg-yellow-100 text-yellow-700 font-black px-2 py-0.5 rounded-full">
                  {score}/{lesson.quiz.filter((q) => q.for === ageGroup).length} ⭐
                </div>
              )}
              <div className="text-4xl mb-2">{lesson.emoji}</div>
              <p className="font-black text-sm text-[#082A63] leading-tight">{lesson.title}</p>
              {!hasQuiz && (
                <p className="text-[10px] text-gray-400 mt-1">No questions for your age yet</p>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
