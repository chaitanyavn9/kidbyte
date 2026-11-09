"use client";
import { motion } from "framer-motion";

export default function InternetPackets({ accent = "#1D4ED8" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>How Data Travels the Internet</p>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-center shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-2xl">💻</div>
            <p className="text-[9px] text-gray-500 mt-1">Your Device</p>
          </div>
          <div className="flex-1 relative h-8 flex items-center">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="absolute h-6 w-8 rounded-md flex items-center justify-center text-[9px] font-black text-white shadow"
                style={{ background: accent, left: "10%" }}
                animate={{ left: ["10%", "90%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
              >
                PKT
              </motion.div>
            ))}
            <div className="w-full h-0.5 bg-blue-200 rounded-full" />
          </div>
          <div className="text-center shrink-0">
            <div className="w-12 h-12 rounded-xl bg-green-100 border-2 border-green-300 flex items-center justify-center text-2xl">🌐</div>
            <p className="text-[9px] text-gray-500 mt-1">YouTube Server</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { step: "1. Break up", desc: "Video split into thousands of small packets", emoji: "✂️" },
            { step: "2. Route", desc: "Each packet finds its own path through the Internet", emoji: "🗺️" },
            { step: "3. Reassemble", desc: "Your device puts all packets back in order", emoji: "🧩" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.15 }}
              className="rounded-xl p-3 bg-white/80 border border-blue-100 text-center">
              <div className="text-xl mb-1">{s.emoji}</div>
              <p className="text-[10px] font-black text-blue-700">{s.step}</p>
              <p className="text-[9px] text-gray-500 mt-0.5">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
