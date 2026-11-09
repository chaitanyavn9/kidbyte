import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "binary",
  title: "Binary & How Computers Count",
  emoji: "🔢",
  category: "machine-world",
  narrative: {
    "5-7": [
      { heading: "Imagine a room full of light switches…", text: "Each switch is either ON or OFF. That's it — just two choices. Now imagine lining up 8 switches in a row. You can make 256 different patterns! Computers use exactly this idea. Every piece of information — a letter, a number, a colour — is stored as a pattern of ONs and OFFs." },
      { heading: "Why only two choices?", text: "Electricity is either flowing or not flowing. It's the simplest possible signal — no guessing, no in-between. Computers use millions of tiny switches (transistors) that are either ON (1) or OFF (0). That's binary.", diagramId: "binary-switches" },
      { heading: "Counting in binary", text: "In normal counting we have 10 digits (0–9). In binary we only have 2 digits — 0 and 1. So after 1 we can't write 2, we write 10. After 11 comes 100. It looks strange but it's just counting with only two symbols!", diagramId: "binary-numbers" },
      { heading: "In your daily life…", text: "The letter 'A' is stored as 01000001 in every computer in the world. Numbers, photos, music, videos — everything is secretly a long string of 0s and 1s. Computers are just very fast switch-flippers." },
    ],
    "8-10": [
      { heading: "Every computer is a giant pattern-maker", text: "Deep inside every computer are billions of tiny transistors — switches too small to see. Each switch holds exactly one bit: a 0 or a 1. Everything your computer stores — text, images, games — is ultimately a very long pattern of these bits." },
      { heading: "Why binary and not decimal?", text: "Electronics use voltage levels. It's easy to tell 'high voltage' from 'low voltage' — that's 1 and 0. Using 10 voltage levels for decimal would be error-prone: even a tiny electrical noise could change a 7 into an 8. Binary is robust.", diagramId: "binary-switches" },
      { heading: "Binary counting", text: "Each position in a binary number represents a power of 2: 1, 2, 4, 8, 16... The binary number 1011 = 8+0+2+1 = 11 in decimal. With 8 bits (1 byte) you can represent 256 different values (0–255).", diagramId: "binary-numbers" },
      { heading: "Real uses of binary", text: "ASCII uses 7 bits to represent every English letter and symbol. Colours are stored as 3 bytes (RGB — 0–255 for each channel). Sound is stored as thousands of amplitude values per second, each a binary number." },
    ],
    "11-14": [
      { heading: "Binary is the hardware's native language", text: "Transistors are voltage-controlled switches. 'High' voltage ≈ 1, 'Low' voltage ≈ 0. Every logic gate (AND, OR, NOT, XOR) operates on binary inputs. Arithmetic, comparisons, and memory are all implemented using combinations of these gates." },
      { heading: "Positional notation in base-2", text: "In base-10, the digit positions represent 10⁰, 10¹, 10², ... In base-2 they represent 2⁰, 2¹, 2², ... The 8-bit byte 11001010 = 128+64+0+0+8+0+2+0 = 202. With n bits you can represent 2ⁿ unique values.", diagramId: "binary-numbers" },
      { heading: "Interactive: flip the switches", text: "Try toggling bits to see the decimal value change. Each bit doubles the value of the previous position — the leftmost bit (MSB) is worth 128, the rightmost (LSB) is worth 1.", diagramId: "binary-switches" },
      { heading: "Binary in real systems", text: "IPv4 addresses are 32-bit binary numbers written as four 8-bit groups (octets) in decimal: 192.168.1.1. Colours in hex (#FF5733) are three 8-bit binary values written in hexadecimal shorthand. Machine code instructions are binary patterns the CPU decodes." },
    ],
    "15-18": [
      { heading: "CMOS transistors — the physical binary", text: "Modern CPUs use CMOS (Complementary Metal-Oxide-Semiconductor) logic. Each bit is stored by a pair of transistors (NMOS + PMOS). Logic families define voltage thresholds: Vih (input high) and Vil (input low), with noise margins to prevent misreads. At 3nm, a transistor is ~15 atoms across." },
      { heading: "Two's complement — negative numbers in binary", text: "Unsigned 8-bit: 0–255. Signed two's complement 8-bit: -128 to +127. To negate: flip all bits then add 1. This design means addition hardware works identically for positive and negative numbers — no separate subtraction circuit needed.", diagramId: "binary-numbers" },
      { heading: "Bit manipulation in systems programming", text: "Bitwise ops (AND, OR, XOR, NOT, shifts) are single CPU instructions. Common idioms: check bit n: (x >> n) & 1. Set bit n: x | (1 << n). Clear bit n: x & ~(1 << n). Toggle: x ^ (1 << n). These appear constantly in device drivers, compression, and crypto.", diagramId: "binary-switches" },
      { heading: "Beyond binary — quantum bits", text: "Classical bits are deterministically 0 or 1. Qubits can be in superposition — both simultaneously until measured. Quantum computers exploit this for certain algorithms (Shor's factoring, Grover's search) that are exponentially faster. Current machines have ~1000 noisy qubits; practical quantum advantage for general computing is still years away." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700&fit=crop",
  photoAlt: "Binary 0 and 1 digits glowing on a dark digital background",
  keyFacts: [
    { emoji: "0️⃣", label: "Only Two Digits", value: "0 and 1", detail: "Every piece of data in a computer — photos, music, text — is made of billions of 0s and 1s." },
    { emoji: "⚡", label: "Why Binary?", value: "Electricity = ON or OFF", detail: "Transistors have two states: conducting (1) or not (0). Perfect for binary." },
    { emoji: "🔢", label: "1 Byte", value: "8 bits = 256 possible values", detail: "8 bits can represent values from 0 (00000000) to 255 (11111111)." },
    { emoji: "📝", label: "Text in Binary", value: "'A' = 01000001", detail: "The letter A is ASCII code 65, which is 01000001 in binary." },
    { emoji: "🖼️", label: "Image in Binary", value: "24 bits per pixel (RGB)", detail: "A 12MP photo = 36 million bytes = ~36 MB of raw binary data." },
    { emoji: "📅", label: "Binary Math", value: "Used since 1679 (Leibniz)", detail: "Gottfried Leibniz described the modern binary number system in 1679." },
  ],
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
