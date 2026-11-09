import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "tablet",
  title: "What is a Tablet?",
  emoji: "📱",
  category: "devices",
  narrative: {
    "5-7": [
      { heading: "What if your book, TV, and drawing pad were all one thing?", text: "A tablet is a big flat touchscreen — bigger than a phone but smaller than a laptop. You touch the screen directly instead of using a keyboard and mouse. It's great for watching videos, reading books, drawing, and playing games." },
      { heading: "What is a tablet?", text: "A tablet is a portable computer with a large touchscreen (7–13 inches). It runs the same apps as a smartphone (iOS or Android) but on a bigger screen. Some tablets can connect to a keyboard and act more like a laptop.", diagramId: "tablet-use-cases" },
      { heading: "Tablet vs phone vs laptop", text: "Phone: fits in a pocket, calls and messages. Tablet: bigger screen, great for media and drawing, too big for a pocket. Laptop: has a physical keyboard, best for typing and creating things. Many people use all three for different tasks.", diagramId: "tablet-vs-laptop" },
      { heading: "In your daily life…", text: "iPads, Samsung Galaxy Tabs, and Amazon Fire tablets are all tablets. Artists use them with styluses to draw. Students use them to read textbooks. Kids use them for learning apps. Doctors use them in hospitals to check patient records." },
    ],
    "8-10": [
      { heading: "The tablet was supposed to replace laptops — and partially did", text: "When Apple launched the iPad in 2010, Steve Jobs called it a 'third category' between phone and laptop. Tablet sales peaked in 2014 and declined as phones got bigger. Today, tablets occupy a niche: media consumption, drawing, and light productivity — especially with a detachable keyboard." },
      { heading: "What tablets are best for", text: "Reading: large screen, light weight, great for ebooks and PDFs. Drawing: pressure-sensitive stylus (Apple Pencil, Samsung S Pen) enables precise illustration. Media: wide 16:9 or 4:3 screen, good speakers, Netflix/YouTube. Light work: email, presentations, notes — with a keyboard attachment.", diagramId: "tablet-use-cases" },
      { heading: "Tablet vs laptop — honest comparison", text: "Tablets: lighter (400–700g), longer battery (10–13h), touch-first apps, mobile OS. Laptops: physical keyboard always present, desktop software, better for creating content (typing, coding). The keyboard is the key difference: if you type a lot, a laptop wins. If you mostly consume content, a tablet is enough.", diagramId: "tablet-vs-laptop" },
      { heading: "iPad Pro vs budget tablets", text: "iPad Pro: M2/M4 chip (laptop power), 120Hz ProMotion display, Apple Pencil Pro support, starts at $999. Amazon Fire 7: $60, good for kids' media, limited apps. The difference is software ecosystem and performance. For schoolwork, a mid-range iPad (~$329) balances price and capability." },
    ],
    "11-14": [
      { heading: "Tablets as converged devices", text: "iPad Pro with M4 chip and Magic Keyboard is a laptop-class device running mobile apps. Microsoft Surface Pro 10 runs full Windows on a tablet form factor. The boundary between tablet and laptop is dissolving. The question isn't 'is it a tablet?' but 'does the form factor match your workflow?'" },
      { heading: "iPad ecosystem — hardware + software integration", text: "iPad Pro's M4 chip is the same silicon as MacBook Pro — 10-core CPU, 10-core GPU, 16GB unified memory. The differentiation is software: iPadOS supports multitasking (Stage Manager), external display, full Files app, but still lacks Xcode, Final Cut Pro's full feature set, and USB peripherals of macOS.", diagramId: "tablet-use-cases" },
      { heading: "Stylus technology — pressure and tilt sensing", text: "Apple Pencil Pro uses a Bluetooth + capacitive tip. It senses pressure (256 levels), tilt, and hover distance. Barrel roll (rotation) is detected via IMU. Latency is <9ms — essentially imperceptible. Artists use this for natural brush feel in Procreate. Samsung S Pen uses Wacom EMR (electromagnetic resonance) — no battery needed.", diagramId: "tablet-vs-laptop" },
      { heading: "Mobile OS on tablets — limitations", text: "iPadOS is a modified iOS. Limitations: no traditional file system access, can't run x86/x64 software, single app per stage without Pro multitasking. Android tablets have better file system access but many apps are designed for phone aspect ratios and look stretched. This is why developers often target iPadOS first for tablet apps." },
    ],
    "15-18": [
      { heading: "M4 iPad Pro — the ARM laptop that isn't a laptop", text: "M4 iPad Pro (2024): 3nm Apple Silicon, up to 16GB unified memory, Tandem OLED display (2× OLED stacked for double brightness). Performance equals MacBook Pro M3. But iPadOS's sandbox restricts running arbitrary processes, background compute, and system-level code. The hardware capability far exceeds what the OS allows." },
      { heading: "iPad as a creative professional tool", text: "Procreate on iPad uses Metal GPU API for 120fps brush rendering across 100 layers at 4K resolution — only possible because of M-series GPU. Logic Pro for iPad runs a full professional DAW. Final Cut Pro for iPad processes 4K video in real time. These 'pro' apps prove iPadOS can handle professional workflows.", diagramId: "tablet-use-cases" },
      { heading: "Windows on tablet form factors", text: "Surface Pro runs x86-64 Windows — no software restrictions. Intel Core Ultra 5/7 at 15W TDP in a 900g chassis. The tradeoff: shorter battery (8h vs iPad's 12h), heavier, fans required. ASUS ROG Flow Z13 is a gaming tablet with an external GPU dock — the extreme end of the tablet form factor.", diagramId: "tablet-vs-laptop" },
      { heading: "The future of tablets — AR/MR integration", text: "Apple Vision Pro (visionOS) is a tablet concept evolved into a spatial computing device — virtual screens in physical space. The next iPad iteration may integrate eye tracking and spatial awareness. Android tablets experiment with foldable displays (Samsung Galaxy Fold). The tablet's future is convergence with AR — a window into augmented space rather than a flat screen." },
    ],
  },
  story: {
    "5-7":
      "A tablet is like a big phone that you use with your fingers! It's a flat screen — no keyboard, no mouse — you tap, swipe, and pinch with your fingers to do everything. You can watch cartoons, draw pictures, play games, and read books on it. It fits in a bag easily and is perfect for kids to carry around. The iPad is a very famous tablet!",
    "8-10":
      "A tablet is a portable touchscreen computer — thinner and lighter than a laptop, bigger than a phone. Instead of a keyboard and mouse, you use your fingers directly on the glass screen. Tablets use the same kind of processors as phones (called ARM chips) which are very efficient on battery. They're great for watching videos, drawing, reading, and light work. Popular tablets: iPad, Samsung Galaxy Tab.",
    "11-14":
      "A tablet is a mobile computing device with a touchscreen as its primary interface, typically running a mobile OS (iPadOS, Android). They use ARM-based SoCs (System on Chip) — like Apple's A-series or Qualcomm Snapdragon — which integrate CPU, GPU, RAM, and modem onto a single chip for power efficiency. The multi-touch capacitive screen detects multiple simultaneous touch points using changes in electrical charge.",
  },
  analogy: {
    "5-7": "A tablet is like a magic window — tap it with your finger and things happen!",
    "8-10": "Like a giant smartphone — same touch controls, bigger screen, better for watching and drawing.",
    "11-14": "A mobile SoC platform with a capacitive multi-touch display as the primary HID (Human Interface Device).",
  },
  photo: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&fit=crop",
  photoAlt: "Tablet device with stylus showing creative and productivity use cases",
  keyFacts: [
    { emoji: "📱", label: "Screen Size", value: "7\"–13\" (most tablets)", detail: "iPad Mini: 8.3\". iPad Pro: 12.9\". Android tablets range from 7\" to 14\"." },
    { emoji: "🖊️", label: "Stylus", value: "Apple Pencil: 240 Hz, 0.4mm tip", detail: "High-end styli detect pressure and tilt for natural drawing. Latency under 9ms." },
    { emoji: "⚡", label: "Chip", value: "iPad Pro: Apple M4 (desktop-class)", detail: "iPad Pro uses the same chip as MacBook Air — it's faster than most laptops." },
    { emoji: "🔋", label: "Battery", value: "10,000–12,000 mAh (all-day)", detail: "Tablets have bigger batteries than phones — typically 10+ hours of screen-on time." },
    { emoji: "🌐", label: "OS Options", value: "iPadOS, Android, Windows", detail: "iPad runs iPadOS. Android tablets run Android. Surface Pro runs full Windows 11." },
    { emoji: "📅", label: "First iPad", value: "Apple iPad, April 2010", detail: "Steve Jobs unveiled the iPad in January 2010. It sold 300,000 units on day one." },
  ],
  funFact:
    "The first iPad was released in 2010. Steve Jobs said it was 'magical'. Within 80 days, Apple sold 3 million iPads — one every 3 seconds!",
  dos: [
    "Use a case to protect the screen and back",
    "Clean the screen with a soft microfibre cloth — never paper towel",
    "Update the software to keep it safe and fast",
  ],
  donts: [
    "Don't leave it in a hot car — heat damages the battery permanently",
    "Don't use harsh chemicals to clean the screen",
    "Don't let the battery drain to 0% too often",
  ],
  quiz: [
    {
      for: "5-7",
      question: "How do you control a tablet?",
      choices: ["With your fingers on the screen", "With a keyboard", "With a joystick"],
      correct: 0,
      explanation: "Tablets are all about touch! Tap, swipe, and pinch with your fingers.",
    },
    {
      for: "5-7",
      question: "Which of these is a famous tablet?",
      choices: ["iPad", "MacBook", "PlayStation"],
      correct: 0,
      explanation: "The iPad by Apple is one of the most famous tablets in the world!",
    },
    {
      for: "8-10",
      question: "What type of processor do most tablets use?",
      choices: ["ARM chip — same type as phones, very battery-efficient", "Desktop CPU", "GPU only"],
      correct: 0,
      explanation: "ARM processors are designed to use very little power — perfect for portable devices like tablets and phones.",
    },
    {
      for: "8-10",
      question: "What is the main way you interact with a tablet?",
      choices: [
        "Multi-touch screen — tap and swipe with fingers",
        "Voice only",
        "A wireless mouse",
      ],
      correct: 0,
      explanation: "The capacitive touchscreen detects your fingers — supporting taps, swipes, pinch-to-zoom and more!",
    },
    {
      for: "11-14",
      question: "What does SoC stand for?",
      choices: ["System on Chip", "Screen of Colour", "Speed of CPU"],
      correct: 0,
      explanation: "SoC (System on Chip) integrates CPU, GPU, RAM, and connectivity onto a single chip — this is why phones and tablets are so compact and power-efficient.",
    },
    {
      for: "11-14",
      question: "How does a capacitive touchscreen detect your finger?",
      choices: [
        "Your finger changes the electrical charge on the screen's surface",
        "Infrared beams detect finger position",
        "The screen reads your fingerprint",
      ],
      correct: 0,
      explanation: "Capacitive screens have a grid of electrodes. Your finger (which conducts electricity) disrupts the charge at the touch point — the phone calculates exactly where you touched.",
    },
  ],
};

export default lesson;
