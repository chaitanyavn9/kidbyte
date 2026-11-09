"use client";
import { motion } from "framer-motion";

export default function ROMvsRAM({ accent = "#D97706" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" }}>
      <div className="px-5 py-3 border-b border-amber-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>ROM vs RAM — Permanent vs Temporary</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1 rounded-xl border-2 p-4" style={{ background: `${accent}10`, borderColor: `${accent}50` }}>
          <p className="text-xs font-black mb-2 text-center" style={{ color: accent }}>💿 ROM</p>
          <ul className="text-[10px] text-gray-600 space-y-1.5">
            <li>✅ Read-Only Memory</li>
            <li>✅ Keeps data without power</li>
            <li>✅ Contains BIOS/UEFI firmware</li>
            <li>✅ Runs before OS even loads</li>
            <li>✅ Written at factory</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 text-xs">vs</div>
        <div className="flex-1 rounded-xl border-2 border-purple-200 bg-purple-50 p-4">
          <p className="text-xs font-black text-purple-700 mb-2 text-center">📚 RAM</p>
          <ul className="text-[10px] text-gray-600 space-y-1.5">
            <li>✅ Read/Write Memory</li>
            <li>⚡ Loses data without power</li>
            <li>✅ Holds running programs</li>
            <li>✅ Works while PC is on</li>
            <li>✅ Constantly changing</li>
          </ul>
        </div>
      </div>
      <div className="px-5 pb-4 text-center">
        <p className="text-xs text-gray-600">ROM = your computer's <strong style={{ color: accent }}>permanent instructions</strong>. RAM = its <strong className="text-purple-700">temporary workspace</strong>.</p>
      </div>
    </div>
  );
}
