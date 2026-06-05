import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "ram",
  title: "What is RAM?",
  emoji: "📚",
  category: "components",
  story: {
    "5-7":
      "RAM is like your study table! When you're doing homework, you take your books OUT of the cupboard and put them ON the table so you can work with them easily. When you finish and close your books, the table is empty again. RAM works the same way — it holds the things your computer is currently using. When you turn off your computer, the table clears!",
    "8-10":
      "RAM stands for Random Access Memory. It's super-fast temporary storage where your computer keeps everything it's currently working on — open apps, web pages, your game level. More RAM means you can have more things open at once. When you restart your computer, RAM is completely wiped clean.",
    "11-14":
      "RAM is volatile memory — it loses all data when power is cut. It's the CPU's working area: when a program runs, its code and data are loaded from storage (SSD/HDD) into RAM for fast access. RAM speed is measured in MHz/MT/s and size in GB. More RAM means larger working sets and fewer slow disk reads (thrashing).",
  },
  analogy: {
    "5-7":
      "Your study table — you put open books on it while studying. When done, you put books back in the cupboard (storage) and the table is clear!",
    "8-10":
      "A whiteboard in class — you write on it while teaching, erase it after. Fast to use, gone when wiped.",
    "11-14":
      "The CPU's working register extended — a fast volatile buffer between persistent storage and the processor.",
  },
  funFact:
    "The first RAM chip was invented in 1966. Today, a modern computer has up to 192GB of RAM — enough to store 40 million pages of text!",
  dos: [
    "Close browser tabs you're not using — each tab uses RAM",
    "Restart your computer occasionally to clear RAM",
    "Check how much RAM apps use in Task Manager / Activity Monitor",
  ],
  donts: [
    "Don't keep 50 tabs open if your computer feels slow",
    "Don't confuse RAM with storage — they're very different!",
    "Don't run out of RAM — your computer uses the slow disk as backup (swap) and slows to a crawl",
  ],
  quiz: [
    {
      for: "5-7",
      question: "RAM is like your computer's...?",
      choices: ["Study table", "Cupboard", "Screen"],
      correct: 0,
      explanation:
        "Just like your study table holds open books while you work, RAM holds open programs while the computer works!",
    },
    {
      for: "5-7",
      question: "What happens to RAM when you turn off the computer?",
      choices: ["Everything is erased", "It saves everything", "It gets faster"],
      correct: 0,
      explanation:
        "RAM is like a table — when you leave the room (turn off), everything on the table is cleared!",
    },
    {
      for: "8-10",
      question: "What does RAM stand for?",
      choices: ["Random Access Memory", "Read And Move", "Really Amazing Memory"],
      correct: 0,
      explanation: "Random Access Memory — any location can be accessed instantly, in any order!",
    },
    {
      for: "8-10",
      question: "What happens when your computer runs out of RAM?",
      choices: [
        "It uses the slow hard disk instead and becomes sluggish",
        "It crashes immediately",
        "It asks you to buy more",
      ],
      correct: 0,
      explanation:
        "When RAM is full, the OS uses 'swap' space on the much slower disk — this is why your computer slows down!",
    },
    {
      for: "11-14",
      question: "Why is RAM called 'volatile' memory?",
      choices: [
        "It loses all data when power is removed",
        "It explodes if overloaded",
        "It changes speed randomly",
      ],
      correct: 0,
      explanation:
        "Volatile means it requires continuous power to maintain data. Cut the power and all RAM contents vanish.",
    },
    {
      for: "11-14",
      question: "What is 'thrashing' in the context of RAM?",
      choices: [
        "When the OS constantly swaps data between RAM and disk due to insufficient RAM",
        "When the CPU overheats",
        "When files get corrupted",
      ],
      correct: 0,
      explanation:
        "Thrashing occurs when a system spends more time swapping pages than actually executing processes — a severe performance bottleneck.",
    },
  ],
};

export default lesson;
