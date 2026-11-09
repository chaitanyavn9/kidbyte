import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "laptop",
  title: "What is a Laptop?",
  emoji: "💻",
  category: "devices",
  narrative: {
    "5-7": [
      { heading: "What if you could carry your computer to school every day?", text: "A desktop computer has lots of separate heavy parts — the big box, the monitor, the keyboard. You can't take it to the park or on a trip. A laptop solves this by putting everything — screen, keyboard, battery, and the computer itself — in one thin, light package you can carry anywhere." },
      { heading: "What makes a laptop special?", text: "A laptop has a screen that folds down over the keyboard when closed. Inside, it has the same parts as a desktop computer (CPU, RAM, storage) but designed to be smaller and use less power. And it has a battery so it works without being plugged in.", diagramId: "laptop-parts" },
      { heading: "Laptop vs desktop — same job, different form", text: "A laptop is portable — you can use it anywhere. A desktop is more powerful for the same price and easier to upgrade. Most students and adults use laptops for everyday tasks. Designers and gamers often prefer desktops for the extra power.", diagramId: "laptop-vs-desktop" },
      { heading: "In your daily life…", text: "School laptops, Chromebooks, MacBooks — these are all laptops. When choosing, consider: weight (lighter = more portable), battery life (longer = less stress), and screen size (bigger = easier to see, but heavier to carry)." },
    ],
    "8-10": [
      { heading: "Portability changed how people work and learn", text: "Before laptops became affordable (1990s–2000s), computing was tied to a desk. Laptops untethered people — students could work at the library, professionals could work from cafes, teachers could carry their whole lesson plan. Portability transformed computing from a fixed activity to a mobile one." },
      { heading: "What's packed inside a laptop", text: "Same components as a desktop but miniaturised: CPU (low-power mobile variant), RAM (usually soldered, not removable), NVMe SSD, integrated or discrete GPU, Wi-Fi + Bluetooth, webcam, microphone, speakers, battery, and all connected on one motherboard.", diagramId: "laptop-parts" },
      { heading: "Laptop vs desktop trade-offs", text: "Laptops: portable, all-in-one, battery-powered, quieter. Desktops: more performance per dollar, fully upgradeable, better cooling, easier to repair. For the same price, a desktop is typically 30–50% more powerful. But portability has a premium most students willingly pay.", diagramId: "laptop-vs-desktop" },
      { heading: "Categories of laptops", text: "Chromebooks: lightweight, cloud-focused, cheap, runs ChromeOS. Ultrabooks: ultra-thin, premium (MacBook Air, Dell XPS). Business laptops: durable, long battery (ThinkPad). Gaming laptops: powerful GPU, heavy, hot, short battery. 2-in-1: folds flat as a tablet (Surface Pro)." },
    ],
    "11-14": [
      { heading: "Laptop engineering constraints", text: "Every laptop design is a thermal, power, and space puzzle. The CPU must be powerful enough to be useful but cool enough to not burn the user's legs. Thinner = worse cooling = lower performance. The CPU TDP (Thermal Design Power) is the main constraint: Apple M3: 22W, Intel H-series: 55W, desktop i9: 253W." },
      { heading: "Mobile vs desktop CPUs", text: "Mobile CPUs (Intel U/P-series, AMD Ryzen Mobile, Apple Silicon) have lower TDP for battery life. They use efficiency cores (low power, background tasks) + performance cores (high power, active tasks). Apple Silicon (M1–M4) is especially efficient because it uses ARM RISC architecture and unified memory.", diagramId: "laptop-parts" },
      { heading: "Laptop vs desktop feature comparison", text: "RAM: laptops often solder it (not upgradeable). Desktop: standard DIMMs, easy to swap. GPU: laptop discrete GPUs are power-limited (RTX 4080 mobile ≠ RTX 4080 desktop). Storage: laptops use M.2 NVMe. Cooling: laptops use heat pipes + single fan; desktops use large heatsinks + multiple fans.", diagramId: "laptop-vs-desktop" },
      { heading: "Battery technology and laptop runtime", text: "Laptop batteries are measured in Wh (watt-hours). MacBook Pro 16: 100 Wh. Dell XPS 13: 55 Wh. Runtime depends on workload: browsing (5–10W) vs gaming (60W+). USB-C charging allows smaller charger bricks and can charge while in a meeting. Fast charging replenishes to 80% in ~30 minutes on modern laptops." },
    ],
    "15-18": [
      { heading: "Apple Silicon — the ARM revolution in laptops", text: "M1 (2020) moved Apple from Intel x86 to ARM64 (Apple Silicon). Benefits: 3× better performance per watt, integrated Neural Engine (ML accelerator), unified memory architecture (CPU and GPU share the same LPDDR5 pool). Consequence: x86 apps run via Rosetta 2 binary translation — often faster than native Intel equivalents." },
      { heading: "Thermal management and performance modes", text: "Laptops use dynamic frequency scaling to balance performance and thermal limits. Intel's EVO platform defines minimum CPU frequency, response time, and battery life targets. AMD's SmartShift moves power budget between CPU and GPU dynamically. Thunderbolt 4 eGPUs allow external GPU docks — desktop GPU performance on a laptop.", diagramId: "laptop-parts" },
      { heading: "Display technologies in laptops", text: "IPS: good colour, wide angles. OLED: perfect blacks, vivid colour, slight burn-in risk. Mini-LED: high brightness for HDR, no OLED aging issues. ProMotion (120Hz LTPO): dynamically scales from 1–120Hz — saves battery at low refresh, smooth at high. Display is typically the second biggest power consumer after the CPU.", diagramId: "laptop-vs-desktop" },
      { heading: "The future of laptops — AI PCs", text: "Intel Meteor Lake and Qualcomm Snapdragon X Elite added dedicated NPUs (Neural Processing Units) for local AI inference. Windows Copilot+ requires 40 TOPS NPU. This enables real-time AI translation, background removal, and AI-assisted writing entirely on-device — no internet needed. ARM-native Windows apps are growing rapidly as the platform matures." },
    ],
  },
  story: {
    "5-7":
      "A laptop is a computer you can carry anywhere! It's like a desktop computer that folded itself in half — the screen is on top, and the keyboard is on the bottom. You can use it on your lap (that's why it's called a LAP-top!), on a table, or even in bed. It runs on battery so you don't need to be near a plug all the time. It's your computer that travels with you!",
    "8-10":
      "A laptop is a portable computer that combines the monitor, keyboard, trackpad, speakers, and computer parts all into one slim package. It has a rechargeable battery so it works without being plugged in — usually for 6–12 hours. Laptops are thinner and lighter than desktop computers but usually a bit less powerful. They're perfect for school, travel, and working from anywhere.",
    "11-14":
      "A laptop is a portable personal computer integrating display, keyboard, trackpad, battery, and all components into a single chassis. Key tradeoffs vs desktops: soldered RAM and storage (harder to upgrade), thermal throttling under sustained load (less cooling headroom), but offering portability and integrated battery. Modern laptops use low-power CPUs (Intel Core Ultra, AMD Ryzen, Apple M-series) designed for performance-per-watt efficiency.",
  },
  analogy: {
    "5-7": "A laptop is like a lunchbox computer — everything is packed neatly inside and you can take it anywhere!",
    "8-10": "Like a Swiss Army knife — a full computer folded into one thin, portable package.",
    "11-14": "A thermally-constrained portable computing platform — power envelope is the primary design constraint.",
  },
  photo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&fit=crop",
  photoAlt: "Open laptop on a wooden desk with code on the screen",
  keyFacts: [
    { emoji: "💻", label: "Components", value: "CPU + RAM + SSD + Display + Battery", detail: "All desktop components shrunk and soldered together in a thin chassis." },
    { emoji: "⚡", label: "Power", value: "15–65W (vs 300–500W desktop)", detail: "Laptops use low-power variants of desktop processors. Efficiency over raw speed." },
    { emoji: "🔋", label: "Battery Life", value: "8–20 hours (typical)", detail: "MacBook Air M3 lasts up to 18 hours. Gaming laptops: 2–4 hours under load." },
    { emoji: "🌡️", label: "Cooling", value: "Thin copper heat pipes + small fan", detail: "Limited airflow means laptops throttle under sustained load more than desktops." },
    { emoji: "📏", label: "Display", value: "13\"–17\" (most common)", detail: "Measured diagonally. Resolution ranges from 1920×1080 (FHD) to 3840×2160 (4K)." },
    { emoji: "📅", label: "First Laptop", value: "Osborne 1, 1981 (10.7 kg!)", detail: "The first portable computer weighed 10.7 kg and had a 5\" screen. No battery!" },
  ],
  funFact:
    "The first laptop, the Osborne 1 (1981), weighed 11 kg — almost as heavy as a big bag of rice! Today's laptops weigh as little as 900 grams.",
  dos: [
    "Charge the battery before it drops below 20% regularly",
    "Keep the vents on the bottom clear — don't use it on a pillow or blanket",
    "Close the lid gently — the hinge is delicate",
  ],
  donts: [
    "Don't put heavy things on top of a closed laptop",
    "Don't charge it all night every night — it can wear the battery down over time",
    "Don't grab it by the screen — always hold it by the base",
  ],
  quiz: [
    {
      for: "5-7",
      question: "Why is it called a 'laptop'?",
      choices: ["Because you can use it on your lap", "Because it has a map inside", "Because it jumps like a frog"],
      correct: 0,
      explanation: "Lap + Top = Laptop! You can rest it on your lap and use it anywhere.",
    },
    {
      for: "5-7",
      question: "What keeps a laptop working without being plugged in?",
      choices: ["A battery", "Magic", "A very long wire"],
      correct: 0,
      explanation: "Laptops have a rechargeable battery — just like your toys or a phone!",
    },
    {
      for: "8-10",
      question: "What is one advantage of a laptop over a desktop?",
      choices: ["It's portable — you can carry it anywhere", "It's always faster", "It has a bigger screen"],
      correct: 0,
      explanation: "Portability is the laptop's superpower — battery + compact size = freedom to work anywhere!",
    },
    {
      for: "8-10",
      question: "What does a trackpad do on a laptop?",
      choices: [
        "It acts as a mouse — move your finger to move the cursor",
        "It charges the battery",
        "It connects to the internet",
      ],
      correct: 0,
      explanation: "The trackpad is a built-in mouse replacement — your finger's movement controls the cursor on screen.",
    },
    {
      for: "11-14",
      question: "What is 'thermal throttling' in a laptop?",
      choices: [
        "When the CPU slows itself down to prevent overheating",
        "When the screen dims to save power",
        "When the battery charges faster",
      ],
      correct: 0,
      explanation: "Laptops have limited cooling space, so under heavy load the CPU reduces its clock speed to stay within safe temperatures — this is thermal throttling.",
    },
    {
      for: "11-14",
      question: "Why do laptop CPUs differ from desktop CPUs?",
      choices: [
        "They are designed for performance-per-watt efficiency, not raw peak speed",
        "They are always faster",
        "They don't need cooling",
      ],
      correct: 0,
      explanation: "Laptop CPUs prioritise battery life and heat management. Apple's M-series chips are famous for exceptional performance-per-watt.",
    },
  ],
};

export default lesson;
