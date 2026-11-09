"use client";
import { motion } from "framer-motion";

const STEPS = [
  { emoji: "⌨️", label: "You type", value: "google.com", color: "#3B82F6" },
  { emoji: "📖", label: "DNS Lookup", value: "What's the IP?", color: "#7C3AED" },
  { emoji: "📍", label: "IP Found", value: "142.250.4.100", color: "#059669" },
  { emoji: "🌐", label: "Connect", value: "Google's server", color: "#DC2626" },
  { emoji: "📄", label: "Page loads!", value: "HTML arrives", color: "#F59E0B" },
];

export default function DNSFlow({ accent = "#1D4ED8" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1e3a5f)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">What Happens When You Type a URL</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {STEPS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5"
            style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}40` }}
          >
            <span className="text-xl shrink-0">{s.emoji}</span>
            <div className="flex-1">
              <p className="text-xs font-black" style={{ color: s.color }}>{s.label}</p>
              <p className="text-[10px] text-white/50 font-mono">{s.value}</p>
            </div>
            <span className="text-white/20 text-xs">{i + 1}</span>
          </motion.div>
        ))}
        <p className="text-[10px] text-white/30 text-center mt-1">All 5 steps happen in under 100ms — invisible to you!</p>
      </div>
    </div>
  );
}
