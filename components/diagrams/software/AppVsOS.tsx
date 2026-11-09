"use client";
import { motion } from "framer-motion";

export default function AppVsOS({ accent = "#06B6D4" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0F9FF,#E0F2FE)" }}>
      <div className="px-5 py-3 border-b border-sky-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>OS vs Software — What's the Difference?</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1 rounded-xl bg-red-50 border-2 border-red-200 p-4">
          <p className="text-xs font-black text-red-700 mb-2 text-center">🖱️ Operating System</p>
          <ul className="text-[11px] text-gray-600 space-y-1.5">
            <li>✅ Runs first at startup</li>
            <li>✅ Always running in background</li>
            <li>✅ Manages all hardware</li>
            <li>✅ Required to run any app</li>
            <li>✅ Windows / macOS / Android</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 text-xs font-bold px-1">vs</div>
        <div className="flex-1 rounded-xl bg-blue-50 border-2 border-blue-200 p-4">
          <p className="text-xs font-black text-blue-700 mb-2 text-center">📱 Software App</p>
          <ul className="text-[11px] text-gray-600 space-y-1.5">
            <li>✅ Starts when you open it</li>
            <li>✅ Does one specific job</li>
            <li>✅ Needs the OS to run</li>
            <li>✅ You can install/remove it</li>
            <li>✅ Chrome / Minecraft / WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="px-5 pb-4">
        <div className="rounded-xl px-4 py-2 text-center bg-white/70">
          <p className="text-xs text-gray-600">The OS is the <strong style={{ color: accent }}>foundation</strong>. Apps are <strong style={{ color: "#3B82F6" }}>built on top</strong> of it.</p>
        </div>
      </div>
    </div>
  );
}
