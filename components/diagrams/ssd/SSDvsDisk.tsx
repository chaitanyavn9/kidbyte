"use client";
import { motion } from "framer-motion";

export default function SSDvsDisk({ accent = "#0891B2" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#ECFEFF,#CFFAFE)" }}>
      <div className="px-5 py-3 border-b border-cyan-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>SSD vs Hard Disk — Why SSDs Win</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1 rounded-xl bg-gray-100 border-2 border-gray-300 p-4">
          <p className="text-xs font-black text-gray-700 mb-2 text-center">🐢 Hard Disk (HDD)</p>
          <div className="flex justify-center mb-3">
            <motion.div className="w-12 h-12 rounded-full border-4 border-gray-400 bg-gray-200 flex items-center justify-center"
              animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
            </motion.div>
          </div>
          <ul className="text-[10px] text-gray-600 space-y-1">
            <li>🌀 Spinning metal disk</li>
            <li>💨 Read speed: ~150 MB/s</li>
            <li>⏱️ Access: 5–20 ms</li>
            <li>📢 Makes noise</li>
            <li>🤕 Can break if dropped</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 text-xs font-bold">vs</div>
        <div className="flex-1 rounded-xl border-2 p-4" style={{ background: `${accent}10`, borderColor: `${accent}50` }}>
          <p className="text-xs font-black mb-2 text-center" style={{ color: accent }}>⚡ SSD (NVMe)</p>
          <div className="flex justify-center mb-3">
            <div className="w-12 h-8 rounded-md flex items-center justify-center" style={{ background: `${accent}20`, border: `2px solid ${accent}` }}>
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-1 h-4 mx-0.5 rounded-full" style={{ background: accent }}
                  animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </div>
          </div>
          <ul className="text-[10px] text-gray-600 space-y-1">
            <li>✅ Flash memory chips</li>
            <li>🚀 Read speed: ~7,000 MB/s</li>
            <li>⚡ Access: 50–100 µs</li>
            <li>🔇 Silent</li>
            <li>💪 Shock-resistant</li>
          </ul>
        </div>
      </div>
      <div className="px-5 pb-4 text-center">
        <p className="text-xs text-gray-600 bg-white/70 rounded-xl px-4 py-2">SSD is <strong style={{ color: accent }}>40× faster</strong> than HDD — that's why your computer boots in seconds instead of minutes</p>
      </div>
    </div>
  );
}
