"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Onboarding from "@/components/Onboarding/Onboarding";
import { useSession } from "@/hooks/useSession";
import { CATEGORIES } from "@/lib/constants";

export default function HomePage() {
  const { session, loaded } = useSession();

  return (
    <div className="gradient-hero min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.span
                className="text-7xl"
                animate={{ y: [0, -12, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              >
                🤖
              </motion.span>
              <div>
                <motion.h1
                  className="text-5xl sm:text-6xl font-black leading-none"
                  style={{
                    background: "linear-gradient(90deg, #FF8A00, #1D7CFF, #7B61FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  KidByte
                </motion.h1>
                <p className="text-gray-500 font-bold text-lg mt-1">
                  Touch • Play • Learn • Discover
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Discover how computers work — explained with{" "}
              <span className="text-blue-600 font-bold">fun stories</span>,{" "}
              <span className="text-orange-500 font-bold">cool animations</span>, and{" "}
              <span className="text-purple-600 font-bold">hands-on games</span>!
            </p>

            <div className="flex flex-wrap gap-3">
              {["🧠 CPU", "💾 Memory", "🔢 Binary", "🎨 Pixels", "📁 Folders", "⚙️ GPU"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-white border-2 border-blue-100 text-blue-700 font-bold text-sm px-4 py-1.5 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-3">
              {loaded && session ? (
                <Link href="/explore">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-shine bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-xl px-8 py-4 rounded-2xl shadow-xl shadow-blue-200"
                  >
                    Continue Learning 🚀
                  </motion.button>
                </Link>
              ) : (
                <a href="#onboarding">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-shine bg-gradient-to-r from-orange-400 to-pink-500 text-white font-black text-xl px-8 py-4 rounded-2xl shadow-xl shadow-orange-200"
                  >
                    Start My Adventure! 🌟
                  </motion.button>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {["✅ Zero Ads", "✅ Zero Tracking", "✅ No Data Stored"].map((b) => (
                <span
                  key={b}
                  className="text-xs bg-green-50 text-green-700 font-bold px-3 py-1 rounded-full border border-green-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Onboarding or Welcome back */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {loaded && session ? (
              <WelcomeBack session={session} />
            ) : (
              <div id="onboarding">
                <Onboarding />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-[#082A63] text-center mb-10"
        >
          What will you explore today? 🗺️
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={`/explore?category=${cat.id}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 border-2 cursor-pointer h-full transition-all"
                  style={{ borderColor: `${cat.color}25` }}
                >
                  <div
                    className="text-4xl mb-3 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${cat.color}15` }}
                  >
                    {cat.emoji}
                  </div>
                  <h3 className="font-black text-lg mb-1" style={{ color: cat.color }}>
                    {cat.label}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.description}</p>
                  <p className="text-xs text-gray-400 mt-2 font-semibold">
                    {cat.lessons.length} lessons →
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#082A63] py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { n: "7+", label: "Topic Categories" },
            { n: "20+", label: "Fun Lessons" },
            { n: "3", label: "Age Groups" },
            { n: "0", label: "Ads or Tracking" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-blue-300">{s.n}</p>
              <p className="text-sm text-blue-200 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function WelcomeBack({
  session,
}: {
  session: { name: string; avatar: string; visitedLessons: string[]; ageGroup: string };
}) {
  const avatarEmoji: Record<string, string> = {
    robot: "🤖", astronaut: "👨‍🚀", scientist: "🧑‍🔬",
    artist: "🧑‍🎨", ninja: "🥷", superhero: "🦸",
  };
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-100 text-center">
      <motion.div
        className="text-6xl mb-4"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.8 }}
      >
        {avatarEmoji[session.avatar] ?? "🤖"}
      </motion.div>
      <h2 className="text-2xl font-black text-[#082A63]">Welcome back, {session.name}!</h2>
      <p className="text-gray-500 mt-1 text-sm">
        {session.visitedLessons.length} lessons explored so far 🎉
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Link href="/explore">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shine w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black py-4 rounded-2xl"
          >
            Continue Exploring 🚀
          </motion.button>
        </Link>
        <Link href="/signature">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border-2 border-purple-200 text-purple-600 font-black py-3 rounded-2xl hover:bg-purple-50 transition-colors"
          >
            Get My Badge 🏅
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
