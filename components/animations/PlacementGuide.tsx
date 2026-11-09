"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComponentPlacement {
  id: string;
  name: string;
  emoji: string;
  houseRoom: string;
  houseEmoji: string;
  houseDesc: string;
  desktop: { location: string; slot: string; note: string };
  laptop: { location: string; slot: string; note: string };
  heatNote: string;
  powerNote: string;
  color: string;
}

const PLACEMENTS: ComponentPlacement[] = [
  {
    id: "cpu",
    name: "CPU",
    emoji: "🧠",
    houseRoom: "Master Bedroom",
    houseEmoji: "🛏️",
    houseDesc: "The most important person lives here — the brain of the house. Needs its own dedicated AC (cooler) because it generates the most heat.",
    desktop: {
      location: "Top-center of the motherboard",
      slot: "LGA 1700 / AM5 socket — large square socket with hundreds of pins",
      note: "Always under the CPU cooler (heatsink + fan). Thermal paste sits between CPU and cooler.",
    },
    laptop: {
      location: "Soldered directly on the motherboard",
      slot: "BGA (Ball Grid Array) — no socket, permanently attached",
      note: "Cannot be removed or upgraded. Shares a heat pipe with GPU in thin laptops.",
    },
    heatNote: "CPU is the hottest component. Needs a dedicated heatsink + fan (desktop) or copper heat pipe to side vent (laptop).",
    powerNote: "Gets dedicated power from the EPS 8-pin connector straight from the PSU.",
    color: "#3B82F6",
  },
  {
    id: "ram",
    name: "RAM",
    emoji: "📋",
    houseRoom: "Study Room / Desk",
    houseEmoji: "📚",
    houseDesc: "The work desk right next to the master bedroom. The bigger the desk, the more tasks you can keep open at once. Gets cleared when the lights go off (power cut).",
    desktop: {
      location: "Right side of CPU socket",
      slot: "DIMM slots — long thin slots with clips on both ends (288-pin DDR5)",
      note: "Usually 2 or 4 slots. Slot color pairs matter — use matching-color slots for dual-channel speed boost.",
    },
    laptop: {
      location: "On the motherboard, near the CPU",
      slot: "SO-DIMM slots (smaller 262-pin) or soldered directly",
      note: "Many modern laptops have soldered RAM with no upgrade option. Check before buying.",
    },
    heatNote: "RAM generates moderate heat. No active cooling needed — the case airflow handles it.",
    powerNote: "Powered by the motherboard through the DIMM slot connector. No separate cable needed.",
    color: "#10B981",
  },
  {
    id: "motherboard",
    name: "Motherboard",
    emoji: "🏙️",
    houseRoom: "The Entire Floor Plan",
    houseEmoji: "🏠",
    houseDesc: "The motherboard IS the house layout — it defines where every room (component) goes, how the hallways (buses) connect them, and where the power lines run.",
    desktop: {
      location: "Mounted to the PC case with standoff screws",
      slot: "ATX / mATX / ITX form factor — standard screw hole pattern",
      note: "The I/O shield (metal plate at the back) aligns with the case cutout for ports.",
    },
    laptop: {
      location: "Sandwiched between keyboard and bottom panel",
      slot: "Custom proprietary form factor — varies by manufacturer",
      note: "No standard form factor. Each laptop brand designs their own. Very hard to replace.",
    },
    heatNote: "VRM area (top-left near CPU socket) gets hot — motherboards have heatsinks on VRMs. Good airflow past this area matters.",
    powerNote: "Main 24-pin ATX connector from PSU powers the entire board. CPU has its own 8-pin EPS connector.",
    color: "#8B5CF6",
  },
  {
    id: "gpu",
    name: "GPU",
    emoji: "🎨",
    houseRoom: "The Workshop / Garage",
    houseEmoji: "🔧",
    houseDesc: "A large, dedicated workshop next to the main house. Does heavy parallel work (rendering). Runs very hot — has its own industrial exhaust fans. Takes up 2-3 slots worth of space.",
    desktop: {
      location: "First PCIe x16 slot — closest to CPU, below it",
      slot: "PCIe x16 slot (long slot) — metal locking clip at one end",
      note: "Modern GPUs are 2–3 slots thick. Needs a PCIe power connector (8-pin or 16-pin 12VHPWR). Position varies by motherboard manufacturer.",
    },
    laptop: {
      location: "Soldered next to CPU on motherboard",
      slot: "MXM slot (rare) or directly soldered — laptop GPU or iGPU built into CPU",
      note: "Discrete laptop GPUs are almost always soldered. Many laptops only have integrated graphics inside the CPU.",
    },
    heatNote: "GPU is the hottest component in a gaming PC. Has its own fans (blower or dual/triple axial fans). Exhausts hot air out the back or recirculates inside the case.",
    powerNote: "Needs its own PCIe power cable from PSU — 8-pin, 6+2 pin, or the new 16-pin 12VHPWR connector.",
    color: "#F59E0B",
  },
  {
    id: "ssd",
    name: "SSD / Storage",
    emoji: "📦",
    houseRoom: "Filing Room / Storage Closet",
    houseEmoji: "🗄️",
    houseDesc: "A quiet room that keeps everything stored permanently — even when the lights go off. Fast SSDs are like a well-organized closet, slow HDDs are like a messy room where you have to search for things.",
    desktop: {
      location: "M.2 slot on motherboard or 2.5\"/3.5\" drive bay in the case",
      slot: "M.2 2280 slot (NVMe PCIe) or SATA data + power connectors",
      note: "NVMe M.2 is fastest (directly on motherboard, no cables). SATA M.2 or 2.5\" is slower but cheaper. M.2 slot position varies — usually below or beside the GPU.",
    },
    laptop: {
      location: "M.2 slot under the bottom panel",
      slot: "M.2 2242 or 2280 (NVMe) — single small chip, usually upgradeable",
      note: "Most modern laptops have one accessible M.2 slot. Ultra-thin models may solder it.",
    },
    heatNote: "NVMe SSDs get surprisingly hot under load. High-end motherboards have M.2 heatsinks — use them.",
    powerNote: "M.2 NVMe: powered through the M.2 slot (no cable). SATA SSD: needs a SATA data cable + 15-pin SATA power cable from PSU.",
    color: "#EF4444",
  },
];

const HOUSE_ZONES = [
  { id: "cpu", label: "Master\nBedroom", emoji: "🛏️", x: 30, y: 15, w: 28, h: 25, color: "#3B82F6" },
  { id: "ram", label: "Study\nRoom", emoji: "📚", x: 62, y: 15, w: 22, h: 25, color: "#10B981" },
  { id: "gpu", label: "Workshop /\nGarage", emoji: "🔧", x: 30, y: 44, w: 54, h: 22, color: "#F59E0B" },
  { id: "motherboard", label: "Floor Plan\n(Motherboard)", emoji: "🏠", x: 5, y: 5, w: 90, h: 85, color: "#8B5CF6" },
  { id: "ssd", label: "Storage\nCloset", emoji: "🗄️", x: 62, y: 44, w: 22, h: 22, color: "#EF4444" },
];

const FAN_ZONES = [
  { label: "Front Intake\nFan", x: 5, y: 35, emoji: "💨" },
  { label: "Rear Exhaust\nFan", x: 88, y: 35, emoji: "💨" },
  { label: "Top Exhaust\nFan", x: 45, y: 2, emoji: "💨" },
];

const PSU_ZONE = { label: "PSU\n(Power Station)", x: 5, y: 70, w: 20, h: 18, emoji: "⚡" };

interface Props {
  lessonId: string;
  accent?: string;
}

export default function PlacementGuide({ lessonId, accent = "#8B5CF6" }: Props) {
  const defaultId = ["cpu", "ram", "motherboard", "gpu", "ssd"].includes(lessonId) ? lessonId : "cpu";
  const [selected, setSelected] = useState<string>(defaultId);
  const [view, setView] = useState<"desktop" | "laptop">("desktop");

  const component = PLACEMENTS.find((p) => p.id === selected)!;

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2 bg-gray-50">
        <span className="text-lg">🏠</span>
        <span className="font-semibold text-sm text-gray-800">Component Placement Guide</span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* House Analogy Overview */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
          <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">The PC Case = A House Floor Plan</p>
          <div className="relative w-full" style={{ paddingBottom: "70%" }}>
            <svg
              viewBox="0 0 100 95"
              className="absolute inset-0 w-full h-full"
              style={{ fontFamily: "inherit" }}
            >
              {/* Outer case */}
              <rect x="3" y="3" width="94" height="89" rx="3" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" />
              {/* PSU zone */}
              <rect x={PSU_ZONE.x} y={PSU_ZONE.y} width={PSU_ZONE.w} height={PSU_ZONE.h} rx="2"
                fill="rgba(251,191,36,0.15)" stroke="rgba(217,119,6,0.5)" strokeWidth="0.5" />
              <text x={PSU_ZONE.x + PSU_ZONE.w / 2} y={PSU_ZONE.y + 6} textAnchor="middle" fontSize="4.5" fill="rgba(180,100,0,0.9)">{PSU_ZONE.emoji}</text>
              <text x={PSU_ZONE.x + PSU_ZONE.w / 2} y={PSU_ZONE.y + 11} textAnchor="middle" fontSize="2.8" fill="rgba(146,64,14,0.8)">PSU</text>
              <text x={PSU_ZONE.x + PSU_ZONE.w / 2} y={PSU_ZONE.y + 15} textAnchor="middle" fontSize="2.5" fill="rgba(146,64,14,0.6)">(Power Station)</text>

              {/* Power lines from PSU */}
              <line x1="25" y1="79" x2="44" y2="27" stroke="rgba(217,119,6,0.3)" strokeWidth="0.4" strokeDasharray="2,1.5" />
              <line x1="25" y1="79" x2="58" y2="55" stroke="rgba(217,119,6,0.3)" strokeWidth="0.4" strokeDasharray="2,1.5" />
              <line x1="25" y1="79" x2="73" y2="27" stroke="rgba(217,119,6,0.3)" strokeWidth="0.4" strokeDasharray="2,1.5" />

              {/* Component zones */}
              {HOUSE_ZONES.filter((z) => z.id !== "motherboard").map((zone) => {
                const isSelected = zone.id === selected;
                return (
                  <g key={zone.id} style={{ cursor: "pointer" }} onClick={() => setSelected(zone.id)}>
                    <rect
                      x={zone.x} y={zone.y} width={zone.w} height={zone.h} rx="2"
                      fill={`${zone.color}${isSelected ? "33" : "18"}`}
                      stroke={zone.color}
                      strokeWidth={isSelected ? "1.2" : "0.6"}
                      strokeOpacity={isSelected ? 1 : 0.5}
                    />
                    <text x={zone.x + zone.w / 2} y={zone.y + 7} textAnchor="middle" fontSize="5" fill={zone.color} opacity="1">{zone.emoji}</text>
                    {zone.label.split("\n").map((line, i) => (
                      <text key={i} x={zone.x + zone.w / 2} y={zone.y + 13 + i * 3.5} textAnchor="middle" fontSize="2.6" fill="rgba(30,30,30,0.75)" fontWeight={isSelected ? "600" : "400"}>{line}</text>
                    ))}
                  </g>
                );
              })}

              {/* Fan labels */}
              {FAN_ZONES.map((fan, i) => (
                <g key={i}>
                  <text x={fan.x} y={fan.y + 4} textAnchor="middle" fontSize="4" fill="rgba(14,116,144,0.7)">{fan.emoji}</text>
                  {fan.label.split("\n").map((line, j) => (
                    <text key={j} x={fan.x} y={fan.y + 8 + j * 3} textAnchor="middle" fontSize="2.3" fill="rgba(14,116,144,0.6)">{line}</text>
                  ))}
                </g>
              ))}

              {/* Airflow arrows */}
              <path d="M 5 48 L 10 48" stroke="rgba(14,116,144,0.5)" strokeWidth="0.6" />
              <text x="94" y="38" fontSize="3" fill="rgba(14,116,144,0.5)">→</text>
            </svg>
          </div>
          <p className="text-xs text-gray-400 mt-1 text-center">Click a room to explore the component</p>
        </div>

        {/* Component Selector */}
        <div className="flex gap-1.5 flex-wrap">
          {PLACEMENTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className="px-2 py-1 rounded-lg text-xs font-medium transition-all"
              style={{
                background: selected === p.id ? p.color + "22" : "rgba(0,0,0,0.04)",
                border: `1.5px solid ${selected === p.id ? p.color : "rgba(0,0,0,0.12)"}`,
                color: selected === p.id ? p.color : "rgba(0,0,0,0.55)",
              }}
            >
              {p.emoji} {p.name}
            </button>
          ))}
        </div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: component.color + "55" }}
          >
            {/* House analogy header */}
            <div className="px-4 py-3 flex items-start gap-3" style={{ background: component.color + "12" }}>
              <span className="text-2xl">{component.houseEmoji}</span>
              <div>
                <p className="text-xs font-semibold" style={{ color: component.color }}>
                  {component.emoji} {component.name} = {component.houseRoom}
                </p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{component.houseDesc}</p>
              </div>
            </div>

            {/* Desktop / Laptop toggle */}
            <div className="flex border-b border-gray-200">
              {(["desktop", "laptop"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="flex-1 py-2 text-xs font-medium capitalize transition-colors"
                  style={{
                    background: view === v ? component.color + "15" : "transparent",
                    color: view === v ? component.color : "rgba(0,0,0,0.45)",
                    borderBottom: view === v ? `2px solid ${component.color}` : "2px solid transparent",
                  }}
                >
                  {v === "desktop" ? "🖥️ Desktop PC" : "💻 Laptop"}
                </button>
              ))}
            </div>

            {/* Placement info */}
            <div className="p-4 flex flex-col gap-3 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, x: view === "desktop" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-2.5"
                >
                  {/* Location */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5">📍</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Location</p>
                      <p className="text-xs text-gray-600 mt-0.5">{component[view].location}</p>
                    </div>
                  </div>
                  {/* Slot */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5">🔌</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-700">Slot / Interface</p>
                      <p className="text-xs text-gray-600 mt-0.5">{component[view].slot}</p>
                    </div>
                  </div>
                  {/* Note */}
                  <div
                    className="rounded-lg px-3 py-2 text-xs font-medium"
                    style={{ background: component.color + "12", color: component.color, border: `1px solid ${component.color}30` }}
                  >
                    💡 {component[view].note}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Heat & Power info */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="rounded-lg bg-orange-50 border border-orange-200 px-3 py-2">
                  <p className="text-xs font-semibold text-orange-600 mb-1">🌡️ Heat</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{component.heatNote}</p>
                </div>
                <div className="rounded-lg bg-yellow-50 border border-yellow-200 px-3 py-2">
                  <p className="text-xs font-semibold text-yellow-700 mb-1">⚡ Power</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{component.powerNote}</p>
                </div>
              </div>

              {/* Manufacturer variation note */}
              <div className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-xs text-gray-500">
                ⚠️ <span className="font-medium text-gray-600">Slot positions vary by manufacturer.</span> Always check your specific motherboard or laptop manual — the number and location of slots differ between brands and models.
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Airflow & Power house analogy */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 flex flex-col gap-2">
          <p className="text-xs font-semibold text-gray-700">🌬️ Cooling = House AC / Fans</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Just like a house uses ACs and exhaust fans to manage heat, a PC uses <span className="font-medium text-gray-800">case fans</span> (front intake = fresh air in, rear/top exhaust = hot air out), a <span className="font-medium text-gray-800">CPU cooler</span> (like a dedicated AC for the master bedroom), and <span className="font-medium text-gray-800">GPU fans</span> (the workshop&apos;s industrial exhaust). Good airflow = cool PC = longer life.
          </p>
          <p className="text-xs font-semibold text-gray-700 mt-1">⚡ Power = House Electrical Wiring</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            The <span className="font-medium text-gray-800">PSU (Power Supply Unit)</span> is the electrical panel of the house. Power cables run from it to every component — 24-pin ATX to the motherboard, 8-pin EPS to the CPU, PCIe cables to the GPU, SATA/Molex to drives. Each component is a room that needs its own power line.
          </p>
        </div>
      </div>
    </div>
  );
}
