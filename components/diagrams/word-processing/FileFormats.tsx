"use client";
import { motion } from "framer-motion";

const FORMATS = [
  { ext: ".docx", name: "Word Document", color: "#2563EB", desc: "Microsoft Word — editable" },
  { ext: ".pdf",  name: "PDF",           color: "#DC2626", desc: "Read-only — looks same everywhere" },
  { ext: ".txt",  name: "Plain Text",    color: "#374151", desc: "No formatting — universal" },
  { ext: ".odt",  name: "OpenDocument",  color: "#059669", desc: "Free/open office format" },
  { ext: ".rtf",  name: "Rich Text",     color: "#7C3AED", desc: "Works in almost any app" },
];

export default function FileFormats({ accent = "#B45309" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF9C3)" }}>
      <div className="px-5 py-3 border-b border-yellow-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Document File Formats — When to Use Each</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {FORMATS.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white border border-gray-100">
            <div className="rounded-lg px-2 py-1 text-white text-xs font-black font-mono w-14 text-center" style={{ background: f.color }}>{f.ext}</div>
            <div className="flex-1">
              <p className="text-xs font-black text-gray-700">{f.name}</p>
              <p className="text-[10px] text-gray-500">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
