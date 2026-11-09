"use client";
import { motion } from "framer-motion";

const FILE_TYPES = [
  { ext: ".jpg", emoji: "🖼️", label: "Photo", color: "#EC4899", example: "birthday.jpg" },
  { ext: ".mp3", emoji: "🎵", label: "Music", color: "#7C3AED", example: "song.mp3" },
  { ext: ".mp4", emoji: "🎬", label: "Video", color: "#EF4444", example: "movie.mp4" },
  { ext: ".pdf", emoji: "📄", label: "Document", color: "#F59E0B", example: "report.pdf" },
  { ext: ".py",  emoji: "🐍", label: "Python code", color: "#3B82F6", example: "game.py" },
  { ext: ".exe", emoji: "⚙️", label: "Program", color: "#059669", example: "app.exe" },
];

export default function FileTypes({ accent = "#CA8A04" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" }}>
      <div className="px-5 py-3 border-b border-amber-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>File Types — The Extension Tells You Everything</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-2">
        {FILE_TYPES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl p-3 flex items-center gap-3 bg-white/80 border"
            style={{ borderColor: `${f.color}30` }}
          >
            <div className="text-2xl">{f.emoji}</div>
            <div>
              <p className="text-xs font-black" style={{ color: f.color }}>{f.ext}</p>
              <p className="text-[10px] text-gray-600">{f.label}</p>
              <p className="text-[10px] text-gray-400 font-mono">{f.example}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 pb-4">
        <div className="rounded-xl px-4 py-2 text-center bg-white/60 border border-amber-200">
          <p className="text-xs text-gray-600">The <strong style={{ color: accent }}>extension</strong> (letters after the dot) tells apps how to open the file</p>
        </div>
      </div>
    </div>
  );
}
