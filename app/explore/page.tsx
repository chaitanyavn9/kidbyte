"use client";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { useSession } from "@/hooks/useSession";
import lessons from "@/content/lessons";

const AVAILABLE_LESSONS = Object.keys(lessons);

/* Big illustrated backgrounds for each lesson (CSS gradient art) */
const LESSON_BG: Record<string, { from: string; to: string }> = {
  folder:     { from: "#FCD34D", to: "#F59E0B" },
  cpu:        { from: "#60A5FA", to: "#3B82F6" },
  ram:        { from: "#A78BFA", to: "#7C3AED" },
  binary:     { from: "#34D399", to: "#059669" },
  pixels:     { from: "#F9A8D4", to: "#EC4899" },
};

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
    <div className="min-h-screen" style={{ background: "#F8FBFF" }}>
      {/* Page header */}
      <div
        className="py-12 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #0A2FA8 0%, #1D7CFF 100%)" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-white mb-2"
        >
          Explore Lessons 🚀
        </motion.h1>
        <p className="text-blue-200 font-semibold">
          Pick any topic — story, animation, then quiz!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full font-black text-sm transition-all shadow-sm ${
              activeCategory === "all"
                ? "bg-[#082A63] text-white shadow-blue-200"
                : "bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300"
            }`}
          >
            🌟 All Topics
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2.5 rounded-full font-black text-sm transition-all border-2"
              style={{
                backgroundColor: activeCategory === cat.id ? cat.color : "white",
                color: activeCategory === cat.id ? "white" : cat.color,
                borderColor: cat.color,
                boxShadow: activeCategory === cat.id ? `0 4px 12px ${cat.color}40` : "none",
              }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Lessons grid — larger cards matching mockup style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ id, category }, i) => {
            const lesson = lessons[id];
            const isAvailable = AVAILABLE_LESSONS.includes(id);
            const isVisited = session?.visitedLessons.includes(id);
            const bg = LESSON_BG[id];

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
                      whileHover={{ y: -6, boxShadow: `0 20px 40px ${category.color}30` }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white rounded-3xl overflow-hidden border-2 cursor-pointer relative"
                      style={{ borderColor: `${category.color}25` }}
                    >
                      {/* Illustrated top panel */}
                      <div
                        className="h-32 flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: bg
                            ? `linear-gradient(135deg, ${bg.from}, ${bg.to})`
                            : `linear-gradient(135deg, ${category.color}CC, ${category.color}88)`,
                        }}
                      >
                        {/* Decorative blobs */}
                        <div
                          className="absolute w-20 h-20 rounded-full opacity-30"
                          style={{ background: "white", right: -10, bottom: -10 }}
                        />
                        <div
                          className="absolute w-12 h-12 rounded-full opacity-20"
                          style={{ background: "white", left: 15, top: 10 }}
                        />
                        <motion.span
                          className="text-6xl relative z-10 drop-shadow-lg"
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {lesson?.emoji ?? category.emoji}
                        </motion.span>
                        {isVisited && (
                          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-black px-2 py-1 rounded-full shadow-lg">
                            ✓ Done
                          </div>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-5">
                        <span
                          className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: `${category.color}15`, color: category.color }}
                        >
                          {category.label}
                        </span>
                        <h3 className="font-black text-lg text-[#082A63] mt-2 mb-1">
                          {lesson?.title ?? id}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                          {lesson?.analogy?.["8-10"] ?? ""}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {["📖", "🔬", "🧩"].map((icon) => (
                              <span
                                key={icon}
                                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                              >
                                {icon}
                              </span>
                            ))}
                          </div>
                          <span
                            className="text-sm font-black"
                            style={{ color: category.color }}
                          >
                            Start →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ) : (
                  <div
                    className="bg-white rounded-3xl overflow-hidden border-2 border-dashed border-gray-200 opacity-50"
                  >
                    <div
                      className="h-32 flex items-center justify-center"
                      style={{ background: `${category.color}10` }}
                    >
                      <span className="text-5xl grayscale">{category.emoji}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-black text-[#082A63] capitalize">
                        {id.replace(/-/g, " ")}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 font-semibold">🚧 Coming soon!</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress callout */}
        {session && session.visitedLessons.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-14 rounded-3xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #082A63, #1D7CFF)" }}
          >
            <p className="text-3xl font-black text-white mb-1">
              🏆 {session.visitedLessons.length} lesson{session.visitedLessons.length !== 1 ? "s" : ""} explored!
            </p>
            <p className="text-blue-200 mb-5">Keep going — more adventures await!</p>
            <Link href="/signature">
              <motion.button
                whileHover={{ scale: 1.04 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-[#082A63] font-black px-8 py-3 rounded-2xl shadow-lg"
              >
                Claim My Digital Badge 🏅
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-32">
        <div className="text-4xl bounce-slow">🚀</div>
      </div>
    }>
      <ExploreContent />
    </Suspense>
  );
}
