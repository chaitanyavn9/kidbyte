import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "linux-os",
  title: "Linux & Operating Systems",
  emoji: "🐧",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "Imagine if everyone could read the recipe for your favourite food…", text: "What if the recipe for your favourite dish was kept completely secret — only the chef knew it and nobody could change it? Or what if the recipe was freely shared and anyone could read it, improve it, and share their better version? Linux is like the second kind — an operating system where everyone can see, change, and share the code for free." },
      { heading: "What is Linux?", text: "Linux is an operating system — the main software that manages your computer — and it's free and open-source. That means its recipe (code) is public. Thousands of programmers around the world help make it better every day.", diagramId: "linux-layers" },
      { heading: "Linux is everywhere", text: "Your Android phone runs Linux. The websites you visit live on computers running Linux servers. Smart TVs, routers, supercomputers, NASA satellites — almost all of them run Linux. It's the most used operating system in the world, even if most people never know they're using it.", diagramId: "terminal-commands" },
      { heading: "In your daily life…", text: "Google's servers run Linux. YouTube runs on Linux. The majority of the internet runs on Linux. Even if you use Windows or Mac at school, understanding Linux opens doors to programming, server work, and cybersecurity." },
    ],
    "8-10": [
      { heading: "What if Windows wasn't free and there was no alternative?", text: "Before Linux, if you wanted a powerful OS you had to pay expensive licensing fees. Linus Torvalds, a Finnish student, created the Linux kernel in 1991 and shared it for free. Combined with GNU tools, it became a complete free OS that could run on any hardware." },
      { heading: "Linux distributions — different flavours", text: "Linux isn't one product — it's a kernel that many teams bundle with software to create 'distributions' (distros). Ubuntu: beginner-friendly. Fedora: cutting edge. Debian: ultra-stable. Arch: for power users. CentOS/RHEL: for enterprise servers. They all use the same Linux kernel.", diagramId: "linux-layers" },
      { heading: "The terminal — Linux's superpower", text: "Linux is controlled through text commands in a terminal. pwd shows where you are. ls lists files. cd changes directory. mkdir creates folders. cp copies files. sudo runs commands as administrator. These commands work on every Linux machine in the world.", diagramId: "terminal-commands" },
      { heading: "Linux security model", text: "Linux was designed with multi-user security from the start. Each file has an owner and permissions (read/write/execute for owner/group/others). Regular users can't modify system files. This design makes Linux much more resistant to viruses than Windows." },
    ],
    "11-14": [
      { heading: "The Linux kernel — what it actually does", text: "The kernel is the core of the OS. It manages processes (scheduling), memory (virtual address spaces, page tables), file systems, network stack, and hardware via device drivers. User programs make system calls to access kernel services. The kernel runs in ring 0 — full hardware access." },
      { heading: "Linux distributions and package management", text: "Every distribution uses the same kernel but different package managers, init systems, and default software. Debian/Ubuntu: apt. Red Hat/Fedora: dnf/yum. Arch: pacman. Package managers handle dependency resolution, updates, and security patches. Containerisation (Docker) uses Linux namespaces and cgroups to run applications in isolation.", diagramId: "linux-layers" },
      { heading: "Bash and shell scripting", text: "The bash shell is a command interpreter AND a scripting language. Shell scripts automate tasks: backups, deployments, server configuration. Variables, loops, conditionals, functions — bash has them all. Every DevOps engineer and system administrator writes shell scripts.", diagramId: "terminal-commands" },
      { heading: "Process model and IPC", text: "Linux processes are created by fork() (copy current process) + exec() (replace with new program). Each process has a PID, PPID (parent), UID, GID, file descriptors, and address space. Inter-process communication: pipes (|), sockets, shared memory, signals. The init system (systemd) is PID 1 — parent of all processes." },
    ],
    "15-18": [
      { heading: "Linux kernel architecture", text: "Monolithic kernel: device drivers, file systems, networking, and memory management all run in kernel space (ring 0). Linux is modular — drivers are loadable kernel modules (.ko files). Microkernels (Minix, L4) run services in user space for isolation, but Linux's monolithic design gives better performance.", diagramId: "linux-layers" },
      { heading: "cgroups and namespaces — the foundation of containers", text: "cgroups (control groups) limit resources per process group: CPU time, memory, I/O bandwidth. Linux namespaces isolate aspects of the system: PID namespace (each container has its own PID 1), network namespace (separate network stack), mount namespace (separate filesystem view), user namespace (map UID 0 inside container to unprivileged UID outside). Docker and Kubernetes build on these primitives.", diagramId: "terminal-commands" },
      { heading: "Linux security hardening", text: "Linux security modules: SELinux (Red Hat) and AppArmor (Ubuntu) enforce mandatory access control — labels on files and processes define allowed operations beyond standard POSIX permissions. seccomp filters restrict which system calls a process can make (Chrome's sandbox uses this). Linux capabilities split root privileges into 38 fine-grained capabilities." },
      { heading: "eBPF — programmable kernel", text: "eBPF (extended Berkeley Packet Filter) allows safely running user-provided programs inside the kernel — without loading kernel modules. Applications: tracing (perf, bpftrace), networking (XDP for sub-microsecond packet processing), security (Cilium, Falco). Netflix, Google, Meta, and Cloudflare use eBPF extensively for observability and performance at scale." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=700&fit=crop",
  photoAlt: "Terminal window showing Linux command line interface with green text",
  keyFacts: [
    { emoji: "🐧", label: "Created By", value: "Linus Torvalds, 1991", detail: "Linus wrote the first Linux kernel as a hobby project at age 21." },
    { emoji: "🌍", label: "Market Share", value: "Powers 96% of top web servers", detail: "Most of the internet runs on Linux — Google, Facebook, Amazon all use Linux servers." },
    { emoji: "⚖️", label: "License", value: "Open source (GPL v2)", detail: "Anyone can read, modify, and distribute Linux. Over 20 million lines of code." },
    { emoji: "🏗️", label: "Architecture", value: "Monolithic kernel with modules", detail: "Device drivers are loadable modules. The kernel runs in a single address space." },
    { emoji: "📦", label: "Distributions", value: "Ubuntu, Fedora, Arch, Debian, +", detail: "A distro bundles the kernel with software. Ubuntu is most popular for beginners." },
    { emoji: "📱", label: "Android", value: "Built on the Linux kernel", detail: "Android is Linux + Google's Android framework. 3+ billion phones run Linux." },
  ],
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
