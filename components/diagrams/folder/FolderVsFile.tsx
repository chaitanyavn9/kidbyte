"use client";
import { motion } from "framer-motion";

export default function FolderVsFile({ accent = "#CA8A04" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFFBEB,#FEF9C3)" }}>
      <div className="px-5 py-3 border-b border-yellow-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Files vs Folders — What's the Difference?</p>
      </div>
      <div className="p-5 flex gap-4">
        <div className="flex-1 rounded-xl bg-blue-50 border-2 border-blue-200 p-4 text-center">
          <div className="text-5xl mb-2">📄</div>
          <p className="text-sm font-black text-blue-700">File</p>
          <ul className="text-[10px] text-gray-600 text-left mt-2 space-y-1">
            <li>✅ Contains data</li>
            <li>✅ Has an extension (.jpg, .mp3)</li>
            <li>✅ Can be opened</li>
            <li>✅ Has a size (KB, MB)</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-gray-400 text-xs font-bold">vs</div>
        <div className="flex-1 rounded-xl border-2 p-4 text-center" style={{ background: `${accent}10`, borderColor: `${accent}50` }}>
          <div className="text-5xl mb-2">📁</div>
          <p className="text-sm font-black" style={{ color: accent }}>Folder</p>
          <ul className="text-[10px] text-gray-600 text-left mt-2 space-y-1">
            <li>✅ Contains files/folders</li>
            <li>✅ No extension</li>
            <li>✅ Can be opened (shows contents)</li>
            <li>✅ Size = sum of all inside</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
