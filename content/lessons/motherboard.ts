import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "motherboard",
  title: "What is a Motherboard?",
  emoji: "🔌",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "Imagine all the parts of a computer floating in mid-air…", text: "The CPU, RAM, storage, graphics card — if they all just floated without being connected, they couldn't share information. The motherboard is the big green circuit board that physically connects every part together, like roads connecting all the buildings in a city." },
      { heading: "The motherboard is the city's road network", text: "Every component plugs into the motherboard. The CPU sits in its socket. RAM snaps into slots. The graphics card goes into a PCIe slot. Even the power supply connects through the motherboard to distribute power to everything.", diagramId: "motherboard-layout" },
      { heading: "Data travels on the motherboard like traffic", text: "Information moves between parts along tiny copper pathways called traces — the 'roads' of the motherboard. Wider roads carry more data at once. The speed of these connections determines how fast your computer feels.", diagramId: "data-bus" },
      { heading: "In your daily life…", text: "When you buy a new CPU, you need a compatible motherboard with the right socket. When you buy RAM, it must match the motherboard's RAM type. The motherboard is the foundation of every PC build." },
    ],
    "8-10": [
      { heading: "Without a motherboard, parts can't communicate", text: "A CPU alone is useless — it needs RAM to store data, storage to load programs, and a GPU to show output. The motherboard provides all the connection points, the shared data pathways (buses), and the power distribution." },
      { heading: "What's on a motherboard?", text: "CPU socket, RAM slots, PCIe slots (for GPU, NVMe SSDs), SATA connectors (for older HDDs/SSDs), M.2 slots, USB headers, audio connections, power connectors, and the BIOS chip. Modern motherboards also include Wi-Fi and Bluetooth.", diagramId: "motherboard-layout" },
      { heading: "The bus system — data highways", text: "Components communicate over buses — shared data pathways with set widths and speeds. PCIe (for GPU/NVMe) uses multiple lanes (×1, ×4, ×16) for high bandwidth. SATA for drives. USB for external devices. The CPU is the central hub.", diagramId: "data-bus" },
      { heading: "BIOS/UEFI — the first software", text: "The BIOS chip on the motherboard contains the first software that runs when you press the power button. It tests hardware, finds the boot drive, and loads the OS. Modern BIOS is called UEFI and has a graphical interface." },
    ],
    "11-14": [
      { heading: "The motherboard as a system interconnect", text: "The motherboard implements the physical and electrical standards that let components communicate: socket pinouts, PCIe signal routing, power delivery circuits (VRMs), clock distribution, and the BIOS/UEFI firmware. Without these standards, every PC would be custom-built." },
      { heading: "PCIe — the main high-speed bus", text: "PCIe (Peripheral Component Interconnect Express) is a serial interface that uses differential signalling. Each lane is two pairs (TX+/TX- and RX+/RX-). PCIe 5.0: 32 GT/s per lane, 64 GB/s for ×16. The GPU uses ×16 lanes; NVMe SSDs use ×4.", diagramId: "motherboard-layout" },
      { heading: "CPU ↔ RAM: the memory bus", text: "The memory controller lives inside the CPU (since ~2008). The CPU connects directly to RAM via the memory bus — no chipset in between. DDR5 uses two 32-bit sub-channels. The chipset (PCH on Intel) handles slower peripherals: USB, SATA, audio.", diagramId: "data-bus" },
      { heading: "VRMs — power delivery", text: "The CPU needs clean, stable voltage at very high currents (a 253W CPU at 1V needs 253 amps!). Voltage Regulator Modules (VRMs) on the motherboard convert the ATX supply's 12V to the CPU's 1.0–1.2V. More phases = smoother power = more stable overclocking." },
    ],
    "15-18": [
      { heading: "Platform architecture — chipset design", text: "Intel's current platform: CPU (Core/Xeon) contains PCIe 5.0 lanes, memory controller, Thunderbolt, and USB4. The PCH (Platform Controller Hub) connects via DMI 4.0 (×8 PCIe equivalent) and handles SATA, USB 2/3, legacy I/O, and slower PCIe 3/4 lanes. AMD's AM5 platform is similar with FCH." },
      { heading: "Signal integrity at high speeds", text: "At PCIe 5.0 speeds (32 GT/s = 32 Gbps per lane), signal integrity is critical. Differential pairs must be impedance-controlled (100Ω ± 10%). Vias, stubs, and trace length mismatches cause reflections. High-end motherboards use 8-layer PCBs with dedicated reference planes.", diagramId: "motherboard-layout" },
      { heading: "UEFI firmware internals", text: "UEFI is a full OS-like firmware stored on a 16–32 MB SPI flash chip. It runs in 32/64-bit protected mode. ACPI tables describe hardware topology to the OS. Secure Boot verifies the bootloader signature using RSA-2048. TPM chips store encryption keys and attest to the boot chain.", diagramId: "data-bus" },
      { heading: "Beyond PCIe — CXL and future interconnects", text: "CXL (Compute Express Link) builds on PCIe 5.0 to allow cache-coherent memory sharing between CPUs and accelerators. CXL.mem allows AI accelerators to access host RAM directly. This enables disaggregated memory pools — a paradigm shift in server architecture for AI workloads." },
    ],
  },
  story: {
    "5-7": "The motherboard is like the town square of your computer! Every important part — the CPU brain, the RAM table, the storage cupboard — all plug into the motherboard. It connects everyone together so they can talk to each other. Without the motherboard, all the parts would just be strangers who can't communicate!",
    "8-10": "The motherboard is the main circuit board inside your computer. It's a large flat board with lots of slots, sockets, and connections. The CPU plugs into a socket on the motherboard. RAM slots hold the RAM sticks. PCIe slots hold the GPU. SATA or M.2 ports connect storage. The motherboard lets all these parts send data to each other through electrical pathways called 'buses'.",
    "11-14": "The motherboard is the main PCB (Printed Circuit Board) that interconnects all components via chipset buses and PCIe lanes. The CPU socket (LGA/AM5) interfaces with the CPU. The chipset (Intel Z790, AMD X670) manages communication between CPU, RAM (via memory controller), storage (NVMe via PCIe), and I/O. Power delivery through VRMs (Voltage Regulator Modules) converts 12V to precise CPU core voltages. The UEFI firmware stored on SPI flash chip initialises all hardware.",
    "15-18": "The motherboard is a multi-layer FR4 PCB (typically 6–10 layers) with alternating signal, ground, and power planes. Key subsystems: (1) VRM (Voltage Regulator Module) — a buck converter using MOSFETs and inductors, converting ATX 12V to CPU Vcore (0.8–1.5V) with tight load-line regulation for transient response; (2) PCIe topology — CPU lanes (x16 for GPU) run at Gen 4/5 (16GT/s to 32GT/s per lane), chipset lanes handle NVMe/USB; (3) Memory subsystem — dual-channel DDR5 with on-die ECC, XMP/EXPO profiles stored in SPD EEPROM; (4) Chipset (PCH) — handles DMI link to CPU, manages SATA, USB, PCIe storage; (5) UEFI — replaces legacy BIOS, stored in 128Mbit SPI flash, initializes memory training (tRAS/CL/tRCD timings), boots via GPT/UEFI or legacy MBR. Form factors: ATX (305×244mm), Micro-ATX, Mini-ITX (170×170mm). PCB traces use controlled impedance (50Ω single-ended, 100Ω differential) for signal integrity.",
  },
  analogy: {
    "5-7": "The motherboard is like the town square — all the important parts of the computer meet and talk there.",
    "8-10": "Like a road network — every part connects to it and sends data through it, like cars on roads.",
    "11-14": "A multi-layer PCB with high-speed differential signal traces, power planes, and chipset-managed interconnects.",
    "15-18": "A city's infrastructure — with power grid (VRM), highways (PCIe lanes), local roads (chipset buses), and a central government building (UEFI) that starts everything when the city wakes up.",
  },
  photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&fit=crop",
  photoAlt: "Green ATX motherboard with CPU socket, RAM slots, and PCIe slots visible",
  keyFacts: [
    { emoji: "🏙️", label: "What It Is", value: "The main circuit board that connects everything", detail: "Every component plugs into the motherboard — CPU, RAM, GPU, storage, fans, and power all connect here." },
    { emoji: "📐", label: "Sizes", value: "ATX (full), mATX (mid), ITX (mini)", detail: "ATX (305×244mm) fits in full-tower cases. Mini-ITX (170×170mm) for compact builds." },
    { emoji: "🔌", label: "Power", value: "24-pin ATX + 8-pin EPS connectors", detail: "The 24-pin supplies the board; the 8-pin EPS exclusively powers the CPU. Both from the PSU." },
    { emoji: "🧠", label: "CPU Socket", value: "LGA 1700 (Intel) or AM5 (AMD)", detail: "Socket type must match the CPU brand and generation. Changing CPU generation often means a new motherboard." },
    { emoji: "📡", label: "Chipset", value: "Intel Z790 / AMD X670E (high-end)", detail: "The chipset controls USB ports, PCIe lanes, storage slots, and overclocking features." },
    { emoji: "🔄", label: "BIOS/UEFI", value: "Stored in a chip on the board", detail: "The firmware that runs before the OS. Controls boot order, fan speeds, XMP/EXPO RAM profiles." },
  ],
  funFact: "A modern motherboard has hundreds of kilometres of microscopic copper traces etched into its layers — all carrying data at near the speed of light!",
  dos: ["Handle a motherboard by its edges — never touch the circuits with bare hands", "Ground yourself before touching computer parts to avoid static damage"],
  donts: ["Don't force RAM or GPU into the wrong slots", "Don't bend or flex the motherboard — it can crack the PCB traces"],
  quiz: [
    { for: "5-7", question: "What does the motherboard do?", choices: ["Connects all the computer parts together", "Stores all the files", "Shows pictures on screen"], correct: 0, explanation: "The motherboard is the connection hub — CPU, RAM, GPU all plug into it!" },
    { for: "8-10", question: "What is a 'bus' on a motherboard?", choices: ["An electrical pathway that carries data between components", "A type of memory", "A cooling system"], correct: 0, explanation: "Buses are high-speed electrical lanes — data travels between CPU, RAM, and storage through them." },
    { for: "11-14", question: "What does a VRM (Voltage Regulator Module) do?", choices: ["Converts power supply voltage to precise CPU core voltages", "Cools the CPU", "Stores BIOS firmware"], correct: 0, explanation: "VRMs take the 12V from the power supply and convert it to the 0.8–1.5V that modern CPUs actually need." },
    { for: "15-18", question: "What is 'controlled impedance' in motherboard PCB design?", choices: ["Matching trace impedance (e.g. 50Ω) to signal frequency to prevent reflections", "Limiting current through MOSFETs", "Regulating CPU voltage"], correct: 0, explanation: "High-speed signals (PCIe, DDR5) require traces with controlled impedance to prevent reflections and maintain signal integrity across the board." },
    { for: "15-18", question: "What is stored in the SPD (Serial Presence Detect) EEPROM on a RAM stick?", choices: ["RAM's rated timings, speed, and voltage so the UEFI can auto-configure the memory controller", "The operating system bootloader", "GPU firmware"], correct: 0, explanation: "SPD EEPROM stores JEDEC default timings and XMP/EXPO profiles — the motherboard reads these at POST to set correct DDR speed and timings automatically." },
  ],
};
export default lesson;
