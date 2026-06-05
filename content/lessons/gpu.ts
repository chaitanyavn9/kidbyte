import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "gpu",
  title: "What is a GPU?",
  emoji: "🎨",
  category: "components",
  story: {
    "5-7": "The GPU is like a super-fast artist inside your computer! Every time you see a picture, a game, or a video on your screen, the GPU painted it. It paints millions of tiny dots (pixels) every single second. The CPU tells it what to paint, and the GPU paints it — really, really fast!",
    "8-10": "GPU stands for Graphics Processing Unit. While the CPU is like a single brilliant brain, the GPU is like thousands of tiny workers all painting at the same time. This is why games look so smooth — the GPU redraws the entire screen 60 or more times every second! Without a GPU, your screen would look blocky and slow.",
    "11-14": "A GPU is a massively parallel processor with thousands of small cores designed for simultaneous floating-point operations. Unlike CPUs (few powerful cores for sequential tasks), GPUs excel at parallel workloads like rendering triangles, shading pixels, and matrix multiplication. Modern GPUs (NVIDIA RTX, AMD Radeon) are also used for AI/ML training because neural networks are essentially matrix maths at massive scale.",
  },
  analogy: {
    "5-7": "An artist who paints every tiny dot on your screen — millions of dots, every second!",
    "8-10": "Thousands of mini-painters working at the same time — each one colours a small piece of the screen.",
    "11-14": "A massively parallel SIMD processor — thousands of cores executing the same instruction on different data simultaneously.",
  },
  funFact: "Modern gaming GPUs have over 16,000 cores. Your CPU has maybe 16. The GPU wins by having thousands of small workers instead of a few big ones!",
  dos: ["Make sure your PC has good airflow — GPUs get very hot", "Update GPU drivers for the best game performance"],
  donts: ["Don't block the GPU's exhaust fans", "Don't run demanding games with a faulty cooling system"],
  quiz: [
    { for: "5-7", question: "What does the GPU do?", choices: ["Paints the pictures on your screen", "Stores your files", "Connects to Wi-Fi"], correct: 0, explanation: "The GPU paints every pixel you see on screen!" },
    { for: "8-10", question: "Why does a GPU have thousands of small cores?", choices: ["To paint millions of pixels at the same time", "To store more files", "To make the computer louder"], correct: 0, explanation: "Painting every pixel simultaneously requires massive parallelism — that's why GPUs have so many cores!" },
    { for: "11-14", question: "Why are GPUs used for AI training?", choices: ["Neural networks require massive matrix multiplication which GPUs excel at", "GPUs have more RAM", "GPUs are cheaper"], correct: 0, explanation: "Both graphics rendering and AI training boil down to the same maths: matrix operations at massive scale." },
  ],
};
export default lesson;
