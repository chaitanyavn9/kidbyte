import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "laptop",
  title: "What is a Laptop?",
  emoji: "💻",
  category: "devices",
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
