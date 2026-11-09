"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Scene {
  title: string;
  realWorld: {
    emoji: string;
    label: string;
    description: string;
    color: string;
  };
  technical: {
    emoji: string;
    label: string;
    description: string;
    color: string;
  };
  connection: string; // the "bridge" phrase
}

const SCENES: Record<string, Scene[]> = {
  cpu: [
    {
      title: "The CPU is a Kitchen",
      realWorld: {
        emoji: "👨‍🍳",
        label: "Head Chef",
        description: "The chef reads the recipe (instruction), grabs ingredients (data from RAM), cooks the dish (executes), and plates it (writes the result).",
        color: "#F59E0B",
      },
      technical: {
        emoji: "🧠",
        label: "CPU Core",
        description: "The CPU fetches an instruction from memory, decodes what operation it is, executes it in the ALU, then writes the result back to a register.",
        color: "#3B82F6",
      },
      connection: "Both follow the same 4-step recipe every single cycle",
    },
    {
      title: "More Cores = More Chefs",
      realWorld: {
        emoji: "👨‍🍳👩‍🍳👨‍🍳👩‍🍳",
        label: "4 Chefs, 4 Stations",
        description: "Four chefs working at once — one making pasta, one grilling steak, one making dessert, one plating. All independent, all simultaneous.",
        color: "#10B981",
      },
      technical: {
        emoji: "⚡⚡⚡⚡",
        label: "4 CPU Cores",
        description: "4 cores each run their own stream of instructions in parallel. That's why a 4-core CPU feels 4× faster for independent tasks.",
        color: "#6366F1",
      },
      connection: "Parallelism — doing multiple things at exactly the same time",
    },
    {
      title: "Cache = The Chef's Counter",
      realWorld: {
        emoji: "🍳",
        label: "Prep Counter (Fast)",
        description: "The chef keeps the most-used ingredients right on the counter — salt, oil, garlic. No trip to the pantry needed. Fast. Always within arm's reach.",
        color: "#EF4444",
      },
      technical: {
        emoji: "⚡",
        label: "L1/L2/L3 Cache",
        description: "Cache stores recently used data right next to the cores. L1 (fastest, tiny) → L2 → L3 → RAM (slowest). Cache hit = ~1 ns. RAM access = ~100 ns.",
        color: "#8B5CF6",
      },
      connection: "Proximity beats capacity — being close matters more than being big",
    },
    {
      title: "GHz = How Fast the Chef Moves",
      realWorld: {
        emoji: "⏱️",
        label: "Metronome: 3 billion beats/sec",
        description: "Imagine a metronome ticking 3 billion times per second. The chef takes one step per tick. 3 GHz means 3 billion steps per second.",
        color: "#F97316",
      },
      technical: {
        emoji: "🔁",
        label: "3 GHz Clock Speed",
        description: "Every tick of the clock, the CPU can complete one stage of the pipeline. At 3 GHz, that's 3 billion pipeline stages per second, per core.",
        color: "#0EA5E9",
      },
      connection: "Clock speed = how many steps per second the CPU can take",
    },
  ],
  ram: [
    {
      title: "RAM is Your Work Desk",
      realWorld: {
        emoji: "🗂️",
        label: "Your Work Desk",
        description: "Everything you're currently working on is spread across your desk — open notebooks, printed documents, your calculator. All instantly reachable.",
        color: "#8B5CF6",
      },
      technical: {
        emoji: "💾",
        label: "RAM (Working Memory)",
        description: "RAM holds all the programs and data currently in use. The CPU reads and writes to it in nanoseconds. No RAM = nothing runs.",
        color: "#7C3AED",
      },
      connection: "Active work lives here — not in storage, not in the brain",
    },
    {
      title: "More RAM = Bigger Desk",
      realWorld: {
        emoji: "🏢",
        label: "Corner Office with Huge Desk",
        description: "With a huge desk, you can have 20 documents open at once, 3 books, your laptop, and a coffee. With a tiny desk, you have to put things away constantly.",
        color: "#10B981",
      },
      technical: {
        emoji: "📊",
        label: "16 GB vs 4 GB RAM",
        description: "More RAM means more apps and data stay in memory simultaneously. With 4 GB, your OS spams the swap file (SSD) constantly — that's why things get slow.",
        color: "#059669",
      },
      connection: "More space = less shuffling things in and out",
    },
    {
      title: "RAM vs SSD: Desk vs Filing Cabinet",
      realWorld: {
        emoji: "🗄️",
        label: "Filing Cabinet in the Corner",
        description: "The filing cabinet (SSD) holds everything long-term. But to work on a file, you bring it to your desk (RAM). Working from the cabinet directly is painfully slow.",
        color: "#6B7280",
      },
      technical: {
        emoji: "⚡🐢",
        label: "RAM (ns) vs SSD (µs)",
        description: "RAM access: ~100 nanoseconds. SSD access: ~100 microseconds. That's 1000× slower. This is why loading a game into RAM matters — once loaded, it flies.",
        color: "#1E40AF",
      },
      connection: "RAM is 1000× faster than your SSD. That gap is why it matters so much.",
    },
    {
      title: "RAM Forgets When Power is Off",
      realWorld: {
        emoji: "🧽",
        label: "Whiteboard: Wiped Clean Daily",
        description: "A whiteboard is great for quick, temporary notes. But when you leave the office and come back, everything is erased. It's not for keeping things permanently.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "⚠️",
        label: "DRAM is Volatile",
        description: "DRAM (Dynamic RAM) stores bits as tiny charges in capacitors. Without constant power and periodic refresh, the charge leaks and data disappears — instantly.",
        color: "#EF4444",
      },
      connection: "Temporary by design — fast because it doesn't have to last",
    },
  ],
  motherboard: [
    {
      title: "The Motherboard is a City",
      realWorld: {
        emoji: "🏙️",
        label: "City Road Network",
        description: "A city has highways (PCIe), main roads (USB/SATA), and local streets (I2C). Every building (component) connects to the network. The city plans the roads — the motherboard plans the traces.",
        color: "#9333EA",
      },
      technical: {
        emoji: "🟩",
        label: "PCB Traces & Buses",
        description: "The motherboard's copper traces are the highways. PCIe x16 is a 16-lane highway (64 GB/s). USB is a local street. The chipset is the city's traffic control centre.",
        color: "#7C3AED",
      },
      connection: "Every component needs roads to communicate — that's what traces do",
    },
    {
      title: "VRM = Power Station",
      realWorld: {
        emoji: "⚡🏭",
        label: "City Power Transformer",
        description: "The city gets 11,000V power from the grid, but homes need 230V. A transformer steps it down. Without it, every device would be fried.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "🔋",
        label: "VRM (Voltage Regulator Module)",
        description: "Your PSU sends 12V. The CPU needs 1.0–1.3V at up to 300A. The VRM (MOSFETs + inductors) steps the voltage down and stabilises it. More phases = more stable under load.",
        color: "#EA580C",
      },
      connection: "Raw power must be converted to exactly what the CPU needs",
    },
    {
      title: "BIOS = City Government",
      realWorld: {
        emoji: "🏛️",
        label: "City Hall",
        description: "Before citizens can use roads, the government does a morning check — roads intact, power on, water flowing. Only then does it open the city for business.",
        color: "#10B981",
      },
      technical: {
        emoji: "💡",
        label: "UEFI BIOS POST Check",
        description: "At power-on, the BIOS runs POST (Power-On Self-Test). It checks CPU, RAM, storage. Passes, then hands control to the bootloader. Fail = beep codes.",
        color: "#0D9488",
      },
      connection: "Before anything runs, everything must be verified as working",
    },
  ],
  gpu: [
    {
      title: "GPU vs CPU: Factory vs Researcher",
      realWorld: {
        emoji: "🏭",
        label: "Factory: 10,000 Workers",
        description: "A factory has 10,000 workers doing simple, repetitive assembly steps in parallel. No single worker is smart, but together they assemble millions of items per day.",
        color: "#16A34A",
      },
      technical: {
        emoji: "🖥️",
        label: "GPU: 10,000+ Shader Cores",
        description: "A GPU has thousands of small cores, each handling one pixel or one matrix multiplication. Perfect for rendering frames — millions of parallel simple calculations.",
        color: "#15803D",
      },
      connection: "GPU = many simple workers. CPU = few expert thinkers.",
    },
    {
      title: "Rendering a Frame = Painting a Canvas",
      realWorld: {
        emoji: "🎨",
        label: "1000 Painters, Each Paints One Tile",
        description: "Imagine splitting a painting into 1000 tiles and giving one tile to each painter. All 1000 paint simultaneously. The whole painting is done in the time it takes one tile.",
        color: "#EC4899",
      },
      technical: {
        emoji: "🖼️",
        label: "Rasterization: Pixel Parallelism",
        description: "A 1080p frame has 2 million pixels. The GPU assigns each pixel to a shader core. All 2M pixels are computed simultaneously — that's how 60fps is possible.",
        color: "#BE185D",
      },
      connection: "Parallelism at pixel level is why games look real in real-time",
    },
    {
      title: "VRAM = Painter's Local Palette",
      realWorld: {
        emoji: "🎭",
        label: "Colour Palette on the Easel",
        description: "A painter needs their palette close — not in a storeroom. The larger the palette (more colours), the richer the painting, without pausing to fetch new colours.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "💾",
        label: "VRAM (GDDR6X)",
        description: "VRAM stores textures, frame buffers, and shader data close to the GPU cores. 24 GB VRAM handles 4K textures. Too little = textures loaded from RAM = major lag.",
        color: "#D97706",
      },
      connection: "High-bandwidth local memory keeps the GPU cores fed without waiting",
    },
  ],
  ssd: [
    {
      title: "SSD vs HDD: Library vs Filing Room",
      realWorld: {
        emoji: "📚",
        label: "Modern Digital Library",
        description: "In a digital library, every book is instantly searchable. No physical shelves to scan, no spindle to rotate. The search result appears in milliseconds.",
        color: "#0891B2",
      },
      technical: {
        emoji: "⚡",
        label: "SSD: No Moving Parts",
        description: "An SSD stores bits as electrical charges in NAND flash cells. No spinning disks, no read heads to move. Access time: ~0.1ms. HDD: ~10ms. That's 100× faster.",
        color: "#0E7490",
      },
      connection: "Eliminating mechanical movement eliminates the speed bottleneck",
    },
    {
      title: "NAND Flash = Old Film with Many Layers",
      realWorld: {
        emoji: "🎞️",
        label: "Multi-Layer Photographic Film",
        description: "Modern film stocks have multiple light-sensitive layers stacked on top of each other, each capturing a different colour. 3D NAND works the same way — stack cells vertically.",
        color: "#7C3AED",
      },
      technical: {
        emoji: "📦",
        label: "3D NAND: 176–232 Layers",
        description: "Early SSDs had one flat layer of NAND cells. 3D NAND stacks 232 layers vertically like a skyscraper. Same floor area, 232× the cells. More capacity, lower cost per GB.",
        color: "#6D28D9",
      },
      connection: "Going vertical multiplied capacity without increasing footprint",
    },
    {
      title: "Wear Levelling = Road Maintenance",
      realWorld: {
        emoji: "🛣️",
        label: "Rotating Road Maintenance",
        description: "City road crews don't always repave the same street. They track which roads have been repaved recently and prioritise the oldest, most worn ones. Even wear, longer life.",
        color: "#10B981",
      },
      technical: {
        emoji: "⚖️",
        label: "FTL Wear Levelling Algorithm",
        description: "NAND cells wear out after ~1000–10000 write cycles. The FTL (Flash Translation Layer) spreads writes evenly across all cells — no one block takes all the abuse.",
        color: "#059669",
      },
      connection: "Distribute the load evenly so no single part wears out first",
    },
  ],
  "pc-hardware": [
    {
      title: "Building a PC = Building a City",
      realWorld: {
        emoji: "🏗️",
        label: "City Construction Order",
        description: "You build a city in order: foundation first, then roads, then power grid, then buildings, then internet. Each step depends on the previous one. Skip one and everything fails.",
        color: "#7C3AED",
      },
      technical: {
        emoji: "🖥️",
        label: "PC Assembly Order",
        description: "CPU → CPU cooler → RAM → M.2 SSD → I/O shield → Motherboard in case → PSU → GPU → Cables → POST. Each step in sequence. Wrong order can damage components.",
        color: "#6D28D9",
      },
      connection: "Order matters — dependencies must be resolved before moving forward",
    },
    {
      title: "PSU = Power Grid",
      realWorld: {
        emoji: "⚡🏭",
        label: "City Power Station",
        description: "A power station converts raw energy into stable, regulated voltages for homes and factories. If the grid is unreliable, everything flickers and breaks.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "🔌",
        label: "PSU: 12V / 5V / 3.3V Rails",
        description: "The PSU converts 230V AC from the wall to DC rails: 12V (CPU/GPU), 5V (drives), 3.3V (RAM). 80+ Gold = 90% efficient at typical load. Cheap PSUs kill good components.",
        color: "#EA580C",
      },
      connection: "Every watt your components use must pass through the PSU reliably",
    },
  ],
  "internet-www": [
    {
      title: "The Internet = Global Postal System",
      realWorld: {
        emoji: "📮",
        label: "International Post Office",
        description: "When you send a letter, it goes: your post box → local post office → sorting centre → international hub → destination country → local delivery. Each hop adds an address stamp.",
        color: "#1D4ED8",
      },
      technical: {
        emoji: "🌐",
        label: "IP Packet Routing",
        description: "Data travels in packets. Each router reads the destination IP, decides the best next hop, and forwards it. The packet may cross 15+ routers between you and a server.",
        color: "#1E40AF",
      },
      connection: "Both route messages through intermediate stations to reach a destination",
    },
    {
      title: "DNS = Phone Book of the Internet",
      realWorld: {
        emoji: "📒",
        label: "Contact Book: Name → Number",
        description: "You don't memorise phone numbers — you look up 'Mum' and it gives you +91-98765-43210. The name is memorable; the number is what actually routes the call.",
        color: "#10B981",
      },
      technical: {
        emoji: "🔍",
        label: "DNS: Domain → IP Address",
        description: "When you type 'google.com', your computer asks a DNS server: 'What's the IP for google.com?' It answers: 142.250.195.46. Your browser then connects to that IP.",
        color: "#059669",
      },
      connection: "Human-readable names map to machine-readable addresses",
    },
    {
      title: "HTTPS = Sealed Envelope with Wax Seal",
      realWorld: {
        emoji: "✉️🔒",
        label: "Tamper-Evident Sealed Letter",
        description: "A wax-sealed envelope proves: (1) nobody opened it in transit, and (2) it came from who you think it came from. Breaking the seal leaves obvious evidence.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "🔐",
        label: "TLS: Encrypted + Authenticated",
        description: "HTTPS uses TLS: encrypts your data (nobody reads it in transit) and authenticates the server via a certificate (you're really talking to google.com, not an impersonator).",
        color: "#D97706",
      },
      connection: "Encryption + authentication together = truly secure communication",
    },
  ],
  "linux-os": [
    {
      title: "The OS = Hotel Manager",
      realWorld: {
        emoji: "🏨",
        label: "Hotel Concierge",
        description: "Guests (programs) don't access rooms (hardware) directly. They ask the concierge (OS). The concierge allocates rooms (memory), books restaurants (CPU time), and handles conflicts.",
        color: "#374151",
      },
      technical: {
        emoji: "🐧",
        label: "Linux Kernel: Resource Manager",
        description: "The kernel mediates all hardware access. Apps make system calls; the kernel decides whether to grant them. It schedules processes, manages virtual memory, and drives I/O.",
        color: "#1F2937",
      },
      connection: "No direct hardware access — everything goes through the manager",
    },
    {
      title: "Terminal = Direct Line to the Manager",
      realWorld: {
        emoji: "☎️",
        label: "Direct Hotline vs Reception Desk",
        description: "A regular guest talks to reception (GUI). VIP guests have a direct hotline to the manager (terminal). The hotline is faster, more powerful, but requires knowing what to ask.",
        color: "#6B7280",
      },
      technical: {
        emoji: "💻",
        label: "Shell: bash / zsh / fish",
        description: "The terminal gives you direct access to the kernel via shell commands. `ls`, `grep`, `chmod`, `kill` — these are precise instructions the GUI can't express as efficiently.",
        color: "#4B5563",
      },
      connection: "More power, more precision — but requires knowing the exact commands",
    },
  ],
  "cyber-hygiene": [
    {
      title: "Passwords = Keys to Your House",
      realWorld: {
        emoji: "🔑",
        label: "Front Door Key",
        description: "If you use the same key for every lock (school locker, bike, house, office), losing one key means everything is compromised. Each lock needs its own unique key.",
        color: "#EF4444",
      },
      technical: {
        emoji: "🔐",
        label: "Password Reuse Attack",
        description: "When one site leaks passwords, attackers try them on Gmail, banking, everything. 'Credential stuffing' works because 85% of users reuse passwords. Use a password manager.",
        color: "#DC2626",
      },
      connection: "Reusing secrets means one breach compromises everything",
    },
    {
      title: "SQL Injection = Fake Form Letter",
      realWorld: {
        emoji: "📋",
        label: "Manipulated Request Form",
        description: "Imagine a form asking 'Your name:'. You write: 'Ali AND also delete all records'. If the clerk follows instructions literally instead of treating it as just a name, everything breaks.",
        color: "#F59E0B",
      },
      technical: {
        emoji: "💉",
        label: "SQL Injection Attack",
        description: "Input: `'; DROP TABLE users; --`. If not sanitised, the database runs this as SQL, deleting the users table. Parameterised queries fix this — treat input as data, never as code.",
        color: "#D97706",
      },
      connection: "Never trust user input — always treat it as data, never as executable code",
    },
  ],
  os: [
    {
      title: "The OS is Two Rings",
      realWorld: {
        emoji: "🏫",
        label: "School Building",
        description: "Inside the school: the principal's office (the core, where all final decisions happen). Outside: the corridors and classrooms where students (programs) work. Students can't walk into the principal's office uninvited — they go through a secretary (system call).",
        color: "#E11D48",
      },
      technical: {
        emoji: "🔵",
        label: "Kernel (Ring 0) + Shell (Ring 3)",
        description: "The Kernel runs in ring 0 — highest privilege, full access to hardware. User apps run in ring 3 — restricted. A system call is the controlled door between them.",
        color: "#7C3AED",
      },
      connection: "Two rings, one trusted (kernel), one restricted (user) — separated by hardware privilege",
    },
    {
      title: "Boot = Waking Up a City",
      realWorld: {
        emoji: "🌅",
        label: "City waking up at dawn",
        description: "Before anyone can work, the power grid turns on (BIOS/UEFI), then inspectors check everything works (POST), then the mayor arrives and takes charge (Kernel loads), and finally offices open for business (Shell starts).",
        color: "#F59E0B",
      },
      technical: {
        emoji: "🔄",
        label: "BIOS → POST → Bootloader → Kernel → Shell",
        description: "BIOS wakes up first (from ROM chip), runs POST to check hardware, reads CMOS for boot order, loads the bootloader from disk, which loads the Kernel into RAM, which then starts the Shell.",
        color: "#059669",
      },
      connection: "Every boot is a carefully ordered startup — each step depends on the last",
    },
    {
      title: "Multi-tasking = Many Workers, One Manager",
      realWorld: {
        emoji: "🏭",
        label: "Factory with One Manager",
        description: "One floor manager, twenty workers. The manager (kernel) allocates machines (CPU time), materials (RAM), and workspace to each worker. No worker can grab another's materials directly.",
        color: "#0891B2",
      },
      technical: {
        emoji: "⚙️",
        label: "Process Scheduler + Memory Isolation",
        description: "The kernel's scheduler gives each process tiny CPU time-slices (milliseconds). The virtual memory manager gives each process its own private address space — total isolation, managed by the same kernel.",
        color: "#6366F1",
      },
      connection: "One kernel manages many processes — time-sharing the CPU and isolating memory",
    },
  ],
  default: [
    {
      title: "How Computers Think",
      realWorld: {
        emoji: "🧩",
        label: "Puzzle Solving",
        description: "Every complex problem can be broken into smaller, simpler steps. A puzzle is solved piece by piece. Computers do the same — billions of tiny operations, each trivially simple.",
        color: "#3B82F6",
      },
      technical: {
        emoji: "💡",
        label: "Binary Operations",
        description: "Every operation a CPU performs is ultimately AND, OR, NOT on bits (0s and 1s). Layer them enough times and you get everything from addition to running a web browser.",
        color: "#1D4ED8",
      },
      connection: "Complexity emerges from billions of simple, repeated operations",
    },
  ],
};

function getScenes(lessonId: string): Scene[] {
  return SCENES[lessonId] ?? SCENES.default;
}

interface Props {
  lessonId: string;
  accent?: string;
}

export default function AnalogyAnimation({ lessonId, accent = "#3B82F6" }: Props) {
  const scenes = getScenes(lessonId);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % scenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, scenes.length]);

  const scene = scenes[current];

  return (
    <div className="flex flex-col h-full" style={{ background: "#0F172A", borderRadius: 20 }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-purple-400">
            HOW IT WORKS
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-white font-black text-base mt-0.5"
            >
              {scene.title}
            </motion.p>
          </AnimatePresence>
        </div>
        <button
          onClick={() => setAutoPlay((a) => !a)}
          className="text-xs px-2 py-1 rounded-lg font-bold"
          style={{ background: "rgba(255,255,255,0.08)", color: autoPlay ? "#A78BFA" : "#6B7280" }}
        >
          {autoPlay ? "⏸ Auto" : "▶ Auto"}
        </button>
      </div>

      {/* Main comparison */}
      <div className="flex-1 px-4 pb-2 flex flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-3"
          >
            {/* Real World card */}
            <motion.div
              className="rounded-2xl p-4"
              style={{ background: `${scene.realWorld.color}18`, border: `1.5px solid ${scene.realWorld.color}44` }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{scene.realWorld.emoji}</span>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-60" style={{ color: scene.realWorld.color }}>
                    Real World
                  </span>
                  <p className="font-black text-sm text-white leading-tight">{scene.realWorld.label}</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{scene.realWorld.description}</p>
            </motion.div>

            {/* Connection bridge */}
            <motion.div
              className="flex items-center gap-3 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}60)` }} />
              <span className="text-xs font-black px-3 py-1 rounded-full text-center"
                style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44`, maxWidth: 220 }}>
                {scene.connection}
              </span>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${accent}60, transparent)` }} />
            </motion.div>

            {/* Technical card */}
            <motion.div
              className="rounded-2xl p-4"
              style={{ background: `${scene.technical.color}18`, border: `1.5px solid ${scene.technical.color}44` }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{scene.technical.emoji}</span>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest opacity-60" style={{ color: scene.technical.color }}>
                    Inside the Computer
                  </span>
                  <p className="font-black text-sm text-white leading-tight">{scene.technical.label}</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{scene.technical.description}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scene navigation */}
      <div className="px-5 pb-4 flex items-center gap-2">
        <button
          onClick={() => { setCurrent((c) => (c - 1 + scenes.length) % scenes.length); setAutoPlay(false); }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          ‹
        </button>
        <div className="flex-1 flex justify-center gap-1.5">
          {scenes.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setAutoPlay(false); }}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? accent : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => { setCurrent((c) => (c + 1) % scenes.length); setAutoPlay(false); }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
