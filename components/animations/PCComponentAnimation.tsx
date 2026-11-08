"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Layer {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  borderColor: string;
  textColor: string;
  heightPx: number;
}

const LAYERS: Record<string, { title: string; subtitle: string; layers: Layer[] }> = {
  cpu: {
    title: "Inside a CPU",
    subtitle: "Central Processing Unit — cross-section view",
    layers: [
      {
        id: "ihs",
        label: "IHS — Integrated Heat Spreader",
        sublabel: "Nickel-plated copper lid. Spreads heat from die to cooler.",
        color: "#C8C8C8",
        borderColor: "#999",
        textColor: "#222",
        heightPx: 28,
      },
      {
        id: "tim",
        label: "TIM — Thermal Interface Material",
        sublabel: "Liquid metal (Galinstan) or polymer paste. Fills micro-gaps for thermal transfer.",
        color: "#E8E0B0",
        borderColor: "#C4A",
        textColor: "#555",
        heightPx: 10,
      },
      {
        id: "die",
        label: "Silicon Die",
        sublabel: "Billions of transistors at 3–7 nm node. Where OoO execution & caches live.",
        color: "#1565C0",
        borderColor: "#0D47A1",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "substrate",
        label: "Organic Substrate (PCB)",
        sublabel: "Multi-layer laminate with copper traces routing signals between die and socket.",
        color: "#2E7D32",
        borderColor: "#1B5E20",
        textColor: "#fff",
        heightPx: 24,
      },
      {
        id: "pins",
        label: "LGA Pads / Pins",
        sublabel: "1700+ gold-plated contacts. Power delivery, PCIe, DMI, memory bus.",
        color: "#F9A825",
        borderColor: "#E65100",
        textColor: "#222",
        heightPx: 14,
      },
    ],
  },
  ram: {
    title: "Inside a RAM Stick",
    subtitle: "DDR5 DIMM — 288-pin dual-rank",
    layers: [
      {
        id: "heatspreader",
        label: "Aluminium Heat Spreader",
        sublabel: "Passive cooler bonded to DRAM ICs. Improves sustained bandwidth stability.",
        color: "#B0BEC5",
        borderColor: "#78909C",
        textColor: "#222",
        heightPx: 20,
      },
      {
        id: "dram-front",
        label: "DRAM ICs (Front — 8 chips)",
        sublabel: "Each chip: 1T1C (1 transistor + 1 capacitor) cell array. Needs refresh every 64ms.",
        color: "#1A237E",
        borderColor: "#311B92",
        textColor: "#fff",
        heightPx: 22,
      },
      {
        id: "pcb",
        label: "6-Layer PCB",
        sublabel: "Controlled-impedance traces. Signal layers between power/ground planes reduce EMI.",
        color: "#1B5E20",
        borderColor: "#33691E",
        textColor: "#fff",
        heightPx: 16,
      },
      {
        id: "dram-back",
        label: "DRAM ICs (Back — 8 chips)",
        sublabel: "Second rank doubles capacity. Controller interleaves reads across both ranks.",
        color: "#1A237E",
        borderColor: "#311B92",
        textColor: "#fff",
        heightPx: 22,
      },
      {
        id: "spd",
        label: "SPD / PMIC Chip",
        sublabel: "Stores XMP/EXPO timing profiles. BIOS reads SPD at POST to configure DDR5 sub-timings.",
        color: "#37474F",
        borderColor: "#212121",
        textColor: "#fff",
        heightPx: 14,
      },
      {
        id: "contacts",
        label: "Gold-Plated Edge Contacts",
        sublabel: "288 pins (DDR5). Gold prevents oxidation. Differential pairs carry 6400+ MT/s.",
        color: "#F9A825",
        borderColor: "#E65100",
        textColor: "#222",
        heightPx: 12,
      },
    ],
  },
  motherboard: {
    title: "Inside a Motherboard",
    subtitle: "ATX PCB — 8 copper layers",
    layers: [
      {
        id: "vrm",
        label: "VRM — Voltage Regulator Module",
        sublabel: "Buck converter: MOSFETs + inductors step 12 V → 1.0–1.3 V for CPU. Phase count = stability.",
        color: "#4A148C",
        borderColor: "#6A1B9A",
        textColor: "#fff",
        heightPx: 22,
      },
      {
        id: "signal-layers",
        label: "Signal Layers (Cu traces)",
        sublabel: "PCIe x16, DDR5 channels, USB, SATA — each length-matched pair on separate layers.",
        color: "#BF360C",
        borderColor: "#E64A19",
        textColor: "#fff",
        heightPx: 18,
      },
      {
        id: "power-plane",
        label: "Power Planes (3.3 V / 5 V / 12 V)",
        sublabel: "Solid copper pours distribute current uniformly. Minimises voltage droop under load.",
        color: "#F9A825",
        borderColor: "#E65100",
        textColor: "#222",
        heightPx: 14,
      },
      {
        id: "ground-plane",
        label: "Ground Planes",
        sublabel: "Return current path. Also acts as EMI shield between signal layers.",
        color: "#424242",
        borderColor: "#212121",
        textColor: "#fff",
        heightPx: 14,
      },
      {
        id: "fr4",
        label: "FR-4 Laminate Core",
        sublabel: "Glass-fibre epoxy dielectric. Tg ≈ 170 °C. Sandwiched between every copper layer.",
        color: "#2E7D32",
        borderColor: "#1B5E20",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "chipset",
        label: "Chipset (PCH)",
        sublabel: "Intel PCH / AMD FCH: USB, SATA, NVMe, audio, Ethernet controllers in one SoC.",
        color: "#01579B",
        borderColor: "#0277BD",
        textColor: "#fff",
        heightPx: 18,
      },
    ],
  },
  gpu: {
    title: "Inside a GPU",
    subtitle: "Discrete graphics card — PCB cross-section",
    layers: [
      {
        id: "shroud",
        label: "Cooler Shroud + Fans",
        sublabel: "2–3 axial fans push air through aluminium fin stack. TDP up to 500 W (RTX 4090).",
        color: "#424242",
        borderColor: "#212121",
        textColor: "#fff",
        heightPx: 24,
      },
      {
        id: "heatsink",
        label: "Vapour Chamber + Heat Pipes",
        sublabel: "Phase-change cooling. Vapour chamber directly contacts GPU die for low thermal resistance.",
        color: "#90A4AE",
        borderColor: "#607D8B",
        textColor: "#222",
        heightPx: 18,
      },
      {
        id: "gpu-die",
        label: "GPU Die (GPC / SM Array)",
        sublabel: "Thousands of shader cores + Tensor cores + RT cores. GDDR6X runs at 21 Gbps per pin.",
        color: "#006064",
        borderColor: "#00838F",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "gddr",
        label: "GDDR6X Memory (8–12 chips)",
        sublabel: "PAM4 signalling — 2 bits per clock edge. 384-bit wide bus = 1 TB/s bandwidth.",
        color: "#1A237E",
        borderColor: "#283593",
        textColor: "#fff",
        heightPx: 18,
      },
      {
        id: "pcb-gpu",
        label: "12-Layer PCB",
        sublabel: "Very dense BGA routing. Controlled-impedance differential pairs to each GDDR chip.",
        color: "#1B5E20",
        borderColor: "#33691E",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "pcie-slot",
        label: "PCIe x16 Edge Connector",
        sublabel: "164 gold pins. PCIe 4.0 = 64 GB/s; PCIe 5.0 = 128 GB/s bi-directional.",
        color: "#F9A825",
        borderColor: "#E65100",
        textColor: "#222",
        heightPx: 12,
      },
    ],
  },
  ssd: {
    title: "Inside an NVMe SSD",
    subtitle: "M.2 2280 — PCIe Gen 4",
    layers: [
      {
        id: "controller",
        label: "NVMe Controller SoC",
        sublabel: "ARM cores + DRAM cache + ECC engine. Runs FTL: maps LBAs to physical NAND blocks.",
        color: "#4A148C",
        borderColor: "#6A1B9A",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "dram-cache",
        label: "DRAM Cache (LPDDR4)",
        sublabel: "Stores NAND address translation table. DRAM-less SSDs are slower for random I/O.",
        color: "#01579B",
        borderColor: "#0277BD",
        textColor: "#fff",
        heightPx: 16,
      },
      {
        id: "nand-top",
        label: "3D NAND Flash (Top — 4 chips)",
        sublabel: "176–232 layers stacked vertically. Each cell: 1 bit (SLC), 2 (MLC), 3 (TLC) or 4 (QLC).",
        color: "#212121",
        borderColor: "#424242",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "pcb-ssd",
        label: "M.2 PCB Substrate",
        sublabel: "4-layer PCB. PCIe 4.0 ×4 lanes + power rails. M-key notch = NVMe; B-key = SATA.",
        color: "#2E7D32",
        borderColor: "#1B5E20",
        textColor: "#fff",
        heightPx: 14,
      },
      {
        id: "nand-bottom",
        label: "3D NAND Flash (Bottom — 4 chips)",
        sublabel: "Double-sided = more capacity. Wear levelling spreads writes across all blocks equally.",
        color: "#212121",
        borderColor: "#424242",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "m2-connector",
        label: "M.2 Edge Connector (Gold Pads)",
        sublabel: "Gold-plated pads. PCIe lanes carry 7 GB/s (Gen 4) — 14× faster than SATA SSD.",
        color: "#F9A825",
        borderColor: "#E65100",
        textColor: "#222",
        heightPx: 10,
      },
    ],
  },
  "pc-hardware": {
    title: "Inside a Desktop PC",
    subtitle: "ATX mid-tower — component stack",
    layers: [
      {
        id: "case",
        label: "Steel / Aluminium Case",
        sublabel: "Airflow design: front intake, rear/top exhaust. Positive pressure keeps dust out.",
        color: "#607D8B",
        borderColor: "#455A64",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "psu",
        label: "PSU — Power Supply Unit",
        sublabel: "80+ Gold rated. ATX 3.0 adds 12VHPWR (600 W) for high-end GPUs.",
        color: "#F57F17",
        borderColor: "#E65100",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "mobo",
        label: "Motherboard (ATX)",
        sublabel: "305×244 mm. Hosts CPU, RAM, PCIe, storage, and all I/O controllers.",
        color: "#2E7D32",
        borderColor: "#1B5E20",
        textColor: "#fff",
        heightPx: 24,
      },
      {
        id: "cpu-cooler",
        label: "CPU Cooler + TIM",
        sublabel: "Air or AIO liquid. TDP rating must exceed CPU's rated thermal budget.",
        color: "#90A4AE",
        borderColor: "#607D8B",
        textColor: "#222",
        heightPx: 18,
      },
      {
        id: "gpu-card",
        label: "GPU — Discrete Graphics Card",
        sublabel: "Slots into PCIe x16. BIOS detects via PCIe enumeration at POST.",
        color: "#006064",
        borderColor: "#00838F",
        textColor: "#fff",
        heightPx: 20,
      },
      {
        id: "storage",
        label: "NVMe SSD + SATA Drives",
        sublabel: "Boot drive typically NVMe Gen 4 on M.2. HDD/SATA SSD for bulk storage.",
        color: "#1A237E",
        borderColor: "#283593",
        textColor: "#fff",
        heightPx: 16,
      },
    ],
  },
};

// Map lesson IDs to layer keys
const LESSON_TO_KEY: Record<string, string> = {
  cpu: "cpu",
  ram: "ram",
  motherboard: "motherboard",
  gpu: "gpu",
  ssd: "ssd",
  "ssd-deep": "ssd",
  "pc-hardware": "pc-hardware",
  "hard-disk": "ssd",
};

interface Props {
  lessonId: string;
}

export default function PCComponentAnimation({ lessonId }: Props) {
  const key = LESSON_TO_KEY[lessonId] ?? "cpu";
  const data = LAYERS[key] ?? LAYERS.cpu;
  const [exploded, setExploded] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const GAP_ASSEMBLED = 2;
  const GAP_EXPLODED = 56;
  const SKEW = -18; // degrees for isometric feel

  return (
    <div className="w-full rounded-2xl" style={{ background: "#0F172A" }}>
      {/* Header */}
      <div className="px-6 pt-5 pb-3 flex items-start justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-purple-400 mb-1">
            ENGINEERING VIEW
          </p>
          <h3 className="text-white font-black text-xl">{data.title}</h3>
          <p className="text-slate-400 text-sm mt-0.5">{data.subtitle}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setExploded((e) => !e)}
          className="mt-1 px-4 py-2 rounded-xl font-black text-sm transition-colors"
          style={{
            background: exploded ? "#7C3AED" : "rgba(124,58,237,0.2)",
            color: exploded ? "#fff" : "#A78BFA",
            border: "2px solid #7C3AED",
          }}
        >
          {exploded ? "🔄 Reassemble" : "💥 Explode"}
        </motion.button>
      </div>

      {/* Animation area */}
      <div
        className="relative flex flex-col items-center py-8"
        style={{ minHeight: 320, overflowX: "auto" }}
      >
        {/* Isometric stage */}
        <div
          style={{
            perspective: 900,
            perspectiveOrigin: "50% 30%",
          }}
        >
          <div
            style={{
              transform: "rotateX(38deg) rotateZ(-8deg)",
              transformStyle: "preserve-3d",
              display: "flex",
              flexDirection: "column-reverse",
              gap: exploded ? GAP_EXPLODED : GAP_ASSEMBLED,
              transition: "gap 0.6s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {data.layers.map((layer, i) => {
              const isHovered = hovered === layer.id;
              const delay = exploded ? i * 0.07 : (data.layers.length - 1 - i) * 0.05;

              return (
                <motion.div
                  key={layer.id}
                  initial={false}
                  animate={{
                    translateZ: exploded ? i * 2 : 0,
                    scale: isHovered ? 1.03 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay,
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                  onHoverStart={() => setHovered(layer.id)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative cursor-pointer select-none"
                  style={{ width: 280, transformStyle: "preserve-3d" }}
                >
                  {/* The layer slab */}
                  <div
                    style={{
                      width: "100%",
                      height: layer.heightPx,
                      background: layer.color,
                      border: `2px solid ${layer.borderColor}`,
                      borderRadius: 6,
                      boxShadow: isHovered
                        ? `0 0 20px ${layer.borderColor}99, inset 0 0 10px rgba(255,255,255,0.1)`
                        : `0 2px 8px rgba(0,0,0,0.5)`,
                      transition: "box-shadow 0.2s",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 12,
                    }}
                  >
                    {/* Short label inside the slab when assembled */}
                    <AnimatePresence>
                      {(!exploded || layer.heightPx >= 16) && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: exploded ? 0.4 : 0.9 }}
                          className="text-xs font-black truncate"
                          style={{ color: layer.textColor }}
                        >
                          {layer.label.split("—")[0].trim()}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="text-slate-500 text-xs mt-4 text-center">
          {exploded
            ? "Click a layer to highlight · tap Reassemble to stack"
            : "Tap 💥 Explode to see the internal layers"}
        </p>
      </div>

      {/* Layer legend — shown when exploded */}
      <AnimatePresence>
        {exploded && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-5 flex flex-col gap-2"
          >
            {[...data.layers].reverse().map((layer, i) => (
              <motion.div
                key={`legend-${layer.id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 cursor-pointer rounded-xl px-3 py-2 transition-colors"
                style={{
                  background: hovered === layer.id ? `${layer.color}22` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${hovered === layer.id ? layer.borderColor : "transparent"}`,
                }}
                onMouseEnter={() => setHovered(layer.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="shrink-0 mt-0.5 rounded"
                  style={{ width: 14, height: 14, background: layer.color, border: `1px solid ${layer.borderColor}` }}
                />
                <div>
                  <p className="font-black text-xs leading-tight" style={{
                    color: layer.color === "#212121" || layer.color === "#424242" ? "#9CA3AF" : layer.color,
                  }}>
                    {layer.label}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-snug">{layer.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
