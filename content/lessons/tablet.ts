import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "tablet",
  title: "What is a Tablet?",
  emoji: "📱",
  category: "devices",
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
