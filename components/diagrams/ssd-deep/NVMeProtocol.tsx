"use client";
import { motion } from "framer-motion";

export default function NVMeProtocol({ accent = "#1D4ED8" }: { accent?: string }) {
  const speeds = [
    { label: "HDD (SATA)",       read: 150,  max: 7000, color: "#94A3B8" },
    { label: "SATA SSD",         read: 550,  max: 7000, color: "#F59E0B" },
    { label: "NVMe Gen 3",       read: 3500, max: 7000, color: "#3B82F6" },
    { label: "NVMe Gen 4",       read: 7000, max: 7000, color: "#7C3AED" },
  ];
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#E8F5E9)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>NVMe vs SATA — Speed Difference</p>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {speeds.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black text-gray-600">{s.label}</p>
              <p className="text-[10px] font-black" style={{ color: s.color }}>{s.read >= 1000 ? `${s.read / 1000} GB/s` : `${s.read} MB/s`}</p>
            </div>
            <div className="rounded-full bg-gray-100 overflow-hidden h-3">
              <motion.div initial={{ width: 0 }} animate={{ width: `${(s.read / s.max) * 100}%` }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                className="h-full rounded-full" style={{ background: s.color }}>
              </motion.div>
            </div>
          </motion.div>
        ))}
        <p className="text-[10px] text-gray-500 text-center mt-1">NVMe connects directly to CPU via PCIe lanes — no bottleneck</p>
      </div>
    </div>
  );
}
