"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Onboarding from "@/components/Onboarding/Onboarding";
import { useSession } from "@/hooks/useSession";
import { CATEGORIES } from "@/lib/constants";

export default function HomePage() {
  const { session, loaded } = useSession();

  return (
    <div className="min-h-screen" style={{ background: "#F8FBFF" }}>
      {/* ── HERO BANNER ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0A2FA8 0%, #1565E8 45%, #1D7CFF 100%)",
        }}
      >
        {/* Floating blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { size: 300, x: -80, y: -80, color: "#7B61FF22" },
            { size: 200, x: "70%", y: -40, color: "#FF8A0022" },
            { size: 150, x: "30%", y: "60%", color: "#8BEA0015" },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ width: b.size, height: b.size, left: b.x, top: b.y, background: b.color }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          {/* Dot confetti */}
          {["#FF8A00", "#8BEA00", "#7B61FF", "#FF4081", "#00BCD4", "#FFD700"].map((c, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: c,
                left: `${10 + i * 15}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Logo + text */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="drop-shadow-2xl"
            >
              <Image
                src="/kidbyte-logo.png"
                alt="KidByte"
                width={420}
                height={220}
                priority
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
                onError={(e) => {
                  /* fallback: hide broken image */
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback text logo shown if image missing */}
              <noscript>
                <span className="text-5xl font-black text-white">KidByte</span>
              </noscript>
            </motion.div>

            <p className="text-blue-100 text-xl font-bold max-w-md leading-relaxed">
              Learn how computers work through{" "}
              <span className="text-yellow-300">fun stories</span>,{" "}
              <span className="text-lime-300">cool animations</span> &{" "}
              <span className="text-pink-300">games</span> — for curious kids everywhere!
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {loaded && session ? (
                <Link href="/explore">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-shine bg-gradient-to-r from-orange-400 to-yellow-400 text-[#082A63] font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/40"
                  >
                    Continue Learning 🚀
                  </motion.button>
                </Link>
              ) : (
                <a href="#onboarding">
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-shine bg-gradient-to-r from-orange-400 to-yellow-400 text-[#082A63] font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/40"
                  >
                    Start My Adventure! 🌟
                  </motion.button>
                </a>
              )}
              <Link href="/explore">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white font-black text-lg px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-colors"
                >
                  Browse Lessons 📚
                </motion.button>
              </Link>
            </div>

            {/* Privacy badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["✅ Zero Ads", "✅ Zero Tracking", "✅ Always Free"].map((b) => (
                <span
                  key={b}
                  className="text-xs bg-white/15 text-white font-bold px-3 py-1.5 rounded-full border border-white/25"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Onboarding card */}
          <motion.div
            className="w-full max-w-md flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="onboarding"
          >
            {loaded && session ? (
              <WelcomeBack session={session} />
            ) : (
              <Onboarding />
            )}
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16 -mb-1">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path
              d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z"
              fill="#F8FBFF"
            />
          </svg>
        </div>
      </section>

      {/* ── LESSON CATEGORY CARDS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black text-[#082A63] mb-3">
            What will you explore today? 🗺️
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Pick a topic — each one has a story, an interactive demo, and a quiz!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/explore?category=${cat.id}`}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 24px 48px ${cat.color}35` }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 cursor-pointer h-full transition-all"
                  style={{ borderColor: `${cat.color}30` }}
                >
                  {/* Colored top band */}
                  <div
                    className="h-3 w-full"
                    style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)` }}
                  />
                  <div className="p-6">
                    {/* Big icon bubble */}
                    <motion.div
                      className="text-5xl mb-4 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ background: `${cat.color}18` }}
                    >
                      {cat.emoji}
                    </motion.div>
                    <h3
                      className="font-black text-xl mb-1.5 leading-tight"
                      style={{ color: cat.color }}
                    >
                      {cat.label}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>

                    {/* Lessons count chip */}
                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className="text-xs font-black px-3 py-1 rounded-full"
                        style={{ background: `${cat.color}18`, color: cat.color }}
                      >
                        {cat.lessons.length} lessons
                      </span>
                      <motion.span
                        className="text-lg"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        style={{ color: cat.color }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #EEF4FF 0%, #F0EEFF 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#082A63] text-center mb-12"
          >
            How KidByte works ✨
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { emoji: "✏️", step: "1", label: "Enter your name & age", color: "#1D7CFF" },
              { emoji: "🎭", step: "2", label: "Pick your avatar", color: "#FF8A00" },
              { emoji: "🚀", step: "3", label: "Explore lessons & quizzes", color: "#7B61FF" },
              { emoji: "🏅", step: "4", label: "Download your digital badge!", color: "#8BEA00" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                  style={{ background: s.color }}
                >
                  {s.emoji}
                </div>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: s.color }}
                >
                  {s.step}
                </div>
                <p className="font-bold text-[#082A63]">{s.label}</p>
                {i < 3 && (
                  <div className="hidden sm:block absolute" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#082A63" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {[
            { n: "7+", label: "Topic Categories", emoji: "📚" },
            { n: "20+", label: "Fun Lessons", emoji: "🎓" },
            { n: "3", label: "Age Groups", emoji: "👦" },
            { n: "0", label: "Ads or Tracking", emoji: "🛡️" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-3xl">{s.emoji}</span>
              <p className="text-4xl font-black text-blue-300">{s.n}</p>
              <p className="text-sm text-blue-200 font-semibold">{s.label}</p>
            </motion.div>
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
        🎓 {session.visitedLessons.length} lesson{session.visitedLessons.length !== 1 ? "s" : ""} explored
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Link href="/explore">
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="btn-shine w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black py-4 rounded-2xl"
          >
            Continue Exploring 🚀
          </motion.button>
        </Link>
        <Link href="/signature">
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="w-full border-2 border-purple-200 text-purple-600 font-black py-3 rounded-2xl hover:bg-purple-50 transition-colors"
          >
            Get My Badge 🏅
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
