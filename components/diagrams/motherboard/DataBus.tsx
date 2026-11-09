"use client";
import { motion } from "framer-motion";

export default function DataBus({ accent = "#9333EA" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#2d1b69)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">The Motherboard's Job: Connect Everything</p>
      </div>
      <div className="p-5">
        <div className="flex flex-col items-center gap-3">
          {/* CPU in center */}
          <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl" style={{ background: `${accent}30`, border: `2px solid ${accent}` }}>🧠</div>
          <p className="text-xs font-black text-white/70">CPU (via motherboard)</p>
          {/* Bus lines */}
          <div className="flex items-start gap-6 w-full justify-center">
            {[
              { emoji: "📚", label: "RAM", color: "#7C3AED" },
              { emoji: "🎨", label: "GPU", color: "#16A34A" },
              { emoji: "⚡", label: "SSD", color: "#0891B2" },
              { emoji: "🔌", label: "USB", color: "#F59E0B" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <motion.div
                  className="w-0.5 h-8"
                  style={{ background: item.color }}
                  animate={{ scaleY: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: `${item.color}20`, border: `1.5px solid ${item.color}50` }}>
                  {item.emoji}
                </div>
                <p className="text-[9px] font-black" style={{ color: item.color }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-[10px] text-white/30 mt-4">The motherboard provides the physical traces (data highways) for all these connections</p>
      </div>
    </div>
  );
}
