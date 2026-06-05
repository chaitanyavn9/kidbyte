import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "software",
  title: "Software vs OS — What's the Difference?",
  emoji: "📦",
  category: "digital-world",
  story: {
    "5-7": "The Operating System (OS) is like the school building — it's always there, running everything. Software apps are like the classrooms inside — each one does one special thing! YouTube is a classroom for videos, Minecraft is a classroom for games, WhatsApp is a classroom for chatting. You need the building (OS) before you can have classrooms (software)!",
    "8-10": "The OS is the foundation that runs as soon as the computer starts — it's always in charge. Software (apps) are programs that run on top of the OS to do specific jobs. Without the OS, software can't run. The OS provides apps with memory, screen access, and file access. Think of OS as the ground floor and software as the rooms built on it.",
    "11-14": "The OS kernel provides system services; applications request them via APIs and system calls. Software is compiled into machine code that the CPU executes. The OS loads programs into virtual address spaces, preventing apps from interfering with each other or the kernel. Middleware (runtime environments like JVM, Node.js) sits between OS and application. System software (OS, drivers) vs application software (apps, games) — both essential layers of the stack.",
  },
  analogy: {
    "5-7": "OS = the school building. Software = the classrooms inside. You need the building first!",
    "8-10": "OS is the restaurant kitchen. Software apps are the chefs. The chefs can only cook because the kitchen (OS) provides the stove, pots, and ingredients.",
    "11-14": "The OS is the hardware abstraction + resource management layer; applications are user-space processes consuming OS-provided services.",
  },
  funFact: "There are over 2.87 million apps on the Google Play Store and 1.96 million on Apple's App Store — every single one runs on top of an OS!",
  dos: ["Download apps only from official stores (App Store, Play Store, Microsoft Store)", "Uninstall apps you don't use — they can slow your device and use background data"],
  donts: ["Don't install software from unknown websites — it can be malware", "Don't give apps permissions they don't need (like a flashlight app asking for your contacts)"],
  quiz: [
    { for: "5-7", question: "Which comes first — the OS or the app?", choices: ["The OS — apps can't run without it", "The app — it installs the OS", "They start at the same time"], correct: 0, explanation: "The OS starts first — it creates the environment where apps can run!" },
    { for: "8-10", question: "What is an example of software (app)?", choices: ["Microsoft Word", "Windows 11", "The CPU"], correct: 0, explanation: "Word is an app. Windows 11 is the OS. The CPU is hardware. Apps run on top of the OS!" },
    { for: "11-14", question: "What is an API in the context of OS and software?", choices: ["An interface that lets applications request OS services in a standardised way", "A type of network connection", "A programming language"], correct: 0, explanation: "APIs (Application Programming Interfaces) are the contracts between apps and the OS — apps call API functions to access files, network, screen, etc., without needing hardware-level knowledge." },
  ],
};
export default lesson;
