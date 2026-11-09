import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "cpu",
  title: "What is a CPU?",
  emoji: "🧠",
  category: "components",
  narrative: {
    "5-7": [
      {
        heading: "Imagine you want to do anything at all",
        text: `Think about everything you do in a day. You wake up, you eat breakfast, you open a game, you type a message to a friend.

Now think about your computer doing the same kinds of things. When you click a button, something has to understand your click. When you open a game, something has to run it. When you type a letter, something has to figure out which letter it is and show it on screen.

**Who does all of that?** One incredibly important part inside your computer — called the CPU.`,
        diagramId: "cpu-why-we-need",
      },
      {
        heading: "The CPU is the computer's brain",
        text: `CPU stands for **Central Processing Unit**. The word "central" means it is in the middle of everything. All instructions — from every app, every click, every keystroke — must pass through the CPU.

It is like your brain. When you decide to wave your hand, your brain sends the signal to your arm. When a game needs to calculate where a ball flies, the CPU does that calculation. When you open a photo, the CPU figures out how to show it on the screen.

**Without a CPU, your computer cannot do a single thing.** It is the heart of all activity.`,
      },
      {
        heading: "What happens inside the CPU every second",
        text: `The CPU has one job it repeats over and over: **read an instruction, understand it, do it, repeat**.

It reads billions of these tiny instructions every single second. That is what the GHz number on a CPU means — a 3 GHz CPU does **3 billion** tiny steps every second!

Each step might be tiny — like "add these two numbers" or "check if this value is bigger than that one" — but do billions of them together and you can run a whole game, play a video, and browse the web all at once.`,
        diagramId: "cpu-fetch-decode-execute",
      },
      {
        heading: "In your daily life, the CPU is always working",
        text: `Every single thing you do on your computer or phone involves the CPU:

**Opening YouTube** — the CPU loads the page, calculates the layout, starts the video.

**Playing a game** — the CPU calculates where every character moves, what happens when you jump, whether you hit an enemy.

**Typing a message** — every key you press is detected by the CPU, which then tells the screen to show that letter.

The CPU is so fast that all of this happens so quickly that it feels instant to you!`,
      },
    ],

    "8-10": [
      {
        heading: "Think about all the things happening at once on your screen",
        text: `Right now, while reading this, your computer might be: playing background music, checking for notifications, loading images, responding to your mouse movement, and saving files in the background.

None of those things happen by magic. Each one requires a **processor** — a part of the computer that processes (works on) instructions.

The question is: who is doing all of this work at the same time? The answer is the **CPU — Central Processing Unit**.`,
        diagramId: "cpu-why-we-need",
      },
      {
        heading: "What is a CPU and why every computer needs one",
        text: `The **CPU (Central Processing Unit)** is the main chip inside your computer or phone that runs all software. Every program you open — games, browsers, apps — is ultimately a list of instructions. The CPU reads those instructions and executes them.

Think of it like a super-fast restaurant kitchen. Orders (instructions) come in, the kitchen (CPU) processes them, and the results come out. The faster the kitchen, the more orders it can handle at once.

**Without a CPU, a computer is just a pile of metal and plastic.** It cannot run a single app, show a single pixel on screen, or respond to a single key press.`,
      },
      {
        heading: "How the CPU works: Fetch → Decode → Execute",
        text: `The CPU follows a cycle called **Fetch-Decode-Execute**. It repeats this cycle billions of times every second.

**Fetch** — the CPU goes to RAM (memory) and picks up the next instruction waiting to run. Like picking up the next recipe card in the kitchen.

**Decode** — the CPU reads the instruction and figures out what it means: "add two numbers", "load a value from memory", "jump to another part of the program". Like reading and understanding a recipe step.

**Execute** — the CPU actually does the work: performs the calculation, reads from memory, writes the result. Like actually cooking the dish.

Then it immediately starts again on the next instruction. A modern CPU running at 3 GHz does this **3 billion times per second**.`,
        diagramId: "cpu-fetch-decode-execute",
      },
      {
        heading: "The CPU in your everyday life",
        text: `Here are real examples of CPU work happening every second you use your device:

**Scrolling a webpage** — the CPU calculates exactly which pixels to move and by how much, then tells the GPU (graphics card) what to draw.

**Loading a game level** — the CPU reads thousands of game object positions, calculates physics, checks for collisions, and updates the game world — all 60 times per second for smooth gameplay.

**Playing a video call** — the CPU compresses your camera image, sends it over the network, receives the other person's compressed video, decompresses it, and shows it on your screen — all simultaneously.

This is why a faster CPU makes your computer feel snappier, and why a slow or overheated CPU makes everything feel sluggish.`,
      },
    ],

    "11-14": [
      {
        heading: "Every program you run is a list of instructions",
        text: `When you open an app — a game, a browser, a text editor — what actually happens? The app's code is loaded from storage into RAM. That code is a sequence of machine instructions: binary patterns that mean things like "add register A to register B", "load from memory address X", "jump to instruction Y if the result was zero".

Something has to read those instructions one by one, decode what they mean, and execute them.

That something is the **CPU — Central Processing Unit**. It is the chip that processes every instruction in every program running on your computer.`,
        diagramId: "cpu-why-we-need",
      },
      {
        heading: "The Fetch-Decode-Execute cycle",
        text: `The CPU's core operation is a loop called the **Fetch-Decode-Execute cycle**:

**Fetch**: The Program Counter (PC) register holds the memory address of the next instruction. The CPU reads that address from RAM into the Instruction Register (IR), then increments the PC to point at the next instruction.

**Decode**: The Control Unit decodes the binary instruction. It identifies the opcode (what operation: ADD, LOAD, STORE, JUMP, COMPARE) and the operands (which registers or memory addresses to use). It then activates the appropriate CPU circuits.

**Execute**: The ALU (Arithmetic Logic Unit) performs the operation — arithmetic, logic, memory read/write, or a branch. The result goes into a register or back to RAM.

A modern 3 GHz CPU repeats this loop **3,000,000,000 times per second**.`,
        diagramId: "cpu-fetch-decode-execute",
      },
      {
        heading: "Cores, cache, and clock speed",
        text: `Modern CPUs have several features that make them dramatically faster than simply running one instruction at a time:

**Cores**: Each core is a complete, independent processor. A quad-core CPU can execute 4 instruction streams simultaneously — running 4 different programs (or 4 threads of one program) at the same time, literally in parallel.

**Cache**: RAM is fast, but the CPU is much faster. Cache is ultra-fast memory built directly into the CPU chip. L1 cache (32–64 KB, 4 cycles) holds the most recent instructions and data. L2 (256 KB–1 MB, 12 cycles) is a backup. L3 (8–64 MB, 40 cycles) is shared between all cores. Without cache, the CPU would spend most of its time waiting for RAM (100+ cycles per access).

**Clock Speed (GHz)**: Each clock cycle, the CPU can complete one or more stages of the pipeline. A higher GHz means more cycles per second, meaning more instructions can be executed. A 5 GHz CPU is 67% faster per core than a 3 GHz one.`,
      },
      {
        heading: "In daily life: everything you do involves millions of CPU instructions",
        text: `Here are real operations and what happens under the hood:

**You click "Save"**: Your text editor calls a system call (write()) → the OS kernel finds the file on the SSD → the CPU executes thousands of instructions to handle buffering, encoding, and storage I/O.

**A game renders a frame**: The CPU calculates AI decisions, physics (positions, velocities, collisions), and input handling → sends draw calls to the GPU → 60 times per second. At 60 fps, the CPU has 16.67 milliseconds per frame.

**You compile code**: A compiler runs millions of instructions to parse your source code, build an AST, optimise it, and emit machine code — all done by the CPU reading and processing text.

This is why a faster CPU with more cores makes development, gaming, and video editing noticeably faster — these are all CPU-bound workloads.`,
      },
    ],
  },

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
  photo: "https://images.unsplash.com/photo-1555617981-dac3772e4783?w=700&fit=crop",
  photoAlt: "Close-up of a modern CPU processor chip on a circuit board",
  keyFacts: [
    { emoji: "🔢", label: "Full Name", value: "Central Processing Unit", detail: "The 'central' brain that every instruction in the computer must pass through." },
    { emoji: "⚡", label: "Speed", value: "3–6 GHz (billion cycles/second)", detail: "A 3 GHz CPU completes 3,000,000,000 tiny steps every single second." },
    { emoji: "🧩", label: "Cores", value: "4–24 cores (consumer CPUs)", detail: "Each core is an independent processor. More cores = more tasks at once." },
    { emoji: "🏭", label: "Size", value: "3–7 nanometre transistors", detail: "Modern CPUs pack 100+ billion transistors into a chip the size of a thumbnail." },
    { emoji: "📍", label: "Socket", value: "LGA 1700 (Intel) / AM5 (AMD)", detail: "The CPU sits in a socket on the motherboard — desktop CPUs can be replaced, laptop ones are usually soldered." },
    { emoji: "🌡️", label: "Heat", value: "Up to 100°C under full load", detail: "Needs a heatsink + fan or liquid cooler to stay below the thermal limit." },
  ],
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
