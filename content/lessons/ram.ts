import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "ram",
  title: "What is RAM?",
  emoji: "📚",
  category: "components",
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
