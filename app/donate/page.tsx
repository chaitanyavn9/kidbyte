"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const USES = [
  { icon: "⚡", text: "Add more interactive labs and animations" },
  { icon: "📚", text: "Add more lessons across science, coding, and math" },
  { icon: "🧩", text: "Build better quizzes and learning games" },
  { icon: "🌍", text: "Keep it free and accessible for every child everywhere" },
];

export default function DonatePage() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: "var(--bg, #F8FBFF)" }}>
      <div className="w-full max-w-md">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="text-5xl mb-4">❤️</div>
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: "#082A63" }}>
            Support KidByte
          </h1>
          <p className="leading-relaxed" style={{ color: "#2D4B8E" }}>
            KidByte is completely free — no ads, no subscriptions.
            Your support helps every child keep learning.
          </p>
        </motion.div>

        {/* What support helps */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border-2 p-6 mb-6"
          style={{ background: "#FFFFFF", borderColor: "#DBEAFE" }}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#6B8EC8" }}>
            Your support helps us:
          </p>
          <ul className="space-y-3">
            {USES.map((u, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "#2D4B8E" }}
              >
                <span className="text-xl mt-0.5">{u.icon}</span>
                {u.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Free statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-center text-sm mb-8 italic"
          style={{ color: "#6B8EC8" }}
        >
          KidByte stays free for children. Always. 💫
        </motion.p>

        {/* India UPI button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <button
            onClick={() => setShowQR(true)}
            className="w-full py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            style={{
              background: "linear-gradient(135deg, #5f259f, #7c3aed)",
              boxShadow: "0 4px 24px rgba(95,37,159,0.3)",
            }}
          >
            <span className="text-2xl">🇮🇳</span>
            <span>₹ Support from India</span>
            <span className="text-xl">🙏</span>
          </button>
          <p className="text-center text-xs mt-2" style={{ color: "#6B8EC8" }}>via PhonePe UPI</p>
        </motion.div>

        {/* International coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-4 rounded-2xl border-2 border-dashed p-4 text-center"
          style={{ borderColor: "#DBEAFE" }}
        >
          <p className="text-sm font-bold" style={{ color: "#6B8EC8" }}>
            🌍 International options coming soon
          </p>
        </motion.div>

        {/* Back link */}
        <div className="text-center mt-8">
          <Link href="/" className="text-sm transition-colors" style={{ color: "#6B8EC8" }}>
            ← Back to KidByte
          </Link>
        </div>
      </div>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(8,42,99,0.80)", backdropFilter: "blur(16px)" }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="rounded-3xl p-6 border-2 max-w-sm w-full text-center"
              style={{ background: "#FFFFFF", borderColor: "#DBEAFE" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* PhonePe header */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "#5f259f" }}>
                  ₱
                </div>
                <span className="font-bold text-lg" style={{ color: "#082A63" }}>PhonePe</span>
              </div>
              <p className="text-xs font-bold tracking-widest mb-4" style={{ color: "#7c3aed" }}>
                SCAN &amp; PAY
              </p>

              {/* QR Code */}
              <div
                className="mx-auto rounded-2xl overflow-hidden mb-4"
                style={{
                  width: 240,
                  height: 240,
                  background: "white",
                  padding: 10,
                  boxShadow: "0 0 40px rgba(95,37,159,0.2)",
                  border: "2px solid #DBEAFE",
                }}
              >
                <Image
                  src="/phonepe-qr.png"
                  alt="PhonePe QR Code — VANKAYALA NARASIMHA CHAITANYA"
                  width={220}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>

              <p className="font-bold text-sm mb-1" style={{ color: "#082A63" }}>VANKAYALA NARASIMHA CHAITANYA</p>
              <p className="text-xs mb-5" style={{ color: "#6B8EC8" }}>Open PhonePe → Scan QR → Pay any amount</p>

              <button
                onClick={() => setShowQR(false)}
                className="w-full py-3 rounded-xl text-sm border-2 transition-all hover:border-blue-300"
                style={{ color: "#2D4B8E", borderColor: "#DBEAFE" }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
