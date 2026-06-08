"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/hooks/useSession";
import { textToBinary, numberToBinary, numberToHex, EMOJI_BINARY } from "@/lib/utils";
import { AVATARS } from "@/lib/constants";

export default function SignaturePage() {
  const { session } = useSession();
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

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
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const [{ jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#082A63",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW - 20;
      const imgH = (canvas.height * imgW) / canvas.width;
      const yOffset = (pageH - imgH) / 2;
      pdf.addImage(imgData, "PNG", 10, Math.max(10, yOffset), imgW, imgH);
      pdf.save(`KidByte_Badge_${session.name}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Oops! Could not generate PDF. Try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* ── Page title with prominent KidByte logo ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8 gap-3"
      >
        <Image
          src="/KidByte_Logo.png"
          alt="KidByte"
          width={160}
          height={108}
          style={{ objectFit: "contain" }}
          priority
        />
        <h1 className="text-4xl font-black text-[#082A63]">Your Digital Badge 🏅</h1>
        <p className="text-gray-500 text-sm">Generated locally — never stored anywhere!</p>
      </motion.div>

      {/* ── Badge Card (plain div so html2canvas renders correctly) ── */}
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(135deg, #082A63 0%, #0A3590 60%, #0D47C0 100%)",
          borderRadius: 24,
          padding: 32,
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background watermark */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: 180,
            opacity: 0.05,
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          🤖
        </div>

        {/* ── Logo centred at top of badge ── */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/KidByte_Logo.png"
            alt="KidByte"
            width={110}
            height={74}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)", margin: "0 auto" }}
          />
        </div>

        {/* ── Badge sub-header ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: 16,
          }}
        >
          <div>
            <p style={{ color: "#93C5FD", fontSize: 10, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase" }}>
              Explorer Certificate
            </p>
            <p style={{ color: "#60A5FA", fontSize: 11 }}>kidByte.in · Privacy-First Learning</p>
          </div>
          <p style={{ color: "#60A5FA", fontSize: 11 }}>{today}</p>
        </div>

        {/* ── Avatar & Name ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: (avatar?.color ?? "#4B6CB7") + "44",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            {avatar?.emoji ?? "🤖"}
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 900, margin: 0 }}>{session.name}</h2>
            <p style={{ color: "#93C5FD", fontSize: 13, margin: "4px 0 0" }}>
              Age: {session.age} · {session.ageGroup} level
            </p>
            <p style={{ color: "#60A5FA", fontSize: 12, margin: "4px 0 0" }}>
              🎓 {session.visitedLessons.length} lesson{session.visitedLessons.length !== 1 ? "s" : ""} explored
            </p>
          </div>
        </div>

        {/* ── Binary Name ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <p style={{ color: "#93C5FD", fontSize: 10, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Your Name in Binary
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {nameBinary.map((bin, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontWeight: 900, width: 20, textAlign: "center" }}>
                  {session.name[i]?.toUpperCase()}
                </span>
                <span style={{ color: "#93C5FD", fontSize: 12 }}>→</span>
                <span style={{ fontFamily: "monospace", fontSize: 14, letterSpacing: 2 }}>
                  {bin.split("").map((b, bi) => (
                    <span key={bi} style={{ color: b === "1" ? "#8BEA00" : "#4B6CB7" }}>{b}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Age Binary & Hex ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: 16 }}>
            <p style={{ color: "#93C5FD", fontSize: 10, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Age in Binary
            </p>
            <p style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 900, color: "#A3E635", letterSpacing: 2 }}>
              {ageBinary}
            </p>
            <p style={{ color: "#60A5FA", fontSize: 11, marginTop: 4 }}>{session.age} in base 2</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: 16 }}>
            <p style={{ color: "#93C5FD", fontSize: 10, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Age in Hex
            </p>
            <p style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 900, color: "#FB923C", letterSpacing: 2 }}>
              {ageHex}
            </p>
            <p style={{ color: "#60A5FA", fontSize: 11, marginTop: 4 }}>{session.age} in base 16</p>
          </div>
        </div>

        {/* ── Emoji Binary Cheatsheet ── */}
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <p style={{ color: "#93C5FD", fontSize: 10, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
            Emoji Binary Cheatsheet
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {EMOJI_BINARY.slice(0, 8).map((e) => (
              <div key={e.unicode} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20 }}>{e.emoji}</span>
                <div>
                  <p style={{ fontFamily: "monospace", fontSize: 10, color: "#93C5FD", margin: 0 }}>{e.unicode}</p>
                  <p style={{ fontSize: 9, color: "#60A5FA", margin: 0 }}>{e.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Privacy footer ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 16,
            textAlign: "center",
          }}
        >
          <p style={{ color: "#60A5FA", fontSize: 11 }}>
            🔒 This badge was generated entirely on your device. No data was ever sent to any server.
          </p>
        </div>
      </div>

      {/* ── Download button ── */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleDownload}
        disabled={downloading}
        className="btn-shine w-full mt-6 text-white font-black text-lg py-4 rounded-2xl shadow-xl disabled:opacity-60"
        style={{ background: "linear-gradient(90deg, #3B82F6, #7C3AED)" }}
      >
        {downloading ? "⏳ Generating PDF…" : "Download My Badge as PDF 📥"}
      </motion.button>

      <p className="text-center text-xs text-gray-400 mt-3">
        The PDF is saved on your device. Nothing is uploaded anywhere.
      </p>
    </div>
  );
}
