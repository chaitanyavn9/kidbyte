"use client";
import { motion } from "framer-motion";

const TREE = [
  { name: "📁 My Computer", depth: 0 },
  { name: "📁 Documents", depth: 1 },
  { name: "📄 Report.pdf", depth: 2 },
  { name: "📄 Notes.txt", depth: 2 },
  { name: "📁 Photos", depth: 1 },
  { name: "🖼️ birthday.jpg", depth: 2 },
  { name: "🖼️ holiday.jpg", depth: 2 },
  { name: "📁 Music", depth: 1 },
  { name: "🎵 favourite.mp3", depth: 2 },
];

export default function FileSystemTree({ accent = "#CA8A04" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF9C3)" }}>
      <div className="px-5 py-3 border-b border-yellow-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Files Live Inside Folders — Like a Tree</p>
      </div>
      <div className="p-5">
        {TREE.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: item.depth === 0 ? -8 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className="flex items-center py-1"
            style={{ paddingLeft: `${item.depth * 20 + 4}px` }}
          >
            {item.depth > 0 && (
              <span className="mr-2 text-gray-300 text-sm">└─</span>
            )}
            <span className="text-sm font-bold" style={{ color: item.name.startsWith("📁") ? accent : "#374151" }}>
              {item.name}
            </span>
          </motion.div>
        ))}
        <div className="mt-3 rounded-xl px-4 py-2 text-center bg-white/70 border border-yellow-200">
          <p className="text-xs text-gray-600">Every file has a <strong style={{ color: accent }}>path</strong>: <code className="text-[10px] bg-gray-100 px-1 rounded">Documents/Report.pdf</code></p>
        </div>
      </div>
    </div>
  );
}
