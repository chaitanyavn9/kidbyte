import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "os",
  title: "What is an Operating System?",
  emoji: "🖱️",
  category: "digital-world",
  story: {
    "5-7": "An Operating System (OS) is like the manager of your computer! When you open a game, the OS says 'okay game, here is some memory, here is the screen, you can start now!' When you open music at the same time, the OS manages both — making sure they don't fight over the same things. The most famous OSes are Windows, macOS (for Mac), and Android (for phones).",
    "8-10": "The Operating System is the most important software on your computer — it runs as soon as you turn it on, before anything else. It manages the CPU, RAM, storage, screen, and all your programs. It's why you can open 10 apps at once without them crashing into each other. Popular OSes: Windows 11, macOS Ventura, Linux, Android, iOS. Each has its own look and strengths.",
    "11-14": "An OS is system software that provides an abstraction layer between hardware and applications. Core responsibilities: process scheduling (CPU time allocation), memory management (virtual memory, paging), file system management, I/O device drivers, and security (user permissions, sandboxing). The kernel runs in privileged mode; user programs in user mode — system calls are the bridge. Linux kernel is monolithic; macOS/Windows use hybrid kernels.",
  },
  analogy: {
    "5-7": "The OS is like a school teacher — it organises everything and makes sure all programs get their turn.",
    "8-10": "Like a traffic police officer — directing programs to the right resources so nobody crashes into each other.",
    "11-14": "A resource manager and hardware abstraction layer — the privileged intermediary between silicon and software.",
  },
  funFact: "Linux — a free and open-source OS — powers over 90% of the world's web servers, 100% of the world's top 500 supercomputers, and the Android phones in most people's pockets!",
  dos: ["Keep your OS updated — updates fix security vulnerabilities", "Restart your computer occasionally — it clears RAM and refreshes the OS"],
  donts: ["Don't ignore OS update notifications — unpatched systems get hacked", "Don't run programs from unknown sources — the OS can't protect you from yourself"],
  quiz: [
    { for: "5-7", question: "What does the OS do?", choices: ["Manages all the programs and parts of the computer", "Plays music", "Charges the battery"], correct: 0, explanation: "The OS is the manager — it controls the CPU, screen, memory and all your apps!" },
    { for: "8-10", question: "Which of these is an Operating System?", choices: ["Windows 11", "Microsoft Word", "Google Chrome"], correct: 0, explanation: "Windows, macOS, Linux, Android and iOS are Operating Systems. Word and Chrome are apps that run ON top of an OS." },
    { for: "11-14", question: "What is a 'system call'?", choices: ["The mechanism for user programs to request OS kernel services", "A phone call over the internet", "A method to restart the computer"], correct: 0, explanation: "User programs can't directly access hardware — they ask the kernel through system calls (e.g., read(), write(), fork())." },
  ],
};
export default lesson;
