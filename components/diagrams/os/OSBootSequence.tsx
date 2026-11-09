"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    id: "power",
    num: 1,
    emoji: "🔴",
    title: "You Press the Power Button",
    subtitle: "Electrical signal wakes everything up",
    color: "#EF4444",
    bg: "#FEF2F2",
    analogy: "A whole city asleep. The moment the Mayor flips the master switch at the power plant, electricity flows into every street and building — in the right voltage for each.",
    what: "Pressing the button closes an electrical circuit. The Power Supply Unit (PSU) converts your wall's AC power (220V) into the DC voltages every chip needs: **12V** for drives and fans, **5V** for logic, **3.3V** for RAM and CPUs. Once voltages are stable, PSU sends a **Power Good** signal to the motherboard. Only then does the CPU start.",
    why: "Without stable regulated power, chips behave randomly or burn out. The PSU ensures every component gets exactly the right voltage before anything starts.",
    userImpact: "If a PC refuses to turn on or randomly shuts off — the PSU is usually the culprit. It's the gatekeeper before anything else can happen.",
  },
  {
    id: "bios",
    num: 2,
    emoji: "🏛️",
    title: "CPU Wakes at the Reset Vector → BIOS/UEFI",
    subtitle: "The first code the CPU ever runs",
    color: "#7C3AED",
    bg: "#F5F3FF",
    analogy: "Every new day, the building watchman is the FIRST person to enter — before the manager, before staff. They hold the master key and check the building before unlocking it for everyone. BIOS is that watchman.",
    what: "The CPU is hardwired to start at address **0xFFFFFFF0** — the reset vector. That address points straight to the **BIOS/UEFI ROM chip** soldered on the motherboard. UEFI is a modern mini-OS permanently stored in flash memory — it runs before any OS exists. When you press F2/Delete on startup, you're inside the UEFI.",
    why: "The CPU needs SOMETHING to run the instant it turns on. It can't load from disk yet — there's no disk driver. The BIOS ROM is always there, always ready.",
    userImpact: "UEFI is why modern PCs boot in seconds. When you enter 'Setup' by pressing F2 or Delete at startup, you're looking at the UEFI interface.",
  },
  {
    id: "post",
    num: 3,
    emoji: "🔍",
    title: "POST — Power-On Self Test",
    subtitle: "The computer checks all its own hardware",
    color: "#F59E0B",
    bg: "#FFFBEB",
    analogy: "Before takeoff, a pilot runs a 50-point checklist — engines, fuel, wings, instruments. They don't skip it because one failure could be catastrophic. POST is that pre-flight checklist, run every single boot.",
    what: "BIOS/UEFI runs POST — it tests every piece of hardware in sequence: **CPU**, **RAM** (writes test patterns and reads them back), **GPU**, **keyboard controller**, **storage controller**. If a critical part fails, POST halts. You hear **beep codes** — each pattern means a specific failed component. If everything passes, POST reports 'All clear' and continues.",
    why: "Starting with broken hardware leads to unpredictable crashes or data corruption. POST catches failures before the OS loads, giving you a clear error instead of a mysterious problem.",
    userImpact: "3 short beeps on startup = RAM failed. 1 long + 2 short beeps = GPU problem. These codes help technicians diagnose hardware without needing an OS.",
  },
  {
    id: "cmos",
    num: 4,
    emoji: "🔋",
    title: "CMOS / NVRAM — Reading Saved Settings",
    subtitle: "The computer reads its saved preferences",
    color: "#0891B2",
    bg: "#ECFEFF",
    analogy: "Every office has a noticeboard where the owner leaves instructions: 'Start with the morning shift, open the east gate first.' CMOS is that noticeboard — it remembers your preferences even when power is off.",
    what: "CMOS is a tiny **256-byte** battery-backed SRAM chip on the motherboard. It stores: **boot device order** (SSD first? USB first?), the **real-time clock** (current date/time), and hardware settings like RAM speed. A tiny **CR2032 coin battery** (~₹50) keeps this chip alive even when the PC is unplugged for years.",
    why: "Without CMOS, the computer would forget which drive to boot from every time it turned off. It would also lose track of the date and time.",
    userImpact: "If you've seen 'CMOS Battery Failure' or the date reset to 2004 on startup — that's this battery dying. Replacing the CR2032 fixes it instantly.",
  },
  {
    id: "bootloader",
    num: 5,
    emoji: "🗝️",
    title: "Bootloader Found and Executed",
    subtitle: "The tiny program that starts the OS engine",
    color: "#059669",
    bg: "#F0FDF4",
    analogy: "Starting a car doesn't happen in one step — you turn the key, the starter motor spins, the engine catches, then the engine runs itself. The bootloader is the starter motor: small, one job, get the real engine running.",
    what: "BIOS/UEFI reads the boot order from CMOS, checks the first device. On modern UEFI systems it looks for the **EFI System Partition** (ESP) — a small FAT32 partition containing a `.efi` file. On Windows that's `bootmgfw.efi`. On Linux that's **GRUB**. The bootloader: finds the kernel file, decompresses it (kernels are stored compressed), loads it into RAM, and jumps to the kernel's entry point.",
    why: "The kernel is too large and complex to load directly. The bootloader is a small, simple program that knows just enough about the filesystem to find and load the kernel.",
    userImpact: "GRUB is the boot menu showing 'Ubuntu' and 'Windows' options on Linux. When a Windows update corrupts the bootloader, that's why PCs get stuck in a boot loop.",
  },
  {
    id: "kernel",
    num: 6,
    emoji: "🧠",
    title: "Kernel Loads into RAM",
    subtitle: "The brain of the OS takes control",
    color: "#E11D48",
    bg: "#FFF1F2",
    analogy: "Before a new city manager takes office, they must hire all department heads, set up the communication network, establish city rules, and register every citizen. The kernel does exactly this — establishing all foundations before anyone can use the system.",
    what: "Once the bootloader hands control to the kernel, it runs a massive init sequence: sets up **virtual memory** (page tables so every process gets private address space), detects all hardware and loads **device drivers**, mounts the **initial RAM disk** (initramfs — a tiny temporary filesystem with essential tools), mounts the real root filesystem from SSD, then starts the first user-space process: **systemd** (Linux) or **smss.exe** (Windows).",
    why: "The kernel must establish all rules BEFORE any program can run. Without page tables, two programs could overwrite each other's memory. Without drivers, nothing can communicate with hardware.",
    userImpact: "Linux startup messages (dmesg) show every kernel init step. 'Failed to start X service' on boot means a driver or service the kernel tried to load encountered an error.",
  },
  {
    id: "init",
    num: 7,
    emoji: "⚙️",
    title: "Init System Starts All Services",
    subtitle: "Every department opens for business",
    color: "#2563EB",
    bg: "#EFF6FF",
    analogy: "A hospital doesn't just open its doors. Before patients arrive: cleaning crew cleans, lab sets up, pharmacy stocks, nurses check supplies, reception opens. All in parallel, in a specific order. systemd is the hospital administrator who coordinates all of this.",
    what: "**systemd** (Linux) or Windows Session Manager starts all services in dependency order, in parallel where possible. This includes: **network manager** (gets WiFi/ethernet working), **audio server** (PipeWire/PulseAudio), **display server** (Wayland/X11 on Linux, DWM on Windows), **login service**, and hundreds of background daemons. Each service has a dependency chain — network can't start before the driver, browser can't start before the display server.",
    why: "Services in the right order prevent failures. Starting the display server before the GPU driver is loaded would crash. Parallelising independent services reduces boot time dramatically — modern Linux boots in under 5 seconds this way.",
    userImpact: "On Linux, 'systemctl status <service>' shows any failed service. On Windows, Event Viewer shows boot-time failures. When Windows boots slowly, it's usually one slow service in this phase.",
  },
  {
    id: "desktop",
    num: 8,
    emoji: "🖥️",
    title: "Login Screen → Desktop Appears",
    subtitle: "The system is ready for you",
    color: "#7C3AED",
    bg: "#F5F3FF",
    analogy: "The hospital is now fully open. The receptionist is at the desk, every department is staffed, every machine is running. The first patient (you) can now walk in and be served.",
    what: "The **display manager** (GDM on Linux, winlogon.exe on Windows) renders the login screen. After you authenticate, it starts your user session: loads your user profile, sets environment variables, starts the **desktop environment** (GNOME, KDE, Windows Shell/explorer.exe), restores previous session state, and starts startup programs. The desktop is now fully rendered and responding.",
    why: "The login step provides security — it enforces that only authorised users can access the desktop and their files. Session setup loads your personal preferences so your desktop looks exactly how you configured it.",
    userImpact: "From power button to desktop: NVMe SSD + UEFI = **8–15 seconds**. Spinning HDD + legacy BIOS = **60–90 seconds**. The difference is almost entirely in steps 5 and 6 — finding and loading the kernel.",
  },
];

/* ── Full dedicated diagram for each step ── */
function StepDiagram({ step }: { step: typeof STEPS[0] }) {

  if (step.id === "power") return (
    <svg viewBox="0 0 480 200" width="100%" className="rounded-xl overflow-visible">
      {/* Background */}
      <rect width="480" height="200" fill="#F9FAFB" rx="12" />

      {/* Wall socket */}
      <rect x="14" y="70" width="60" height="80" rx="8" fill="#374151" />
      <rect x="22" y="82" width="10" height="20" rx="3" fill="#9CA3AF" />
      <rect x="40" y="82" width="10" height="20" rx="3" fill="#9CA3AF" />
      <rect x="22" y="112" width="28" height="14" rx="3" fill="#6B7280" />
      <text x="44" y="166" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="700">Wall</text>
      <text x="44" y="178" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="700">220V AC</text>

      {/* Cable */}
      <motion.path d="M74 110 L110 110" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />

      {/* PSU box */}
      <rect x="110" y="55" width="90" height="110" rx="10" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <text x="155" y="90" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="900">PSU</text>
      <text x="155" y="104" textAnchor="middle" fill="#6B7280" fontSize="8">Power Supply</text>
      <text x="155" y="116" textAnchor="middle" fill="#6B7280" fontSize="8">Unit</text>
      {/* Fan icon */}
      <circle cx="155" cy="140" r="10" fill="none" stroke="#4B5563" strokeWidth="1.5" />
      <text x="155" y="144" textAnchor="middle" fill="#6B7280" fontSize="10">⚙</text>

      {/* Power Good signal line back to mobo */}
      <motion.path d="M200 95 L240 95" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 1.5 }} />
      <text x="220" y="88" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="700">Power Good ✓</text>

      {/* Output rails */}
      {[
        { y: 72, label: "12V", target: "Drive / Fan", col: "#F59E0B", tx: 420, ty: 68 },
        { y: 95, label: "5V", target: "Logic chips", col: "#EF4444", tx: 420, ty: 91 },
        { y: 118, label: "3.3V", target: "RAM / CPU", col: "#3B82F6", tx: 420, ty: 114 },
        { y: 141, label: "GND", target: "Ground", col: "#6B7280", tx: 420, ty: 137 },
      ].map((r, i) => (
        <g key={i}>
          <motion.path d={`M200 ${r.y} L${r.tx - 80} ${r.y}`} fill="none" stroke={r.col} strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }} />
          <rect x={r.tx - 80} y={r.y - 9} width="160" height="18" rx="5" fill={`${r.col}18`} stroke={`${r.col}60`} strokeWidth="1" />
          <text x={r.tx - 72} y={r.y + 4} fill={r.col} fontSize="9" fontWeight="900">{r.label}</text>
          <text x={r.tx - 54} y={r.y + 4} fill="#374151" fontSize="9">→ {r.target}</text>
        </g>
      ))}

      {/* Motherboard box */}
      <rect x="240" y="55" width="52" height="110" rx="6" fill="#1E3A5F" stroke="#2563EB" strokeWidth="1.5" />
      <text x="266" y="78" textAnchor="middle" fill="#93C5FD" fontSize="8" fontWeight="900">MOBO</text>
      <text x="266" y="90" textAnchor="middle" fill="#60A5FA" fontSize="7">receives</text>
      <text x="266" y="101" textAnchor="middle" fill="#60A5FA" fontSize="7">all rails</text>
      <motion.circle cx="266" cy="130" r="10" fill="#10B981" stroke="white" strokeWidth="1.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8, type: "spring" }} />
      <motion.text x="266" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="900"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>✓</motion.text>

      {/* Button */}
      <rect x="14" y="14" width="52" height="28" rx="8" fill="#EF4444" />
      <text x="40" y="32" textAnchor="middle" fill="white" fontSize="9" fontWeight="900">POWER</text>
      <motion.path d="M40 42 L40 70" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 2"
        animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
      <text x="40" y="52" textAnchor="middle" fill="#EF4444" fontSize="8">click!</text>
    </svg>
  );

  if (step.id === "bios") return (
    <svg viewBox="0 0 480 190" width="100%" className="rounded-xl">
      <rect width="480" height="190" fill="#F5F3FF" rx="12" />

      {/* x86 Memory map */}
      <text x="20" y="20" fill="#7C3AED" fontSize="11" fontWeight="900">x86-64 Physical Address Space</text>

      {/* Memory bar */}
      <rect x="20" y="30" width="140" height="145" rx="4" fill="#E9D5FF" stroke="#A78BFA" strokeWidth="1.5" />
      {/* Regions */}
      {[
        { y: 30, h: 18, fill: "#7C3AED", label: "0xFFFFFFF0", sub: "Reset Vector" },
        { y: 48, h: 32, fill: "#8B5CF6", label: "BIOS ROM", sub: "0xF0000-0xFFFFF" },
        { y: 80, h: 30, fill: "#A78BFA", label: "Upper RAM", sub: "0xC0000-0xEFFFF" },
        { y: 110, h: 40, fill: "#C4B5FD", label: "RAM (1MB+)", sub: "extended" },
        { y: 150, h: 25, fill: "#DDD6FE", label: "Low RAM", sub: "0x00000-0x9FFFF" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="20" y={r.y} width="140" height={r.h} fill={r.fill} rx={i === 0 ? "4 4 0 0" : i === 4 ? "0 0 4 4" : "0"} />
          <text x="30" y={r.y + r.h / 2 + 1} fill="white" fontSize="8" fontWeight="700">{r.label}</text>
          <text x="30" y={r.y + r.h / 2 + 10} fill="rgba(255,255,255,0.75)" fontSize="7">{r.sub}</text>
        </g>
      ))}

      {/* Arrow from reset vector */}
      <motion.path d="M160 39 L200 39 L200 60" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.5 }} />
      <polygon points="196,60 204,60 200,68" fill="#7C3AED" />

      {/* BIOS chip */}
      <rect x="180" y="68" width="110" height="70" rx="8" fill="#1E1035" stroke="#7C3AED" strokeWidth="2" />
      <text x="235" y="88" textAnchor="middle" fill="#A78BFA" fontSize="10" fontWeight="900">UEFI / BIOS</text>
      <text x="235" y="100" textAnchor="middle" fill="#6B7280" fontSize="8">Flash ROM chip</text>
      <text x="235" y="112" textAnchor="middle" fill="#6B7280" fontSize="8">on motherboard</text>
      {/* Chip legs */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={183 + i * 26} y="138" width="6" height="10" rx="2" fill="#A78BFA" />
          <rect x={183 + i * 26} y="58" width="6" height="10" rx="2" fill="#A78BFA" />
        </g>
      ))}

      {/* UEFI → runs POST */}
      <motion.path d="M290 103 L340 103" fill="none" stroke="#10B981" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} />
      <polygon points="338,99 346,103 338,107" fill="#10B981" />
      <rect x="346" y="78" width="118" height="50" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
      <text x="405" y="97" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="900">Runs POST</text>
      <text x="405" y="109" textAnchor="middle" fill="#059669" fontSize="8">checks all hardware</text>
      <text x="405" y="119" textAnchor="middle" fill="#6B7280" fontSize="8">then reads CMOS</text>

      {/* F2 label */}
      <rect x="346" y="148" width="118" height="26" rx="6" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1" />
      <text x="405" y="162" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">Press F2 / Delete = enter UEFI menu</text>

      {/* CPU wakes label */}
      <rect x="20" y="170" width="140" height="16" rx="4" fill="none" />
      <text x="90" y="182" textAnchor="middle" fill="#7C3AED" fontSize="9" fontWeight="700">① CPU starts here (every boot)</text>
    </svg>
  );

  if (step.id === "post") {
    const checks = [
      { label: "CPU registers", ok: true, detail: "ALU, FPU test" },
      { label: "RAM (write/read)", ok: true, detail: "pattern test" },
      { label: "GPU / Display", ok: true, detail: "frame buffer" },
      { label: "Keyboard ctrl", ok: true, detail: "i8042 chip" },
      { label: "SSD / NVMe", ok: true, detail: "controller OK" },
      { label: "Network card", ok: false, detail: "not found!" },
    ];
    return (
      <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
        <rect width="480" height="200" fill="#FFFBEB" rx="12" />
        <text x="20" y="20" fill="#B45309" fontSize="11" fontWeight="900">POST — Power-On Self Test Sequence</text>

        {/* BIOS chip trigger */}
        <rect x="14" y="30" width="70" height="40" rx="6" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
        <text x="49" y="48" textAnchor="middle" fill="#F59E0B" fontSize="9" fontWeight="900">UEFI</text>
        <text x="49" y="60" textAnchor="middle" fill="#6B7280" fontSize="8">runs POST</text>
        <motion.path d="M84 50 L110 50" fill="none" stroke="#F59E0B" strokeWidth="2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
        <polygon points="108,46 116,50 108,54" fill="#F59E0B" />

        {/* Check grid */}
        {checks.map((c, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 116 + col * 170;
          const y = 30 + row * 54;
          return (
            <motion.g key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.2 }}>
              <rect x={x} y={y} width="156" height="44" rx="6"
                fill={c.ok ? "#F0FDF4" : "#FEF2F2"} stroke={c.ok ? "#86EFAC" : "#FCA5A5"} strokeWidth="1.5" />
              <text x={x + 10} y={y + 16} fill="#374151" fontSize="10" fontWeight="700">{c.label}</text>
              <text x={x + 10} y={y + 29} fill="#6B7280" fontSize="9">{c.detail}</text>
              <circle cx={x + 140} cy={y + 20} r="10" fill={c.ok ? "#10B981" : "#EF4444"} />
              <text x={x + 140} y={y + 24} textAnchor="middle" fill="white" fontSize="11" fontWeight="900">{c.ok ? "✓" : "✕"}</text>
            </motion.g>
          );
        })}

        {/* Result */}
        <motion.rect x="14" y="168" width="452" height="24" rx="6" fill="#FEF9C3" stroke="#FDE047" strokeWidth="1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
        <motion.text x="240" y="184" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="700"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
          Critical parts ✓ → Boot continues. Network card ✕ → non-critical, OS will show error later. RAM ✕ → HALT + beep codes
        </motion.text>
      </svg>
    );
  }

  if (step.id === "cmos") return (
    <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
      <rect width="480" height="200" fill="#ECFEFF" rx="12" />
      <text x="20" y="20" fill="#0E7490" fontSize="11" fontWeight="900">CMOS Chip — Battery-Backed Settings Store</text>

      {/* Battery */}
      <circle cx="60" cy="105" r="38" fill="#374151" stroke="#6B7280" strokeWidth="2" />
      <circle cx="60" cy="105" r="30" fill="#4B5563" />
      <text x="60" y="96" textAnchor="middle" fill="#E5E7EB" fontSize="10" fontWeight="900">CR2032</text>
      <text x="60" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="9">3V coin</text>
      <text x="60" y="120" textAnchor="middle" fill="#6B7280" fontSize="8">~10 yr life</text>
      <text x="60" y="158" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Battery</text>

      {/* Wires to chip */}
      <motion.path d="M98 105 L140 105" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.3 }} />

      {/* CMOS chip */}
      <rect x="140" y="70" width="80" height="80" rx="6" fill="#164E63" stroke="#06B6D4" strokeWidth="2" />
      <text x="180" y="100" textAnchor="middle" fill="#A5F3FC" fontSize="10" fontWeight="900">CMOS</text>
      <text x="180" y="113" textAnchor="middle" fill="#67E8F9" fontSize="8">256 bytes</text>
      <text x="180" y="125" textAnchor="middle" fill="#67E8F9" fontSize="8">SRAM</text>
      {/* chip legs */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={145 + i * 24} y="150" width="8" height="10" rx="2" fill="#06B6D4" />
          <rect x={145 + i * 24} y="60" width="8" height="10" rx="2" fill="#06B6D4" />
        </g>
      ))}
      <text x="180" y="168" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">CMOS chip</text>

      {/* Arrow to stored values */}
      <motion.path d="M220 110 L258 110" fill="none" stroke="#06B6D4" strokeWidth="2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.7 }} />
      <polygon points="256,106 264,110 256,114" fill="#06B6D4" />

      {/* Stored values */}
      {[
        { icon: "💾", label: "Boot order", val: "SSD → USB → DVD" },
        { icon: "🕐", label: "Date & Time", val: "09 Nov 2026, 10:30" },
        { icon: "⚡", label: "RAM speed", val: "DDR5-5600 MHz" },
        { icon: "🔑", label: "UEFI password", val: "(if set)" },
      ].map((r, i) => (
        <motion.g key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.15 }}>
          <rect x="264" y={22 + i * 44} width="202" height="38" rx="6" fill="white" stroke="#A5F3FC" strokeWidth="1.5" />
          <text x="276" y={44 + i * 44} fill="#374151" fontSize="12">{r.icon}</text>
          <text x="296" y={39 + i * 44} fill="#0E7490" fontSize="9" fontWeight="900">{r.label}</text>
          <text x="296" y={52 + i * 44} fill="#6B7280" fontSize="9">{r.val}</text>
        </motion.g>
      ))}
    </svg>
  );

  if (step.id === "bootloader") return (
    <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
      <rect width="480" height="200" fill="#F0FDF4" rx="12" />
      <text x="20" y="20" fill="#047857" fontSize="11" fontWeight="900">EFI System Partition → Bootloader → Kernel in RAM</text>

      {/* Disk */}
      <rect x="14" y="30" width="90" height="155" rx="8" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
      <text x="59" y="47" textAnchor="middle" fill="#6B7280" fontSize="9">NVMe SSD</text>
      {/* Partitions */}
      {[
        { h: 28, fill: "#059669", label: "ESP", sub: "EFI System" },
        { h: 20, fill: "#1D4ED8", label: "Win", sub: "NTFS" },
        { h: 20, fill: "#EA580C", label: "Linux", sub: "ext4" },
        { h: 28, fill: "#6B7280", label: "Data", sub: "NTFS" },
        { h: 20, fill: "#374151", label: "Swap", sub: "" },
        { h: 32, fill: "#111827", label: "...", sub: "" },
      ].reduce<{ nodes: React.ReactNode[]; y: number }>((acc, p) => {
        acc.nodes.push(
          <g key={acc.y}>
            <rect x="14" y={acc.y} width="90" height={p.h} fill={p.fill} rx={acc.y === 50 ? "0" : acc.y + p.h >= 185 ? "0 0 7 7" : "0"} />
            <text x="59" y={acc.y + p.h / 2 + 1} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">{p.label}</text>
            {p.sub && <text x="59" y={acc.y + p.h / 2 + 11} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7">{p.sub}</text>}
          </g>
        );
        acc.y += p.h;
        return acc;
      }, { nodes: [], y: 50 }).nodes}

      {/* ESP highlight arrow */}
      <motion.path d="M104 64 L136 64" fill="none" stroke="#059669" strokeWidth="2.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.4 }} />
      <polygon points="134,60 142,64 134,68" fill="#059669" />

      {/* ESP contents */}
      <rect x="142" y="30" width="120" height="120" rx="8" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
      <text x="202" y="48" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="900">ESP Contents</text>
      {["📁 EFI/", "  📁 Microsoft/", "    📄 bootmgfw.efi ←Win", "  📁 ubuntu/", "    📄 grubx64.efi ←Linux", "📁 EFI/BOOT/", "    📄 BOOTX64.EFI"].map((f, i) => (
        <text key={i} x="150" y={60 + i * 13} fill={f.includes("←") ? "#059669" : "#374151"} fontSize="8" fontFamily="monospace" fontWeight={f.includes("←") ? "700" : "400"}>{f}</text>
      ))}

      {/* Arrow to bootloader */}
      <motion.path d="M262 90 L290 90" fill="none" stroke="#059669" strokeWidth="2.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.8 }} />
      <polygon points="288,86 296,90 288,94" fill="#059669" />

      {/* Bootloader steps */}
      <rect x="296" y="30" width="168" height="155" rx="8" fill="white" stroke="#A7F3D0" strokeWidth="1.5" />
      <text x="380" y="48" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="900">GRUB / bootmgfw</text>
      {[
        "① Find kernel file",
        "② Decompress (bzip2)",
        "③ Load kernel → RAM",
        "   at 0x100000",
        "④ Load initramfs",
        "⑤ Jump to kernel_start()",
      ].map((s, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.15 }}>
          <rect x="304" y={56 + i * 20} width="152" height="18" rx="4"
            fill={s.startsWith("⑤") ? "#D1FAE5" : "#F9FAFB"} stroke={s.startsWith("⑤") ? "#6EE7B7" : "#E5E7EB"} strokeWidth="1" />
          <text x="312" y={68 + i * 20} fill={s.startsWith("⑤") ? "#047857" : "#374151"} fontSize="9" fontWeight={s.startsWith("⑤") ? "700" : "400"}>{s}</text>
        </motion.g>
      ))}
    </svg>
  );

  if (step.id === "kernel") {
    return (
      <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
        <rect width="480" height="200" fill="#FFF1F2" rx="12" />
        <text x="20" y="20" fill="#BE123C" fontSize="11" fontWeight="900">RAM Layout After Kernel Loads</text>

        {/* RAM bar */}
        <rect x="14" y="30" width="90" height="155" rx="8" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
        <text x="59" y="47" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="700">Physical RAM</text>
        {[
          { h: 20, fill: "#E11D48", label: "Kernel text", sub: ".text section" },
          { h: 14, fill: "#F43F5E", label: "Kernel data", sub: ".data/.bss" },
          { h: 20, fill: "#FB7185", label: "Page tables", sub: "MMU mapping" },
          { h: 18, fill: "#FDA4AF", label: "Device drivers", sub: "loaded modules" },
          { h: 14, fill: "#FECDD3", label: "initramfs", sub: "temp rootfs" },
          { h: 55, fill: "#FFF1F2", label: "Free RAM", sub: "for processes" },
        ].reduce<{ nodes: React.ReactNode[]; y: number }>((acc, p, i) => {
          acc.nodes.push(
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.2 }}>
              <rect x="14" y={acc.y} width="90" height={p.h} fill={p.fill}
                stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"
                rx={i === 0 ? "0" : i === 5 ? "0 0 7 7" : "0"} />
              <text x="59" y={acc.y + p.h / 2 + 1} textAnchor="middle" fill={i < 5 ? "white" : "#9CA3AF"} fontSize={p.h < 16 ? "7" : "8"} fontWeight="700">{p.label}</text>
            </motion.g>
          );
          acc.y += p.h;
          return acc;
        }, { nodes: [], y: 50 }).nodes}

        {/* Arrow */}
        <path d="M104 100 L136 100" fill="none" stroke="#E11D48" strokeWidth="2" />
        <polygon points="134,96 142,100 134,104" fill="#E11D48" />

        {/* Init tasks */}
        {[
          { icon: "📐", label: "Setup page tables", detail: "Every process gets private 128TB virtual space" },
          { icon: "🔌", label: "Load device drivers", detail: "GPU, NVMe, WiFi, USB, Sound..." },
          { icon: "📅", label: "Start scheduler", detail: "CFS: CPU time sharing between processes" },
          { icon: "💾", label: "Mount root filesystem", detail: "pivot_root from initramfs → SSD" },
          { icon: "🚀", label: "execve /sbin/init", detail: "Start PID 1 (systemd) — first user process!" },
        ].map((t, i) => (
          <motion.g key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.25 }}>
            <rect x="142" y={22 + i * 36} width="322" height="30" rx="6"
              fill={i === 4 ? "#D1FAE5" : "white"} stroke={i === 4 ? "#6EE7B7" : "#FECDD3"} strokeWidth="1.5" />
            <text x="156" y={40 + i * 36} fill="#374151" fontSize="12">{t.icon}</text>
            <text x="174" y={36 + i * 36} fill={i === 4 ? "#047857" : "#E11D48"} fontSize="9" fontWeight="900">{t.label}</text>
            <text x="174" y={48 + i * 36} fill="#6B7280" fontSize="8">{t.detail}</text>
          </motion.g>
        ))}
      </svg>
    );
  }

  if (step.id === "init") {
    const services = [
      { icon: "🔌", label: "udev (device manager)", ms: 80, dep: null, col: "#7C3AED" },
      { icon: "📡", label: "NetworkManager", ms: 300, dep: "udev", col: "#3B82F6" },
      { icon: "🔊", label: "PipeWire (audio)", ms: 180, dep: "udev", col: "#8B5CF6" },
      { icon: "🖥️", label: "Wayland display server", ms: 450, dep: "udev", col: "#EC4899" },
      { icon: "🛡️", label: "AppArmor / SELinux", ms: 120, dep: null, col: "#059669" },
      { icon: "🔐", label: "Login manager (GDM)", ms: 500, dep: "Wayland display server", col: "#F59E0B" },
    ];
    const maxMs = 500;
    return (
      <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
        <rect width="480" height="200" fill="#EFF6FF" rx="12" />
        <text x="20" y="20" fill="#1D4ED8" fontSize="11" fontWeight="900">systemd Parallel Service Startup Timeline</text>

        {/* PID 1 label */}
        <rect x="14" y="28" width="68" height="24" rx="6" fill="#1D4ED8" />
        <text x="48" y="44" textAnchor="middle" fill="white" fontSize="9" fontWeight="900">systemd</text>
        <text x="48" y="184" textAnchor="middle" fill="#1D4ED8" fontSize="8" fontWeight="700">PID 1</text>

        {/* Timeline axis */}
        <line x1="82" y1="176" x2="468" y2="176" stroke="#BFDBFE" strokeWidth="1.5" />
        {[0, 100, 200, 300, 400, 500].map(ms => {
          const x = 82 + (ms / maxMs) * 386;
          return (
            <g key={ms}>
              <line x1={x} y1="172" x2={x} y2="178" stroke="#93C5FD" strokeWidth="1" />
              <text x={x} y="190" textAnchor="middle" fill="#6B7280" fontSize="8">{ms}ms</text>
            </g>
          );
        })}

        {/* Service bars */}
        {services.map((s, i) => {
          const startX = 82;
          const barW = (s.ms / maxMs) * 386;
          const y = 30 + i * 23;
          return (
            <g key={i}>
              <text x="80" y={y + 12} textAnchor="end" fill="#374151" fontSize="9" fontWeight="700">{s.icon}</text>
              <motion.rect x={startX} y={y} width={0} height="18" rx="4" fill={s.col} opacity="0.8"
                animate={{ width: barW }} transition={{ duration: s.ms / 500, delay: 0.3 + i * 0.1, ease: "easeOut" }} />
              <motion.text x={startX + 6} y={y + 12} fill="white" fontSize="8" fontWeight="700"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 + s.ms / 500 }}>
                {s.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (step.id === "desktop") return (
    <svg viewBox="0 0 480 200" width="100%" className="rounded-xl">
      <rect width="480" height="200" fill="#F5F3FF" rx="12" />
      <text x="20" y="20" fill="#6D28D9" fontSize="11" fontWeight="900">Full Software Stack — Hardware to Desktop</text>

      {/* Stack layers bottom to top */}
      {[
        { y: 165, h: 20, fill: "#1F2937", label: "HARDWARE  (CPU · RAM · NVMe · GPU · WiFi)" },
        { y: 143, h: 20, fill: "#374151", label: "BIOS/UEFI + Device Drivers (kernel modules)" },
        { y: 121, h: 20, fill: "#1E3A5F", label: "KERNEL — ring 0  (scheduler · MM · VFS · net)" },
        { y: 99, h: 20, fill: "#1E1B4B", label: "SYSTEM SERVICES  (systemd, dbus, udev, pipewire...)" },
        { y: 77, h: 20, fill: "#2E1065", label: "DISPLAY SERVER  (Wayland compositor / DWM)" },
        { y: 55, h: 20, fill: "#4C1D95", label: "DESKTOP SHELL  (GNOME / KDE / Windows Explorer)" },
        { y: 30, h: 23, fill: "#7C3AED", label: "USER APPS  (Chrome · VS Code · Games · Spotify...)" },
      ].map((l, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
          <rect x="14" y={l.y} width="452" height={l.h} fill={l.fill} rx={i === 0 ? "0 0 6 6" : i === 6 ? "6 6 0 0" : "0"} />
          <text x="240" y={l.y + l.h / 2 + 4} textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="700">{l.label}</text>
        </motion.g>
      ))}

      {/* YOU label */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <text x="460" y="43" fill="#7C3AED" fontSize="10" fontWeight="900">← YOU</text>
        <path d="M452 41 L430 41" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arr)" />
      </motion.g>

      {/* Boot time note */}
      <motion.rect x="14" y="186" width="452" height="0" rx="4" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 0 }} />
    </svg>
  );

  return null;
}

export default function OSBootSequence({ accent = "#E11D48" }: { accent?: string }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep(prev => {
          if (prev >= STEPS.length - 1) { setIsPlaying(false); return prev; }
          return prev + 1;
        });
      }, 4000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  const step = STEPS[activeStep];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1E1035)" }}>

      {/* Header */}
      <div className="px-5 py-4 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Complete Boot Sequence</p>
        <p className="text-sm font-black text-white mt-0.5">Power Button → Desktop — Every Step, Every Diagram</p>
      </div>

      {/* Step timeline */}
      <div className="px-4 pt-4 pb-2 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max">
          {STEPS.map((s, i) => {
            const done = i < activeStep;
            const active = i === activeStep;
            return (
              <div key={s.id} className="flex items-center gap-1.5">
                <motion.button onClick={() => { setIsPlaying(false); setActiveStep(i); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center gap-1">
                  <motion.div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg border-2"
                    animate={{ background: active ? s.color : done ? `${s.color}60` : "rgba(255,255,255,0.08)", borderColor: active ? s.color : done ? `${s.color}60` : "rgba(255,255,255,0.1)", scale: active ? 1.1 : 1 }}>
                    {done ? "✓" : s.emoji}
                  </motion.div>
                  <p className="text-[8px] font-black text-center w-10 leading-tight" style={{ color: active ? s.color : done ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}>{s.num}</p>
                </motion.button>
                {i < STEPS.length - 1 && (
                  <motion.div className="w-4 h-0.5 rounded-full mb-3" animate={{ background: done ? s.color : "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 px-4 pb-3">
        <motion.button onClick={() => { setActiveStep(0); setIsPlaying(true); }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black text-white"
          style={{ background: isPlaying ? "rgba(255,255,255,0.1)" : accent }}>
          {isPlaying ? "⏸ Playing…" : "▶ Auto Play"}
        </motion.button>
        <button onClick={() => { setIsPlaying(false); setActiveStep(Math.max(0, activeStep - 1)); }} disabled={activeStep === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-black text-white/60 disabled:opacity-30"
          style={{ background: "rgba(255,255,255,0.08)" }}>← Prev</button>
        <button onClick={() => { setIsPlaying(false); setActiveStep(Math.min(STEPS.length - 1, activeStep + 1)); }} disabled={activeStep === STEPS.length - 1}
          className="px-3 py-1.5 rounded-lg text-xs font-black text-white/60 disabled:opacity-30"
          style={{ background: "rgba(255,255,255,0.08)" }}>Next →</button>
        <div className="ml-auto flex items-center gap-1">
          <p className="text-xs text-white/30 font-bold">{activeStep + 1} / {STEPS.length}</p>
        </div>
      </div>

      {/* Active step */}
      <AnimatePresence mode="wait">
        <motion.div key={step.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
          className="mx-4 mb-4 rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${step.color}40` }}>

          {/* Step header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ background: `${step.color}18` }}>
            <span className="text-3xl">{step.emoji}</span>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-black px-2 py-0.5 rounded-full text-white" style={{ background: step.color }}>Step {step.num}</span>
              <h3 className="text-base font-black text-white mt-1 leading-tight">{step.title}</h3>
              <p className="text-xs text-white/50 mt-0.5">{step.subtitle}</p>
            </div>
          </div>

          {/* DIAGRAM — full width, prominent */}
          <div className="bg-white px-4 pt-4 pb-2">
            <p className="text-xs font-black mb-2 flex items-center gap-1.5" style={{ color: step.color }}>
              <span>📊</span> Diagram
            </p>
            <StepDiagram step={step} />
          </div>

          {/* Three info blocks */}
          <div className="bg-white/95 px-5 pb-5 pt-3 flex flex-col gap-4">

            {/* Analogy */}
            <div className="rounded-xl px-4 py-3 flex gap-3" style={{ background: `${step.color}10`, border: `1px solid ${step.color}30` }}>
              <span className="text-xl shrink-0 mt-0.5">🌍</span>
              <div>
                <p className="text-xs font-black mb-1" style={{ color: step.color }}>Real World Analogy</p>
                <p className="text-sm text-gray-700 leading-relaxed">{step.analogy}</p>
              </div>
            </div>

            {/* What happens */}
            <div>
              <p className="text-xs font-black mb-1.5 flex items-center gap-1.5" style={{ color: step.color }}>
                <span>⚙️</span> What Actually Happens
              </p>
              <p className="text-sm text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.what.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${step.color}">$1</strong>`) }} />
            </div>

            {/* Why + user impact */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl px-4 py-3 bg-gray-50 border border-gray-200">
                <p className="text-xs font-black text-gray-600 mb-1">💡 Why This Step Exists</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.why}</p>
              </div>
              <div className="rounded-xl px-4 py-3 bg-amber-50 border border-amber-200">
                <p className="text-xs font-black text-amber-700 mb-1">🎓 What This Means for You</p>
                <p className="text-sm text-amber-800 leading-relaxed">{step.userImpact}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Full timeline summary */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden border border-white/10">
        <div className="px-4 py-2 border-b border-white/10">
          <p className="text-xs font-black text-white/50">⏱ Full Timeline — Click any step to jump to it</p>
        </div>
        <div className="p-3 flex flex-col gap-1">
          {STEPS.map((s, i) => (
            <motion.button key={s.id} onClick={() => { setIsPlaying(false); setActiveStep(i); }}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-left"
              style={{ background: activeStep === i ? `${s.color}20` : "transparent" }}
              whileHover={{ background: `${s.color}15` }}>
              <span className="text-sm w-5 shrink-0">{i < activeStep ? "✅" : i === activeStep ? s.emoji : "⬜"}</span>
              <p className="text-xs font-bold flex-1" style={{ color: activeStep === i ? s.color : i < activeStep ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}>
                {s.num}. {s.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
