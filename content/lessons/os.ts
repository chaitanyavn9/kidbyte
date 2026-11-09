import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "os",
  title: "What is an Operating System?",
  emoji: "🖱️",
  category: "digital-world",

  /* ── Structured narrative (overrides plain story in NarrativeViewer) ── */
  narrative: {
    "5-7": [
      {
        heading: "Imagine trying to talk to a dog",
        text: `Picture this: you want your dog to bring you a ball. But your dog does not speak English. And you do not speak "dog language." So how do you communicate?

You figure out a **common signal** — you point at the ball, say "fetch!", and over time the dog learns what you mean. That pointing and training is the **bridge** between you and the dog.

Now imagine the same problem — but instead of a dog, you want to talk to a **computer**.`,
      },
      {
        heading: "Computers only understand 0s and 1s",
        text: `Your computer's hardware — the processor, the memory, the screen, the keyboard — does not understand English, Telugu, or any human language. It understands only **electrical signals**: on (1) or off (0).

If you tried to talk directly to your computer's hardware, it would be like trying to tell a calculator what to cook for dinner. There is no connection. No common language.

**Someone has to act as the translator.** That translator is called the **Operating System** — or OS for short.`,
        diagramId: "os-communication-barrier",
      },
      {
        heading: "The OS is your computer's translator",
        text: `The Operating System is a special program that **always runs first** when you turn on your computer. Before your games, before your browser, before anything else — the OS wakes up and takes control.

Its job is simple but incredibly important: **be the bridge between you and the hardware**.

When you click "Open Chrome", you are speaking in human language. The OS hears that, translates it into instructions the hardware understands, the hardware does the work, and then the OS shows you the result — Chrome opens!

Without the OS, pressing any button would do absolutely nothing. The screen would stay blank.`,
        diagramId: "os-bridge",
      },
      {
        heading: "Shell (outer ring) and Kernel (inner ring)",
        text: `The OS has **two rings** — just like two circles, one inside the other.

The **inner ring is the Kernel** — the most powerful part. It talks directly to the hardware: the screen, the memory, the processor. Nothing happens in the computer without the Kernel's permission.

The **outer ring is the Shell** — the part you can see and touch: the desktop, the icons, the buttons. When you click something, the Shell hears it and passes the message inward to the Kernel.

When your computer is doing just **one thing at a time** (single-tasking), there is only one Shell. When it is doing **many things at once** (multi-tasking), the Shell is split into many slices — each slice handles one app — but they all share the same Kernel in the middle.`,
        diagramId: "os-kernel-shell-rings",
      },
      {
        heading: "What the OS does for you every day",
        text: `You use the OS dozens of times per second without knowing it. Here are some examples of what happens behind the scenes:

**When you tap the keyboard** — the OS reads the electrical signal from the keyboard key, figures out which key it is, and shows the letter on your screen.

**When you open a game** — the OS finds the game's files on the storage, loads them into memory (RAM), gives the game access to the screen and sound, and starts it running.

**When two apps are open at the same time** — the OS makes sure they share the CPU fairly, so both feel like they are running at the same time, even though the CPU can only do one thing at a time.

The most famous operating systems are **Windows** (for PCs), **macOS** (for Apple computers), **Android** (for most phones), and **iOS** (for iPhones).`,
      },
    ],

    "8-10": [
      {
        heading: "Imagine you meet someone who speaks only Japanese",
        text: `You speak English. They speak only Japanese. You want to say "Can you please open the door?" They want to reply "Yes, of course."

Neither of you can understand the other. What do you do?

You find a **translator** — someone who speaks both languages. You say the sentence in English, the translator converts it to Japanese, the other person hears it, does the action, responds in Japanese, and the translator converts the reply back to you.

That translator is the **bridge** that makes communication possible.

Now apply this exact same idea to your computer.`,
      },
      {
        heading: "The gap between you and your computer's hardware",
        text: `Your computer's hardware — the **CPU** (processor), **RAM** (memory), **SSD** (storage), **GPU** (graphics card), screen, keyboard — only understands machine language: electrical signals, 0s and 1s, specific binary codes.

You speak English (or Telugu, or Hindi). You understand words like "open", "save", "print", "play".

There is a **complete language gap** between you and the hardware. If you tried to give instructions directly to the CPU, you would have to write something like **10110100 01100101 11001101 00100001** — just to open a file. That is impossible for most humans.

**Something must bridge this gap.** That something is the **Operating System**.`,
        diagramId: "os-communication-barrier",
      },
      {
        heading: "The OS is the translator between you and the hardware",
        text: `The **Operating System (OS)** is software that runs the moment you press the power button — before any app, before any game, before anything else. It runs continuously, every second you use your computer.

Think of it as the **head translator and manager** of your computer. Everything you do goes through it:

You say **"open Chrome"** → OS translates → **Hardware loads and runs Chrome** → Hardware says "done" → OS translates back → **You see Chrome on your screen**.

The OS handles: running programs, sharing the CPU's time between apps, managing memory, reading and writing files, controlling the keyboard and mouse, drawing things on the screen. It does all of this so that **you never have to think about hardware**.`,
        diagramId: "os-bridge",
      },
      {
        heading: "Shell and Kernel — the two rings of the OS",
        text: `The OS is built as **two concentric rings** — imagine two ovals, one inside the other.

**The Kernel is the inner ring.** It has full power over the hardware — CPU, RAM, disk, screen. It is always running, invisible to you. No program can touch hardware except through the Kernel.

**The Shell is the outer ring.** It is what you interact with: the desktop, file explorer, Start menu, app icons. It listens to your clicks and commands, then passes them inward to the Kernel.

**Single-tasking OS**: only one Shell exists. You run one thing at a time. Old computers (DOS) worked this way.

**Multi-tasking OS** (Windows, macOS, Android): the Shell ring is divided into many slices. Each slice is one running app — Chrome, music player, game, file manager — all at once. But they all share the same single Kernel in the centre. The Kernel schedules each slice's turn on the CPU so fast that everything feels simultaneous.`,
        diagramId: "os-kernel-shell-rings",
      },
      {
        heading: "In your daily life — every single action goes through this path",
        text: `Here are real examples of things you do every day, and what actually happens inside:

**Pressing a key on your keyboard** → Keyboard sends electrical signal → OS Kernel detects it → Shell shows the character on screen. All of this in under 1 millisecond.

**Opening a photo** → You double-click → Shell receives the click → Kernel finds the file on SSD, loads it into RAM → Kernel instructs GPU to display it → Shell updates the screen → You see the photo.

**Playing a YouTube video** → Browser (Chrome) asks the OS to play audio → Kernel sends audio data to the sound card → Sound card plays it through your speakers.

Every click, every keystroke, every file you open, every website you visit — the OS is working invisibly to make it happen. It is the foundation everything runs on.`,
      },
    ],

    "11-14": [
      {
        heading: "Start with this: why can't you talk to hardware directly?",
        text: `Imagine you have a CPU in front of you. You want to tell it "run this program." But the CPU is a physical chip — billions of transistors switching on and off at billions of times per second. It has no concept of "run this program." It only understands raw binary instructions: a 32-bit or 64-bit number that encodes an operation and operands.

Humans cannot work with raw binary. And hardware has no concept of files, windows, mouse clicks, or apps. There is a **fundamental abstraction gap** between how humans think and how hardware operates.

Every operating system exists to bridge exactly this gap.`,
        diagramId: "os-communication-barrier",
      },
      {
        heading: "The OS as the bridge: what it actually does",
        text: `The **Operating System** is system software that provides a **hardware abstraction layer** — it hides the complexity of the hardware and exposes a clean, human-usable interface.

It has three responsibilities:

**Resource management** — the CPU, RAM, and storage are shared between dozens of running programs. The OS decides who gets what, and when. Without this, every app would fight each other for the same hardware.

**Hardware abstraction** — instead of writing different code for every brand of hard disk, keyboard, or network card, programs talk to the OS. The OS handles the hardware-specific details through **device drivers**.

**Security and isolation** — the OS ensures one program cannot read or corrupt another program's memory. It enforces access control so only authorised programs and users can do privileged operations.`,
        diagramId: "os-bridge",
      },
      {
        heading: "Shell and Kernel — concentric rings, single vs multi-tasking",
        text: `The OS is modelled as **two concentric rings** — an inner privileged ring and an outer user ring.

**The Kernel is the inner ring** — running in CPU ring 0 (privileged mode). It has unrestricted access to all hardware: process scheduler, virtual memory manager, device drivers, file system. No user program can reach hardware except by passing a request through the Kernel via a system call.

**The Shell is the outer ring** — running in CPU ring 3 (user mode). It is any user-space interface: bash/PowerShell terminal, Windows Explorer, macOS Finder. It interprets your commands and issues system calls inward to the Kernel.

**Single-tasking OS**: one Shell process, one task at a time. Classic DOS worked this way — you ran one program, it finished, then you ran another.

**Multi-tasking OS** (Windows, macOS, Linux, Android): the outer Shell ring is divided into N slices — one per running process. Chrome, Spotify, VS Code, your terminal — each is a Shell slice. They all share the single Kernel at the centre. The Kernel's process scheduler gives each slice a CPU time quantum, switching so fast (every few milliseconds) that all tasks feel simultaneous.`,
        diagramId: "os-kernel-shell-rings",
      },
      {
        heading: "How the OS boots — from power-on to your desktop",
        text: `Before the OS can do anything, it has to load itself. This process is called **booting**.

Here is what happens every single time you press the power button:

**Step 1 — BIOS/UEFI** wakes up. This is firmware stored in a ROM chip on the motherboard — it runs before the OS exists.

**Step 2 — POST** (Power-On Self Test): BIOS checks that all hardware is working — CPU, RAM, keyboard, storage. If anything fails, you see a beep code or error.

**Step 3 — CMOS** is read. CMOS is a tiny battery-backed memory chip that stores boot settings: which drive to boot from, the system date/time, hardware configuration. The BIOS reads the boot order from CMOS.

**Step 4 — Bootloader** is loaded from the boot drive. The bootloader (GRUB on Linux, Windows Boot Manager on Windows) is a small program whose job is to find and load the OS Kernel.

**Step 5 — Kernel loads** into RAM. The bootloader copies the Kernel from storage into memory and hands control to it.

**Step 6 — Kernel initialises**: sets up memory management, process scheduler, loads device drivers, mounts the root file system.

**Step 7 — Shell starts**: the Kernel starts the first user process (systemd on Linux, explorer.exe on Windows), which eventually shows you the login screen or desktop.`,
        diagramId: "os-boot-sequence",
      },
      {
        heading: "In your daily life: every action is a system call",
        text: `When you use your computer, every meaningful action is ultimately a **system call** — your program asking the OS Kernel to do something with hardware.

**Opening a file**: your app calls open() → Kernel finds the file in the file system → locates it on the SSD → reads the data into RAM → returns a file descriptor to your app.

**Watching a video**: the video player calls read() repeatedly to load video frames → passes audio data via write() to the audio driver → the Kernel sends it to the sound hardware.

**Visiting a website**: Chrome calls socket() and connect() → Kernel uses the network driver → data travels over your WiFi card → HTML arrives, Chrome calls more read() calls → the display driver renders the page.

None of these programs touch hardware directly. Every single request flows through the Kernel. This is what makes the system safe, stable, and manageable — one trusted layer controlling everything.`,
      },
    ],

    "15-18": [
      {
        heading: "Kernel (inner ring) and Shell (outer ring) — x86 privilege model",
        text: `The concentric-ring model maps directly onto the **x86-64 CPU privilege rings**.

**Kernel — ring 0 (inner)**: the most privileged execution mode. The kernel can execute any instruction, access any physical memory address, program the MMU, reprogram interrupt controllers, and issue I/O port commands. It is the single trusted layer all hardware access flows through.

**User processes — ring 3 (outer)**: reduced privilege. Privileged instructions trap; the MMU blocks access to kernel pages. Each user process is one slice of the outer ring. The scheduler switches the CPU between slices every few milliseconds.

**Single-tasking**: one process occupies the entire outer ring. The kernel is idle between that process's system calls.

**Multi-tasking**: N processes share the outer ring simultaneously. The kernel's CFS (Completely Fair Scheduler on Linux) assigns each a vruntime-weighted time slice. The kernel context-switches by saving register state to the process's kernel stack, loading the next process's state, and updating the CR3 register to switch page tables — total switch time ~1–5 microseconds.

Each slice can call into the kernel via SYSCALL (a hardware trap to ring 0), which switches privilege, executes the kernel function, then SYSRET back to ring 3.`,
        diagramId: "os-kernel-shell-rings",
      },
      {
        heading: "The fundamental abstraction problem",
        text: `Hardware is entirely passive. A CPU is a silicon die with billions of transistors — it executes one instruction per clock cycle from an instruction stream in memory. It has no concept of "open a file", "display a window", or "run Chrome". It executes machine-code instructions: opcodes like MOV, ADD, JMP, SYSCALL.

Human software, by contrast, operates at the level of files, processes, sockets, displays, and events. The gap between these two worlds is enormous.

An **Operating System** is the software layer that closes this gap. It presents hardware as a set of clean abstractions — files instead of raw disk sectors, processes instead of raw CPU time, virtual addresses instead of physical RAM frames, sockets instead of raw network frames — and enforces the rules under which software accesses them.`,
        diagramId: "os-communication-barrier",
      },
      {
        heading: "Privilege rings and the hardware abstraction layer",
        text: `The key mechanism that makes the OS work is the **CPU privilege model**. Modern x86-64 CPUs implement four privilege rings (0–3). The Kernel runs exclusively in **ring 0** — it can execute any instruction, write to any memory address, reprogram hardware registers, and control the MMU. User applications run in **ring 3** — most privileged instructions are blocked, and the MMU prevents access to kernel memory.

When a user-space program needs a hardware service — read from disk, allocate memory, send a network packet — it executes a **SYSCALL instruction**. This triggers a hardware trap that atomically switches the CPU to ring 0, saves the user-space register state, and jumps to a fixed kernel entry point. The Kernel validates the request, performs the operation, writes the result into the user-space buffer, and executes SYSRET to restore the user state in ring 3.

This boundary is the entire foundation of OS security. It is what prevents malware from directly accessing your camera or RAM.`,
        diagramId: "os-bridge",
      },
      {
        heading: "Shell → Kernel → Hardware: the full signal path",
        text: `The OS has a layered architecture. At the top is the **Shell** (user-space): bash, Windows Explorer, Android launcher — whatever accepts human input and issues system calls. Below that is the **Kernel** (ring 0): the monolithic or hybrid core that processes system calls and drives hardware. At the bottom are **device drivers**: kernel modules that communicate directly with hardware registers via memory-mapped I/O or port I/O.

The signal path for every user action follows this chain:

**User action** (keypress, click, command) → **Shell** (interprets, issues system call) → **Kernel** (validates, routes to driver) → **Device driver** (writes to hardware registers) → **Hardware** (executes, generates interrupt) → **Interrupt handler in Kernel** (processes result, copies to user buffer) → **System call returns** → **Shell** (renders result) → **User sees it**.

This round-trip happens in microseconds to milliseconds. For high-frequency operations (network I/O, GPU rendering), the kernel uses techniques like DMA (Direct Memory Access), zero-copy buffers, and io_uring to avoid per-syscall overhead.`,
        diagramId: "os-shell-kernel-flow",
      },
      {
        heading: "Boot sequence: firmware to kernel to userspace",
        text: `The boot sequence is a carefully ordered chain of trust.

**Power on** → CPU's reset vector (physical address 0xFFFFFFF0 on x86) → jumps to BIOS/UEFI ROM.

**UEFI** (modern) or **BIOS** (legacy) performs POST, initialises chipset, enumerates PCIe/USB devices, reads NVRAM (UEFI) or CMOS (legacy BIOS) for boot configuration.

**CMOS**: 256-byte battery-backed SRAM storing legacy BIOS settings, RTC value, boot device order. Modern UEFI systems use NVRAM variables instead (NV-RAM inside the UEFI chip), storing EFI boot entries, Secure Boot keys (db/dbx/PK/KEK), and platform config. CR2032 battery maintains RTC and legacy CMOS; UEFI NVRAM uses SPI flash (doesn't need a battery).

**Bootloader** (GRUB2, Windows Boot Manager) is loaded from the EFI System Partition (ESP). It decompresses the kernel image (vmlinuz on Linux) into RAM, optionally loads an initial RAM disk (initramfs), and jumps to the kernel entry point with a machine info struct (EFI handoff or Multiboot headers).

**Kernel initialisation**: memory zones, buddy allocator, slab allocator, scheduler, ACPI tables, PCI enumeration, device tree, driver probe → mount initramfs → pivot_root to real filesystem → execve /sbin/init (PID 1).

**Systemd** (PID 1) starts units in parallel: networking, display manager, session daemons → login screen.`,
        diagramId: "os-boot-sequence",
      },
      {
        heading: "Virtual memory, paging, and process isolation",
        text: `The kernel's virtual memory subsystem is the mechanism behind process isolation, demand paging, and copy-on-write. Every process has its own **virtual address space** (128 TB on x86-64 Linux for user space), mapped to physical RAM frames via a 4-level page table (PGD → PUD → PMD → PTE). The MMU walks this table on every memory access; the TLB caches recent translations.

**Page fault**: when a process accesses an unmapped virtual page, the CPU raises a page fault exception, trapping into the Kernel. The Kernel checks the VMA (Virtual Memory Area) — if it is a valid mapping, it allocates a physical frame, zeros or loads the content (from swap or file), and updates the PTE. If not valid, it sends SIGSEGV.

**Copy-on-write (CoW)**: after fork(), parent and child share the same physical pages, marked read-only. The first write triggers a page fault; the Kernel copies the page to a new frame, remaps it as read-write for that process only. This makes fork() nearly instantaneous.

**Swap**: when RAM is exhausted, the kernel's page eviction algorithm (LRU-based in Linux) selects cold pages, writes them to the swap partition/file on SSD, and frees the physical frames. Future access triggers a page fault to reload from swap.

This entire system is what lets you run 50 browser tabs, a game, and an IDE simultaneously on one physical machine, with each process completely isolated from the others.`,
      },
    ],
  },

  /* ── Plain story fallback (for older StoryViewer path) ── */
  story: {
    "5-7": `An Operating System is like the principal of a school — it makes sure every class (program) gets a room (memory), every teacher gets students, and nothing fights with anything else.

When you press the power button, the OS wakes up first — before games, before apps, before everything. It controls the CPU, the screen, the keyboard, the memory. It is the manager of your entire computer.

Without an OS, pressing any key would do nothing at all.`,
    "8-10": `The Operating System (OS) is software that bridges the gap between you and your computer's hardware. Hardware only speaks machine code (0s and 1s). You speak human language. The OS is the translator.

Every click, every file you open, every app you launch — it all goes through the OS. The OS has two parts: the Shell (what you see and interact with) and the Kernel (the engine that talks to hardware directly).`,
    "11-14": `The OS is a hardware abstraction layer with two concentric rings: Kernel (ring 0, privileged, touches hardware) and Shell (ring 3, user mode, talks to you). System calls cross the boundary. The kernel manages process scheduling, virtual memory (page tables), device drivers, and the filesystem. Booting: BIOS/UEFI → POST → CMOS → Bootloader → Kernel → Shell.`,
    "15-18": `The OS kernel runs in CPU ring 0 with unrestricted hardware access. User processes run in ring 3; SYSCALL triggers a hardware trap to ring 0. The kernel owns: CFS scheduler, VMM (4-level page tables, demand paging, CoW, swap), VFS, device drivers, IPC. Boot chain: UEFI/BIOS → POST → NVRAM/CMOS boot order → EFI bootloader → kernel decompression → initramfs → PID 1 (systemd).`,
  },

  analogy: {
    "5-7": "The OS is like a school principal — it manages every program the same way a principal manages every classroom.",
    "8-10": "Think of the OS as a head translator at a conference: you speak, it translates for the hardware; hardware replies, it translates back for you.",
    "11-14": "The OS is two concentric rings: Kernel (inner, privileged, hardware access) and Shell (outer, user-visible). System calls are the controlled door between them.",
    "15-18": "The kernel is a city's power grid and water system — privileged infrastructure all buildings (apps) depend on. System calls are permit applications: you can't rewire the city grid yourself, you file a request with the utility company (kernel) through the official process (ring 0 trap).",
  },

  photo: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=700&fit=crop",
  photoAlt: "Terminal window showing Linux kernel boot messages and OS prompt",
  keyFacts: [
    { emoji: "🔵", label: "Kernel (Inner Ring)", value: "Privileged mode — ring 0, controls all hardware", detail: "The kernel directly manages CPU, RAM, storage, and devices. No user program can bypass it — they must ask via system calls." },
    { emoji: "🟢", label: "Shell (Outer Ring)", value: "User interface — ring 3, talks to the kernel", detail: "The shell is what you interact with: bash terminal, Windows Explorer, Android launcher. Many shells share one kernel = multi-tasking." },
    { emoji: "🔄", label: "Boot Sequence", value: "BIOS → POST → Bootloader → Kernel → Shell", detail: "8 ordered steps happen before you see the desktop — from BIOS ROM all the way to your first login shell." },
    { emoji: "🔋", label: "CMOS Chip", value: "Battery-backed memory storing BIOS/UEFI settings", detail: "Stores boot order, real-time clock, RAM speed. The CR2032 coin battery keeps it alive when the PC is off — 5 to 10 years." },
    { emoji: "📐", label: "Virtual Memory", value: "Each process gets its own 128 TB address space", detail: "The OS gives every program the illusion of private memory. Page tables map virtual addresses to real RAM. Page faults load pages from swap transparently." },
    { emoji: "⚙️", label: "System Call", value: "The bridge: user mode (ring 3) → kernel (ring 0)", detail: "When Chrome opens a file, it calls read() — a system call that crosses the ring boundary to the kernel, does the disk access, then returns to Chrome in ring 3." },
  ],
  funFact: "Linux — a free and open-source OS — powers over 90% of the world's web servers, 100% of the world's top 500 supercomputers, and the Android phones in most people's pockets!",
  dos: ["Keep your OS updated — updates fix security vulnerabilities", "Restart your computer occasionally — it clears RAM and refreshes the OS"],
  donts: ["Don't ignore OS update notifications — unpatched systems get hacked", "Don't run programs from unknown sources — the OS can't protect you from yourself"],
  quiz: [
    { for: "5-7", question: "What does the OS do when you turn the computer on?", choices: ["It wakes up first and manages all hardware", "It opens your favourite game", "It charges the battery"], correct: 0, explanation: "The OS is the first thing that runs — before any app. It controls the CPU, RAM, screen and every part of the computer!" },
    { for: "8-10", question: "Why can't apps talk directly to hardware?", choices: ["Because the OS must control all hardware access so no app crashes or corrupts another", "Because apps are too slow", "Because hardware costs too much"], correct: 0, explanation: "If apps talked to hardware directly, one bad app could destroy another's data or crash everything. The OS is the safe, trusted middleman." },
    { for: "11-14", question: "What is the difference between the Kernel and the Shell?", choices: ["Kernel is the privileged inner core managing hardware; Shell is the outer user interface", "Kernel is the user interface; Shell manages hardware", "They are the same thing"], correct: 0, explanation: "Think of concentric rings: Kernel at the centre (ring 0 — privileged, touches hardware), Shell at the outside (ring 3 — user mode). System calls let the Shell request Kernel services." },
    { for: "11-14", question: "What is the CMOS chip used for?", choices: ["Stores BIOS/UEFI settings like boot order and real-time clock — powered by a battery", "Processes graphics data", "Stores OS and application files permanently"], correct: 0, explanation: "CMOS is a tiny battery-backed chip on the motherboard that keeps boot settings and the clock alive when the PC is completely powered off." },
    { for: "15-18", question: "What is a page fault and when does it happen?", choices: ["When a process accesses a virtual address not mapped to RAM, triggering the kernel to load the page from swap", "When the OS crashes due to corrupted page tables", "An error in the CPU's cache"], correct: 0, explanation: "Page faults are normal and expected — they enable demand paging. The kernel loads the page transparently from swap or zero-fills a new frame." },
    { for: "15-18", question: "What happens to the CPU during a system call?", choices: ["Switches from ring 3 (user mode) to ring 0 (kernel mode) via a hardware trap, executes the kernel function, then returns to ring 3", "The app runs the system call in ring 3", "The CPU pauses completely while the kernel works"], correct: 0, explanation: "SYSCALL instruction triggers a hardware trap — CPU saves user state, switches to kernel stack in ring 0, executes handler, then SYSRET restores user state in ring 3." },
  ],
};
export default lesson;
