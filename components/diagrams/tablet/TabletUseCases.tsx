"use client";
import { motion } from "framer-motion";

const USES = [
  { icon: "📚", title: "Reading & Study",  desc: "Large screen, light weight — perfect for ebooks and notes" },
  { icon: "🎨", title: "Drawing & Art",    desc: "Stylus support — illustrators use iPad Pro + Apple Pencil" },
  { icon: "🎮", title: "Gaming",           desc: "Big touchscreen games, retro emulators" },
  { icon: "🎬", title: "Video Streaming",  desc: "Wide aspect ratio, good speakers for Netflix/YouTube" },
  { icon: "📋", title: "Presentations",    desc: "Connect to projector, run Keynote or PowerPoint" },
  { icon: "📸", title: "Video Calls",      desc: "Front camera at eye level — better for meetings" },
];

export default function TabletUseCases({ accent = "#C026D3" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF4FF,#FAE8FF)" }}>
      <div className="px-5 py-3 border-b border-fuchsia-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>What Are Tablets Best For?</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-2">
        {USES.map((u, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}
            className="rounded-xl bg-white border border-fuchsia-100 p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{u.icon}</span>
              <p className="text-xs font-black text-gray-700">{u.title}</p>
            </div>
            <p className="text-[9px] text-gray-500 leading-snug">{u.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
