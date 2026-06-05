import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "motherboard",
  title: "What is a Motherboard?",
  emoji: "🔌",
  category: "components",
  story: {
    "5-7": "The motherboard is like the town square of your computer! Every important part — the CPU brain, the RAM table, the storage cupboard — all plug into the motherboard. It connects everyone together so they can talk to each other. Without the motherboard, all the parts would just be strangers who can't communicate!",
    "8-10": "The motherboard is the main circuit board inside your computer. It's a large flat board with lots of slots, sockets, and connections. The CPU plugs into a socket on the motherboard. RAM slots hold the RAM sticks. PCIe slots hold the GPU. SATA or M.2 ports connect storage. The motherboard lets all these parts send data to each other through electrical pathways called 'buses'.",
    "11-14": "The motherboard is the main PCB (Printed Circuit Board) that interconnects all components via chipset buses and PCIe lanes. The CPU socket (LGA/AM5) interfaces with the CPU. The chipset (Intel Z790, AMD X670) manages communication between CPU, RAM (via memory controller), storage (NVMe via PCIe), and I/O. Power delivery through VRMs (Voltage Regulator Modules) converts 12V to precise CPU core voltages. The UEFI firmware stored on SPI flash chip initialises all hardware.",
  },
  analogy: {
    "5-7": "The motherboard is like the town square — all the important parts of the computer meet and talk there.",
    "8-10": "Like a road network — every part connects to it and sends data through it, like cars on roads.",
    "11-14": "A multi-layer PCB with high-speed differential signal traces, power planes, and chipset-managed interconnects.",
  },
  funFact: "A modern motherboard has hundreds of kilometres of microscopic copper traces etched into its layers — all carrying data at near the speed of light!",
  dos: ["Handle a motherboard by its edges — never touch the circuits with bare hands", "Ground yourself before touching computer parts to avoid static damage"],
  donts: ["Don't force RAM or GPU into the wrong slots", "Don't bend or flex the motherboard — it can crack the PCB traces"],
  quiz: [
    { for: "5-7", question: "What does the motherboard do?", choices: ["Connects all the computer parts together", "Stores all the files", "Shows pictures on screen"], correct: 0, explanation: "The motherboard is the connection hub — CPU, RAM, GPU all plug into it!" },
    { for: "8-10", question: "What is a 'bus' on a motherboard?", choices: ["An electrical pathway that carries data between components", "A type of memory", "A cooling system"], correct: 0, explanation: "Buses are high-speed electrical lanes — data travels between CPU, RAM, and storage through them." },
    { for: "11-14", question: "What does a VRM (Voltage Regulator Module) do?", choices: ["Converts power supply voltage to precise CPU core voltages", "Cools the CPU", "Stores BIOS firmware"], correct: 0, explanation: "VRMs take the 12V from the power supply and convert it to the 0.8–1.5V that modern CPUs actually need." },
  ],
};
export default lesson;
