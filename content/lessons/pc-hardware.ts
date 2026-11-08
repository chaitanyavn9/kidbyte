import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "pc-hardware",
  title: "PC Hardware & Assembly",
  emoji: "🖥️",
  category: "engineering",
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
