import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "software",
  title: "Software vs OS — What's the Difference?",
  emoji: "📦",
  category: "digital-world",
  narrative: {
    "5-7": [
      { heading: "A computer without software is like a TV without channels", text: "You can plug in a TV, but if there are no channels to watch, it just shows a blank screen. Software is the channels — the programs that actually do useful things on the computer's hardware." },
      { heading: "Software comes in layers", text: "At the bottom is the Operating System (like Windows or macOS) — it manages all the hardware. On top of the OS sit apps — games, browsers, music players. The OS is like the school building; apps are like the different classrooms.", diagramId: "software-layers" },
      { heading: "Apps need the OS", text: "An app can't talk to the screen or keyboard directly — it has to ask the OS. The OS is the middleman. This is why the same app (like Chrome) can run on Windows AND Mac — it speaks to the OS, and the OS handles the hardware differences.", diagramId: "app-vs-os" },
      { heading: "In your daily life…", text: "Every app on your phone is software. The phone's iOS or Android is also software — but a special kind that controls the hardware. When you download a game, you're downloading software that runs on top of the mobile OS." },
    ],
    "8-10": [
      { heading: "Hardware is useless without instructions", text: "A CPU is just a chip that follows instructions. It doesn't know what to do until software tells it. Software is the set of instructions — written by programmers — that makes hardware useful." },
      { heading: "Software layers: OS, middleware, apps", text: "Operating System: manages hardware (memory, CPU, storage, screen). Middleware/runtime: shared libraries apps use (like the C++ runtime or Java JVM). Applications: the programs users interact with. Each layer depends on the one below.", diagramId: "software-layers" },
      { heading: "What the OS does for apps", text: "Without an OS, every app would need its own code to control the screen, keyboard, and storage — millions of duplicate work. The OS provides standard APIs (Application Programming Interfaces) that all apps use, like POSIX system calls on Linux.", diagramId: "app-vs-os" },
      { heading: "Open-source vs closed-source", text: "Linux, Android, and Firefox are open-source — anyone can read and modify the code. Windows and macOS are closed-source — only the company can modify them. Open-source drives most of the internet's servers." },
    ],
    "11-14": [
      { heading: "The abstraction ladder", text: "Software is built in layers of abstraction: Machine code → Assembly → C/C++ → Python/Java/JS. Each layer hides complexity from the layer above. Python code doesn't mention registers; C doesn't mention circuits; assembly doesn't mention logic gates." },
      { heading: "What the OS actually manages", text: "Process scheduling (which program runs next), memory management (virtual address spaces, paging), file system (reading/writing disk), device drivers (translating OS calls to hardware signals), networking stack (TCP/IP). The OS is the most complex software on your machine.", diagramId: "software-layers" },
      { heading: "System calls — crossing the boundary", text: "Apps run in user space (restricted). The OS runs in kernel space (privileged). To access hardware, an app makes a system call — a controlled jump to kernel space. read(), write(), open(), fork() are POSIX system calls. This boundary is a security guarantee.", diagramId: "app-vs-os" },
      { heading: "Compiled vs interpreted", text: "Compiled languages (C, Rust, Go) translate code to machine code before running — fast. Interpreted languages (Python, Ruby) translate line-by-line at runtime — flexible but slower. JIT compilers (Java, V8/JS) compile hot code paths at runtime — best of both worlds." },
    ],
    "15-18": [
      { heading: "The OS as a resource multiplexer", text: "The OS time-shares the CPU across processes using a scheduler (CFS on Linux uses a red-black tree keyed by virtual runtime). It virtualises memory — each process thinks it has the whole address space. It manages I/O via interrupt-driven drivers to avoid busy-waiting." },
      { heading: "Kernel space and protection rings", text: "x86 defines 4 privilege rings (0–3). Ring 0 = kernel — full hardware access. Ring 3 = user — restricted. SYSCALL instruction switches from ring 3 to ring 0 via a predefined entry point. Modern kernels use KPTI (Kernel Page Table Isolation) to prevent Spectre/Meltdown attacks.", diagramId: "software-layers" },
      { heading: "Software design patterns", text: "MVC (Model-View-Controller) separates data, UI, and logic. Microservices split a monolith into independent services communicating via HTTP/gRPC. The actor model (Erlang, Akka) uses message-passing concurrency. These patterns exist to manage complexity as software scales.", diagramId: "app-vs-os" },
      { heading: "The future: software-defined everything", text: "SDN (Software-Defined Networking) virtualises network hardware. Containers (Docker) package software with its dependencies. WebAssembly runs near-native code in browsers. AI is now writing software (Copilot, Cursor). The line between hardware and software continues to blur." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&fit=crop",
  photoAlt: "Code editor showing software source code in multiple programming languages",
  keyFacts: [
    { emoji: "📝", label: "What Is Software", value: "Instructions that tell hardware what to do", detail: "Without software, hardware is useless — it's just metal and silicon." },
    { emoji: "🏗️", label: "Types", value: "System software + Application software", detail: "OS = system software. Chrome, Word, games = application software." },
    { emoji: "🔄", label: "Compilation", value: "Source code → machine code", detail: "Compilers (gcc, clang) translate human-readable code to CPU-executable binary." },
    { emoji: "📦", label: "Apps on App Store", value: "1.8 million iOS apps (2024)", detail: "Apple's App Store has 1.8 million apps. Google Play has 2.6 million." },
    { emoji: "🌐", label: "Open Source", value: "Linux, Python, Android, Firefox", detail: "Open-source software (OSS) is free to read, modify, and distribute." },
    { emoji: "💻", label: "Lines of Code", value: "Linux kernel: 27 million lines", detail: "The Linux kernel has 27 million lines of C code, contributed by thousands of developers." },
  ],
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
