"use client";
import { motion } from "framer-motion";

export default function DocFormatting({ accent = "#B45309" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" }}>
      <div className="px-5 py-3 border-b border-amber-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>What Makes a Word Document?</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-white border-2 border-gray-200 p-4 mb-3">
          <p className="text-xl font-black text-gray-800 border-b border-gray-200 pb-2 mb-2">My School Project</p>
          <p className="text-sm font-bold text-gray-600 mb-1">Introduction</p>
          <p className="text-xs text-gray-700">The <strong>computer</strong> is a machine that processes <em>information</em>. It was invented in the <u>20th century</u>.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Heading", what: "Big title text", shortcut: "Ctrl+1" },
            { label: "Bold", what: "Important words", shortcut: "Ctrl+B" },
            { label: "Italic", what: "Emphasis", shortcut: "Ctrl+I" },
            { label: "Save", what: "Store your work", shortcut: "Ctrl+S" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="rounded-lg p-2 bg-white border border-amber-100 flex items-center gap-2">
              <div>
                <p className="text-xs font-black text-gray-700">{item.label}</p>
                <p className="text-[9px] text-gray-500">{item.what}</p>
              </div>
              <code className="ml-auto text-[9px] bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-600">{item.shortcut}</code>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
