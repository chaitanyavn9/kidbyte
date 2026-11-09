"use client";
import { motion } from "framer-motion";

const PARTS = [
  { name: "Display",    icon: "🖥️", desc: "IPS/OLED screen, 60–120Hz refresh" },
  { name: "Keyboard",   icon: "⌨️", desc: "Backlit, full QWERTY + trackpad" },
  { name: "Battery",    icon: "🔋", desc: "Li-ion, 40–100Wh, charges via USB-C" },
  { name: "CPU",        icon: "⚙️", desc: "Intel/AMD — lower wattage for heat" },
  { name: "RAM",        icon: "💾", desc: "Soldered to motherboard in thin models" },
  { name: "Ports",      icon: "🔌", desc: "USB-A, USB-C/Thunderbolt, HDMI, SD" },
];

export default function LaptopParts({ accent = "#0369A1" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0F9FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>What's Inside a Laptop?</p>
      </div>
      <div className="p-5 grid grid-cols-2 gap-2">
        {PARTS.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}
            className="rounded-xl bg-white border border-blue-100 p-3 flex gap-3 items-start">
            <span className="text-xl mt-0.5">{p.icon}</span>
            <div>
              <p className="text-xs font-black text-gray-700">{p.name}</p>
              <p className="text-[9px] text-gray-500 leading-snug">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
