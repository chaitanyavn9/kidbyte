"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import { AVATARS } from "@/lib/constants";

type Step = "name" | "age" | "avatar" | "ready";

export default function Onboarding() {
  const [step, setStep] = useState<Step>("name");
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [avatar, setAvatar] = useState("");
  const { createSession } = useSession();
  const router = useRouter();

  const slideVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  const handleStart = () => {
    if (!name || !age || !avatar) return;
    createSession(name.trim(), Number(age), avatar);
    setStep("ready");
    setTimeout(() => router.push("/explore"), 1800);
  };

  return (
    <div
      id="onboarding"
      className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100"
    >
      {/* Progress dots */}
      <div className="flex justify-center gap-2 pt-6">
        {(["name", "age", "avatar"] as Step[]).map((s, i) => (
          <motion.div
            key={s}
            className="h-2.5 rounded-full"
            animate={{
              width: step === s ? 32 : 10,
              backgroundColor: step === s ? "#1D7CFF" : step === "ready" ? "#8BEA00" : "#E2E8F0",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="p-8 min-h-[320px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* Step 1: Name */}
          {step === "name" && (
            <motion.div
              key="name"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <div className="text-5xl mb-3 bounce-slow inline-block">👋</div>
                <h2 className="text-2xl font-black text-[#082A63]">Hi there, Explorer!</h2>
                <p className="text-gray-500 mt-1">What&apos;s your name?</p>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep("age")}
                placeholder="Type your name here..."
                maxLength={30}
                className="w-full border-2 border-blue-200 rounded-2xl px-5 py-4 text-lg font-bold text-center focus:border-blue-500 focus:outline-none transition-colors"
                autoFocus
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={!name.trim()}
                onClick={() => setStep("age")}
                className="btn-shine w-full bg-gradient-to-r from-blue-500 to-blue-600 disabled:from-gray-300 disabled:to-gray-300 text-white font-black text-lg py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all"
              >
                Next →
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Age */}
          {step === "age" && (
            <motion.div
              key="age"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <div className="text-5xl mb-3 bounce-slow inline-block">🎂</div>
                <h2 className="text-2xl font-black text-[#082A63]">
                  Hey {name}! How old are you?
                </h2>
                <p className="text-gray-500 mt-1">This helps us show the right lessons for you</p>
              </div>
              <div className="flex justify-center gap-3 flex-wrap">
                {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
                  <motion.button
                    key={n}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setAge(n)}
                    className={`w-12 h-12 rounded-2xl font-black text-lg transition-all ${
                      age === n
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-200 scale-110"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {n}
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("name")}
                  className="flex-1 border-2 border-gray-200 text-gray-500 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={!age}
                  onClick={() => setStep("avatar")}
                  className="btn-shine flex-[2] bg-gradient-to-r from-orange-400 to-orange-500 disabled:from-gray-300 disabled:to-gray-300 text-white font-black text-lg py-4 rounded-2xl shadow-lg"
                >
                  Next →
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Avatar */}
          {step === "avatar" && (
            <motion.div
              key="avatar"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <div className="text-5xl mb-3 bounce-slow inline-block">🎭</div>
                <h2 className="text-2xl font-black text-[#082A63]">Choose your avatar!</h2>
                <p className="text-gray-500 mt-1">Who will go on this adventure?</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {AVATARS.map((av) => (
                  <motion.button
                    key={av.id}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setAvatar(av.id)}
                    className={`flex flex-col items-center gap-1 py-3 px-2 rounded-2xl border-2 transition-all ${
                      avatar === av.id
                        ? "border-purple-400 bg-purple-50 shadow-lg scale-105"
                        : "border-gray-100 bg-gray-50 hover:border-purple-200"
                    }`}
                  >
                    <span className="text-4xl">{av.emoji}</span>
                    <span className="text-xs font-bold text-gray-600">{av.label}</span>
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("age")}
                  className="flex-1 border-2 border-gray-200 text-gray-500 font-bold py-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  ← Back
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={!avatar}
                  onClick={handleStart}
                  className="btn-shine flex-[2] bg-gradient-to-r from-purple-500 to-pink-500 disabled:from-gray-300 disabled:to-gray-300 text-white font-black text-lg py-4 rounded-2xl shadow-lg"
                >
                  Let&apos;s Go! 🚀
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Ready */}
          {step === "ready" && (
            <motion.div
              key="ready"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-7xl"
              >
                {AVATARS.find((a) => a.id === avatar)?.emoji ?? "🤖"}
              </motion.div>
              <h2 className="text-2xl font-black text-[#082A63]">
                Welcome, {name}! 🎉
              </h2>
              <p className="text-gray-500">Your adventure begins now...</p>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{ width: "100%" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
