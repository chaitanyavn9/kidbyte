"use client";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { useSession } from "@/hooks/useSession";
import lessons from "@/content/lessons";

const AVAILABLE_LESSONS = Object.keys(lessons);

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const { session } = useSession();

  const allLessons = CATEGORIES.flatMap((c) =>
    c.lessons.map((id) => ({ id, category: c }))
  );

  const filtered =
    activeCategory === "all"
      ? allLessons
      : allLessons.filter((l) => l.category.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-black text-[#082A63] mb-2">Explore Lessons 🚀</h1>
        <p className="text-gray-500">Pick a topic and start your adventure!</p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
            activeCategory === "all"
              ? "bg-[#082A63] text-white"
              : "bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300"
          }`}
        >
          🌟 All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-4 py-2 rounded-full font-bold text-sm transition-all border-2"
            style={{
              backgroundColor: activeCategory === cat.id ? cat.color : "white",
              color: activeCategory === cat.id ? "white" : cat.color,
              borderColor: cat.color,
            }}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map(({ id, category }, i) => {
          const lesson = lessons[id];
          const isAvailable = AVAILABLE_LESSONS.includes(id);
          const isVisited = session?.visitedLessons.includes(id);

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              {isAvailable ? (
                <Link href={`/explore/${id}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-white rounded-2xl p-4 border-2 cursor-pointer text-center relative"
                    style={{ borderColor: `${category.color}30` }}
                  >
                    {isVisited && (
                      <div className="absolute top-2 right-2 text-xs bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">
                        ✓
                      </div>
                    )}
                    <div className="text-3xl mb-2">{lesson?.emoji ?? category.emoji}</div>
                    <p className="font-black text-xs text-[#082A63] leading-tight">
                      {lesson?.title ?? id}
                    </p>
                  </motion.div>
                </Link>
              ) : (
                <div
                  className="bg-gray-50 rounded-2xl p-4 border-2 border-dashed border-gray-200 text-center opacity-60"
                >
                  <div className="text-3xl mb-2 grayscale">{category.emoji}</div>
                  <p className="font-bold text-xs text-gray-400 capitalize">
                    {id.replace(/-/g, " ")}
                  </p>
                  <p className="text-[9px] text-gray-400 mt-1">Coming soon</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {session && session.visitedLessons.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-100 text-center"
        >
          <p className="text-xl font-black text-[#082A63]">
            🏆 {session.visitedLessons.length} lesson{session.visitedLessons.length !== 1 ? "s" : ""} explored!
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Keep going — more adventures await!
          </p>
          <Link href="/signature">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black px-6 py-3 rounded-2xl"
            >
              Claim My Badge 🏅
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading...</div>}>
      <ExploreContent />
    </Suspense>
  );
}
