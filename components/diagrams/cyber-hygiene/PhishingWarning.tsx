"use client";
import { motion } from "framer-motion";

export default function PhishingWarning({ accent = "#047857" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF1F2,#FFE4E6)" }}>
      <div className="px-5 py-3 border-b border-red-200">
        <p className="text-xs font-black uppercase tracking-widest text-red-700">🚨 Spot the Fake — Phishing Warning Signs</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-white border-2 border-red-300 p-4 mb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500">⚠️</span>
            <p className="text-xs font-black text-red-700">Suspicious Email:</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700">
            <p><strong>From:</strong> <span className="text-red-500">support@g00gle.com</span> ⚠️</p>
            <p className="mt-1"><strong>Subject:</strong> URGENT: Your account will be deleted!</p>
            <p className="mt-2 text-gray-600">Click here immediately → <span className="text-blue-500 underline">http://evil-site.ru/login</span> ⚠️</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { sign: "Suspicious sender", detail: "g00gle.com ≠ google.com — one letter changed!", color: "#EF4444" },
            { sign: "URGENT language", detail: "Real companies don't threaten account deletion by email", color: "#F97316" },
            { sign: "Suspicious URL", detail: "Hover before clicking — check the real domain", color: "#F59E0B" },
            { sign: "Asks for password", detail: "No legitimate service asks for your password by email", color: "#7C3AED" },
          ].map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="flex gap-2 items-start rounded-lg px-3 py-2" style={{ background: `${w.color}10`, border: `1.5px solid ${w.color}30` }}>
              <span className="text-sm mt-0.5">🚩</span>
              <div>
                <p className="text-xs font-black" style={{ color: w.color }}>{w.sign}</p>
                <p className="text-[10px] text-gray-500">{w.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
