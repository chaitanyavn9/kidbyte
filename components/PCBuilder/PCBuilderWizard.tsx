"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Data types ─── */
type BuildGoal = "gaming" | "development" | "study" | "content-creation";
type FormFactor = "desktop" | "laptop";

interface Option {
  id: string;
  label: string;
  spec: string;
  tags: string[]; // "gaming" | "dev" | "study" | "content"
  price: string;
  emoji: string;
  whyNeed?: string;
  detail?: string;
}

interface BuildStep {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  lessonId?: string;
  lessonLabel?: string;
  whyNeed: string;
  options: Option[];
  multi?: boolean;
}

/* ─── All component options ─── */
const CPU_OPTIONS: Option[] = [
  { id: "i3-13", emoji: "🧠", label: "Intel Core i3-13100", spec: "4 cores, 3.4GHz, 60W", tags: ["study"], price: "₹8,500", detail: "Entry-level. Good for browsing, documents, and YouTube." },
  { id: "i5-13", emoji: "🧠", label: "Intel Core i5-13600K", spec: "14 cores, 3.5GHz, 125W", tags: ["study", "gaming", "dev"], price: "₹22,000", detail: "Best value. Handles gaming, coding and multitasking very well." },
  { id: "i7-13", emoji: "🧠", label: "Intel Core i7-13700K", spec: "16 cores, 3.4GHz, 125W", tags: ["gaming", "dev", "content"], price: "₹35,000", detail: "High-end. Great for demanding games, Android Studio, and video editing." },
  { id: "i9-13", emoji: "🧠", label: "Intel Core i9-13900K", spec: "24 cores, 3.0GHz, 253W", tags: ["gaming", "dev", "content"], price: "₹55,000", detail: "Extreme. For 4K gaming, running VMs, compiling huge codebases." },
  { id: "r5-7600", emoji: "🧠", label: "AMD Ryzen 5 7600X", spec: "6 cores, 4.7GHz, 105W", tags: ["study", "gaming", "dev"], price: "₹20,000", detail: "AMD's mid-range. Very fast single-core speed, great for gaming." },
  { id: "r7-7700", emoji: "🧠", label: "AMD Ryzen 7 7700X", spec: "8 cores, 4.5GHz, 105W", tags: ["gaming", "dev", "content"], price: "₹30,000", detail: "8 real cores — perfect for streaming + gaming simultaneously." },
  { id: "r9-7950", emoji: "🧠", label: "AMD Ryzen 9 7950X", spec: "16 cores, 4.5GHz, 170W", tags: ["dev", "content"], price: "₹60,000", detail: "Workstation-class. Compiles code or renders video in record time." },
  { id: "m2", emoji: "🧠", label: "Apple M2 (Laptop only)", spec: "8 cores, 3.5GHz, 10W", tags: ["study", "dev", "content"], price: "Built-in MacBook", detail: "ARM chip — blazing fast, nearly silent, 18hr battery. No dedicated GPU games." },
];

const RAM_OPTIONS: Option[] = [
  { id: "8gb", emoji: "📋", label: "8 GB DDR4", spec: "2 × 4GB, 3200 MHz", tags: ["study"], price: "₹1,800", detail: "Minimum viable. Browser + a few apps. Can't run a VM or modern games well." },
  { id: "16gb", emoji: "📋", label: "16 GB DDR5", spec: "2 × 8GB, 4800 MHz", tags: ["study", "gaming", "dev"], price: "₹4,000", detail: "Sweet spot. Handles gaming, coding, 20+ browser tabs comfortably." },
  { id: "32gb", emoji: "📋", label: "32 GB DDR5", spec: "2 × 16GB, 5600 MHz", tags: ["gaming", "dev", "content"], price: "₹7,500", detail: "Serious dev/gaming. Runs Docker, Android emulator, and games simultaneously." },
  { id: "64gb", emoji: "📋", label: "64 GB DDR5", spec: "2 × 32GB, 6000 MHz", tags: ["dev", "content"], price: "₹15,000", detail: "Professional workstation. Runs multiple VMs, large datasets, 4K editing." },
];

const GPU_OPTIONS: Option[] = [
  { id: "igpu", emoji: "🎨", label: "Integrated Graphics", spec: "Intel UHD / AMD Vega, shared RAM", tags: ["study"], price: "₹0 (built-in)", detail: "Fine for browsing, videos, coding. Zero gaming capability for 3D games." },
  { id: "rtx3060", emoji: "🎨", label: "NVIDIA RTX 3060", spec: "12GB VRAM, 1080p Gaming", tags: ["gaming"], price: "₹25,000", detail: "Entry gaming. 1080p High settings at 60fps. Also great for ML/AI training." },
  { id: "rtx4070", emoji: "🎨", label: "NVIDIA RTX 4070", spec: "12GB GDDR6X, 1440p Gaming", tags: ["gaming", "content"], price: "₹50,000", detail: "1440p 144fps, ray tracing at good quality. DLSS 3 for extra frames." },
  { id: "rtx4090", emoji: "🎨", label: "NVIDIA RTX 4090", spec: "24GB GDDR6X, 4K Gaming", tags: ["gaming", "content"], price: "₹1,50,000", detail: "The fastest consumer GPU. 4K 144fps, runs AI locally, incredible rendering." },
  { id: "rx7600", emoji: "🎨", label: "AMD RX 7600", spec: "8GB VRAM, 1080p Gaming", tags: ["gaming"], price: "₹22,000", detail: "Best value 1080p card. No ray tracing advantage over NVIDIA." },
  { id: "rx7900", emoji: "🎨", label: "AMD RX 7900 XTX", spec: "24GB VRAM, 4K Gaming", tags: ["gaming", "content"], price: "₹85,000", detail: "AMD's flagship. Great for gaming and video editing (not ML/AI)." },
];

const STORAGE_OPTIONS: Option[] = [
  { id: "256ssd", emoji: "⚡", label: "256 GB NVMe SSD", spec: "M.2 PCIe 4.0, ~5,000 MB/s", tags: ["study"], price: "₹2,000", detail: "Tight. OS + a few apps, no room for games or projects." },
  { id: "512ssd", emoji: "⚡", label: "512 GB NVMe SSD", spec: "M.2 PCIe 4.0, ~6,500 MB/s", tags: ["study", "dev"], price: "₹3,500", detail: "Comfortable for coding, documents, 1–2 games." },
  { id: "1tbssd", emoji: "⚡", label: "1 TB NVMe SSD", spec: "M.2 PCIe 4.0, ~7,000 MB/s", tags: ["study", "gaming", "dev", "content"], price: "₹6,000", detail: "Recommended minimum. Handles OS + game library + projects comfortably." },
  { id: "2tb+hdd", emoji: "⚡", label: "2 TB SSD + 2 TB HDD", spec: "NVMe fast + HDD bulk storage", tags: ["gaming", "dev", "content"], price: "₹13,000", detail: "Best combo. Fast SSD for OS/games + cheap HDD for backups and media." },
  { id: "4tbssd", emoji: "⚡", label: "4 TB NVMe SSD", spec: "M.2 PCIe 5.0, ~12,000 MB/s", tags: ["content", "dev"], price: "₹25,000", detail: "Professional. For video editors with huge project files and game developers." },
];

const DISPLAY_OPTIONS: Option[] = [
  { id: "fhd60", emoji: "🖥️", label: "1080p 60Hz Monitor", spec: "Full HD, IPS, 24 inch", tags: ["study"], price: "₹8,000", detail: "Basic but clear. Good for documents, browsing, and casual use." },
  { id: "fhd144", emoji: "🖥️", label: "1080p 144Hz Monitor", spec: "Full HD, IPS, 24 inch", tags: ["gaming"], price: "₹14,000", detail: "Entry gaming. 144Hz makes motion buttery smooth — huge upgrade from 60Hz." },
  { id: "qhd144", emoji: "🖥️", label: "1440p 144Hz Monitor", spec: "2560×1440, IPS, 27 inch", tags: ["gaming", "dev", "content"], price: "₹25,000", detail: "Sweet spot. Sharper than 1080p, more screen space for coding, smooth gaming." },
  { id: "4k60", emoji: "🖥️", label: "4K 60Hz Monitor", spec: "3840×2160, IPS, 27 inch", tags: ["content", "dev"], price: "₹30,000", detail: "Incredible detail for video editing, design work, and reference monitors." },
  { id: "4k144", emoji: "🖥️", label: "4K 144Hz Monitor", spec: "3840×2160, 27 inch, HDR", tags: ["gaming", "content"], price: "₹60,000", detail: "Top tier. Needs RTX 4090 to run games at this resolution + refresh rate." },
  { id: "laptop-fhd", emoji: "💻", label: "Laptop 1080p 60Hz", spec: "15.6 inch FHD IPS", tags: ["study", "dev"], price: "Built-in", detail: "Standard laptop screen. Clear and comfortable for work and study." },
  { id: "laptop-qhd165", emoji: "💻", label: "Laptop 1440p 165Hz", spec: "16 inch QHD 165Hz OLED", tags: ["gaming", "content"], price: "Built-in Premium", detail: "OLED display — perfect blacks, vivid colours. Best for content and gaming laptops." },
];

const OS_OPTIONS: Option[] = [
  { id: "win11h", emoji: "🪟", label: "Windows 11 Home", spec: "Microsoft, 64-bit, DirectX 12", tags: ["study", "gaming", "dev", "content"], price: "₹7,500", detail: "Best for gaming — most games are Windows-only. Huge software ecosystem." },
  { id: "win11p", emoji: "🪟", label: "Windows 11 Pro", spec: "+ BitLocker, Hyper-V, Remote Desktop", tags: ["dev", "content"], price: "₹13,000", detail: "For developers — adds Hyper-V virtualisation (run Linux inside Windows) and BitLocker encryption." },
  { id: "ubuntu", emoji: "🐧", label: "Ubuntu 24.04 LTS", spec: "Linux, Free, 5-year support", tags: ["dev"], price: "Free!", detail: "The developer's choice. Runs Docker natively, great terminal, free and open-source. Learning Linux is a valuable skill." },
  { id: "fedora", emoji: "🐧", label: "Fedora 40", spec: "Linux, Free, cutting-edge", tags: ["dev"], price: "Free!", detail: "Latest Linux tech. Preferred by many software engineers and Red Hat developers." },
  { id: "macos", emoji: "🍎", label: "macOS Sonoma", spec: "Apple only, UNIX-based", tags: ["dev", "content"], price: "Free (Apple only)", detail: "Best for iOS/macOS app development, design tools, and Unix terminal. No gaming." },
  { id: "dualboot", emoji: "🔄", label: "Dual Boot (Windows + Linux)", spec: "Choose on startup", tags: ["dev"], price: "₹7,500 (Windows)", detail: "Best of both worlds — game on Windows, code on Linux. Needs manual setup." },
];

const PERIPHERAL_OPTIONS: Option[] = [
  { id: "mech-kb", emoji: "⌨️", label: "Mechanical Keyboard", spec: "Cherry MX / Gateron switches", tags: ["gaming", "dev"], price: "₹3,000–15,000", detail: "Tactile feedback, satisfying clicks. Preferred by programmers and gamers." },
  { id: "gaming-mouse", emoji: "🖱️", label: "Gaming Mouse", spec: "25,000 DPI, 6 buttons, RGB", tags: ["gaming"], price: "₹2,000–8,000", detail: "High DPI for precision aiming. Extra buttons for macros." },
  { id: "drawing-pad", emoji: "✏️", label: "Drawing Tablet (Wacom)", spec: "Pressure sensitive, A5 size", tags: ["content"], price: "₹5,000–20,000", detail: "For digital artists, designers, and hand-written notes with a stylus." },
  { id: "webcam", emoji: "📷", label: "HD Webcam", spec: "1080p 60fps, ring light", tags: ["study", "dev"], price: "₹2,500", detail: "For online classes, video calls, and streaming/recording." },
  { id: "headset", emoji: "🎧", label: "Gaming Headset", spec: "7.1 surround, noise cancel mic", tags: ["gaming", "study"], price: "₹3,000", detail: "Surround sound for gaming. Noise-cancellation mic for calls and meetings." },
  { id: "printer", emoji: "🖨️", label: "Laser Printer", spec: "Duplex, WiFi, 30ppm", tags: ["study"], price: "₹8,000", detail: "For printing assignments, notes, and documents." },
  { id: "scanner", emoji: "📄", label: "Document Scanner", spec: "600dpi, A4, WiFi", tags: ["study"], price: "₹5,000", detail: "Scan handwritten notes, receipts, documents to digital." },
  { id: "ext-ssd", emoji: "💾", label: "External SSD 1TB", spec: "USB 3.2 Gen2, 1,000 MB/s", tags: ["content", "dev"], price: "₹6,000", detail: "Portable fast storage for backups, project transfers, and media." },
  { id: "ups", emoji: "🔋", label: "UPS (Power Backup)", spec: "600VA, 2 hours backup", tags: ["dev", "study"], price: "₹4,000", detail: "Protects against sudden power cuts — saves work in progress." },
];

/* ─── Build steps (shown in order) ─── */
function getSteps(formFactor: FormFactor | null): BuildStep[] {
  const dispOpts = DISPLAY_OPTIONS.filter(o =>
    formFactor === "laptop" ? o.id.startsWith("laptop") : !o.id.startsWith("laptop")
  );
  const gpuOpts = formFactor === "laptop"
    ? GPU_OPTIONS.filter(o => ["igpu", "rtx3060", "rtx4070"].includes(o.id))
    : GPU_OPTIONS;

  return [
    {
      id: "cpu", title: "Choose Your Processor (CPU)", subtitle: "The brain — every instruction runs here",
      emoji: "🧠", lessonId: "cpu", lessonLabel: "What is a CPU?",
      whyNeed: "Without a CPU, the computer literally cannot do anything. Every click, every calculation, every pixel on screen goes through the CPU. A faster CPU means smoother multitasking and faster code compilation.",
      options: CPU_OPTIONS.filter(o => formFactor === "laptop" ? ["i5-13","i7-13","r5-7600","r7-7700","m2"].includes(o.id) : o.id !== "m2"),
    },
    {
      id: "ram", title: "Choose Your RAM", subtitle: "The work desk — holds everything currently in use",
      emoji: "📋", lessonId: "ram", lessonLabel: "What is RAM?",
      whyNeed: "RAM is where the computer stores everything it's actively working on. Too little RAM = the computer starts using the slow SSD as RAM (called 'swapping') and everything freezes. 16GB is the minimum for smooth modern use.",
      options: formFactor === "laptop" ? RAM_OPTIONS.slice(0, 3) : RAM_OPTIONS,
    },
    {
      id: "gpu", title: "Choose Your Graphics Card (GPU)", subtitle: "The artist — draws every pixel on your screen",
      emoji: "🎨", lessonId: "gpu", lessonLabel: "What is a GPU?",
      whyNeed: "Without a dedicated GPU, your CPU has to draw every pixel itself — it slows everything down and makes 3D games impossible. For gaming, the GPU is the most important part. For coding/study, integrated graphics are usually fine.",
      options: gpuOpts,
    },
    {
      id: "storage", title: "Choose Your Storage (SSD)", subtitle: "The filing room — stores everything permanently",
      emoji: "⚡", lessonId: "ssd", lessonLabel: "What is an SSD?",
      whyNeed: "Storage holds your OS, apps, games, and files. When RAM runs out, the OS temporarily uses storage (much slower). NVMe SSDs are 100× faster than old spinning hard disks — fast storage means fast boot time and fast app loading.",
      options: STORAGE_OPTIONS,
    },
    {
      id: "display", title: "Choose Your Display", subtitle: "What you actually see — resolution × refresh rate",
      emoji: "🖥️", lessonId: "pixels", lessonLabel: "What are Pixels?",
      whyNeed: "The display turns digital signals from the GPU into visible images. Resolution (1080p/4K) affects sharpness — more pixels = sharper. Refresh rate (60Hz/144Hz) affects smoothness — higher Hz = smoother motion. For gaming, 144Hz makes a huge difference.",
      options: dispOpts,
    },
    {
      id: "os", title: "Choose Your Operating System", subtitle: "The manager — runs before everything else",
      emoji: "💿", lessonId: "os", lessonLabel: "What is an OS?",
      whyNeed: "Without an OS, your expensive hardware is a useless metal box. The OS is the software layer that makes hardware usable — it manages memory, runs your apps, handles files, and provides security. The OS you choose affects what software and games you can use.",
      options: OS_OPTIONS.filter(o => formFactor === "laptop" && o.id === "macos" ? false : true),
    },
    {
      id: "peripherals", title: "Choose Your Peripherals", subtitle: "Everything you connect to the outside",
      emoji: "🖱️", multi: true,
      whyNeed: "Peripherals are input/output devices that connect to your PC. Without a keyboard and mouse you can't interact. Without a monitor you can't see. Additional peripherals like printers, drawing tablets, and headsets expand what you can do with your PC.",
      options: PERIPHERAL_OPTIONS,
    },
  ];
}

/* ─── Build evaluation ─── */
interface EvalResult {
  badge: string;
  badgeColor: string;
  title: string;
  verdict: string;
  upgrades: { part: string; current: string; suggestion: string }[];
}

function evaluateBuild(build: Record<string, string | string[]>, goal: BuildGoal): EvalResult {
  const cpu = build.cpu as string ?? "";
  const ram = build.ram as string ?? "";
  const gpu = build.gpu as string ?? "";
  const storage = build.storage as string ?? "";
  const display = build.display as string ?? "";

  const upgrades: EvalResult["upgrades"] = [];

  if (goal === "gaming") {
    const hasGPU = !gpu.startsWith("igpu");
    const hasGoodRAM = ["16gb","32gb","64gb"].includes(ram);
    const hasGoodCPU = ["i5-13","i7-13","i9-13","r5-7600","r7-7700","r9-7950"].includes(cpu);
    const hasGoodDisplay = ["fhd144","qhd144","4k60","4k144","laptop-qhd165"].includes(display);
    if (!hasGPU) upgrades.push({ part: "GPU", current: "Integrated graphics", suggestion: "Upgrade to at least NVIDIA RTX 3060 or AMD RX 7600 for gaming" });
    if (!hasGoodRAM) upgrades.push({ part: "RAM", current: "8GB", suggestion: "16GB minimum for modern games" });
    if (!hasGoodCPU) upgrades.push({ part: "CPU", current: cpu, suggestion: "i5-13600K or Ryzen 5 7600X for smooth gaming" });
    if (!hasGoodDisplay) upgrades.push({ part: "Display", current: "60Hz", suggestion: "144Hz makes games feel dramatically smoother" });
    if (upgrades.length === 0) return { badge: "🎮", badgeColor: "#7C3AED", title: "Gaming Ready!", verdict: "Your build is qualified for gaming. All the right parts are in place.", upgrades: [] };
    return { badge: "⚠️", badgeColor: "#F59E0B", title: "Not Fully Gaming Ready", verdict: "Your build needs some upgrades before it qualifies as a gaming PC.", upgrades };
  }

  if (goal === "development") {
    const hasEnoughRAM = ["16gb","32gb","64gb"].includes(ram);
    const hasGoodCPU = ["i5-13","i7-13","i9-13","r5-7600","r7-7700","r9-7950","m2"].includes(cpu);
    const hasGoodStorage = ["1tbssd","2tb+hdd","4tbssd"].includes(storage);
    if (!hasEnoughRAM) upgrades.push({ part: "RAM", current: "8GB or less", suggestion: "16GB minimum for running IDEs, Docker, and a browser simultaneously" });
    if (!hasGoodCPU) upgrades.push({ part: "CPU", current: cpu, suggestion: "i5-13600K or Ryzen 5 7600X — compilation and builds need fast cores" });
    if (!hasGoodStorage) upgrades.push({ part: "Storage", current: storage, suggestion: "1TB SSD minimum — node_modules, repos, and IDEs consume hundreds of GBs" });
    if (upgrades.length === 0) return { badge: "👩‍💻", badgeColor: "#0891B2", title: "Developer Ready!", verdict: "Your build is a solid developer workstation. Code away!", upgrades: [] };
    return { badge: "⚠️", badgeColor: "#F59E0B", title: "Dev Build Needs Work", verdict: "Your build can run code but will feel sluggish for professional development.", upgrades };
  }

  if (goal === "content-creation") {
    const hasGPU = !gpu.startsWith("igpu");
    const hasEnoughRAM = ["32gb","64gb"].includes(ram);
    if (!hasGPU) upgrades.push({ part: "GPU", current: "Integrated", suggestion: "RTX 4070 for GPU-accelerated video encoding (dramatically faster export)" });
    if (!hasEnoughRAM) upgrades.push({ part: "RAM", current: ram, suggestion: "32GB for 4K video editing — timelines get very memory-hungry" });
    if (upgrades.length === 0) return { badge: "🎬", badgeColor: "#DC2626", title: "Creator Ready!", verdict: "Your build handles video editing, 3D rendering, and design work.", upgrades: [] };
    return { badge: "⚠️", badgeColor: "#F59E0B", title: "Content Build Needs Work", verdict: "Some upgrades will make your editing and rendering experience much better.", upgrades };
  }

  /* study */
  return { badge: "📚", badgeColor: "#059669", title: "Study & Browse Ready!", verdict: "Your build is perfect for school, browsing, documents, and online classes.", upgrades: [] };
}

/* ─── Main component ─── */
export default function PCBuilderWizard() {
  const [phase, setPhase] = useState<"goal" | "formfactor" | "steps" | "result">("goal");
  const [goal, setGoal] = useState<BuildGoal | null>(null);
  const [formFactor, setFormFactor] = useState<FormFactor | null>(null);
  const [stepIdx, setStepIdx] = useState(0);
  const [build, setBuild] = useState<Record<string, string | string[]>>({});
  const [learnMore, setLearnMore] = useState<string | null>(null);

  const steps = getSteps(formFactor);
  const currentStep = steps[stepIdx];

  function selectOption(stepId: string, optionId: string, multi?: boolean) {
    if (multi) {
      const existing = (build[stepId] as string[]) ?? [];
      const updated = existing.includes(optionId)
        ? existing.filter((x) => x !== optionId)
        : [...existing, optionId];
      setBuild({ ...build, [stepId]: updated });
    } else {
      setBuild({ ...build, [stepId]: optionId });
    }
  }

  function isSelected(stepId: string, optionId: string) {
    const val = build[stepId];
    if (Array.isArray(val)) return val.includes(optionId);
    return val === optionId;
  }

  const goalAccent: Record<BuildGoal, string> = {
    gaming: "#7C3AED",
    development: "#0891B2",
    study: "#059669",
    "content-creation": "#DC2626",
  };
  const accent = goal ? goalAccent[goal] : "#1D7CFF";

  /* Progress bar steps (non-peripheral) */
  const totalSteps = steps.length;
  const progressPct = Math.round((stepIdx / (totalSteps - 1)) * 100);

  /* Result */
  const result = goal && phase === "result" ? evaluateBuild(build, goal) : null;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d1a2d 50%, #0a0a1a 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* ── GOAL SELECTION ── */}
        <AnimatePresence mode="wait">
          {phase === "goal" && (
            <motion.div key="goal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">🖥️</div>
                <h1 className="text-3xl font-black text-white mb-3">Build Your Dream PC</h1>
                <p className="text-white/60 text-lg">What will you mainly use it for? This shapes every decision.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "gaming" as BuildGoal, emoji: "🎮", title: "Gaming PC / Laptop", desc: "High FPS, fast GPU, 144Hz display", color: "#7C3AED" },
                  { id: "development" as BuildGoal, emoji: "👩‍💻", title: "Developer Workstation", desc: "Many cores, 16–32GB RAM, big SSD", color: "#0891B2" },
                  { id: "study" as BuildGoal, emoji: "📚", title: "School & Browsing", desc: "Lightweight, affordable, all-day battery", color: "#059669" },
                  { id: "content-creation" as BuildGoal, emoji: "🎬", title: "Content Creation", desc: "Video editing, 3D rendering, design", color: "#DC2626" },
                ].map((g) => (
                  <motion.button
                    key={g.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setGoal(g.id); setPhase("formfactor"); }}
                    className="rounded-2xl p-6 text-left flex items-start gap-4 border transition-all"
                    style={{ background: `${g.color}18`, borderColor: `${g.color}44` }}
                  >
                    <span className="text-4xl">{g.emoji}</span>
                    <div>
                      <p className="font-black text-white text-lg">{g.title}</p>
                      <p className="text-sm mt-1" style={{ color: g.color }}>{g.desc}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── FORM FACTOR ── */}
          {phase === "formfactor" && (
            <motion.div key="ff" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <button onClick={() => setPhase("goal")} className="text-white/50 text-sm mb-6 hover:text-white/80">← Back</button>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-black text-white mb-2">Desktop or Laptop?</h2>
                <p className="text-white/50">This affects which components are available.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  {
                    id: "desktop" as FormFactor, emoji: "🖥️", title: "Desktop PC",
                    pros: ["More powerful for the price", "Easier to upgrade", "Better cooling"],
                    cons: ["Not portable", "Needs separate monitor, keyboard, mouse"],
                  },
                  {
                    id: "laptop" as FormFactor, emoji: "💻", title: "Laptop",
                    pros: ["Portable — carry everywhere", "Built-in screen, keyboard, battery"],
                    cons: ["More expensive for same performance", "Hard to upgrade"],
                  },
                ].map((ff) => (
                  <motion.button
                    key={ff.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setFormFactor(ff.id); setPhase("steps"); setStepIdx(0); }}
                    className="rounded-2xl p-6 text-left border border-white/10 hover:border-white/30 transition-all"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="text-5xl mb-3">{ff.emoji}</div>
                    <p className="font-black text-white text-xl mb-3">{ff.title}</p>
                    <div className="flex flex-col gap-1">
                      {ff.pros.map((p) => <p key={p} className="text-xs text-green-400">✓ {p}</p>)}
                      {ff.cons.map((c) => <p key={c} className="text-xs text-red-400">✗ {c}</p>)}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── COMPONENT STEPS ── */}
          {phase === "steps" && currentStep && (
            <motion.div key={`step-${stepIdx}`} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>

              {/* Progress */}
              <div className="flex items-center gap-3 mb-6">
                <button onClick={() => stepIdx === 0 ? setPhase("formfactor") : setStepIdx(stepIdx - 1)} className="text-white/50 text-sm hover:text-white/80">← Back</button>
                <div className="flex-1 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: accent }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className="text-xs text-white/40">{stepIdx + 1} / {totalSteps}</span>
              </div>

              {/* Step header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl">{currentStep.emoji}</span>
                  <div>
                    <h2 className="text-xl font-black text-white">{currentStep.title}</h2>
                    <p className="text-sm text-white/50">{currentStep.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Why do you need this */}
              <div className="rounded-xl px-4 py-3 mb-5 flex gap-3 items-start" style={{ background: `${accent}18`, border: `1px solid ${accent}33` }}>
                <span className="text-lg mt-0.5">💡</span>
                <div>
                  <p className="text-xs font-black mb-0.5" style={{ color: accent }}>WHY DO YOU NEED THIS?</p>
                  <p className="text-sm text-white/70 leading-relaxed">{currentStep.whyNeed}</p>
                  {currentStep.lessonId && (
                    <Link href={`/explore/${currentStep.lessonId}`} className="inline-flex items-center gap-1 mt-1.5 text-xs font-bold hover:underline" style={{ color: accent }}>
                      📖 {currentStep.lessonLabel} → Learn more
                    </Link>
                  )}
                </div>
              </div>

              {/* Recommended tag based on goal */}
              <p className="text-xs text-white/40 mb-3 font-medium">
                {currentStep.multi ? "Select all that apply:" : "Select one:"}
                {goal && <span className="ml-2 px-2 py-0.5 rounded-full text-xs" style={{ background: `${accent}22`, color: accent }}>🎯 Recommended for {goal.replace("-"," ")}</span>}
              </p>

              {/* Options grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentStep.options.map((opt) => {
                  const sel = isSelected(currentStep.id, opt.id);
                  const isRecommended = goal && opt.tags.includes(goal.replace("-","") === "contentcreation" ? "content" : goal);
                  return (
                    <motion.button
                      key={opt.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => selectOption(currentStep.id, opt.id, currentStep.multi)}
                      className="text-left rounded-xl p-4 border transition-all relative"
                      style={{
                        background: sel ? `${accent}22` : "rgba(255,255,255,0.04)",
                        borderColor: sel ? accent : "rgba(255,255,255,0.1)",
                      }}
                    >
                      {isRecommended && !sel && (
                        <span className="absolute top-2 right-2 text-xs px-1.5 py-0.5 rounded-full font-bold" style={{ background: `${accent}33`, color: accent }}>⭐ Rec.</span>
                      )}
                      {sel && (
                        <span className="absolute top-2 right-2 text-sm font-black" style={{ color: accent }}>✓</span>
                      )}
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-0.5">{opt.emoji}</span>
                        <div className="flex-1 min-w-0 pr-6">
                          <p className="font-black text-white text-sm leading-tight">{opt.label}</p>
                          <p className="text-xs text-white/50 mt-0.5">{opt.spec}</p>
                          <p className="text-xs mt-1.5 leading-relaxed text-white/60">{opt.detail}</p>
                          <p className="text-xs font-bold mt-1.5" style={{ color: accent }}>💰 {opt.price}</p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Next button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={!currentStep.multi && !build[currentStep.id]}
                onClick={() => {
                  if (stepIdx < steps.length - 1) setStepIdx(stepIdx + 1);
                  else setPhase("result");
                }}
                className="w-full py-4 rounded-2xl font-black text-lg text-white disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: `linear-gradient(90deg, ${accent}, #7B61FF)` }}
              >
                {stepIdx < steps.length - 1
                  ? `Next: ${steps[stepIdx + 1].title.split(" ")[0]} ${steps[stepIdx + 1].emoji} →`
                  : "See My Build Report 🎓"}
              </motion.button>
              {currentStep.multi && (
                <p className="text-center text-xs text-white/30 mt-2">You can skip peripherals — click Next without selecting.</p>
              )}
            </motion.div>
          )}

          {/* ── BUILD RESULT ── */}
          {phase === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="text-7xl mb-3">{result.badge}</div>
                <h2 className="text-3xl font-black" style={{ color: result.badgeColor }}>{result.title}</h2>
                <p className="text-white/60 mt-2 max-w-lg mx-auto">{result.verdict}</p>
              </motion.div>

              {/* Upgrade suggestions */}
              {result.upgrades.length > 0 && (
                <div className="rounded-2xl p-5 mb-6 border border-yellow-500/30" style={{ background: "rgba(245,158,11,0.1)" }}>
                  <p className="font-black text-yellow-400 mb-3">🔧 Suggested Upgrades</p>
                  <div className="flex flex-col gap-3">
                    {result.upgrades.map((u) => (
                      <div key={u.part} className="flex gap-3 text-sm">
                        <span className="text-yellow-400 font-bold w-20 shrink-0">{u.part}</span>
                        <div>
                          <span className="text-white/50 line-through">{u.current}</span>
                          <p className="text-white/80 mt-0.5">{u.suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full build summary */}
              <div className="rounded-2xl border border-white/10 overflow-hidden mb-6" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="px-5 py-3 border-b border-white/10">
                  <p className="font-black text-white text-sm">📋 Your Full Build Summary</p>
                </div>
                <div className="divide-y divide-white/5">
                  {steps.map((step) => {
                    const val = build[step.id];
                    if (!val || (Array.isArray(val) && val.length === 0)) return null;
                    const labels = Array.isArray(val)
                      ? val.map((v) => step.options.find((o) => o.id === v)?.label).filter(Boolean)
                      : [step.options.find((o) => o.id === val)?.label ?? val];
                    return (
                      <div key={step.id} className="px-5 py-3 flex items-start gap-3">
                        <span className="text-lg">{step.emoji}</span>
                        <div className="flex-1">
                          <p className="text-xs text-white/40 font-medium">{step.title}</p>
                          {labels.map((l) => <p key={l} className="text-sm font-bold text-white/90">{l}</p>)}
                        </div>
                        {step.lessonId && (
                          <Link href={`/explore/${step.lessonId}`} className="text-xs font-bold px-2 py-1 rounded-lg" style={{ background: `${accent}22`, color: accent }}>
                            📖 Learn
                          </Link>
                        )}
                      </div>
                    );
                  })}
                  <div className="px-5 py-3 flex items-center gap-3">
                    <span className="text-lg">📐</span>
                    <div>
                      <p className="text-xs text-white/40 font-medium">Form Factor</p>
                      <p className="text-sm font-bold text-white/90">{formFactor === "desktop" ? "🖥️ Desktop PC" : "💻 Laptop"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OS reference */}
              <div className="rounded-2xl p-4 mb-6 border border-white/10 flex gap-3 items-start" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span className="text-2xl">💿</span>
                <div>
                  <p className="text-sm font-black text-white">Want to understand what happens inside the OS you chose?</p>
                  <p className="text-xs text-white/50 mt-1">Learn about the Kernel, Shell, Booting, and CMOS — how your OS comes to life every time you press the power button.</p>
                  <Link href="/explore/os" className="inline-flex items-center gap-1 mt-2 text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: `${accent}22`, color: accent }}>
                    📖 Explore: What is an OS? →
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <button
                  onClick={() => { setPhase("goal"); setGoal(null); setFormFactor(null); setBuild({}); setStepIdx(0); }}
                  className="flex-1 py-3 rounded-2xl font-black text-sm border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
                >
                  🔄 Start Over
                </button>
                <Link href="/explore" className="flex-1 py-3 rounded-2xl font-black text-sm text-center text-white" style={{ background: `linear-gradient(90deg, ${accent}, #7B61FF)` }}>
                  📚 Explore Lessons →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
