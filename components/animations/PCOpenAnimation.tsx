"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* Map lesson id → which part inside the PC to highlight */
const PART_MAP: Record<string, string> = {
  cpu: "cpu",
  motherboard: "motherboard",
  ram: "ram",
  gpu: "gpu",
  ssd: "storage",
  "hard-disk": "storage",
  "ssd-deep": "storage",
  "cooling-fan": "cooler",
  battery: "psu",
  rom: "cpu",
};

/* Evolution data for each hardware part */
const EVOLUTION: Record<string, { year: string; label: string; detail: string; color: string }[]> = {
  cpu: [
    { year: "1971", label: "Intel 4004", detail: "World's first CPU. 4-bit, 108 kHz, 2,300 transistors on 10μm process.", color: "#F59E0B" },
    { year: "1978", label: "Intel 8086", detail: "16-bit x86 ISA born. 5–10 MHz, 29,000 transistors — foundation of all PCs.", color: "#EF4444" },
    { year: "1993", label: "Pentium", detail: "32-bit superscalar. 60–300 MHz, 3.1M transistors. Dual integer pipelines.", color: "#8B5CF6" },
    { year: "2003", label: "Athlon 64", detail: "First 64-bit consumer CPU. x86-64 architecture, integrated memory controller.", color: "#3B82F6" },
    { year: "2006", label: "Core 2 Duo", detail: "First Intel dual-core. 65nm. Killed Pentium 4's hot 'NetBurst' design.", color: "#10B981" },
    { year: "2017", label: "Ryzen 1000", detail: "AMD's Zen architecture. 14nm, 8 cores/16 threads. IPC leap that forced Intel to compete.", color: "#EC4899" },
    { year: "2021", label: "Alder Lake", detail: "Intel hybrid (P+E cores). 10nm. Big.LITTLE on desktop — first x86 hybrid.", color: "#0EA5E9" },
    { year: "2023", label: "Ryzen 9000 / Core Ultra", detail: "3D V-Cache stacking. TSMC 4nm/3nm. Integrated NPU for AI. 100B+ transistors.", color: "#7C3AED" },
  ],
  motherboard: [
    { year: "1981", label: "IBM PC XT Board", detail: "First PC motherboard. 4.77 MHz 8088, ISA bus, manual DIP switches for config.", color: "#78716C" },
    { year: "1993", label: "PCI Bus Era", detail: "PCI replaces ISA — 133 MB/s, plug-and-play. Standardised expansion cards.", color: "#EA580C" },
    { year: "1998", label: "ATX Form Factor", detail: "Intel's ATX standard: standardised PSU connectors, I/O shield, board dimensions.", color: "#7C3AED" },
    { year: "2004", label: "PCIe 1.0 Launch", detail: "PCIe replaces AGP. Serial point-to-point replaces parallel shared bus. x16 at 4 GB/s.", color: "#2563EB" },
    { year: "2011", label: "Sandy Bridge Fusion", detail: "Intel integrates GPU, memory controller, PCIe controller all into CPU — chipset shrinks.", color: "#16A34A" },
    { year: "2017", label: "DDR4 + M.2", detail: "M.2 NVMe slots replace SATA for storage. DDR4 becomes standard. UEFI replaces BIOS.", color: "#0891B2" },
    { year: "2022", label: "DDR5 + PCIe 5", detail: "DDR5 (4800+ MT/s), PCIe 5.0 (32 GT/s). 20-phase VRMs for Raptor Lake/Zen 4.", color: "#7C3AED" },
  ],
  ram: [
    { year: "1966", label: "DRAM Invented", detail: "Robert Dennard invents 1T1C DRAM at IBM. First practical random-access memory.", color: "#78716C" },
    { year: "1993", label: "FPM/EDO DRAM", detail: "Fast Page Mode & EDO DRAM. 60–80ns latency. Used in Pentium-era PCs.", color: "#EA580C" },
    { year: "1996", label: "SDRAM", detail: "Synchronous DRAM — clocked to system bus. 66–133 MHz, simplified timing.", color: "#7C3AED" },
    { year: "2000", label: "DDR1", detail: "Double Data Rate — transfers on both clock edges. 200–400 MT/s, 2.5V.", color: "#2563EB" },
    { year: "2003", label: "DDR2", detail: "4× prefetch buffer. 400–1066 MT/s, 1.8V. Longer latency but more bandwidth.", color: "#16A34A" },
    { year: "2007", label: "DDR3", detail: "8× prefetch. 800–2133 MT/s, 1.5V (1.35V low-power). Dominant for a decade.", color: "#0891B2" },
    { year: "2014", label: "DDR4", detail: "1.2V, 2133–4266 MT/s. Bank groups for better parallelism. LPDDR4 for phones.", color: "#EA580C" },
    { year: "2021", label: "DDR5", detail: "On-die ECC, two 32-bit subchannels, 4800–8400 MT/s, 1.1V. Power management on-module.", color: "#7C3AED" },
  ],
  gpu: [
    { year: "1981", label: "MDA / CGA", detail: "IBM's first display adapters. MDA: text-only. CGA: 4 colours at 320×200.", color: "#78716C" },
    { year: "1987", label: "VGA Standard", detail: "640×480 at 16 colours or 320×200 at 256. The standard that lasted 30 years.", color: "#EA580C" },
    { year: "1996", label: "3DFX Voodoo", detail: "First dedicated 3D accelerator. Transform & lighting in silicon. Quake never looked the same.", color: "#7C3AED" },
    { year: "1999", label: "NVIDIA GeForce 256", detail: "World's first 'GPU' label. Programmable T&L on-chip. DirectX 7.", color: "#2563EB" },
    { year: "2001", label: "Shader Programs", detail: "GeForce3 / Radeon 8500. Vertex & pixel shaders — developers write GPU programs for the first time.", color: "#16A34A" },
    { year: "2006", label: "GPGPU / CUDA", detail: "NVIDIA G80 (GeForce 8800). Unified shader architecture. CUDA launched — GPU for science.", color: "#0891B2" },
    { year: "2018", label: "Ray Tracing (RTX)", detail: "NVIDIA Turing: RT Cores for real-time ray tracing. Tensor Cores for DLSS AI upscaling.", color: "#EA580C" },
    { year: "2023", label: "AI-Native GPUs", detail: "RTX 4090 / RX 7900 XTX. FP8 Transformer Engine. 1000+ TOPS AI performance on-device.", color: "#7C3AED" },
  ],
  storage: [
    { year: "1956", label: "IBM 350 HDD", detail: "First hard drive. 5MB on 50 spinning 24-inch disks, the size of a refrigerator.", color: "#78716C" },
    { year: "1980", label: "5.25\" HDD", detail: "Seagate ST-412. 5MB, 5.25-inch. First mass-market PC hard drive.", color: "#EA580C" },
    { year: "1998", label: "7200 RPM HDDs", detail: "7200 RPM becomes standard. 2–8 GB capacity. ATA/IDE interface.", color: "#7C3AED" },
    { year: "2003", label: "SATA Interface", detail: "Serial ATA replaces parallel ATA. 150 MB/s, thin cables, hot-swap support.", color: "#2563EB" },
    { year: "2007", label: "First SSDs (SATA)", detail: "Samsung and Intel launch consumer SSDs. 60–80 GB, 250 MB/s. 100× faster seeks than HDD.", color: "#16A34A" },
    { year: "2013", label: "M.2 NVMe SSD", detail: "NVMe over PCIe. Samsung 950 Pro: 2,500 MB/s. SATA SSDs become 'slow'.", color: "#0891B2" },
    { year: "2019", label: "PCIe 4.0 NVMe", detail: "Samsung 980 Pro: 7,000 MB/s sequential. Games load in under 1 second.", color: "#EA580C" },
    { year: "2023", label: "PCIe 5.0 NVMe", detail: "14,000 MB/s. 3D NAND 232-layer. Gen5 M.2 SSDs run so hot they need heatsinks.", color: "#7C3AED" },
  ],
  cooler: [
    { year: "1990", label: "Passive Heatsink", detail: "Early CPUs ran cool enough to not need fans. Just a small aluminium block.", color: "#78716C" },
    { year: "1994", label: "Active CPU Fan", detail: "Pentium's 15W TDP demanded airflow. 486 DX/4 100 was first to need a fan.", color: "#EA580C" },
    { year: "1999", label: "Heatsink + 80mm Fan", detail: "Slot 1 Pentium III. Large heatsink + 80mm fan became standard.", color: "#7C3AED" },
    { year: "2003", label: "Copper Heatpipes", detail: "Copper heatpipe towers (Cooler Master, Zalman). Silent, high-performance desktop cooling.", color: "#2563EB" },
    { year: "2006", label: "All-In-One Liquid", detail: "Corsair, NZXT AIO coolers. Sealed pump+radiator. 120mm–360mm radiators.", color: "#16A34A" },
    { year: "2010", label: "Custom Water Loops", detail: "Enthusiasts build reservoirs, pumps, full-cover blocks. Extreme overclocking — 5GHz+.", color: "#0891B2" },
    { year: "2022", label: "Direct Die Cooling", detail: "Delid CPU, cool the die directly. Raptor Lake at 400W TDP — thermal throttling battle.", color: "#7C3AED" },
  ],
  psu: [
    { year: "1981", label: "IBM PC PSU", detail: "63.5W linear supply. No ATX standard — proprietary everything.", color: "#78716C" },
    { year: "1995", label: "ATX PSU Born", detail: "Intel ATX standard: soft power, +12V, +5V, +3.3V rails. Still the same connector today.", color: "#EA580C" },
    { year: "2003", label: "80 PLUS Standard", detail: "80% efficiency at load introduced. Reduced heat and electricity bills.", color: "#16A34A" },
    { year: "2013", label: "80 PLUS Titanium", detail: "96% efficiency tier. Fully modular cables. LLC resonant topology becomes standard.", color: "#0891B2" },
    { year: "2022", label: "ATX 3.0 / PCIe 5.0", detail: "16-pin 12VHPWR connector. Up to 600W to a single GPU. Intel's ATX 3.0 spec handles transient spikes.", color: "#7C3AED" },
  ],
};

/* SVG parts definition: id, label, x, y, w, h, link slug */
const PC_PARTS = [
  { id: "motherboard", label: "Motherboard", x: 60, y: 80, w: 260, h: 200, slug: "motherboard", color: "#16A34A" },
  { id: "cpu",         label: "CPU",         x: 110, y: 110, w: 70,  h: 70,  slug: "cpu",         color: "#3B82F6" },
  { id: "cooler",      label: "CPU Cooler",  x: 108, y: 95,  w: 74,  h: 20,  slug: "cooling-fan", color: "#0EA5E9" },
  { id: "ram",         label: "RAM",         x: 220, y: 115, w: 18,  h: 65,  slug: "ram",         color: "#7C3AED" },
  { id: "ram2",        label: "RAM",         x: 243, y: 115, w: 18,  h: 65,  slug: "ram",         color: "#7C3AED" },
  { id: "gpu",         label: "GPU",         x: 100, y: 220, w: 180, h: 40,  slug: "gpu",         color: "#10B981" },
  { id: "storage",     label: "NVMe SSD",    x: 285, y: 190, w: 50,  h: 20,  slug: "ssd",         color: "#F59E0B" },
  { id: "psu",         label: "PSU",         x: 290, y: 100, w: 65,  h: 80,  slug: "battery",     color: "#EF4444" },
];

interface Props {
  lessonId: string;
}

export default function PCOpenAnimation({ lessonId }: Props) {
  const activePart = PART_MAP[lessonId] ?? null;
  const evolutionData = EVOLUTION[activePart ?? "cpu"] ?? EVOLUTION.cpu;
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [selectedEvo, setSelectedEvo] = useState(evolutionData.length - 1);

  return (
    <div className="p-4 flex flex-col gap-6">

      {/* ── Header ── */}
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-widest text-purple-500 mb-1">Engineering View</p>
        <h3 className="text-lg font-black text-[#082A63]">Inside a Desktop PC</h3>
        <p className="text-sm text-gray-500">
          {activePart
            ? <>The <span className="font-bold text-purple-700">{PC_PARTS.find(p => p.id === activePart || (activePart === p.id))?.label ?? activePart}</span> is highlighted — hover parts to explore</>
            : "Hover any part to explore it"}
        </p>
      </div>

      {/* ── PC SVG ── */}
      <div className="relative">
        <svg
          viewBox="0 0 400 320"
          className="w-full max-w-sm mx-auto rounded-2xl border-2 border-gray-100 shadow-inner"
          style={{ background: "linear-gradient(145deg, #1a1a2e, #16213e)" }}
        >
          {/* Case outline */}
          <rect x="40" y="30" width="320" height="260" rx="8" fill="#0d1117" stroke="#30363d" strokeWidth="2" />
          <rect x="40" y="30" width="12" height="260" rx="4" fill="#21262d" />

          {/* Case screws */}
          {[50, 275].map(y => [44, 352].map(x => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#30363d" />
          )))}

          {/* Motherboard base */}
          <rect x="58" y="78" width="265" height="204" rx="4" fill="#0a3622" stroke="#1a7a3a" strokeWidth="1.5" />
          {/* PCB trace lines */}
          {[90, 110, 130, 150].map(y => (
            <line key={y} x1="62" y1={y} x2="318" y2={y} stroke="#0d4d1e" strokeWidth="0.5" opacity="0.6" />
          ))}
          {[80, 110, 150, 200, 240, 280].map(x => (
            <line key={x} x1={x} y1="82" x2={x} y2="278" stroke="#0d4d1e" strokeWidth="0.5" opacity="0.6" />
          ))}

          {/* Render each part */}
          {PC_PARTS.map((part) => {
            const isActive = activePart === part.id || (activePart === "ram" && part.id === "ram2") || (activePart === "storage" && part.id === "storage");
            const isHovered = hoveredPart === part.id || (part.id === "ram2" && hoveredPart === "ram");
            const highlight = isActive || isHovered;

            if (part.id === "motherboard") return null; // already drawn as base

            return (
              <g key={part.id}>
                {/* Glow behind active part */}
                {highlight && (
                  <motion.rect
                    x={part.x - 4} y={part.y - 4}
                    width={part.w + 8} height={part.h + 8}
                    rx="4"
                    fill={part.color}
                    opacity={0.25}
                    animate={{ opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
                <rect
                  x={part.x} y={part.y}
                  width={part.w} height={part.h}
                  rx="3"
                  fill={highlight ? part.color : `${part.color}60`}
                  stroke={highlight ? part.color : `${part.color}90`}
                  strokeWidth={highlight ? 2 : 1}
                  style={{ cursor: "pointer", transition: "fill 0.2s" }}
                  onMouseEnter={() => setHoveredPart(part.id === "ram2" ? "ram" : part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                />
                {/* Label */}
                {part.id !== "ram2" && part.id !== "cooler" && (
                  <text
                    x={part.x + part.w / 2}
                    y={part.y + part.h / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize={part.w > 60 ? 8 : 6}
                    fontWeight="bold"
                    style={{ pointerEvents: "none" }}
                  >
                    {part.label}
                  </text>
                )}
                {/* Cooler fan blades */}
                {part.id === "cooler" && highlight && (
                  <motion.text
                    x={part.x + part.w / 2}
                    y={part.y + part.h / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="7"
                    fontWeight="bold"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: `${part.x + part.w / 2}px ${part.y + part.h / 2}px`, pointerEvents: "none" }}
                  >
                    ⊕
                  </motion.text>
                )}
              </g>
            );
          })}

          {/* Case fan (right side) */}
          <circle cx="358" cy="160" r="22" fill="none" stroke="#30363d" strokeWidth="2" />
          <motion.text x="358" y="161" textAnchor="middle" dominantBaseline="middle" fill="#30363d" fontSize="22"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "358px 160px" }}
          >⊕</motion.text>

          {/* Cable bundle */}
          <path d="M290 180 Q370 180 370 220 Q370 260 310 265" fill="none" stroke="#374151" strokeWidth="4" strokeLinecap="round" />
          <path d="M290 185 Q368 185 368 222 Q368 260 310 267" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />

          {/* Hover tooltip */}
          {hoveredPart && (() => {
            const p = PC_PARTS.find(pt => pt.id === hoveredPart || (hoveredPart === "ram" && pt.id === "ram"));
            if (!p) return null;
            return (
              <g>
                <rect x="62" y="285" width="270" height="22" rx="4" fill="#1f2937" opacity="0.95" />
                <text x="197" y="296" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="bold">
                  {p.label} → Click to explore lesson
                </text>
              </g>
            );
          })()}
        </svg>

        {/* Clickable overlay links */}
        <div className="absolute inset-0 max-w-sm mx-auto">
          {PC_PARTS.filter(p => p.id !== "motherboard" && p.id !== "ram2" && p.id !== "cooler").map((part) => {
            const svgW = 400, svgH = 320;
            return (
              <Link
                key={part.id}
                href={`/explore/${part.slug}`}
                style={{
                  position: "absolute",
                  left: `${(part.x / svgW) * 100}%`,
                  top: `${(part.y / svgH) * 100}%`,
                  width: `${(part.w / svgW) * 100}%`,
                  height: `${(part.h / svgH) * 100}%`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* ── Legend ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {PC_PARTS.filter(p => p.id !== "ram2").map(p => (
          <span
            key={p.id}
            className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            style={{ background: activePart === p.id ? p.color : `${p.color}80` }}
          >
            {p.label}
          </span>
        ))}
      </div>

      {/* ── Evolution Timeline ── */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📅</span>
          <h4 className="font-black text-[#082A63] text-sm">
            Evolution of the {PC_PARTS.find(p => p.id === activePart)?.label ?? "CPU"}
          </h4>
        </div>

        {/* Timeline scroll */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-3" style={{ minWidth: `${evolutionData.length * 130}px` }}>
            {evolutionData.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setSelectedEvo(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 w-28 rounded-2xl p-3 text-left border-2 transition-all"
                style={{
                  borderColor: selectedEvo === i ? item.color : `${item.color}40`,
                  background: selectedEvo === i ? `${item.color}18` : "white",
                }}
              >
                <span
                  className="text-xs font-black px-2 py-0.5 rounded-full text-white block mb-1.5 text-center"
                  style={{ background: item.color }}
                >
                  {item.year}
                </span>
                <p className="text-xs font-black text-[#082A63] leading-tight">{item.label}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvo}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-3 rounded-2xl p-4 border-2"
            style={{
              borderColor: `${evolutionData[selectedEvo].color}40`,
              background: `${evolutionData[selectedEvo].color}0d`,
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="text-sm font-black px-2.5 py-1 rounded-full text-white flex-shrink-0"
                style={{ background: evolutionData[selectedEvo].color }}
              >
                {evolutionData[selectedEvo].year}
              </span>
              <div>
                <p className="font-black text-[#082A63] text-sm">{evolutionData[selectedEvo].label}</p>
                <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{evolutionData[selectedEvo].detail}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
