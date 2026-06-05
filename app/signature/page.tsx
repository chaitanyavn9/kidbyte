"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "@/hooks/useSession";
import { textToBinary, numberToBinary, numberToHex, EMOJI_BINARY } from "@/lib/utils";
import { AVATARS } from "@/lib/constants";

export default function SignaturePage() {
  const { session } = useSession();
  const cardRef = useRef<HTMLDivElement>(null);

  if (!session) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🏅</div>
        <h1 className="text-2xl font-black text-[#082A63] mb-3">No explorer found!</h1>
        <p className="text-gray-500 mb-6">You need to enter your name and age first.</p>
        <Link href="/">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black px-8 py-4 rounded-2xl">
            Go Setup My Profile →
          </button>
        </Link>
      </div>
    );
  }

  const nameBinary = textToBinary(session.name);
  const ageBinary = numberToBinary(session.age);
  const ageHex = numberToHex(session.age);
  const avatar = AVATARS.find((a) => a.id === session.avatar);
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleDownload = async () => {
    const { default: jsPDF } = await import("jspdf");
    const { default: html2canvas } = await import("html2canvas");
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const imgH = (canvas.height * pageW) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 10, pageW, imgH);
    pdf.save(`KidByte_Badge_${session.name}.pdf`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-black text-[#082A63]">Your Digital Badge 🏅</h1>
        <p className="text-gray-500 mt-2">Generated locally — never stored anywhere!</p>
      </motion.div>

      {/* Badge Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#082A63] rounded-3xl p-8 text-white overflow-hidden relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 text-[200px] opacity-5 select-none pointer-events-none">
          🤖
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-blue-300 text-xs font-black uppercase tracking-widest">KidByte</p>
            <p className="text-blue-400 text-xs">Explorer Certificate</p>
          </div>
          <p className="text-blue-400 text-xs">{today}</p>
        </div>

        {/* Avatar & Name */}
        <div className="flex items-center gap-5 mb-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-5xl"
            style={{ backgroundColor: avatar?.color + "33" }}
          >
            {avatar?.emoji ?? "🤖"}
          </div>
          <div>
            <h2 className="text-3xl font-black">{session.name}</h2>
            <p className="text-blue-300">Age: {session.age} • {session.ageGroup} level</p>
            <p className="text-blue-400 text-sm mt-1">
              {session.visitedLessons.length} lessons explored 🎓
            </p>
          </div>
        </div>

        {/* Binary Name */}
        <div className="bg-white/10 rounded-2xl p-5 mb-5">
          <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-3">
            Your Name in Binary
          </p>
          <div className="flex flex-col gap-2">
            {nameBinary.map((bin, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-black text-white w-5 text-center">
                  {session.name[i]?.toUpperCase()}
                </span>
                <span className="text-blue-300 text-xs">→</span>
                <div className="flex gap-0.5">
                  {bin.split("").map((b, bi) => (
                    <span
                      key={bi}
                      className="binary-text text-sm font-black"
                      style={{ color: b === "1" ? "#8BEA00" : "#4B6CB7" }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age in Binary & Hex */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-2">
              Age in Binary
            </p>
            <p className="binary-text text-xl font-black text-lime-400">{ageBinary}</p>
            <p className="text-blue-400 text-xs mt-1">{session.age} in base 2</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-2">
              Age in Hex
            </p>
            <p className="binary-text text-xl font-black text-orange-400">{ageHex}</p>
            <p className="text-blue-400 text-xs mt-1">{session.age} in base 16</p>
          </div>
        </div>

        {/* Emoji Binary Sheet */}
        <div className="bg-white/10 rounded-2xl p-5 mb-5">
          <p className="text-blue-300 text-xs font-black uppercase tracking-widest mb-3">
            Emoji Binary Cheatsheet
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {EMOJI_BINARY.slice(0, 8).map((e) => (
              <div key={e.unicode} className="flex items-center gap-2">
                <span className="text-xl">{e.emoji}</span>
                <div>
                  <p className="text-xs text-blue-300 font-mono">{e.unicode}</p>
                  <p className="text-[10px] text-blue-500 font-mono leading-none">{e.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div className="border-t border-white/20 pt-4 text-center">
          <p className="text-blue-400 text-xs">
            🔒 This badge was generated entirely on your device.
            <br />
            No data was ever sent to any server.
          </p>
        </div>
      </motion.div>

      {/* Download button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleDownload}
        className="btn-shine w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black text-lg py-4 rounded-2xl shadow-xl"
      >
        Download My Badge as PDF 📥
      </motion.button>

      <p className="text-center text-xs text-gray-400 mt-3">
        The PDF is saved on your device. Nothing is uploaded anywhere.
      </p>
    </div>
  );
}
