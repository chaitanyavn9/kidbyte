import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "machine-language",
  title: "What is Machine Language?",
  emoji: "⚙️",
  category: "machine-world",
  narrative: {
    "5-7": [
      { heading: "Imagine a robot that only understands numbers…", text: "If you wanted to tell this robot to pick up a ball, you couldn't just say 'pick up the ball.' You'd have to say something like '01, 05, 02' — specific number codes the robot was built to understand. That's machine language: the CPU's native number codes." },
      { heading: "Every program becomes numbers eventually", text: "When you write code in Python or Scratch, a translator converts it to machine language — tiny numbered instructions the CPU knows how to execute. The CPU only ever sees those numbers, never the original words you typed." },
      { heading: "The journey from code to machine language", text: "You write Python code → Python converts it to machine code → the CPU reads those binary numbers and follows them. This translation happens very fast — in milliseconds.", diagramId: "compilation-flow" },
      { heading: "What machine instructions look like", text: "A CPU instruction might say: 'add the number in register A to the number in register B'. In machine language that's a specific pattern of bits. There are instructions for adding, moving, comparing, and jumping.", diagramId: "instruction-set" },
    ],
    "8-10": [
      { heading: "High-level languages are for humans", text: "Python, JavaScript, and Java use words like 'if', 'print', and 'for' — meaningful to humans. But a CPU has no concept of English words. It only understands binary numbers. Something has to translate human-readable code to CPU-readable binary." },
      { heading: "The compilation pipeline", text: "Source code (Python/C) → Compiler/Interpreter → Assembly language → Assembler → Machine code → CPU executes. Each step strips away human friendliness and adds machine precision.", diagramId: "compilation-flow" },
      { heading: "What assembly language looks like", text: "Assembly is one step above machine code — it uses short word-codes (mnemonics) instead of raw numbers. MOV adds values to registers. ADD adds two numbers. CMP compares. JMP jumps to a different instruction. Each assembly instruction maps 1:1 to one machine instruction.", diagramId: "instruction-set" },
      { heading: "Why this matters", text: "Understanding that all code becomes binary instructions helps you understand why some code is fast and some is slow, why bugs at the wrong level crash the whole system, and what 'optimisation' actually means — fewer and faster machine instructions." },
    ],
    "11-14": [
      { heading: "The abstraction ladder", text: "High-level code (Python) → IR (intermediate representation in the compiler) → Assembly → Machine code. Each stage is a formal language with precise semantics. The compiler's job is to transform one formal language into another while preserving meaning and improving efficiency." },
      { heading: "Compiler stages", text: "Lexer: breaks code into tokens. Parser: builds an AST (Abstract Syntax Tree). Semantic analysis: type checking, scope resolution. IR generation: LLVM IR or GCC GIMPLE. Optimisation passes: dead code elimination, loop unrolling, inlining. Code generation: ISA-specific assembly. Linker: combines object files.", diagramId: "compilation-flow" },
      { heading: "x86-64 instruction set basics", text: "Registers: RAX, RBX, RCX, RDX (general purpose), RSP (stack pointer), RBP (frame pointer), RIP (instruction pointer). Instructions: MOV (copy data), ADD/SUB/MUL, CMP (set flags), JNE/JE/JLT (conditional jumps), CALL/RET (function calls), PUSH/POP (stack operations).", diagramId: "instruction-set" },
      { heading: "RISC vs CISC", text: "CISC (x86): many complex instructions, variable length (1–15 bytes each), can operate directly on memory. RISC (ARM, RISC-V): fewer simple instructions, fixed length (4 bytes each), load/store architecture (all ops on registers). Modern CPUs translate CISC instructions to internal RISC micro-ops for execution." },
    ],
    "15-18": [
      { heading: "LLVM and modern compiler architecture", text: "LLVM separates frontend (language-specific: Clang for C/C++, rustc for Rust) from backend (ISA-specific). LLVM IR is a typed, SSA (Static Single Assignment) form — each variable assigned exactly once, enabling powerful optimisations. The same optimisation passes work for all languages targeting LLVM: 300+ passes including vectorisation, inlining, constant folding." },
      { heading: "CPU micro-architecture — what really happens", text: "Modern CPUs don't execute machine code directly. The decoder translates x86 instructions to micro-ops. The micro-op cache (Decoded ICache) holds decoded micro-ops. Out-of-order execution reorders micro-ops for efficiency. The ROB (Reorder Buffer) tracks in-flight operations and retires them in order.", diagramId: "compilation-flow" },
      { heading: "SIMD and vectorised code", text: "SSE2 (128-bit), AVX2 (256-bit), AVX-512 (512-bit) are SIMD instruction sets that operate on multiple values at once. AVX2 can add 8 float32 values in a single instruction. Compilers auto-vectorise loops when safe. NumPy, BLAS, and media codecs hand-write SIMD for critical hot loops.", diagramId: "instruction-set" },
      { heading: "JIT compilation and speculative optimisation", text: "JIT compilers (V8/JS, JVM HotSpot, PyPy) compile hot code paths at runtime. They can use runtime type profiles (most calls to this function pass int32) to generate specialised machine code. Deoptimisation happens when assumptions are violated. This adaptive compilation is why Java and JS performance can rival compiled C for hot paths." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1542903660-eedba2cda520?w=700&fit=crop",
  photoAlt: "Assembly code and machine instructions on a dark terminal screen",
  keyFacts: [
    { emoji: "⚙️", label: "What It Is", value: "Binary instructions the CPU executes directly", detail: "Machine code is the only language a CPU understands. Everything else is translated." },
    { emoji: "📏", label: "Instruction Size", value: "x86-64: 1–15 bytes per instruction", detail: "x86 has variable-length instructions. ARM (phones) uses fixed 4-byte instructions." },
    { emoji: "🔢", label: "Example", value: "B8 01 00 00 00 = MOV EAX, 1", detail: "B8 is the opcode for 'move a 32-bit value into EAX register'. 01 00 00 00 is the number 1." },
    { emoji: "🏗️", label: "Compilation", value: "C → Assembly → Machine Code", detail: "gcc compiles C to x86 assembly, then an assembler converts it to raw machine code." },
    { emoji: "📅", label: "First Programs", value: "Hand-coded in binary (1940s)", detail: "Early programmers entered machine code using physical switches — one bit at a time." },
    { emoji: "🔬", label: "Reverse Engineering", value: "Disassembler converts bytes to ASM", detail: "Tools like Ghidra and IDA Pro decompile machine code back to readable assembly." },
  ],
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
