import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "computer",
  title: "What is a Computer?",
  emoji: "🖥️",
  category: "devices",
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
