"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TREE = [
  { id: "root", name: "📁 Home", depth: 0, children: ["docs", "photos", "music"] },
  { id: "docs", name: "📁 Documents", depth: 1, children: ["work", "school"] },
  { id: "work", name: "📄 Resume.pdf", depth: 2, children: [] },
  { id: "school", name: "📄 Homework.docx", depth: 2, children: [] },
  { id: "photos", name: "📁 Photos", depth: 1, children: ["2024"] },
  { id: "2024", name: "🖼️ birthday.jpg", depth: 2, children: [] },
  { id: "music", name: "📁 Music", depth: 1, children: ["fav"] },
  { id: "fav", name: "🎵 favourite.mp3", depth: 2, children: [] },
];

export default function FolderHierarchy({ accent = "#CA8A04" }: { accent?: string }) {
  const [open, setOpen] = useState<Set<string>>(new Set(["root"]));
  function toggle(id: string) {
    const next = new Set(open);
    next.has(id) ? next.delete(id) : next.add(id);
    setOpen(next);
  }

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" }}>
      <div className="px-5 py-3 border-b border-amber-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Folders Inside Folders — Click to Explore</p>
      </div>
      <div className="p-5">
        {TREE.filter(n => n.depth === 0 || open.has(TREE.find(p => p.children?.includes(n.id))?.id ?? "")).map((node, i) => (
          <motion.div key={node.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}
            onClick={() => node.children.length > 0 && toggle(node.id)}
            className="flex items-center py-1 cursor-pointer hover:bg-amber-50/50 rounded-lg px-1"
            style={{ paddingLeft: `${node.depth * 16 + 4}px` }}>
            {node.depth > 0 && <span className="text-amber-300 mr-1 text-xs">└─</span>}
            <span className="text-sm">{node.name}</span>
            {node.children.length > 0 && (
              <span className="ml-1 text-xs text-amber-400">{open.has(node.id) ? "▾" : "▸"}</span>
            )}
          </motion.div>
        ))}
        <p className="text-[10px] text-gray-500 mt-2 text-center">Folders organise files — like drawers in a filing cabinet</p>
      </div>
    </div>
  );
}
