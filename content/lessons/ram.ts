import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "ram",
  title: "What is RAM?",
  emoji: "📚",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "Imagine you're doing your homework…", text: "You take out your books from the cupboard and spread them on your desk. While you work, everything you need is right there in front of you — easy to reach. But when you're done and close the books, the desk is completely clear. RAM is exactly that desk." },
      { heading: "Why does the computer need a desk?", text: "Without a desk (RAM), every time the CPU needed something it would have to walk all the way to the cupboard (storage) and back. That would be very, very slow — like looking up every word in a dictionary instead of remembering it." },
      { heading: "RAM = your computer's working surface", text: "When you open an app or a game, it jumps from the cupboard (SSD) onto the desk (RAM). The CPU can grab things from the desk in a flash. The more desk space you have, the more apps you can keep open at once.", diagramId: "ram-workspace" },
      { heading: "What happens when you switch off?", text: "The desk clears completely. That's why you must save your work before turning off — saving moves it back into the cupboard (SSD) where it stays safe. RAM only holds things while the power is on.", diagramId: "ram-vs-ssd" },
      { heading: "In your daily life…", text: "More RAM = your computer can keep more apps open without slowing down. 8 GB is good for school work. 16 GB is great for gaming. Tablets and phones have smaller RAM (4–8 GB) because mobile apps are lighter." },
    ],
    "8-10": [
      { heading: "What if the CPU had to go to storage every time?", text: "SSDs are fast, but RAM is 100× faster. If programs lived only on the SSD, every calculation would involve a slow trip to storage. RAM solves this by holding the active data much closer to the processor." },
      { heading: "RAM is temporary — that's the design", text: "RAM is called volatile memory: it loses all data the moment power is cut. This is a feature, not a bug — it means the computer starts fresh each time and old data never gets stuck." },
      { heading: "How RAM works with the CPU", text: "When you launch an app, the OS copies it from SSD → RAM. The CPU then reads and writes directly to RAM at high speed. When you close the app, RAM frees up that space for the next program.", diagramId: "ram-workspace" },
      { heading: "RAM vs storage: same size, very different speed", text: "16 GB of RAM and 16 GB of SSD space sound the same, but RAM is 100× faster. The price difference reflects this — RAM is more expensive per GB than SSD.", diagramId: "ram-vs-ssd" },
    ],
    "11-14": [
      { heading: "Every running program lives in RAM", text: "When you double-click an executable, the OS loader copies its code and initial data from disk into RAM. The CPU's program counter starts pointing into that RAM region and execution begins. Without RAM, nothing could run." },
      { heading: "Volatile by design — DRAM physics", text: "RAM cells store bits as tiny electrical charges that leak away in milliseconds. The memory controller must constantly 'refresh' every row to keep data alive. This refresh cycle is why RAM needs constant power.", diagramId: "ram-workspace" },
      { heading: "What happens when RAM fills up?", text: "The OS uses virtual memory — it pages the least-used RAM chunks to disk (the swap file). This saves you from crashes but makes the computer feel slow, because now the CPU is doing those slow storage trips RAM was supposed to prevent.", diagramId: "ram-vs-ssd" },
      { heading: "Real-world RAM decisions", text: "16 GB handles most tasks (Chrome tabs are notorious RAM eaters — each tab is a separate process). 32 GB suits video editing and software development. Servers use hundreds of GB of ECC RAM (Error-Correcting Code) to silently fix bit flips from cosmic rays." },
    ],
    "15-18": [
      { heading: "DRAM — the leaky capacitor problem", text: "Each DRAM bit is a 1T1C cell: one transistor + one capacitor. Capacitors leak charge, so bits fade. The memory controller refreshes all rows every 64 ms. DDR (Double Data Rate) sends data on both clock edges, doubling bandwidth without raising frequency." },
      { heading: "DDR4 vs DDR5 — the architecture shift", text: "DDR4 runs at 1.2V, 2133–3600 MT/s, single 64-bit channel. DDR5 drops to 1.1V, runs at 4800–8400 MT/s, and splits into two independent 32-bit sub-channels — higher bandwidth and better parallelism. DDR5 also adds on-die ECC to catch single-bit errors before they reach the CPU.", diagramId: "ram-workspace" },
      { heading: "CAS Latency and the bandwidth vs latency trade-off", text: "RAM specs like CL16-18-18-36 tell you the latency in clock cycles. CAS Latency (CL) is the gap between requesting a column address and receiving the data. Faster RAM (higher MT/s) often has higher CL — the absolute latency in nanoseconds (CL ÷ frequency × 2 × 1000) matters more than raw MT/s for latency-sensitive workloads.", diagramId: "ram-vs-ssd" },
      { heading: "Beyond DRAM — LPDDR, GDDR, HBM", text: "LPDDR (Low Power) is soldered on phones and thin laptops. GDDR6X is the wide-bus DRAM on GPUs — 384-bit bus on an RTX 4090 gives 1 TB/s bandwidth. HBM (High Bandwidth Memory) stacks DRAM dies vertically with 1024-bit buses — used in AI accelerators and high-end server GPUs for maximum bandwidth per watt." },
    ],
  },
  story: {
    "5-7":
      "RAM is like your study table! When you're doing homework, you take your books OUT of the cupboard and put them ON the table so you can work with them easily. When you finish and close your books, the table is empty again. RAM works the same way — it holds the things your computer is currently using. When you turn off your computer, the table clears!",
    "8-10":
      "RAM stands for Random Access Memory. It's super-fast temporary storage where your computer keeps everything it's currently working on — open apps, web pages, your game level. More RAM means you can have more things open at once. When you restart your computer, RAM is completely wiped clean.",
    "11-14":
      "RAM is volatile memory — it loses all data when power is cut. It's the CPU's working area: when a program runs, its code and data are loaded from storage (SSD/HDD) into RAM for fast access. RAM speed is measured in MHz/MT/s and size in GB. More RAM means larger working sets and fewer slow disk reads (thrashing).",
    "15-18":
      "DRAM (Dynamic RAM) stores each bit as a charge in a tiny capacitor — 1T1C cell (one transistor, one capacitor). Because capacitors leak, DRAM needs periodic refresh cycles (every 64ms, all rows refreshed). Key evolution: DDR (Double Data Rate) transfers data on both rising and falling clock edges, doubling bandwidth. DDR4 (2133–3600 MT/s, 1.2V) → DDR5 (4800–8400 MT/s, 1.1V, on-die ECC, two 32-bit subchannels). Latency expressed as CL-tRCD-tRP-tRAS (e.g. CL16-18-18-36): CL (CAS Latency) is the most visible — lower is faster. LPDDR (Low Power DDR) is soldered to mobile motherboards (phones, laptops). GDDR6/GDDR6X is wide-bus DRAM for GPUs (256-bit to 384-bit bus). The memory controller (inside modern CPUs) handles row/column addressing, refresh, and ECC for server-grade modules (RDIMM with registered buffer).",
  },
  analogy: {
    "5-7":
      "Your study table — you put open books on it while studying. When done, you put books back in the cupboard (storage) and the table is clear!",
    "8-10":
      "A whiteboard in class — you write on it while teaching, erase it after. Fast to use, gone when wiped.",
    "11-14":
      "The CPU's working register extended — a fast volatile buffer between persistent storage and the processor.",
    "15-18":
      "RAM is like a leaky whiteboard — it needs an eraser-and-rewrite every few milliseconds (refresh) just to keep data alive, but it's so fast that this overhead is worth it compared to the alternative of going to storage.",
  },
  photo: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=700&fit=crop",
  photoAlt: "DDR4 RAM memory sticks on a motherboard",
  keyFacts: [
    { emoji: "🔢", label: "Full Name", value: "Random Access Memory", detail: "Any byte can be read in the same time — there's no 'seeking' like a hard disk." },
    { emoji: "⚡", label: "Speed", value: "DDR5: 4800–8400 MT/s", detail: "Transfers data on both rising and falling clock edges (Double Data Rate)." },
    { emoji: "💾", label: "Size", value: "8–64 GB (typical PC)", detail: "Each GB holds about 1 billion characters. 16 GB can hold 3 million pages of text in memory at once." },
    { emoji: "🔌", label: "Desktop Slot", value: "DIMM — 288-pin DDR5 slot", detail: "Long stick with notch preventing backwards insertion. 2 or 4 slots on most motherboards." },
    { emoji: "💻", label: "Laptop Slot", value: "SO-DIMM (smaller) or soldered", detail: "Many modern laptops solder RAM directly — cannot be upgraded." },
    { emoji: "🧹", label: "Volatile", value: "Erases when power is off", detail: "Unlike an SSD, RAM has no permanent storage — switching off loses everything instantly." },
  ],
  funFact:
    "The first RAM chip was invented in 1966. Today, a modern computer has up to 192GB of RAM — enough to store 40 million pages of text!",
  dos: [
    "Close browser tabs you're not using — each tab uses RAM",
    "Restart your computer occasionally to clear RAM",
    "Check how much RAM apps use in Task Manager / Activity Monitor",
  ],
  donts: [
    "Don't keep 50 tabs open if your computer feels slow",
    "Don't confuse RAM with storage — they're very different!",
    "Don't run out of RAM — your computer uses the slow disk as backup (swap) and slows to a crawl",
  ],
  quiz: [
    {
      for: "5-7",
      question: "RAM is like your computer's...?",
      choices: ["Study table", "Cupboard", "Screen"],
      correct: 0,
      explanation:
        "Just like your study table holds open books while you work, RAM holds open programs while the computer works!",
    },
    {
      for: "5-7",
      question: "What happens to RAM when you turn off the computer?",
      choices: ["Everything is erased", "It saves everything", "It gets faster"],
      correct: 0,
      explanation:
        "RAM is like a table — when you leave the room (turn off), everything on the table is cleared!",
    },
    {
      for: "8-10",
      question: "What does RAM stand for?",
      choices: ["Random Access Memory", "Read And Move", "Really Amazing Memory"],
      correct: 0,
      explanation: "Random Access Memory — any location can be accessed instantly, in any order!",
    },
    {
      for: "8-10",
      question: "What happens when your computer runs out of RAM?",
      choices: [
        "It uses the slow hard disk instead and becomes sluggish",
        "It crashes immediately",
        "It asks you to buy more",
      ],
      correct: 0,
      explanation:
        "When RAM is full, the OS uses 'swap' space on the much slower disk — this is why your computer slows down!",
    },
    {
      for: "11-14",
      question: "Why is RAM called 'volatile' memory?",
      choices: [
        "It loses all data when power is removed",
        "It explodes if overloaded",
        "It changes speed randomly",
      ],
      correct: 0,
      explanation:
        "Volatile means it requires continuous power to maintain data. Cut the power and all RAM contents vanish.",
    },
    {
      for: "11-14",
      question: "What is 'thrashing' in the context of RAM?",
      choices: [
        "When the OS constantly swaps data between RAM and disk due to insufficient RAM",
        "When the CPU overheats",
        "When files get corrupted",
      ],
      correct: 0,
      explanation:
        "Thrashing occurs when a system spends more time swapping pages than actually executing processes — a severe performance bottleneck.",
    },
    {
      for: "15-18",
      question: "Why does DRAM need periodic 'refresh' cycles?",
      choices: [
        "Capacitors in DRAM cells leak charge over time, so rows must be rewritten every ~64ms to prevent data loss",
        "To update the operating system",
        "To synchronise with the CPU clock",
      ],
      correct: 0,
      explanation:
        "DRAM's 1T1C (transistor-capacitor) cells lose charge in milliseconds. The memory controller must refresh all rows within the retention time window, consuming bandwidth in the process.",
    },
    {
      for: "15-18",
      question: "What does 'CAS Latency (CL)' measure in DRAM timings?",
      choices: [
        "The delay (in clock cycles) between the memory controller requesting a column and the data being available",
        "The total capacity of the RAM module",
        "The number of memory channels",
      ],
      correct: 0,
      explanation:
        "CAS Latency is the most critical DDR timing: CL16 at 3200 MT/s = 10ns access latency. Lower CL with higher speed = better responsiveness for latency-sensitive workloads.",
    },
  ],
};

export default lesson;
