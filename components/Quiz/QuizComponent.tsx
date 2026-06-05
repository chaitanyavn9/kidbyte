"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lesson, AgeGroup } from "@/lib/types";
import { useSession } from "@/hooks/useSession";

interface Props {
  lesson: Lesson;
  ageGroup: AgeGroup;
  onDone?: (score: number) => void;
}

export default function QuizComponent({ lesson, ageGroup, onDone }: Props) {
  const { saveQuizScore } = useSession();
  const questions = useMemo(
    () => lesson.quiz.filter((q) => q.for === ageGroup),
    [lesson.quiz, ageGroup]
  );

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const score = answers.filter(Boolean).length;

  if (questions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-4xl mb-3">🚧</p>
        <p className="font-bold">Quiz questions for your age group coming soon!</p>
      </div>
    );
  }

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
  };

  const handleNext = () => {
    const correct = selected === q.correct;
    const newAnswers = [...answers, correct];
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 >= questions.length) {
      const finalScore = newAnswers.filter(Boolean).length;
      saveQuizScore(lesson.id, finalScore);
      onDone?.(finalScore);
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-6 py-8 text-center"
      >
        <motion.div
          animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
          transition={{ duration: 0.8 }}
          className="text-7xl"
        >
          {pct >= 80 ? "🏆" : pct >= 50 ? "⭐" : "💪"}
        </motion.div>
        <h2 className="text-2xl font-black text-[#082A63]">
          {pct >= 80 ? "Amazing!" : pct >= 50 ? "Good job!" : "Keep practicing!"}
        </h2>
        <div className="bg-white rounded-2xl px-8 py-4 shadow-lg border-2 border-blue-100">
          <p className="text-4xl font-black text-blue-600">
            {score}/{questions.length}
          </p>
          <p className="text-gray-500 text-sm">{pct}% correct</p>
        </div>
        {score < questions.length && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setCurrent(0);
              setSelected(null);
              setAnswers([]);
              setDone(false);
            }}
            className="bg-blue-500 text-white font-black px-8 py-3 rounded-2xl"
          >
            Try Again 🔄
          </motion.button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{ width: `${((current) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-bold text-gray-500">
          {current + 1}/{questions.length}
        </span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-5"
        >
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-50">
            <p className="font-black text-[#082A63] text-xl leading-snug">{q.question}</p>
          </div>

          <div className="flex flex-col gap-3">
            {q.choices.map((choice, i) => {
              const isCorrect = i === q.correct;
              const isSelected = i === selected;
              let bg = "bg-white border-2 border-gray-200 hover:border-blue-300";
              if (selected !== null) {
                if (isCorrect) bg = "bg-green-50 border-2 border-green-400";
                else if (isSelected) bg = "bg-red-50 border-2 border-red-400";
                else bg = "bg-white border-2 border-gray-100 opacity-60";
              }

              return (
                <motion.button
                  key={i}
                  whileHover={selected === null ? { scale: 1.02 } : {}}
                  whileTap={selected === null ? { scale: 0.98 } : {}}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all ${bg}`}
                >
                  <span className="mr-3 text-lg">
                    {selected !== null
                      ? isCorrect
                        ? "✅"
                        : isSelected
                        ? "❌"
                        : "○"
                      : ["🅐", "🅑", "🅒", "🅓"][i]}
                  </span>
                  {choice}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {selected !== null && q.explanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl p-4 border-2 ${
                  selected === q.correct
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-orange-50 border-orange-200 text-orange-800"
                }`}
              >
                <p className="font-bold text-sm">
                  {selected === q.correct ? "💡 " : "🤔 "}
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {selected !== null && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="btn-shine w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-lg py-4 rounded-2xl shadow-lg"
            >
              {current + 1 >= questions.length ? "See Results! 🎉" : "Next Question →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
