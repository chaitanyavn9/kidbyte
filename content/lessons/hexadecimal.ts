import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hexadecimal",
  title: "What is Hexadecimal?",
  emoji: "🔣",
  category: "machine-world",
  story: {
    "5-7": "We count using 10 numbers: 0,1,2,3,4,5,6,7,8,9. Computers sometimes use a special counting system with 16 symbols: 0–9 and then A,B,C,D,E,F! A=10, B=11, C=12, D=13, E=14, F=15. So instead of writing 255, a computer might write FF! This is called Hexadecimal — and it's a clever shortcut for writing big numbers with fewer letters.",
    "8-10": "Hexadecimal (hex) is base-16 counting — 16 digits: 0123456789ABCDEF. It's a shortcut for binary — every 4 bits can be written as one hex digit. So instead of writing 11111111 (8 bits), you write FF. Hex is used everywhere in computing: colour codes (#1D7CFF = blue), memory addresses (0x7FFF), and file editors. The '0x' prefix means the number that follows is in hex.",
    "11-14": "Hex (base-16) maps directly to binary nibbles (4 bits): 0=0000, F=1111. One byte (8 bits) = 2 hex digits (00–FF = 0–255). This 1-nibble-per-digit correspondence makes hex far more readable than raw binary for debugging memory dumps, colour values (#RRGGBB), IPv6 addresses, SHA hashes, and machine code. Hex arithmetic follows the same rules as decimal but with carries at 16 instead of 10.",
  },
  analogy: {
    "5-7": "Hex is like a special shortcut alphabet that computers use to write big numbers with fewer symbols.",
    "8-10": "Like emoji shortcuts — instead of writing 'laughing face', you write 😂. Hex writes long binary numbers with just 2 characters.",
    "11-14": "A compact human-readable representation of binary nibbles — each hex digit maps bijectively to 4 bits.",
  },
  funFact: "Every colour on your screen has a hex code! Pure red is #FF0000, pure blue is #0000FF, and white is #FFFFFF. Web designers use these hex codes to paint the internet!",
  dos: ["Look at colour pickers — they always show hex codes, great for practice", "Remember: 0x prefix means hexadecimal (e.g., 0xFF = 255)"],
  donts: ["Don't confuse hex letters (A–F) with regular letters — they represent numbers 10–15"],
  quiz: [
    { for: "5-7", question: "What number does 'F' represent in hexadecimal?", choices: ["15", "6", "10"], correct: 0, explanation: "In hex: A=10, B=11, C=12, D=13, E=14, F=15. It goes beyond 9 using letters!" },
    { for: "8-10", question: "What is the hex code for pure white (#FFFFFF) in decimal?", choices: ["255, 255, 255 (RGB each at maximum)", "0, 0, 0", "128, 128, 128"], correct: 0, explanation: "FF in hex = 255 in decimal. #FFFFFF means R=255, G=255, B=255 — all colours at full brightness = white!" },
    { for: "11-14", question: "How many bits does one hexadecimal digit represent?", choices: ["4 bits (a nibble)", "8 bits (a byte)", "1 bit"], correct: 0, explanation: "One hex digit maps to exactly one nibble (4 bits): 0=0000 through F=1111. Two hex digits = one byte." },
  ],
};
export default lesson;
