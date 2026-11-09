import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "computer",
  title: "What is a Computer?",
  emoji: "🖥️",
  category: "devices",
  narrative: {
    "5-7": [
      { heading: "What if you had a magic box that remembered everything?", text: "Imagine a box you could type questions into, and it would give you answers, play music, show videos, and remember everything you told it. That's a computer! But it's not really magic — it's a machine built from clever parts that all work together." },
      { heading: "What goes inside a computer?", text: "Every computer has a few key parts: a brain to think (CPU), a desk to work on (RAM), a cupboard to store things (hard drive/SSD), a screen to show you results, and a keyboard/mouse to give it instructions.", diagramId: "computer-parts" },
      { heading: "Input → Process → Output", text: "You type something (INPUT). The computer thinks about it (PROCESS). The screen shows the answer (OUTPUT). Every single thing a computer does follows this pattern.", diagramId: "how-computer-works" },
      { heading: "In your daily life…", text: "Your school computer, your phone, your games console, your smart TV — they all follow the same Input → Process → Output idea. Computers are everywhere because they can be programmed to do almost anything." },
    ],
    "8-10": [
      { heading: "Before computers, people did all calculations by hand", text: "Imagine calculating rocket trajectories by hand — that's what NASA mathematicians did in the 1960s! Computers were invented to automate repetitive calculations that humans found slow and error-prone." },
      { heading: "The main parts and what they do", text: "CPU = brain (processes instructions). RAM = short-term memory (holds what you're working on). SSD/HDD = long-term memory (stores files). GPU = graphics chip (draws the screen). Motherboard = the board that connects everything.", diagramId: "computer-parts" },
      { heading: "IPO Model — how every task works", text: "Input: keyboard, mouse, microphone, camera. Process: CPU + RAM doing calculations. Output: screen, speakers, printer. Storage: saves results for later. All software is just instructions telling the CPU what to process.", diagramId: "how-computer-works" },
      { heading: "What makes computers useful", text: "Speed (billions of operations per second), accuracy (no arithmetic mistakes), memory (store billions of facts), and programmability (follow any set of instructions). These four qualities make computers the most powerful tools ever built." },
    ],
    "11-14": [
      { heading: "A computer is a universal machine", text: "Alan Turing proved in 1936 that a single machine (Turing Machine) could simulate any other machine, given the right instructions. Modern computers are physical implementations of this idea — the same hardware runs a word processor, a game, and a web server just by loading different software." },
      { heading: "Hardware layers", text: "Transistors → Logic gates → ALU + registers → CPU → System board (CPU + RAM + PCIe slots + I/O) → Software. Each layer abstracts the complexity below it.", diagramId: "computer-parts" },
      { heading: "The von Neumann architecture", text: "The CPU fetches instructions and data from memory, executes the instruction, writes results back to memory. This stored-program concept — instructions and data live in the same memory — is the foundation of every computer since ENIAC.", diagramId: "how-computer-works" },
      { heading: "Performance bottlenecks", text: "The 'memory wall': CPUs are much faster than RAM. Modern CPUs use multi-level caches (L1/L2/L3) to hide memory latency. The 'von Neumann bottleneck': instructions and data share the same bus, limiting parallelism. These are the central challenges of computer architecture." },
    ],
    "15-18": [
      { heading: "From Turing to silicon", text: "Turing's theoretical model became real with von Neumann's stored-program architecture (1945). ENIAC (1945) used 18,000 vacuum tubes. Transistors (1947) replaced tubes. Integrated circuits (1958) put millions of transistors on one chip. Today's CPUs have ~100 billion transistors at 3nm." },
      { heading: "Instruction Set Architecture — the contract", text: "The ISA defines the instructions a CPU understands (ADD, MOV, LOAD, STORE, JMP) and the register file. x86-64 (Intel/AMD) dominates desktops; ARM dominates mobile and Apple Silicon. RISC-V is the open-source newcomer. Same software, different silicon — the ISA is the abstraction layer.", diagramId: "computer-parts" },
      { heading: "Modern CPU architecture", text: "Out-of-order execution (reorder instructions for efficiency), branch prediction (guess next instruction before resolving branches), speculative execution (run ahead, discard if wrong), superscalar pipelines (multiple execution units), SMT/Hyperthreading (two logical CPUs per physical core). These techniques achieve ~4 instructions per clock cycle.", diagramId: "how-computer-works" },
      { heading: "Beyond von Neumann", text: "Neuromorphic chips (Intel Loihi) process data in spike-based patterns inspired by the brain. Processing-in-memory (PIM) adds compute units next to RAM, eliminating the memory bus bottleneck. Quantum computers abandon binary logic entirely. The 'computer' as we know it is about to diversify." },
    ],
  },
  story: {
    "5-7":
      "A computer is a super-smart machine that can do many things! It can play your favourite videos, help you draw pictures, let you play games, and even talk to your friends far away. You tell it what to do by clicking with a mouse or tapping the keyboard — and it does it in the blink of an eye! It's like having a very obedient robot friend on your desk.",
    "8-10":
      "A computer is an electronic machine that processes information. It takes instructions from you (called input), thinks about them really fast, and gives you a result (called output). A desktop computer has separate parts: the big box (tower) where the brain lives, a monitor to show pictures, a keyboard to type, and a mouse to point and click. All these parts work as a team!",
    "11-14":
      "A computer is a programmable electronic device that processes data according to instructions stored in its memory. It follows the IPO cycle — Input, Processing, Output. Modern computers contain a CPU (brain), RAM (working memory), storage (SSD/HDD), a GPU (graphics), and a motherboard connecting them all. The OS (Operating System) manages all these parts and lets software run on top.",
  },
  analogy: {
    "5-7": "A computer is like a really obedient robot friend — you tell it what to do and it does it instantly!",
    "8-10": "Like a super-fast chef: you give the ingredients (input), it cooks (processing), and serves the dish (output).",
    "11-14": "A von Neumann machine: fetch instructions from memory, decode, execute, and output results in a continuous cycle.",
  },
  photo: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=700&fit=crop",
  photoAlt: "Modern desktop computer setup with monitor, keyboard and mouse",
  keyFacts: [
    { emoji: "🧠", label: "Core Parts", value: "CPU + RAM + Storage + I/O", detail: "Every computer — from a phone to a supercomputer — has these four fundamentals." },
    { emoji: "⚡", label: "Speed", value: "Billions of operations/second", detail: "A modern CPU can perform 3 billion operations per second per core." },
    { emoji: "💾", label: "Storage", value: "256 GB – 2 TB typical", detail: "SSDs store your files permanently. RAM stores what you're working on right now." },
    { emoji: "📅", label: "First Computer", value: "ENIAC, 1945", detail: "ENIAC weighed 30 tonnes and filled a room. Your phone is a million times more powerful." },
    { emoji: "🌐", label: "World Count", value: "~2 billion PCs globally", detail: "Around 2 billion personal computers are in use worldwide today." },
    { emoji: "🔌", label: "Power", value: "Desktop: 300–500W typical", detail: "A gaming PC uses as much power as a refrigerator. Laptops use 15–65W." },
  ],
  funFact:
    "The first electronic computer, ENIAC (1945), weighed 30 tonnes and filled an entire room — yet it was less powerful than the calculator app on your phone!",
  dos: [
    "Shut down properly — don't just pull the power plug",
    "Keep liquids away from the keyboard and tower",
    "Use a surge protector to protect from power spikes",
  ],
  donts: [
    "Don't block the ventilation holes on the back or sides",
    "Don't ignore software updates — they fix security holes",
    "Don't leave it on the floor where dust and pets can damage it",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What does a computer do when you click something?",
      choices: ["It follows your instructions instantly", "It goes to sleep", "It makes a noise"],
      correct: 0,
      explanation: "A computer follows your instructions — that's its whole job!",
    },
    {
      for: "5-7",
      question: "Which part of the computer shows you pictures and videos?",
      choices: ["The monitor (screen)", "The keyboard", "The mouse"],
      correct: 0,
      explanation: "The monitor is the screen — it shows everything the computer is doing!",
    },
    {
      for: "8-10",
      question: "What does IPO stand for in computing?",
      choices: ["Input, Processing, Output", "Internet, Print, Open", "Install, Play, Operate"],
      correct: 0,
      explanation: "Input → Processing → Output — every computer task follows this cycle!",
    },
    {
      for: "8-10",
      question: "Which part is the 'brain' of the computer?",
      choices: ["CPU", "Monitor", "Keyboard"],
      correct: 0,
      explanation: "The CPU (Central Processing Unit) is the brain — it makes all the decisions!",
    },
    {
      for: "11-14",
      question: "What connects all the internal components of a computer together?",
      choices: ["Motherboard", "RAM", "Power Supply"],
      correct: 0,
      explanation: "The motherboard is the main circuit board — it connects CPU, RAM, storage, GPU and everything else.",
    },
    {
      for: "11-14",
      question: "What is the von Neumann architecture?",
      choices: [
        "A design where CPU and memory share the same bus to store both data and instructions",
        "A computer with no keyboard",
        "A type of graphics card",
      ],
      correct: 0,
      explanation: "The von Neumann model (1945) is the basis for almost all modern computers: a single shared memory stores both program instructions and data.",
    },
  ],
};

export default lesson;
