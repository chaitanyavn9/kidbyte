import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "machine-language",
  title: "What is Machine Language?",
  emoji: "⚙️",
  category: "machine-world",
  story: {
    "5-7": "Your computer only understands 0s and 1s — nothing else! When you click a button in a game, your computer has to convert that into millions of 0s and 1s before it can understand what to do. This language of 0s and 1s is called machine language — it's the only language the computer's brain (CPU) truly understands. Everything you type, click, or touch gets translated into this secret language!",
    "8-10": "Machine language is binary code that the CPU directly executes — it's the lowest level of programming. Programs written in Python or Java must be translated (compiled or interpreted) down to machine language before the CPU can run them. Each CPU instruction is a specific pattern of bits. For example, in x86: 10110000 01100001 means 'store the number 97 in register AL'. Humans almost never write machine language directly — that's what compilers are for!",
    "11-14": "Machine code is binary-encoded CPU instructions executed directly by the processor's hardware. The Instruction Set Architecture (ISA) defines the available opcodes, operands, and addressing modes. x86-64 uses variable-length CISC instructions (1–15 bytes). ARM uses fixed 32-bit RISC instructions. The compilation pipeline: Source code → tokens → AST → IR → optimised IR → machine code. Interpreters translate at runtime; JIT (Just-In-Time) compilers compile hot code paths to native machine code for speed.",
  },
  analogy: {
    "5-7": "Machine language is like the secret language only your CPU speaks — everything gets translated into 0s and 1s before the computer can understand it.",
    "8-10": "Like sheet music for a piano — the pianist (CPU) reads the exact notes (0s and 1s) and plays them. The composer wrote it in a higher language (Python), but the piano only reads sheet music.",
    "11-14": "ISA-specific binary opcodes and operands forming the native instruction stream consumed by the processor's decode and execution units.",
  },
  funFact: "The first programmers in the 1940s actually had to write machine code by hand — flipping physical switches to enter 0s and 1s! It could take days to write a program that today takes minutes.",
  dos: ["Learn a high-level language (Python) — compilers handle the machine code", "Understand that all software ultimately becomes machine code when it runs"],
  donts: ["Don't try to write machine code by hand — use a programming language!", "Don't confuse machine code with binary data — machine code is binary instructions for the CPU specifically"],
  quiz: [
    { for: "5-7", question: "What is the only language a computer's CPU understands?", choices: ["0s and 1s (machine language)", "English", "Python"], correct: 0, explanation: "The CPU only speaks binary — everything else gets translated into 0s and 1s first!" },
    { for: "8-10", question: "What converts Python code into machine language?", choices: ["A compiler or interpreter", "The keyboard", "The monitor"], correct: 0, explanation: "Compilers translate your whole program to machine code. Interpreters run it line by line. Either way, the CPU gets binary!" },
    { for: "11-14", question: "What is a JIT compiler?", choices: ["Just-In-Time — compiles hot code paths to native machine code at runtime for speed", "Java Integrated Toolkit", "A type of CPU instruction"], correct: 0, explanation: "JIT combines interpretation (flexibility) with compilation (speed) — compiling frequently-run code to native machine code on the fly." },
  ],
};
export default lesson;
