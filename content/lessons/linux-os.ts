import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "linux-os",
  title: "Linux & Operating Systems",
  emoji: "🐧",
  category: "engineering",
  story: {
    "5-7": "An Operating System (OS) is like the manager of your computer. It makes sure all the programs get their turn to use the computer's brain (CPU), memory, and screen. Windows, macOS, and Linux are all operating systems — they're all different ways to run a computer!",
    "8-10": "Linux is a free, open-source operating system — anyone can see its code, change it, and share it. It runs on everything from phones (Android is based on Linux!) to the world's fastest supercomputers. Learning Linux is super useful for anyone in tech — it teaches you how computers really work, using text commands instead of just clicking.",
    "11-14": "The OS manages processes (programs in execution), memory (RAM allocation via virtual memory), file system (how files are stored and organised), and I/O devices (drivers). Linux uses a monolithic kernel — all kernel services run in privileged mode. Key concepts: file permissions (rwx for owner/group/others), processes and PIDs, pipes (|) connecting command output to input, shell scripting to automate tasks.",
    "15-18": "The Linux kernel manages: (1) Process scheduling — CFS (Completely Fair Scheduler) uses a red-black tree to give CPU time proportional to priority weight; (2) Virtual memory — each process gets its own virtual address space via page tables (4KB pages), mapped to physical RAM or swap; copy-on-write (COW) for fork(); (3) VFS (Virtual Filesystem Switch) — unified API over ext4, btrfs, tmpfs, NFS; (4) Networking stack — full TCP/IP implementation in kernel, netfilter/iptables for packet filtering. Essential commands: `ls -la` (list with permissions), `chmod 755` (rwxr-xr-x), `grep -r 'pattern' /path`, `find / -name '*.conf'`, `ps aux | grep process`, `top`/`htop` (resource monitor), `systemctl status/start/stop`, `journalctl -u service`, `df -h`/`du -sh`, `tar czf archive.tar.gz dir/`, `ssh user@host`, `scp source dest`. Dual boot installs two OSes (Windows + Linux Ubuntu) on separate partitions — GRUB bootloader presents the choice at startup. Package managers: apt (Debian/Ubuntu), yum/dnf (RHEL/Fedora), pacman (Arch). Shell scripting (`#!/bin/bash`, variables, loops, conditionals) automates system administration.",
  },
  analogy: {
    "5-7": "The OS is like a school teacher — it makes sure every student (program) gets a fair turn and nobody hogs all the attention.",
    "8-10": "Linux is like a workshop where you can see all the tools and even build new ones — Windows is like a shop where tools are hidden behind glass.",
    "11-14": "The kernel is like a government — it controls the hardware, allocates resources, and enforces rules that all programs must follow.",
    "15-18": "Virtual memory is like a hotel — processes think they have an entire building to themselves, but the hotel manager (kernel) maps rooms to actual floors only when needed.",
  },
  funFact: "Linux was created by Linus Torvalds in 1991 as a hobby project when he was 21 years old, posting 'just a hobby, won't be big and professional like gnu' on a forum. Today it runs 96.3% of the world's top 1 million web servers, all 500 of the world's top supercomputers, and the Android phones of 3.9 billion people.",
  dos: [
    "Learn 20 essential terminal commands — ls, cd, mkdir, rm, cp, mv, grep, find, pipe |, redirect >",
    "Understand file permissions: chmod 644 (file) vs chmod 755 (executable)",
    "Practice in a VM first — VirtualBox + Ubuntu is free and risk-free",
    "Use man <command> to read the built-in manual for any Linux command",
  ],
  donts: [
    "Never run `sudo rm -rf /` — it deletes everything on the system",
    "Don't install software from random websites — use the package manager",
    "Don't use root (admin) for everyday work — create a regular user",
    "Don't modify /etc/fstab without understanding it — wrong entries prevent booting",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What does an Operating System do?",
      choices: [
        "Manages all programs and hardware so everything works together",
        "Stores your files",
        "Connects to the internet",
      ],
      correct: 0,
      explanation: "The OS is in charge of everything — it decides how programs share the CPU, RAM, and all other resources!",
    },
    {
      for: "8-10",
      question: "What is Linux?",
      choices: [
        "A free, open-source operating system that anyone can use and modify",
        "A programming language",
        "A type of computer",
      ],
      correct: 0,
      explanation: "Linux is free and open — its source code is public, and thousands of developers worldwide improve it every day!",
    },
    {
      for: "11-14",
      question: "What does `chmod 755 script.sh` mean?",
      choices: [
        "Owner can read/write/execute; group and others can read/execute — makes it a runnable script",
        "Encrypts the file with key 755",
        "Copies the file 755 times",
      ],
      correct: 0,
      explanation: "755 in octal = 111 101 101 in binary = rwx r-x r-x. Owner: full control; group/others: read and execute only. Needed to run shell scripts.",
    },
    {
      for: "15-18",
      question: "What is the Linux Completely Fair Scheduler (CFS)?",
      choices: [
        "A process scheduler that tracks virtual runtime (vruntime) in a red-black tree and always runs the process with least vruntime — ensuring proportional CPU time",
        "A file system checker",
        "A memory allocator",
      ],
      correct: 0,
      explanation: "CFS replaced the O(1) scheduler. Each process gets CPU time proportional to its nice/priority weight. The red-black tree keeps the 'most deserving' process accessible in O(log n) time.",
    },
    {
      for: "15-18",
      question: "What is 'copy-on-write' (COW) in Linux fork()?",
      choices: [
        "After fork(), parent and child share the same physical pages marked read-only — a copy is made only when either process writes, saving memory",
        "The kernel copies all files when a process starts",
        "COW is a type of cache eviction policy",
      ],
      correct: 0,
      explanation: "Without COW, fork() would copy gigabytes of RAM instantly. With COW, a new process starts in microseconds — pages are only duplicated if modified.",
    },
  ],
};

export default lesson;
