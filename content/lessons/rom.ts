import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "rom",
  title: "What is ROM?",
  emoji: "📖",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "What if your computer forgot how to start every time you turned it off?", text: "RAM forgets everything when the power goes off. So what reminds the computer how to wake up? There's a special chip called ROM that never forgets — even without power. It's like instructions written in permanent ink that can never be erased." },
      { heading: "ROM = Read-Only Memory", text: "ROM stands for Read-Only Memory. 'Read-only' means the computer can read from it, but it can't change what's written there (or it's very hard to change). The instructions for starting your computer live in ROM.", diagramId: "rom-vs-ram" },
      { heading: "What happens when you press the power button?", text: "The CPU wakes up and immediately reads from ROM. ROM tells it: check that the keyboard, screen, and storage all work. Then find the operating system on the hard drive and load it into RAM. This whole process is called booting.", diagramId: "bios-boot" },
      { heading: "In your daily life…", text: "Your phone, smart TV, and microwave all have ROM — they remember how to start up without needing a 'Windows disc'. The startup instructions are permanently stored. Modern ROM chips (called UEFI/BIOS) can be updated but won't forget unless you specifically rewrite them." },
    ],
    "8-10": [
      { heading: "Some data must survive a power cut", text: "RAM is fast and flexible but loses all data when powered off. But a computer needs to know how to start! This startup knowledge — the firmware — must be stored permanently. That's what ROM is for: persistent, non-volatile storage for critical instructions." },
      { heading: "ROM vs RAM — the key differences", text: "RAM: fast, temporary, loses data at power-off, changed constantly. ROM: slower, permanent (or hard to change), survives power-off, only read during operation. Modern computers use a hybrid: flash-based ROM (like a USB drive) that can be updated but doesn't forget.", diagramId: "rom-vs-ram" },
      { heading: "The boot sequence", text: "Power on → CPU reads BIOS/UEFI from ROM chip → POST (Power-On Self Test) checks all hardware → BIOS finds bootable drive → loads bootloader → bootloader loads OS into RAM → OS takes over. This whole sequence takes ~3–5 seconds on a modern system.", diagramId: "bios-boot" },
      { heading: "BIOS to UEFI — the upgrade", text: "The old BIOS (from 1975!) was limited to text-only menus and 1 MB of code. UEFI (Unified Extensible Firmware Interface) replaced it: graphical interface, mouse support, can boot drives larger than 2 TB, Secure Boot, and network capabilities. All modern PCs use UEFI." },
    ],
    "11-14": [
      { heading: "Non-volatile memory hierarchy", text: "ROM is non-volatile: it retains data without power. Modern firmware uses EEPROM (Electrically Erasable Programmable ROM) or NOR Flash — the same technology as SSDs but slower and more reliable. NOR flash supports random byte access (unlike NAND flash's block access) — perfect for code execution." },
      { heading: "ROM vs RAM in the memory map", text: "In the x86 memory map, the ROM is memory-mapped to a fixed address (0xFFFFFFF0 — the 'reset vector'). When the CPU first starts, the instruction pointer is set to this address. The first instruction the CPU ever executes is in ROM.", diagramId: "rom-vs-ram" },
      { heading: "UEFI boot process in detail", text: "Phase 1: SEC (Security) — initialises CPU caches as RAM. Phase 2: PEI (Pre-EFI Initialization) — initialises DRAM. Phase 3: DXE (Driver Execution Environment) — loads platform drivers. Phase 4: BDS (Boot Device Selection) — finds bootable devices. Phase 5: BL (Boot Loader) — transfers to OS.", diagramId: "bios-boot" },
      { heading: "Secure Boot and firmware attacks", text: "UEFI Secure Boot verifies the bootloader signature against keys stored in the firmware. This prevents bootkits (malware that loads before the OS). Firmware vulnerabilities are extremely dangerous — malware in firmware survives OS reinstalls. LoJax (2018) was the first real-world UEFI rootkit." },
    ],
    "15-18": [
      { heading: "SPI flash — how UEFI is stored", text: "UEFI firmware lives on a 16–32 MB SPI (Serial Peripheral Interface) NOR flash chip on the motherboard. SPI is a simple 4-wire protocol (MOSI, MISO, SCK, CS). The CPU's PCH contains a SPI controller. During POST, firmware is copied to CPU's L3 cache (called 'shadow RAM') for faster execution." },
      { heading: "ACPI — hardware description to the OS", text: "UEFI builds ACPI (Advanced Configuration and Power Interface) tables in memory and passes them to the OS. ACPI tables describe the hardware topology in a machine-readable format: how many CPUs, power management states (C-states, P-states), battery status, thermal zones. The OS reads these instead of probing hardware directly.", diagramId: "bios-boot" },
      { heading: "TPM and measured boot", text: "TPM 2.0 (now required for Windows 11) is a secure co-processor that stores cryptographic keys and attestation measurements. UEFI measures each boot component's hash into TPM PCR (Platform Configuration Register) banks. If any component changes (malware), the measurement changes — remote attestation can detect this.", diagramId: "rom-vs-ram" },
      { heading: "Coreboot and open-source firmware", text: "Coreboot is an open-source UEFI replacement used in Chromebooks, some ThinkPads, and all RISC-V systems. It initialises hardware with a minimal payload, then launches a small firmware payload (SeaBIOS, TianoCore, or GRUB). Transparency and auditability make it more secure than proprietary UEFI blobs." },
    ],
  },
  story: {
    "5-7": "ROM is like a book that you can only read — you cannot write in it or change it! Your computer's ROM has very special instructions written inside it that tell the computer how to wake up when you press the power button. These instructions never change and never disappear, even when you turn the computer off.",
    "8-10": "ROM stands for Read-Only Memory. Unlike RAM which forgets everything when you turn off the computer, ROM keeps its data forever — even without power. It stores the BIOS or UEFI firmware — the startup instructions that run the moment you press the power button. It checks all the hardware is working before handing over to your operating system.",
    "11-14": "ROM is non-volatile memory that retains data without power. Modern computers use EEPROM (Electrically Erasable Programmable ROM) for UEFI firmware — technically rewritable with special software but not during normal operation. The UEFI/BIOS firmware performs POST (Power-On Self Test), initialises hardware, and boots the OS bootloader. Flash storage in USB drives and SSDs is also a form of ROM-derived technology.",
  },
  analogy: {
    "5-7": "ROM is like a printed book — you can read it but you can't change what's written inside.",
    "8-10": "Like the instructions printed on a machine — they're always there, always the same, telling it how to start.",
    "11-14": "Non-volatile EEPROM storing immutable firmware — persistent across power cycles, readable at all times.",
  },
  photo: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&fit=crop",
  photoAlt: "BIOS ROM chip soldered on a motherboard storing firmware",
  keyFacts: [
    { emoji: "💾", label: "Full Name", value: "Read-Only Memory", detail: "Classic ROM was truly read-only — written once at the factory, never changed." },
    { emoji: "⚡", label: "Non-Volatile", value: "Data survives power-off", detail: "Unlike RAM, ROM keeps its data forever without power — BIOS/UEFI is stored here." },
    { emoji: "🏛️", label: "Modern Form", value: "Flash ROM (rewriteable)", detail: "Modern 'ROM' is actually Flash memory (NOR Flash) that can be updated via firmware flashing." },
    { emoji: "🖥️", label: "BIOS/UEFI", value: "Stored in SPI NOR Flash (8–32 MB)", detail: "The firmware chip on your motherboard holds the UEFI. It runs first at power-on." },
    { emoji: "🎮", label: "Game Cartridges", value: "NES/SNES games stored on ROM chips", detail: "Classic game cartridges used ROM chips. That's why old games couldn't save without a battery." },
    { emoji: "📏", label: "Size", value: "UEFI chip: 8–32 MB", detail: "Modern UEFI firmware is 16–32 MB. Original PC BIOS was just 64 KB." },
  ],
  funFact: "The BIOS in early computers was stored on actual ROM chips that couldn't be changed at all. Today's UEFI firmware is stored on flash memory — still called 'ROM' but can be updated via firmware upgrades!",
  dos: ["Update your computer's BIOS/UEFI only from the manufacturer's official website", "Don't interrupt a BIOS update — it can brick your computer"],
  donts: ["Never flash BIOS firmware during a power cut", "Don't update BIOS unless there's a specific reason to"],
  quiz: [
    { for: "5-7", question: "What does ROM do?", choices: ["Stores special startup instructions that never disappear", "Paints pictures on screen", "Connects to the internet"], correct: 0, explanation: "ROM holds the permanent instructions your computer needs to start up!" },
    { for: "8-10", question: "What is the difference between ROM and RAM?", choices: ["ROM keeps data forever, RAM forgets when power is off", "ROM is faster than RAM", "RAM is bigger than ROM"], correct: 0, explanation: "ROM = Read Only, permanent. RAM = temporary working memory, wiped when power off." },
    { for: "11-14", question: "What does POST stand for?", choices: ["Power-On Self Test", "Permanent Operating System Transfer", "Processor Output System Test"], correct: 0, explanation: "POST runs from ROM/UEFI at startup — it checks RAM, CPU, storage and other hardware before booting the OS." },
  ],
};
export default lesson;
