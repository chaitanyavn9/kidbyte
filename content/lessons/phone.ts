import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "phone",
  title: "What is a Smartphone?",
  emoji: "📱",
  category: "devices",
  narrative: {
    "5-7": [
      { heading: "30 years ago, a phone only made phone calls…", text: "The first mobile phones were just for calling people — they were heavy, expensive, and barely portable. Today, a smartphone is a camera, a music player, a game console, a navigator, a dictionary, and a computer — all in your pocket. How did all of that fit in one tiny device?" },
      { heading: "A smartphone is a full computer — just very small", text: "Inside your phone is a tiny chip called a SoC (System on a Chip). It has a CPU (the brain), a GPU (for graphics), and a modem (for mobile internet) — all on one chip smaller than your fingernail. It's as powerful as a laptop computer from 10 years ago.", diagramId: "smartphone-hardware" },
      { heading: "Android vs iOS — two worlds", text: "Every smartphone runs one of two operating systems: Android (made by Google, used by Samsung, OnePlus, etc.) or iOS (made by Apple, only on iPhones). They look different and have different apps, but both do the same basic jobs.", diagramId: "mobile-os" },
      { heading: "In your daily life…", text: "Your smartphone processes billions of calculations every second — for every swipe, every camera photo, every video call. Understanding how it works helps you use it smarter and understand why it sometimes slows down or heats up." },
    ],
    "8-10": [
      { heading: "The smartphone changed human behaviour more than any invention since TV", text: "Before smartphones (pre-2007), getting directions meant printing a map. Settling arguments meant going to a library. Finding a song meant buying a CD. The iPhone (2007) and Android smartphones combined all this — camera, GPS, internet, music — into one always-connected device." },
      { heading: "What's inside a smartphone", text: "SoC (System on a Chip): CPU + GPU + modem + NPU (AI chip) on one chip. LPDDR5 RAM: 8–16 GB. UFS flash storage: 128–1024 GB. Camera sensors: main + ultra-wide + telephoto. OLED display. Accelerometer, gyroscope, barometer, proximity sensor. 5G modem. Face ID or fingerprint sensor.", diagramId: "smartphone-hardware" },
      { heading: "Android vs iOS — open vs closed", text: "Android: open-source (Linux kernel), runs on thousands of devices from many manufacturers, more customisable. iOS: closed-source, Apple hardware only, tightly integrated, longer software support (5-6 years vs Android's 3-4). Both have ~95%+ of the global smartphone market between them.", diagramId: "mobile-os" },
      { heading: "Mobile computing constraints", text: "Smartphones must balance performance vs battery life vs heat vs physical size. Mobile CPUs use big.LITTLE architecture — powerful performance cores + efficient cores. The camera bump exists because larger sensors and multiple focal lengths need physical lens volume. These constraints drive constant engineering innovation." },
    ],
    "11-14": [
      { heading: "SoC design — integrating everything on one chip", text: "An SoC integrates CPU cores, GPU cores, ISP (Image Signal Processor), NPU (Neural Processing Unit), 5G modem, Wi-Fi/Bluetooth, video encode/decode, and more. Die area is precious — integration eliminates the energy and latency cost of data leaving the chip. Apple A17 Pro: 19 billion transistors, 3nm process." },
      { heading: "Mobile OS architecture", text: "iOS and Android both run on a Linux/BSD kernel. Android uses a modified Linux kernel; Zygote process pre-forks app processes for fast launch; Dalvik/ART runtime runs Java/Kotlin bytecode. iOS uses XNU kernel (hybrid of Mach microkernel + BSD); Swift/Objective-C apps compile to native ARM64 machine code.", diagramId: "mobile-os" },
      { heading: "Smartphone cameras — computational photography", text: "Modern smartphones have 3–5 camera sensors (wide, ultra-wide, telephoto, macro, depth). The ISP processes RAW sensor data. Computational photography uses the NPU for: HDR (stack multiple exposures), Night Mode (stack long exposures), Portrait Mode (depth segmentation + background blur), AI upscaling. The 'camera' is 50% hardware, 50% software.", diagramId: "smartphone-hardware" },
      { heading: "5G and connectivity", text: "5G uses mmWave (high bandwidth, short range) and sub-6GHz (wider coverage, lower bandwidth). The 5G modem is the most power-hungry component when active. Wi-Fi 6E uses the 6GHz band (less congested, faster). Bluetooth 5.3 enables multi-device audio. Modern phones support Wi-Fi Direct, NFC, UWB (ultra-wideband for precise location)." },
    ],
    "15-18": [
      { heading: "Apple Silicon on mobile — the A-series architecture", text: "Apple A17 Pro (3nm): 6-core CPU (2 performance + 4 efficiency), 6-core GPU, 16-core Neural Engine (35 TOPS). The performance cores run at 3.78 GHz with out-of-order execution and large branch prediction tables. The GPU supports hardware ray tracing and mesh shading. The 2nm A18 Pro in iPhone 16 Pro achieved 35 TOPS on the NPU alone." },
      { heading: "Mobile memory architecture — unified memory", text: "High-end phones use LPDDR5X memory at 8533 Mbps per pin × 64-bit bus = 68 GB/s bandwidth. Apple's UMA (Unified Memory Architecture) allows CPU and GPU to share the same physical RAM pool — no copy needed. Snapdragon 8 Gen 3 uses LPDDR5X with hardware memory compression (memory efficiency boost).", diagramId: "smartphone-hardware" },
      { heading: "Baseband security and isolation", text: "The 5G modem (baseband processor) is a separate CPU running proprietary RTOS. It has its own memory and I/O. Baseband vulnerabilities (like Stagefright, CVE-2022-20233) are severe — they can be exploited over-the-air without user interaction. iOS and modern Android isolate the baseband in a separate security domain.", diagramId: "mobile-os" },
      { heading: "On-device AI and the NPU era", text: "iPhone 15 Pro's A17 Pro NPU performs 35 TOPS (tera-operations per second). Used for: Face ID (3D depth matching), computational photography, Siri on-device processing, autocorrect transformer model. Apple Intelligence (iOS 18) runs 3B parameter models on-device using the NPU. Qualcomm's Snapdragon X Elite targets 75 TOPS — the race for on-device AI is the main mobile battleground in 2024–2026." },
    ],
  },
  story: {
    "5-7":
      "A smartphone is a tiny computer that fits in your pocket and also makes phone calls! It can take photos, play games, show maps, play songs, and let you video-call grandma anywhere in the world. It connects to the internet through Wi-Fi or through invisible waves in the air called mobile data. The most famous smartphones are the iPhone and Android phones!",
    "8-10":
      "A smartphone is a handheld computer that happens to make calls. It has a touchscreen, camera (front and back), GPS to know where you are, Wi-Fi and mobile data to connect to the internet, and hundreds of thousands of apps. The two main systems are iOS (iPhone) and Android. Smartphones have sensors like accelerometers (to know which way you're tilting), gyroscopes, and fingerprint readers.",
    "11-14":
      "A smartphone is a mobile computing platform running a mobile OS (iOS or Android) on an ARM SoC. Key hardware: multi-core CPU + GPU on a single chip, LPDDR RAM, UFS/NVMe storage, MIMO antenna arrays for 4G/5G, camera ISP (Image Signal Processor) for computational photography, and a battery of ~4000–5000mAh. Sensors include: accelerometer, gyroscope, magnetometer, proximity sensor, ambient light sensor, barometer.",
  },
  analogy: {
    "5-7": "A smartphone is like a tiny computer + camera + TV + telephone all squeezed into your pocket!",
    "8-10": "Like a Swiss army knife — one device that does calling, computing, navigation, photography, and entertainment.",
    "11-14": "A converged mobile computing platform: SoC + modem + ISP + sensor fusion hub in a 160g package.",
  },
  photo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&fit=crop",
  photoAlt: "Modern smartphone showing hardware internals and sleek design",
  keyFacts: [
    { emoji: "📱", label: "SoC", value: "System on Chip — CPU+GPU+RAM together", detail: "Unlike PCs, phone chips integrate CPU, GPU, RAM, and modem on a single die." },
    { emoji: "⚡", label: "Speed", value: "Apple A17 Pro: 3.78 GHz / 6 cores", detail: "Modern phone CPUs match desktop performance while using 1/10th the power." },
    { emoji: "📸", label: "Camera", value: "12–200 MP, multiple lenses", detail: "Computational photography (HDR, night mode) matters more than megapixels alone." },
    { emoji: "🔋", label: "Battery", value: "3,000–5,000 mAh typical", detail: "Flagships last ~12 hours of active use. Larger phones have bigger batteries." },
    { emoji: "📡", label: "5G", value: "Up to 20 Gbps theoretical", detail: "5G uses mmWave (high speed, short range) and sub-6GHz (wider coverage)." },
    { emoji: "📅", label: "First Smartphone", value: "IBM Simon, 1994", detail: "The IBM Simon was the first smartphone — it had a touchscreen, email, and apps." },
  ],
  funFact:
    "The first iPhone was released in 2007. Before that, phones could only call and send texts. Today, there are over 6.8 billion smartphones in use — almost one for every person on Earth!",
  dos: [
    "Use a screen protector and case to protect from drops",
    "Keep software updated for security patches",
    "Turn on 'Do Not Disturb' during study time",
  ],
  donts: [
    "Don't use your phone while walking — accidents happen!",
    "Don't charge under a pillow — phones can overheat",
    "Don't share your password or personal details with strangers online",
  ],
  quiz: [
    {
      for: "5-7",
      question: "A smartphone can do all of these EXCEPT...?",
      choices: ["Make you breakfast", "Take photos", "Play games"],
      correct: 0,
      explanation: "Smartphones can take photos and play games — but they can't make breakfast (yet!). 😄",
    },
    {
      for: "5-7",
      question: "What are the two types of internet connection on a phone?",
      choices: ["Wi-Fi and Mobile Data", "Bluetooth and GPS", "Camera and Screen"],
      correct: 0,
      explanation: "Wi-Fi connects at home or school. Mobile data uses phone towers when you're out and about!",
    },
    {
      for: "8-10",
      question: "What does GPS do on a smartphone?",
      choices: [
        "Tells the phone exactly where in the world it is",
        "Makes calls faster",
        "Charges the battery wirelessly",
      ],
      correct: 0,
      explanation: "GPS (Global Positioning System) uses satellites to pinpoint your location — that's how maps apps know where you are!",
    },
    {
      for: "8-10",
      question: "What is the difference between iOS and Android?",
      choices: [
        "iOS runs on iPhones (Apple). Android runs on phones from Samsung, Google, and many others.",
        "iOS is faster, Android is slower",
        "They are exactly the same",
      ],
      correct: 0,
      explanation: "iOS is Apple's mobile OS — exclusive to iPhones and iPads. Android is Google's OS, used by Samsung, OnePlus, Xiaomi, and many more.",
    },
    {
      for: "11-14",
      question: "What is an ISP (Image Signal Processor) in a phone?",
      choices: [
        "A chip that processes raw camera sensor data into a final photo",
        "The internet connection chip",
        "The screen display driver",
      ],
      correct: 0,
      explanation: "The ISP converts raw sensor data into a processed image — applying noise reduction, HDR, colour correction. Modern ISPs power computational photography features like Night Mode.",
    },
    {
      for: "11-14",
      question: "What does an accelerometer measure?",
      choices: [
        "The direction and speed of device movement/tilt",
        "Screen brightness",
        "Battery temperature",
      ],
      correct: 0,
      explanation: "The accelerometer detects linear acceleration and tilt — it's why your screen rotates when you turn the phone, and how step-counters work.",
    },
  ],
};

export default lesson;
