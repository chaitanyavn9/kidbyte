"use client";
import { motion } from "framer-motion";

export default function PartitionLayout({ accent = "#4338CA" }: { accent?: string }) {
  const partitions = [
    { label: "EFI System\nPartition", size: "500 MB", color: "#F59E0B", flex: 5 },
    { label: "Windows 11\nC: Drive", size: "250 GB", color: "#0078D4", flex: 45 },
    { label: "Ubuntu 24.04\n/ (root)", size: "150 GB", color: "#E95420", flex: 30 },
    { label: "Shared\nData", size: "100 GB", color: "#16A34A", flex: 20 },
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF2FF,#E0E7FF)" }}>
      <div className="px-5 py-3 border-b border-indigo-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Your Drive with Dual Boot — Partitioned Storage</p>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-500 mb-2">500 GB SSD</p>
        <div className="flex h-10 rounded-lg overflow-hidden border border-gray-200 mb-3">
          {partitions.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="h-full flex items-center justify-center overflow-hidden" style={{ flex: p.flex, background: p.color }}>
              <span className="text-[8px] font-black text-white truncate px-1">{p.label.split("\n")[0]}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {partitions.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ background: p.color }} />
              <p className="text-[10px] font-black text-gray-700 flex-1 whitespace-pre">{p.label.replace("\n", " — ")}</p>
              <p className="text-[10px] text-gray-400">{p.size}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
