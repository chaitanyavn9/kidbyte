import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "cpu",
  title: "What is a CPU?",
  emoji: "🧠",
  category: "components",
  story: {
    "5-7":
      "The CPU is the brain of your computer! Just like your brain tells your hands to wave, your legs to run, and your mouth to speak — the CPU tells every part of the computer what to do. Without a brain, your body can't do anything. Without a CPU, a computer can't do anything either!",
    "8-10":
      "CPU stands for Central Processing Unit. It reads instructions from programs, does maths, makes decisions, and controls everything else in the computer — billions of times every second! Modern CPUs have multiple 'cores' — imagine having 4 or 8 tiny brains all working together at the same time.",
    "11-14":
      "The CPU follows the Fetch-Decode-Execute cycle: it fetches an instruction from RAM, decodes what it means, executes it, then writes the result back. Modern CPUs have multiple cores, branch predictors, cache hierarchies (L1/L2/L3), and can execute billions of instructions per second (measured in GHz — GigaHertz).",
    "15-18":
      "The CPU is a silicon die with billions of transistors etched using photolithography at nanometre-scale nodes (Intel 7nm, TSMC 3nm). It executes the Instruction Set Architecture (ISA — x86-64, ARM64) through microarchitecture stages: Fetch → Decode → Dispatch → Execute → Writeback. Modern out-of-order (OoO) superscalar CPUs use: (1) Branch Prediction — guessing which path code takes before the condition is resolved; (2) Speculative Execution — executing ahead of confirmed branches; (3) Register Renaming — eliminating false data dependencies; (4) Reorder Buffer (ROB) — committing results in correct program order. Cache hierarchy — L1 (32–64KB, ~4 cycles), L2 (256KB–1MB, ~12 cycles), L3 (8–64MB, ~40 cycles) — dramatically reduces main memory latency (100+ ns = ~300 cycles at 3GHz). Multi-core CPUs share L3 cache via a ring bus or mesh interconnect. Simultaneous Multi-Threading (SMT / Hyper-Threading) makes one physical core look like 2 logical cores by sharing execution units between two thread contexts.",
  },
  analogy: {
    "5-7": "Your brain — it tells everything in your body what to do!",
    "8-10":
      "A super-fast chef who reads recipes (instructions) and cooks thousands of dishes (tasks) every second.",
    "11-14":
      "A pipeline factory: Fetch → Decode → Execute → Writeback, with out-of-order execution for maximum throughput.",
    "15-18":
      "An out-of-order superscalar processor is like a world-class kitchen with multiple chefs (cores), each reading ahead in the recipe (branch prediction), preparing ingredients early (speculative execution), and plating dishes in correct order even if cooked out of sequence (reorder buffer).",
  },
  funFact:
    "The first commercial CPU, the Intel 4004, was released in 1971 and had just 2,300 transistors. Today's CPUs have over 100 billion transistors!",
  dos: [
    "Keep your computer in a cool, well-ventilated area",
    "Let your computer rest if it feels very hot",
    "Close apps you're not using to give the CPU a break",
  ],
  donts: [
    "Don't block the vents at the bottom or sides of your laptop",
    "Don't run too many heavy programs at once",
    "Don't ignore warnings about CPU overheating",
  ],
  quiz: [
    {
      for: "5-7",
      question: "The CPU is like the computer's...?",
      choices: ["Brain", "Heart", "Eyes"],
      correct: 0,
      explanation: "Just like your brain controls your whole body, the CPU controls the whole computer!",
    },
    {
      for: "5-7",
      question: "What happens if a computer has no CPU?",
      choices: ["It can't do anything", "It works slower", "It still works fine"],
      correct: 0,
      explanation: "Without a CPU, a computer is like a body without a brain — it can't do anything at all!",
    },
    {
      for: "8-10",
      question: "What does CPU stand for?",
      choices: ["Central Processing Unit", "Computer Power Unit", "Color Pixel Uploader"],
      correct: 0,
      explanation: "CPU = Central Processing Unit — the central brain that processes all instructions!",
    },
    {
      for: "8-10",
      question: "What is a 'core' in a CPU?",
      choices: [
        "Like a mini-brain inside the CPU",
        "The cooling system",
        "The power button",
      ],
      correct: 0,
      explanation:
        "Each core is like an independent processor. More cores = more tasks handled at the same time!",
    },
    {
      for: "11-14",
      question: "What is the correct order of the CPU's instruction cycle?",
      choices: [
        "Fetch → Decode → Execute → Writeback",
        "Execute → Fetch → Decode → Store",
        "Decode → Execute → Fetch → Write",
      ],
      correct: 0,
      explanation:
        "The fetch-decode-execute cycle is how a CPU processes every single instruction — repeated billions of times per second.",
    },
    {
      for: "11-14",
      question: "What unit measures CPU speed?",
      choices: ["GHz (GigaHertz)", "GB (GigaByte)", "GW (GigaWatt)"],
      correct: 0,
      explanation:
        "GHz measures clock speed — how many billions of cycles per second the CPU can complete.",
    },
    {
      for: "15-18",
      question: "What problem does 'Register Renaming' solve in a CPU pipeline?",
      choices: [
        "Eliminates false Write-After-Read (WAR) and Write-After-Write (WAW) data hazards",
        "Increases clock speed",
        "Reduces cache miss rate",
      ],
      correct: 0,
      explanation:
        "Register renaming maps architectural registers to a larger pool of physical registers, eliminating anti-dependencies (WAR/WAW) that would stall the out-of-order engine.",
    },
    {
      for: "15-18",
      question: "What is the purpose of the Reorder Buffer (ROB)?",
      choices: [
        "Ensures instructions commit to architectural state in original program order despite out-of-order execution",
        "Stores L1 cache lines",
        "Manages branch prediction tables",
      ],
      correct: 0,
      explanation:
        "The ROB holds in-flight instructions and only retires (commits) them in-order, so out-of-order execution remains invisible to software and exceptions are precise.",
    },
    {
      for: "15-18",
      question: "What is 'Meltdown' in CPU security context?",
      choices: [
        "A side-channel attack exploiting speculative execution to read kernel memory from user space",
        "A type of CPU overheating failure",
        "A branch misprediction penalty",
      ],
      correct: 0,
      explanation:
        "Meltdown (CVE-2017-5754) exploits the fact that speculative loads from privileged memory leave traces in cache timing before access is denied — allowing user-space code to read kernel data.",
    },
  ],
};

export default lesson;
