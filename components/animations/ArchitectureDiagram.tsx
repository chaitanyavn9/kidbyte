"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Block {
  id: string;
  label: string;
  shortLabel?: string;
  x: number; y: number; w: number; h: number;
  color: string;
  borderColor: string;
  textColor?: string;
  group: string;
  detail: string;
}

interface Connection {
  from: string; to: string; label?: string; color?: string;
}

interface DiagramData {
  title: string;
  subtitle: string;
  viewBox: string;
  blocks: Block[];
  connections: Connection[];
  groups: { id: string; label: string; color: string }[];
}

const CPU_DIAGRAM: DiagramData = {
  title: "CPU Architecture",
  subtitle: "Modern x86-64 superscalar processor — internal block diagram",
  viewBox: "0 0 540 420",
  groups: [
    { id: "frontend",  label: "Front End",       color: "#3B82F6" },
    { id: "execution", label: "Execution Engine", color: "#10B981" },
    { id: "cache",     label: "Cache Hierarchy",  color: "#F59E0B" },
    { id: "io",        label: "I/O & Memory",     color: "#8B5CF6" },
  ],
  blocks: [
    // --- Front end ---
    { id: "ifetch",  label: "Instruction Fetch Unit", shortLabel: "I-Fetch",
      x: 20, y: 20, w: 120, h: 36, group: "frontend",
      color: "#1D4ED820", borderColor: "#3B82F6",
      detail: "Fetches raw bytes from the instruction cache (L1-I). Can fetch 16–32 bytes per cycle. Feeds the decoder." },
    { id: "bpu",     label: "Branch Predictor", shortLabel: "Branch\nPredictor",
      x: 150, y: 20, w: 120, h: 36, group: "frontend",
      color: "#1D4ED820", borderColor: "#60A5FA",
      detail: "Predicts whether a branch (if/else) is taken before the condition is calculated. Modern accuracy >99%. Misprediction wastes ~15 pipeline stages." },
    { id: "decode",  label: "Decode → Micro-ops", shortLabel: "Decode\n→ μops",
      x: 280, y: 20, w: 120, h: 36, group: "frontend",
      color: "#1D4ED820", borderColor: "#93C5FD",
      detail: "Breaks complex x86 instructions into simple micro-operations (μops). Intel decoders: 4 complex + 1 simple per cycle. AMD Zen 4: 4-wide decode." },
    { id: "rob",     label: "Reorder Buffer (ROB)", shortLabel: "ROB",
      x: 410, y: 20, w: 110, h: 36, group: "frontend",
      color: "#1D4ED820", borderColor: "#BFDBFE",
      detail: "Tracks all in-flight μops. Ensures they retire (commit to registers) in original program order even though they may have executed out-of-order. Intel Raptor Lake: 512 ROB entries." },

    // --- Execution engine ---
    { id: "scheduler", label: "Dispatch / Scheduler", shortLabel: "Scheduler",
      x: 20, y: 90, w: 160, h: 34, group: "execution",
      color: "#05966920", borderColor: "#10B981",
      detail: "Monitors which μops have all their inputs ready and dispatches them to the correct execution port. Raptor Lake has 12 execution ports." },
    { id: "rename",  label: "Register Renaming", shortLabel: "Reg Rename",
      x: 190, y: 90, w: 130, h: 34, group: "execution",
      color: "#05966920", borderColor: "#34D399",
      detail: "Maps architectural registers (rax, rbx…) to a large physical register file, eliminating false WAW/WAR data hazards and allowing true out-of-order execution." },
    { id: "alu",     label: "ALU ×4\n(integer math)",  shortLabel: "ALU ×4",
      x: 20, y: 158, w: 100, h: 50, group: "execution",
      color: "#05966920", borderColor: "#10B981",
      detail: "Arithmetic Logic Units — handle add, sub, mul, div, bit shifts, comparisons. Modern CPUs have 4–6 integer ALUs per core running in parallel." },
    { id: "fpu",     label: "FPU/AVX\n(float/SIMD)", shortLabel: "FPU/SIMD",
      x: 130, y: 158, w: 100, h: 50, group: "execution",
      color: "#05966920", borderColor: "#6EE7B7",
      detail: "Floating-point and SIMD (AVX-512) units. Handle scientific computation, graphics math, ML inference on CPU. AVX-512 operates on 512-bit vectors — 16 floats at once." },
    { id: "lsu",     label: "Load/Store\nUnit", shortLabel: "LSU",
      x: 240, y: 158, w: 90, h: 50, group: "execution",
      color: "#05966920", borderColor: "#A7F3D0",
      detail: "Handles all memory reads (loads) and writes (stores). Connected to L1 data cache. Modern CPUs have 2 load + 1 store ports. Out-of-order loads are reordered for performance." },
    { id: "physreg", label: "Physical Register File\n(~280 int + 220 FP registers)",
      shortLabel: "Phys Regs",
      x: 340, y: 158, w: 180, h: 50, group: "execution",
      color: "#05966920", borderColor: "#059669",
      detail: "The CPU's internal scratch pad. Much larger than the 16 architectural registers. Raptor Lake has ~280 integer + ~220 FP physical registers per core for rename freedom." },

    // --- Cache hierarchy ---
    { id: "l1i",    label: "L1-I Cache\n32–64 KB · ~4 cycles", shortLabel: "L1-I\n32KB",
      x: 20, y: 240, w: 110, h: 48, group: "cache",
      color: "#92400E20", borderColor: "#F59E0B",
      detail: "Level-1 Instruction cache. Stores recently fetched instructions. ~32–64 KB, ~4-cycle latency. Separate from L1-D to allow simultaneous instruction fetch and data access." },
    { id: "l1d",    label: "L1-D Cache\n48–64 KB · ~5 cycles", shortLabel: "L1-D\n48KB",
      x: 140, y: 240, w: 110, h: 48, group: "cache",
      color: "#92400E20", borderColor: "#FBBF24",
      detail: "Level-1 Data cache. Stores data the LSU recently loaded. ~48–64 KB. Filled from L2 when a cache miss occurs. Miss penalty: ~12 extra cycles to reach L2." },
    { id: "l2",     label: "L2 Cache\n1–2 MB · ~12 cycles", shortLabel: "L2\n1MB",
      x: 260, y: 240, w: 110, h: 48, group: "cache",
      color: "#92400E20", borderColor: "#D97706",
      detail: "Unified L2 cache (instructions + data). ~1–2 MB per core. If L1 misses, L2 fills it in ~12 cycles. Much faster than going to L3 or main memory." },
    { id: "l3",     label: "L3 Cache (shared across all cores)\n8–64 MB · ~40 cycles",
      shortLabel: "L3 (shared)\n32–64 MB",
      x: 20, y: 308, w: 500, h: 42, group: "cache",
      color: "#92400E1A", borderColor: "#B45309",
      detail: "Last-Level Cache — shared by all cores via ring bus or mesh. 8–64 MB on desktop CPUs (Intel Raptor Lake: 36 MB, AMD Ryzen 7950X: 64 MB). Cache hit here saves a 100 ns RAM trip." },

    // --- I/O & memory ---
    { id: "mc",     label: "Memory\nController\n(DDR5)", shortLabel: "MC\nDDR5",
      x: 20, y: 374, w: 110, h: 36, group: "io",
      color: "#5B21B620", borderColor: "#8B5CF6",
      detail: "Integrated memory controller (IMC) — talks directly to DDR5 DIMM slots. Manages refresh cycles, rank switching, timing (CAS latency). DDR5 runs two 32-bit channels simultaneously." },
    { id: "pcie",   label: "PCIe\nController\n(Gen 5)", shortLabel: "PCIe\nCtrl",
      x: 140, y: 374, w: 110, h: 36, group: "io",
      color: "#5B21B620", borderColor: "#A78BFA",
      detail: "Provides PCIe lanes directly from the CPU. Intel i9-13900K: 20 PCIe 5.0 lanes. AMD Ryzen 9: 24 PCIe 5.0 lanes. GPU plugs into these lanes. Fast NVMe SSDs too." },
    { id: "dmi",    label: "DMI / Infinity\nFabric", shortLabel: "DMI /\nIF",
      x: 260, y: 374, w: 110, h: 36, group: "io",
      color: "#5B21B620", borderColor: "#C4B5FD",
      detail: "Intel DMI connects CPU to the Platform Controller Hub (PCH) for USB, SATA, slow PCIe. AMD Infinity Fabric is the interconnect between CPU dies in multi-chiplet designs (e.g., Ryzen 7950X)." },
    { id: "ioring", label: "I/O Ring\n(USB, SATA, Display)", shortLabel: "I/O\nRing",
      x: 380, y: 374, w: 140, h: 36, group: "io",
      color: "#5B21B620", borderColor: "#DDD6FE",
      detail: "Handles USB 3.x, Thunderbolt, display outputs (HDMI/DisplayPort from iGPU), and PCIe management. Usually implemented in a separate I/O die on AMD Zen chips." },
  ],
  connections: [
    { from: "ifetch",  to: "decode",  color: "#3B82F660" },
    { from: "bpu",     to: "ifetch",  color: "#60A5FA60" },
    { from: "decode",  to: "rob",     color: "#3B82F660" },
    { from: "decode",  to: "rename",  color: "#3B82F660" },
    { from: "rename",  to: "scheduler", color: "#10B98160" },
    { from: "scheduler", to: "alu",   color: "#10B98160" },
    { from: "scheduler", to: "fpu",   color: "#10B98160" },
    { from: "scheduler", to: "lsu",   color: "#10B98160" },
    { from: "alu",     to: "physreg", color: "#10B98160" },
    { from: "fpu",     to: "physreg", color: "#10B98160" },
    { from: "lsu",     to: "l1d",     color: "#F59E0B80" },
    { from: "ifetch",  to: "l1i",     color: "#F59E0B80" },
    { from: "l1d",     to: "l2",      color: "#F59E0B60" },
    { from: "l2",      to: "l3",      color: "#D9780660" },
    { from: "l3",      to: "mc",      color: "#8B5CF660" },
  ],
};

const GPU_DIAGRAM: DiagramData = {
  title: "GPU Architecture",
  subtitle: "Discrete GPU die — NVIDIA-style (Ada Lovelace / RTX 40 series)",
  viewBox: "0 0 540 400",
  groups: [
    { id: "frontend",  label: "Command & Geometry",  color: "#16A34A" },
    { id: "shader",    label: "Shader Multiprocessors", color: "#0891B2" },
    { id: "cache",     label: "Cache & Memory",      color: "#F59E0B" },
    { id: "io",        label: "Output & Interface",   color: "#8B5CF6" },
  ],
  blocks: [
    // Frontend
    { id: "host",    label: "Host Interface\n(PCIe 4.0 ×16)", shortLabel: "PCIe\nHost",
      x: 20, y: 20, w: 120, h: 44, group: "io",
      color: "#5B21B620", borderColor: "#8B5CF6",
      detail: "Receives commands from the CPU via PCIe. Bandwidth: 64 GB/s (PCIe 4.0 ×16). The CPU submits draw calls and compute dispatches to the GPU's command queue through this interface." },
    { id: "giga",    label: "GigaThread Engine\n(work distributor)", shortLabel: "GigaThread\nEngine",
      x: 150, y: 20, w: 150, h: 44, group: "frontend",
      color: "#05966920", borderColor: "#16A34A",
      detail: "Distributes compute work (warps/thread blocks) across all Graphics Processing Clusters (GPCs). Ensures all SMs stay busy. Handles multi-instance GPU (MIG) partitioning on data-centre GPUs." },
    { id: "raster",  label: "Raster Engine\n(geometry → pixels)", shortLabel: "Raster\nEngine",
      x: 310, y: 20, w: 130, h: 44, group: "frontend",
      color: "#05966920", borderColor: "#4ADE80",
      detail: "Converts 3D triangles into 2D pixel fragments. 1 raster engine per GPC. Performs clipping, culling (removes back-faces), and interpolates vertex attributes to each pixel." },
    { id: "rt",      label: "RT Core\n(ray–triangle intersect)", shortLabel: "RT Core",
      x: 450, y: 20, w: 70, h: 44, group: "frontend",
      color: "#05966920", borderColor: "#86EFAC",
      detail: "Dedicated hardware for ray–BVH traversal and ray–triangle intersection tests. Offloads this from shader cores entirely. RTX 4090: 4th-gen RT cores, ~2× faster than RTX 3090." },

    // --- SM row 1 ---
    { id: "sm1",  label: "SM: 128 CUDA\n+ 4 Tensor\n+ 1 RT Core", shortLabel: "SM\n128C",
      x: 20, y: 100, w: 100, h: 70, group: "shader",
      color: "#0E729220", borderColor: "#0891B2",
      detail: "Streaming Multiprocessor — the fundamental compute unit. Contains 128 CUDA (shader) cores, 4 Tensor cores for AI/matrix math, 1 RT core for ray tracing, L0 instruction cache, and register file." },
    { id: "sm2",  label: "SM: 128 CUDA\n+ 4 Tensor\n+ 1 RT Core", shortLabel: "SM\n128C",
      x: 128, y: 100, w: 100, h: 70, group: "shader",
      color: "#0E729220", borderColor: "#0891B2",
      detail: "Each SM runs 1024–2048 threads (warps of 32) concurrently via hardware multithreading. When one warp stalls on memory, the SM switches to another instantly — zero-cost context switch." },
    { id: "sm3",  label: "SM: 128 CUDA\n+ 4 Tensor\n+ 1 RT Core", shortLabel: "SM\n128C",
      x: 236, y: 100, w: 100, h: 70, group: "shader",
      color: "#0E729220", borderColor: "#0891B2",
      detail: "RTX 4090 has 128 SMs × 128 CUDA cores = 16,384 CUDA cores. All running in parallel at ~2.5 GHz = ~82.6 TFLOPS FP32 — equivalent to hundreds of CPU cores for parallel workloads." },
    { id: "sm4",  label: "SM: 128 CUDA\n+ 4 Tensor\n+ 1 RT Core", shortLabel: "SM\n128C",
      x: 344, y: 100, w: 100, h: 70, group: "shader",
      color: "#0E729220", borderColor: "#0891B2",
      detail: "Tensor Cores (4 per SM) are matrix-multiply-accumulate units. RTX 4090: 1457 AI TOPS. Used by DLSS (AI upscaling), AI denoising in Path Tracing, and ML inference." },
    { id: "smdot", label: "… 124 more SMs …", shortLabel: "×128 SMs\ntotal",
      x: 452, y: 100, w: 68, h: 70, group: "shader",
      color: "#0E729210", borderColor: "#67E8F9",
      detail: "RTX 4090 has 128 SMs total (Ada Lovelace AD102 die). Each GPC contains 6 TPCs, each TPC has 2 SMs. 12 GPCs × 6 TPCs × 2 SMs = 144 SMs, with 128 enabled." },

    // --- L1 / shared memory ---
    { id: "l1shared", label: "L1 Cache + Shared Memory per SM — 128 KB",
      shortLabel: "L1 / Shared Mem (128 KB/SM)",
      x: 20, y: 180, w: 500, h: 32, group: "cache",
      color: "#92400E1A", borderColor: "#F59E0B",
      detail: "Each SM has 128 KB of fast on-chip memory that can be configured as L1 cache (automatic) or Shared Memory (programmer-managed scratchpad). Critical for reducing VRAM bandwidth pressure." },

    // --- L2 cache ---
    { id: "l2gpu",  label: "L2 Cache — 72 MB (RTX 4090)", shortLabel: "L2 Cache · 72 MB",
      x: 20, y: 224, w: 500, h: 36, group: "cache",
      color: "#92400E20", borderColor: "#D97706",
      detail: "RTX 4090 has 72 MB L2 cache — massive compared to previous generations. Dramatically reduces GDDR6X bandwidth pressure. RTX 3090 had only 6 MB. This is why 4090 AI workloads are so efficient." },

    // --- VRAM ---
    { id: "gddr1", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 20,  y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#0EA5E9",
      detail: "GDDR6X memory chip. PAM4 (Pulse Amplitude Modulation 4) signalling transmits 2 bits per clock edge. 21 Gbps per pin × 384-bit bus = 1008 GB/s total bandwidth on RTX 4090." },
    { id: "gddr2", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 100, y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#0EA5E9",
      detail: "8 GDDR6X chips × 3 GB each = 24 GB total VRAM. Enough for 4K textures, large language model inference, and high-resolution rendering without spilling to system RAM." },
    { id: "gddr3", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 180, y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#38BDF8",
      detail: "GDDR6X is physically on the GPU PCB, not inside the GPU die itself. It is a separate chip connected to the GPU die via a 48-bit channel each." },
    { id: "gddr4", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 260, y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#38BDF8",
      detail: "GDDR6X vs HBM2e: GDDR6X is cheaper and uses standard PCB routing. HBM (used in MI300X, A100) is stacked on the same package as the die — shorter traces, lower latency, but very expensive." },
    { id: "gddr5", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 340, y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#0EA5E9",
      detail: "" },
    { id: "gddr6", label: "GDDR6X\n3 GB", shortLabel: "GDDR6X\n3 GB",
      x: 420, y: 275, w: 70, h: 50, group: "cache",
      color: "#1E3A5F20", borderColor: "#0EA5E9",
      detail: "" },

    // --- Output ---
    { id: "display", label: "Display Engine\n(HDMI 2.1 / DP 1.4a)", shortLabel: "Display\nEngine",
      x: 20, y: 345, w: 150, h: 40, group: "io",
      color: "#5B21B620", borderColor: "#A78BFA",
      detail: "Outputs the final rendered frame to the display. Supports HDMI 2.1 (48 Gbps, 10K@120Hz) and DisplayPort 1.4a (32.4 Gbps). Handles HDR tone mapping in hardware." },
    { id: "video",   label: "Video Engine\n(NVENC / NVDEC)", shortLabel: "Video\nEnc/Dec",
      x: 180, y: 345, w: 150, h: 40, group: "io",
      color: "#5B21B620", borderColor: "#C4B5FD",
      detail: "Dedicated hardware video encoder (NVENC) and decoder (NVDEC). Encodes H.264/HEVC/AV1 without using shader cores. RTX 4090 has 1 encoder + 2 decoders." },
    { id: "nvlink",  label: "NVLink / PCIe\nBridge", shortLabel: "NVLink",
      x: 340, y: 345, w: 180, h: 40, group: "io",
      color: "#5B21B620", borderColor: "#DDD6FE",
      detail: "NVLink is NVIDIA's high-speed GPU-to-GPU interconnect. RTX 4090 supports NVLink 4.0 at 112.5 GB/s (bidirectional). Allows two GPUs to pool VRAM. Consumer GPUs have one NVLink connector." },
  ],
  connections: [
    { from: "host",    to: "giga",    color: "#8B5CF660" },
    { from: "giga",    to: "sm1",     color: "#0891B260" },
    { from: "giga",    to: "sm2",     color: "#0891B260" },
    { from: "giga",    to: "sm3",     color: "#0891B260" },
    { from: "raster",  to: "sm1",     color: "#16A34A60" },
    { from: "sm1",     to: "l1shared", color: "#F59E0B60" },
    { from: "l1shared",to: "l2gpu",   color: "#D9780660" },
    { from: "l2gpu",   to: "gddr1",   color: "#0EA5E960" },
    { from: "l2gpu",   to: "gddr2",   color: "#0EA5E960" },
  ],
};

const DIAGRAMS: Record<string, DiagramData> = {
  cpu: CPU_DIAGRAM,
  gpu: GPU_DIAGRAM,
};

function getCenter(b: Block) {
  return { x: b.x + b.w / 2, y: b.y + b.h / 2 };
}

function findBlock(blocks: Block[], id: string): Block | undefined {
  return blocks.find(b => b.id === id);
}

interface Props { lessonId: string }

export default function ArchitectureDiagram({ lessonId }: Props) {
  const data = DIAGRAMS[lessonId] ?? DIAGRAMS.cpu;
  const [hovered, setHovered] = useState<string | null>(null);
  const hoveredBlock = hovered ? data.blocks.find(b => b.id === hovered) : null;

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#0F172A" }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-0.5">ARCHITECTURE</p>
        <p className="text-white font-black text-base">{data.title}</p>
        <p className="text-slate-400 text-xs mt-0.5">{data.subtitle}</p>
      </div>

      {/* Group legend */}
      <div className="px-5 pb-2 flex flex-wrap gap-2">
        {data.groups.map(g => (
          <span key={g.id} className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${g.color}20`, color: g.color }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: g.color }} />
            {g.label}
          </span>
        ))}
      </div>

      {/* SVG diagram */}
      <div className="px-3 pb-2 overflow-x-auto">
        <svg
          viewBox={data.viewBox}
          className="w-full"
          style={{ maxHeight: 380, minWidth: 320 }}
        >
          {/* Connection lines */}
          {data.connections.map((conn, i) => {
            const a = findBlock(data.blocks, conn.from);
            const b = findBlock(data.blocks, conn.to);
            if (!a || !b) return null;
            const ca = getCenter(a), cb = getCenter(b);
            return (
              <line key={i}
                x1={ca.x} y1={ca.y} x2={cb.x} y2={cb.y}
                stroke={conn.color ?? "#ffffff20"} strokeWidth={1.5}
                strokeDasharray="4 3"
              />
            );
          })}

          {/* Blocks */}
          {data.blocks.map((block) => {
            const isHov = hovered === block.id;
            return (
              <g key={block.id}
                onMouseEnter={() => setHovered(block.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <rect
                  x={block.x} y={block.y} width={block.w} height={block.h}
                  rx={6}
                  fill={isHov ? block.borderColor + "33" : block.color}
                  stroke={block.borderColor}
                  strokeWidth={isHov ? 2 : 1}
                  style={{ transition: "all 0.15s" }}
                />
                {/* Label — split on \n */}
                {(block.shortLabel ?? block.label).split("\n").map((line, li, arr) => (
                  <text key={li}
                    x={block.x + block.w / 2}
                    y={block.y + block.h / 2 + (li - (arr.length - 1) / 2) * 11}
                    textAnchor="middle" dominantBaseline="middle"
                    fill={isHov ? "#fff" : block.textColor ?? "#CBD5E1"}
                    fontSize={arr.length > 2 ? 7 : arr.length > 1 ? 8 : 9}
                    fontWeight="700"
                    style={{ transition: "fill 0.15s", fontFamily: "system-ui, sans-serif" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {hoveredBlock && hoveredBlock.detail ? (
          <motion.div
            key={hoveredBlock.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-xl px-4 py-3"
            style={{ background: `${hoveredBlock.borderColor}18`, border: `1px solid ${hoveredBlock.borderColor}44` }}
          >
            <p className="font-black text-xs mb-1" style={{ color: hoveredBlock.borderColor }}>
              {hoveredBlock.label.split("\n")[0]}
            </p>
            <p className="text-slate-300 text-xs leading-relaxed">{hoveredBlock.detail}</p>
          </motion.div>
        ) : (
          <motion.div
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-4 mb-4 text-center text-slate-600 text-xs py-2"
          >
            Hover any block to read what it does
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
