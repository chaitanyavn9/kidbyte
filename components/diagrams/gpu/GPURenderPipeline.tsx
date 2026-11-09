"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  { id: "vertex", emoji: "📐", title: "Vertex Shader", color: "#3B82F6", bg: "#DBEAFE",
    simple: "Takes the 3D shape data (corners of triangles) and figures out where each corner should appear on your 2D screen.", detail: "Applies the Model-View-Projection matrix transformation to each vertex position. Runs once per vertex in parallel across all GPU cores." },
  { id: "raster", emoji: "🔺", title: "Rasterisation", color: "#7C3AED", bg: "#EDE9FE",
    simple: "Converts the triangle shapes into a grid of pixels — decides which pixels on your screen are inside each triangle.", detail: "Triangle setup, edge equations, and fragment generation. Each pixel inside a triangle becomes a 'fragment' to be shaded." },
  { id: "pixel", emoji: "🎨", title: "Pixel Shader", color: "#059669", bg: "#D1FAE5",
    simple: "Gives each pixel its final colour — using textures (images), lighting, shadows, and special effects.", detail: "Samples textures from VRAM, computes lighting using Phong/PBR models, applies post-processing effects like bloom, DOF, shadows." },
  { id: "output", emoji: "🖥️", title: "Output Merger", color: "#DC2626", bg: "#FEE2E2",
    simple: "Puts everything together — decides which pixels in front cover the ones behind, and blends transparent objects.", detail: "Depth testing (Z-buffer: only closer fragments win), alpha blending for transparency, stencil testing for effects like mirrors." },
];

export default function GPURenderPipeline({ accent = "#16A34A" }: { accent?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1a1a2e)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">GPU Rendering Pipeline</p>
        <p className="text-[10px] text-white/30 mt-0.5">3D scene → 2D pixels on screen. Click a stage.</p>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-4">
          <div className="shrink-0 text-center">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">🌍</div>
            <p className="text-[9px] text-white/40 mt-1">3D Scene</p>
          </div>
          {STAGES.map((s, i) => (
            <div key={s.id} className="flex items-center gap-1 flex-1">
              <motion.div className="text-white/30 text-xs" animate={{ x: [0, 2, 0] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}>→</motion.div>
              <motion.button
                onClick={() => setActive(active === s.id ? null : s.id)}
                className="flex-1 rounded-xl p-2 text-center transition-all"
                style={{ background: active === s.id ? s.bg : "rgba(255,255,255,0.08)", border: `1.5px solid ${active === s.id ? s.color : "transparent"}` }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-2xl mb-1">{s.emoji}</div>
                <p className="text-[9px] font-black leading-tight" style={{ color: active === s.id ? s.color : "rgba(255,255,255,0.6)" }}>{s.title}</p>
              </motion.button>
            </div>
          ))}
          <div className="shrink-0 text-center ml-1">
            <motion.div className="text-white/30 text-xs" animate={{ x: [0, 2, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
          </div>
          <div className="shrink-0 text-center">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">📺</div>
            <p className="text-[9px] text-white/40 mt-1">Screen</p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {active && (() => {
            const s = STAGES.find(x => x.id === active)!;
            return (
              <motion.div key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-xl px-4 py-3" style={{ background: s.bg, border: `1.5px solid ${s.color}40` }}>
                <p className="text-xs font-black mb-1" style={{ color: s.color }}>{s.emoji} {s.title}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{s.simple}</p>
                <p className="text-[10px] text-gray-500 mt-1 leading-relaxed italic">{s.detail}</p>
              </motion.div>
            );
          })()}
        </AnimatePresence>
        {!active && <div className="rounded-xl px-4 py-2 text-center bg-white/5"><p className="text-[10px] text-white/30">👆 Tap any stage to understand it</p></div>}
      </div>
    </div>
  );
}
