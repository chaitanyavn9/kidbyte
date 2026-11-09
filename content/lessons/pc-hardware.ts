import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "pc-hardware",
  title: "PC Hardware & Assembly",
  emoji: "🖥️",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "What if you could build your own car from parts?", text: "Imagine choosing your own engine, seats, wheels, and frame — and assembling a car exactly how you want it. Building a PC is similar! You choose each part separately — the brain, the memory, the storage, the graphics chip — and put them together into your own custom computer." },
      { heading: "What parts does a PC need?", text: "Every PC needs: a CPU (the brain that thinks), RAM (fast working memory), an SSD (long-term storage), a motherboard (the board that connects everything), a power supply (provides electricity), a graphics card (draws pictures on screen), and a case (the box that holds it all).", diagramId: "pc-build-overview" },
      { heading: "Parts must be compatible", text: "Not every CPU works with every motherboard — they must have matching sockets. The power supply must be strong enough for all the parts. RAM must be the right type. Building a PC requires checking that all your chosen parts work together.", diagramId: "component-compatibility" },
      { heading: "In your daily life…", text: "Gamers build PCs for maximum performance. Video editors build PCs with fast storage and lots of RAM. Many students build their first PC as a learning project — it's cheaper than buying pre-built and you understand every part." },
    ],
    "8-10": [
      { heading: "Pre-built vs custom PC — the fundamental choice", text: "You can buy a pre-assembled PC (Dell, HP, Apple iMac) or build one from parts. Custom builds cost less for the same performance, let you choose exactly what you need, and are repairable/upgradeable. Pre-built is easier and usually includes warranty on the whole system." },
      { heading: "Every part has a job — the PC ecosystem", text: "CPU: processes all instructions. Motherboard: connects everything. RAM: holds active data. SSD/HDD: stores files long-term. GPU: renders graphics (critical for gaming and 3D work). PSU (Power Supply): converts AC wall power to DC for components. Case: physical housing with airflow design.", diagramId: "pc-build-overview" },
      { heading: "Compatibility — the builder's checklist", text: "CPU socket must match motherboard. RAM type (DDR4/DDR5) must match motherboard. PSU wattage must exceed combined component TDP by 20%. GPU must fit in the case (height + length). Case form factor (ATX, Mini-ITX) must match motherboard size. CPU cooler must fit in the case height.", diagramId: "component-compatibility" },
      { heading: "The bottleneck principle", text: "A chain is only as strong as its weakest link. A $500 GPU paired with a $50 CPU will be bottlenecked — the CPU can't feed the GPU fast enough. A fast NVMe SSD doesn't help if you're on a slow HDD but already have an SSD. Balance your build — spend proportionally across components." },
    ],
    "11-14": [
      { heading: "PC architecture — the platform", text: "Platform = CPU architecture + motherboard chipset + memory standard. Intel 13th/14th Gen: LGA1700 socket, Z790/B760 chipsets, DDR5 primary. AMD Ryzen 7000: AM5 socket, X670/B650 chipsets, DDR5 only. AMD Ryzen 5000: AM4, DDR4. Platform determines upgrade path — when upgrading CPU, check if your existing motherboard supports the new generation." },
      { heading: "Component hierarchy and performance impact", text: "For gaming: GPU (60%) > CPU (20%) > RAM speed (10%) > SSD speed (10%). For video editing: CPU core count + RAM capacity. For machine learning training: GPU VRAM capacity. For general use: SSD matters most (feels snappy), then RAM (8GB is insufficient, 16GB is baseline, 32GB is comfortable).", diagramId: "pc-build-overview" },
      { heading: "PSU and VRM — power delivery engineering", text: "PSU efficiency rating: 80 Plus Bronze (82%), Gold (87%), Platinum (90%). A 1000W Gold PSU wastes 130W as heat. GPU PCIe power connectors: 6-pin (75W), 8-pin (150W), 16-pin 12VHPWR (600W for RTX 4090). VRMs on the motherboard step down 12V to CPU core voltage (1.0–1.3V at 200–300A). Poor VRM quality causes thermal throttling.", diagramId: "component-compatibility" },
      { heading: "Thermal design — managing heat", text: "Air cooling: heatsink + fan. High-end air coolers (Noctua NH-D15, 300W TDP) rival most AIOs. All-in-one (AIO) liquid coolers: 240mm–420mm radiators for heavy CPU overclocking. Custom water loops for extreme builds. Case airflow matters: positive vs negative pressure, intake vs exhaust fan positioning." },
    ],
    "15-18": [
      { heading: "PCIe topology and bandwidth allocation", text: "The CPU has a fixed number of PCIe lanes (Intel i9: 24 lanes, AMD Ryzen 9: 24 lanes, AMD Threadripper: 128 lanes). GPU uses ×16 lanes (or ×8 on some AMD platforms). NVMe SSDs use ×4 lanes each. Connecting more devices than available lanes requires the chipset to share lanes — with a bandwidth penalty. High-end workstations use HEDT (High-End Desktop) platforms for more lanes." },
      { heading: "Memory tuning — XMP/EXPO and tightening timings", text: "DDR5 ships at JEDEC stock speed (4800 MT/s). XMP (Intel) or EXPO (AMD) profiles enable 6000–8000 MT/s with manufacturer-validated timings. Manual timing tuning: tighten CAS latency, reduce tRCD, tRP for lower absolute latency. DDR5's on-die ECC corrects bit errors but adds ~10ns latency per access. Optimal DDR5 for Ryzen 7000 is ~6000 MT/s / CL30 for IMC stability.", diagramId: "pc-build-overview" },
      { heading: "BIOS/UEFI tuning for performance", text: "Intel: MCE (Multi Core Enhancement) lifts all-core turbo above spec. E-core/P-core ratio tuning. Intel Thread Director feeds scheduler hints to Windows. AMD: Precision Boost Overdrive (PBO) raises TDP limits, Curve Optimizer adjusts per-core voltage-frequency. ASUS MCE profiles, MSI CEZ — all overclock above rated spec. Stability testing: Prime95, Cinebench R23 looped, y-cruncher.", diagramId: "component-compatibility" },
      { heading: "AI PC builds and future-proofing", text: "AI workloads (Stable Diffusion, local LLMs) are constrained by GPU VRAM: 7B parameter models need ~8GB VRAM at 4-bit quantisation, 70B need 48GB. Consumer GPUs peak at 24GB (RTX 4090). Multi-GPU (NVLink) is deprecated for consumer. AMD's unified memory architecture allows CPU RAM to spill into GPU address space via SAM (Smart Access Memory). For AI inference, RTX 4090 (24GB VRAM) + fast NVMe + 64GB RAM is the 2024–2025 baseline." },
    ],
  },
  story: {
    "5-7": "A computer is like a puzzle made of special parts! The brain (CPU), the memory table (RAM), the storage cupboard (SSD), and the town square (motherboard) all fit together — and together they make magic happen!",
    "8-10": "A PC is built from parts that each have one job: the CPU thinks, RAM remembers temporarily, the SSD stores permanently, the GPU draws pictures, and the motherboard connects everyone. When you open a PC case, you can see all these parts and even swap them out!",
    "11-14": "PC hardware assembly involves connecting CPU to socket, seating RAM in the right slots (A2/B2 for dual-channel), mounting storage in M.2/SATA bays, connecting PSU cables (24-pin ATX, 8-pin EPS, PCIe power), and managing cables for airflow. POST (Power On Self Test) verifies all hardware before OS boot.",
    "15-18": "Professional PC assembly requires understanding form factor compatibility (ATX/mATX/ITX), socket generation (LGA1700, AM5), RAM channel configuration (dual-channel requires matched slots — A2+B2 on most boards), thermal interface material (TIM) application (pea-method for direct-die), and PCIe bandwidth allocation (x16 GPU, x4 NVMe). Cable management affects airflow (positive pressure vs negative pressure), and POST codes on diagnostic LEDs (DRAM_LED, CPU_LED) help isolate failures. Benchmarking with CINEBENCH R23, AIDA64, and 3DMark verifies stability. Stress testing with Prime95/FurMark identifies thermal throttling. Overclocking via BIOS EXPO/XMP profiles or manual Vcore/BCLK tuning pushes performance beyond factory specs.",
  },
  analogy: {
    "5-7": "Building a PC is like LEGO — special pieces snap together to make something amazing.",
    "8-10": "Like building your own dream workstation from individual pieces that all have specific roles.",
    "11-14": "Assembly is about understanding form factor, compatibility, and cable routing for optimal airflow.",
    "15-18": "PC assembly is applied systems engineering — thermal design, signal integrity, power delivery, and software stack interaction must all be considered holistically.",
  },
  photo: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=700&fit=crop",
  photoAlt: "Inside of a PC with RGB lighting showing motherboard, GPU, and cooling",
  keyFacts: [
    { emoji: "🏗️", label: "Core Components", value: "CPU + Motherboard + RAM + GPU + PSU + Storage", detail: "These six components are required for every desktop PC build." },
    { emoji: "⚡", label: "Power Supply", value: "PSU: 550–1000W for gaming", detail: "The PSU converts AC mains to DC 12V/5V/3.3V for components. 80+ rated = more efficient." },
    { emoji: "🔌", label: "PCIe", value: "GPU uses PCIe x16 slot (16 lanes)", detail: "PCIe (Peripheral Component Interconnect Express) is how the GPU connects to the CPU." },
    { emoji: "💾", label: "Storage Options", value: "SATA SSD or NVMe M.2 SSD", detail: "NVMe M.2 is 5–10× faster than SATA SSD. HDD is cheapest per GB." },
    { emoji: "🌡️", label: "Thermal Design", value: "Positive/negative airflow routing", detail: "Front/bottom fans intake; rear/top exhaust. Positive pressure (more in = less dust)." },
    { emoji: "📅", label: "PC Form Factors", value: "ATX / Micro-ATX / Mini-ITX", detail: "ATX = full size, Micro-ATX = compact, Mini-ITX = tiny. All share the same socket standards." },
  ],
  funFact: "The 'IBM Compatible PC' standard from 1981 is so successful that essentially all modern desktop PCs still follow the same basic architecture — 40+ years of backwards compatibility!",
  dos: [
    "Always touch a metal part of the case before handling components (anti-static)",
    "Apply thermal paste in a pea-sized dot at centre of CPU IHS",
    "Verify CPU socket compatibility before buying — LGA1700 ≠ LGA1200",
    "Seat RAM in the correct slots for dual-channel (usually A2+B2, check your manual)",
  ],
  donts: [
    "Don't force CPU into socket — align the triangle marker",
    "Don't forget to connect the 8-pin EPS CPU power cable",
    "Don't install GPU in a x1 slot expecting x16 performance",
    "Don't dismiss DRAM_LED diagnostic — it means RAM isn't seated or incompatible",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What does the CPU do in a computer?",
      choices: ["It's the brain that tells everything what to do", "It stores games and photos", "It draws things on the screen"],
      correct: 0,
      explanation: "The CPU is the brain of the computer — it processes all instructions!",
    },
    {
      for: "8-10",
      question: "What does POST stand for?",
      choices: ["Power On Self Test", "PC Operating System Transfer", "Processor Output Speed Test"],
      correct: 0,
      explanation: "POST checks all hardware is working before handing control to the operating system.",
    },
    {
      for: "11-14",
      question: "Why install RAM in slots A2+B2 instead of A1+B1?",
      choices: [
        "To enable dual-channel mode — the memory controller accesses two modules simultaneously for double bandwidth",
        "Because A1+B1 slots are for graphics cards",
        "Because A2+B2 are closer to the CPU",
      ],
      correct: 0,
      explanation: "Dual-channel doubles memory bandwidth — going from 51 GB/s (single) to 102 GB/s (dual) on DDR5-6400.",
    },
    {
      for: "15-18",
      question: "What is 'Write Stress Test' and why run it during PC build verification?",
      choices: [
        "Running Prime95 or OCCT to maximise CPU load, verifying thermal solution handles TDP without throttling",
        "Formatting the SSD before first use",
        "Checking RGB lighting synchronisation",
      ],
      correct: 0,
      explanation: "A new build must be stress tested to confirm VRM stability, thermal paste contact, and RAM training. If the CPU throttles below base clock under load, the cooling solution or VRM is insufficient.",
    },
    {
      for: "15-18",
      question: "In PC airflow, what does 'positive pressure' mean?",
      choices: [
        "More intake fans than exhaust — slightly higher pressure inside case — dust enters only through filtered intakes",
        "Fans spinning faster than spec",
        "Using 140mm fans instead of 120mm",
      ],
      correct: 0,
      explanation: "Positive pressure means air is pushed in faster than it exits — this means dust enters only via filtered fan mounts rather than through every gap in the case.",
    },
  ],
};

export default lesson;
