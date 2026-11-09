"use client";
import { motion } from "framer-motion";

const PARTS = [
  { name: "CPU",         price: "$150–$400", role: "Brain — runs all code",          color: "#EF4444" },
  { name: "Motherboard", price: "$80–$300",  role: "Main board — connects everything", color: "#F97316" },
  { name: "RAM",         price: "$40–$150",  role: "Working memory — 16–32 GB",       color: "#EAB308" },
  { name: "GPU",         price: "$200–$800", role: "Graphics — gaming & AI workloads", color: "#22C55E" },
  { name: "SSD",         price: "$60–$200",  role: "Storage — OS + files, 1–2 TB",    color: "#3B82F6" },
  { name: "PSU",         price: "$60–$150",  role: "Power supply — 600–850W",         color: "#8B5CF6" },
  { name: "Case",        price: "$50–$200",  role: "Chassis — holds & cools all parts", color: "#EC4899" },
];

export default function PCBuildOverview({ accent = "#1D4ED8" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>PC Build — Every Part and Its Job</p>
      </div>
      <div className="p-5 flex flex-col gap-1.5">
        {PARTS.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2 bg-white border border-blue-50">
            <div className="rounded-lg px-2 py-1 text-white text-xs font-black w-24 text-center shrink-0" style={{ background: p.color }}>{p.name}</div>
            <p className="text-[10px] text-gray-600 flex-1">{p.role}</p>
            <p className="text-[10px] font-black text-gray-400 shrink-0">{p.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
