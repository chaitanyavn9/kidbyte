import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "binary",
  title: "Binary & How Computers Count",
  emoji: "🔢",
  category: "machine-world",
  story: {
    "5-7":
      "Computers only understand two things: ON and OFF — just like a light switch! We write ON as 1 and OFF as 0. Using just these two numbers, computers can count, write words, show pictures — everything! It's like a secret language of 1s and 0s called Binary.",
    "8-10":
      "Binary is base-2 counting — instead of 10 digits (0-9) like we use, computers use only 2 digits: 0 and 1. Each 0 or 1 is called a 'bit'. 8 bits = 1 byte. The letter 'A' in binary is 01000001. Your name can be written as a series of 0s and 1s! Computers use binary because electronic circuits are either ON (1) or OFF (0).",
    "11-14":
      "Binary (base-2) maps perfectly to transistor states: high voltage = 1, low voltage = 0. A single bit represents 2 states. N bits represent 2^N states. 8 bits = 1 byte = 256 possible values (0–255). ASCII maps characters to byte values. UTF-8 extends this for all world languages. Binary arithmetic (AND, OR, XOR, NOT) forms the foundation of all computation.",
  },
  analogy: {
    "5-7": "Light switches — ON is 1, OFF is 0. Computers talk using millions of tiny light switches!",
    "8-10":
      "Morse code uses dots and dashes. Binary uses 0s and 1s. Both are secret codes with just two symbols!",
    "11-14":
      "Boolean algebra mapped to physical transistor states — the entire edifice of computation built on two voltage levels.",
  },
  funFact:
    "The word 'bit' is short for 'Binary digIT'. The concept of binary was described by mathematician Gottfried Wilhelm Leibniz in 1703 — over 200 years before computers existed!",
  dos: [
    "Try converting your name to binary — it's fun!",
    "Remember: 8 bits = 1 byte",
    "Use binary to understand how computers really think",
  ],
  donts: [
    "Don't confuse binary (base-2) with decimal (base-10)",
    "Don't think computers are magic — it's all just 0s and 1s!",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What are the only two numbers computers understand?",
      choices: ["0 and 1", "1 and 2", "Yes and No"],
      correct: 0,
      explanation: "Computers use 0 (OFF) and 1 (ON) — like millions of tiny light switches!",
    },
    {
      for: "5-7",
      question: "What is binary like?",
      choices: ["Light switches — ON and OFF", "A rainbow of colors", "A big calculator"],
      correct: 0,
      explanation:
        "Binary is just like light switches — each switch is either ON (1) or OFF (0)!",
    },
    {
      for: "8-10",
      question: "How many bits make one byte?",
      choices: ["8", "4", "16"],
      correct: 0,
      explanation: "8 bits = 1 byte. This is one of the most important numbers in computing!",
    },
    {
      for: "8-10",
      question: "What is the binary for the number 2?",
      choices: ["10", "01", "11"],
      correct: 0,
      explanation:
        "In binary: 0=0, 1=1, 2=10, 3=11, 4=100... Each position doubles in value!",
    },
    {
      for: "11-14",
      question: "How many values can 8 bits (1 byte) represent?",
      choices: ["256 (0 to 255)", "128", "512"],
      correct: 0,
      explanation: "2^8 = 256 possible values. This is why colors are often 0-255 for each RGB channel!",
    },
    {
      for: "11-14",
      question: "What is the binary representation of the decimal number 10?",
      choices: ["1010", "1100", "0101"],
      correct: 0,
      explanation:
        "10 = 8+2 = 1010 in binary. Position values are: 8,4,2,1 → 1×8 + 0×4 + 1×2 + 0×1 = 10",
    },
  ],
};

export default lesson;
