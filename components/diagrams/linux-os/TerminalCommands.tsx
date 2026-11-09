"use client";
import { motion } from "framer-motion";

const CMDS = [
  { cmd: "ls", desc: "List files in folder", example: "ls Documents/" },
  { cmd: "cd", desc: "Change directory (folder)", example: "cd Downloads" },
  { cmd: "mkdir", desc: "Make a new folder", example: "mkdir MyProject" },
  { cmd: "cp", desc: "Copy a file", example: "cp a.txt b.txt" },
  { cmd: "sudo", desc: "Run as administrator", example: "sudo apt install vim" },
];

export default function TerminalCommands({ accent = "#374151" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#111827)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Linux Terminal — Essential Commands</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {CMDS.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="rounded-xl p-3 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.05)" }}>
            <code className="text-sm font-black font-mono text-green-400 w-14 shrink-0">{c.cmd}</code>
            <div>
              <p className="text-xs text-white/60">{c.desc}</p>
              <code className="text-[10px] text-yellow-400 font-mono">$ {c.example}</code>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
