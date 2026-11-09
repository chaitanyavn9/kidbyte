"use client";
import { motion } from "framer-motion";

export default function ChargeCycle({ accent = "#15803D" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#052e16)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">How a Lithium-Ion Battery Charges</p>
      </div>
      <div className="p-5">
        {[
          { emoji: "🔌", label: "Plug in charger", desc: "Electricity flows from wall into battery controller", color: "#F59E0B" },
          { emoji: "⚡", label: "Constant current phase", desc: "Fast charging: lithium ions move from positive to negative electrode", color: accent },
          { emoji: "🔋", label: "Constant voltage phase", desc: "Slows near 100% to prevent overcharging and heat damage", color: "#3B82F6" },
          { emoji: "✅", label: "Full charge", desc: "BMS (Battery Management System) stops current. Safe!", color: "#16A34A" },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}
            className="flex items-center gap-3 mb-2 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.05)" }}>
            <span className="text-xl">{s.emoji}</span>
            <div>
              <p className="text-xs font-black" style={{ color: s.color }}>{s.label}</p>
              <p className="text-[10px] text-white/40">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
