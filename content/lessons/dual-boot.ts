import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "dual-boot",
  title: "Dual Boot: Windows + Linux",
  emoji: "⚙️",
  category: "engineering",
  story: {
    "5-7": "Imagine having two different bedrooms you can choose between every morning! Dual boot is like that for a computer — you can choose to start Windows or Linux every time you turn on your computer. Each room (operating system) has its own toys (programs) and decorations!",
    "8-10": "Dual booting means installing two operating systems on one computer. When you turn on your PC, a program called a bootloader asks which one you want to use. Windows and Linux can share the same hard drive but live in separate sections called partitions. It's great for learning Linux while keeping Windows for everyday use.",
    "11-14": "Dual boot process: shrink Windows partition to free space, create Linux partition (/, /home, swap), install Linux which auto-detects Windows and configures GRUB bootloader. GRUB (Grand Unified Bootloader) replaces Windows Boot Manager as the first thing that runs — it shows a menu, then chainloads the chosen OS. BitLocker on Windows can complicate dual boot — may need to disable or save recovery key.",
    "15-18": "Professional dual boot setup: (1) Partitioning — GPT disk: EFI System Partition (512MB, shared by both OSes for boot files), Windows NTFS partition, Linux ext4 root (at least 20GB), optional Linux /home (separate partition survives reinstalls), 8GB swap (or use swapfile). (2) UEFI Secure Boot — Linux distros (Ubuntu, Fedora) ship with signed shim bootloader, so Secure Boot doesn't need disabling on modern hardware. (3) GRUB — installed to EFI partition, `os-prober` detects Windows entry, `update-grub` regenerates `/boot/grub/grub.cfg`; customise timeout via `/etc/default/grub`. (4) Time conflict — Windows uses local time for RTC hardware clock; Linux uses UTC; fix: `timedatectl set-local-rtc 1 --adjust-system-clock` on Linux. (5) NTFS access — Linux can read/write Windows NTFS via `ntfs-3g` driver; Windows cannot natively read ext4. (6) Recovery: Windows Startup Repair can overwrite GRUB — fix by booting Linux live USB and running `grub-install` + `update-grub`. Virtual machines (VirtualBox, VMware, Hyper-V) are safer for most use cases — full isolation, snapshots, no partition risk.",
  },
  analogy: {
    "5-7": "Dual boot is like having two separate bedrooms with different toys — you pick which room to use every morning.",
    "8-10": "It's like having two different sets of tools in separate drawers — you open the right drawer for each job.",
    "11-14": "GRUB is the receptionist at a hotel with two wings — you tell them which wing (OS) you want and they escort you there.",
    "15-18": "The EFI partition is a neutral lobby that belongs to no OS — both Windows and Linux leave their bootloaders there, and the UEFI firmware picks which to run.",
  },
  funFact: "GRUB (GRand Unified Bootloader) was first released in 1995. Its Stage 2 loader fits in 512 bytes — the Master Boot Record — and can boot over a dozen different operating systems. GRUB 2 is now a full mini-OS written in C that runs before any operating system!",
  dos: [
    "Back up all data before repartitioning — partition operations can go wrong",
    "Create a Windows recovery drive before installing Linux",
    "Disable Fast Startup in Windows (causes filesystem locks that corrupt Linux mounts)",
    "Install Linux AFTER Windows — Windows installer overwrites bootloaders",
  ],
  donts: [
    "Don't shrink NTFS partition below 20% free space — Windows needs room for updates",
    "Don't skip the swap partition on systems with <8GB RAM",
    "Don't delete the EFI System Partition — both OSes need it to boot",
    "Don't use Windows' disk manager to resize Linux partitions — use GParted",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What is dual boot?",
      choices: [
        "Having two operating systems on one computer and choosing one at startup",
        "Using two computers at once",
        "Having two hard drives",
      ],
      correct: 0,
      explanation: "Dual boot lets you keep both Windows and Linux — the best of both worlds!",
    },
    {
      for: "8-10",
      question: "What is a 'bootloader'?",
      choices: [
        "A program that runs first at startup and lets you choose which operating system to load",
        "A program that connects to the internet",
        "A program that installs apps",
      ],
      correct: 0,
      explanation: "GRUB is the most common bootloader for dual boot — it's the first thing that runs when you press the power button!",
    },
    {
      for: "11-14",
      question: "Why should you install Windows before Linux in a dual-boot setup?",
      choices: [
        "Windows installer overwrites the bootloader — if Linux is already installed, its GRUB gets destroyed; install Windows first then Linux to have GRUB last",
        "Linux takes longer to install",
        "Windows requires more disk space",
      ],
      correct: 0,
      explanation: "Windows assumes it's the only OS and installs its own bootloader without checking for others. Linux GRUB detects Windows and adds it as a boot option.",
    },
    {
      for: "15-18",
      question: "Why does dual boot cause Windows/Linux clock conflicts and how to fix it?",
      choices: [
        "Windows stores local time in hardware RTC; Linux stores UTC — fix by setting Linux to use local time: `timedatectl set-local-rtc 1`",
        "GRUB rounds time to the nearest hour",
        "Linux and Windows use different time zones by default",
      ],
      correct: 0,
      explanation: "If you boot Windows after Linux sets RTC to UTC, Windows reads it as local time — causing a discrepancy equal to your UTC offset. Setting Linux to use localtime matches Windows behaviour.",
    },
    {
      for: "15-18",
      question: "What is the EFI System Partition (ESP) and why must both OSes share it?",
      choices: [
        "A FAT32 partition where UEFI firmware looks for boot entries — Windows stores bootmgfw.efi and Linux stores shimx64.efi/GRUB here — UEFI reads it before any OS loads",
        "The Windows system partition",
        "A backup partition for system recovery",
      ],
      correct: 0,
      explanation: "The ESP is the universal handoff between firmware and OS — UEFI reads the boot entry list (NVRAM), loads the named .efi file from the ESP, and that file starts the OS. Both OSes must co-exist in the ESP.",
    },
  ],
};

export default lesson;
