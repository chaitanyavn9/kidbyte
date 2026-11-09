import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hexadecimal",
  title: "What is Hexadecimal?",
  emoji: "🔣",
  category: "machine-world",
  narrative: {
    "5-7": [
      { heading: "What if counting only went 0 to F?", text: "We use 10 symbols to count (0–9). Binary computers use 2 symbols (0, 1). But there's a third counting system computers love: hexadecimal, which uses 16 symbols — the digits 0–9 and then the letters A, B, C, D, E, F for 10 through 15." },
      { heading: "Why hexadecimal?", text: "Hexadecimal (or 'hex') is a shortcut for binary. One hex digit = exactly 4 binary bits. So instead of writing 11110000, you can write F0. That's much shorter and easier to read! Programmers love hex.", diagramId: "hex-table" },
      { heading: "Where do you see hex?", text: "Website colours like #FF5733 are hex! Memory addresses in programs are written in hex. File sizes and computer code often use hex. Those two mysterious characters 'FF' or '1A' in computer messages — that's hex!", diagramId: "hex-in-code" },
      { heading: "In your daily life…", text: "Open any website and look at the page source code — colours are written as #RRGGBB in hex. Each pair (RR, GG, BB) is a hex byte (00–FF) representing the red, green, and blue values." },
    ],
    "8-10": [
      { heading: "Binary is unreadable, decimal doesn't map cleanly", text: "A memory address like 11111111000000001010101001010101 in binary is a nightmare to read. In decimal it's 4278582101 — better but doesn't map to byte boundaries. In hex: FF00AA55 — four bytes, clearly readable. Each hex digit is exactly 4 bits (a nibble)." },
      { heading: "Hexadecimal counting table", text: "Decimal 0–15 maps to hex 0–F. Decimal 16 = hex 10. Decimal 255 = hex FF (maximum for one byte). Decimal 256 = hex 100. This perfect correspondence with bytes (8 bits = 2 hex digits) is why hex is so useful in computing.", diagramId: "hex-table" },
      { heading: "Hex in real code", text: "CSS colours: #FF5733 (Red=255, Green=87, Blue=51). Memory addresses: 0x7FFF5FBFF8A0. File signatures: JPEG files start with FF D8 FF. Unicode code points: U+1F600 (the 😀 emoji). Hex appears wherever bytes matter.", diagramId: "hex-in-code" },
      { heading: "Converting hex to decimal", text: "FF = (15 × 16) + 15 = 240 + 15 = 255. 1A = (1 × 16) + 10 = 26. 2B4 = (2 × 256) + (11 × 16) + 4 = 512 + 176 + 4 = 692. Each position is a power of 16: 16⁰=1, 16¹=16, 16²=256, 16³=4096." },
    ],
    "11-14": [
      { heading: "Number bases and their relationships", text: "Base-10 (decimal): digits 0–9, positions are powers of 10. Base-2 (binary): digits 0–1, positions are powers of 2. Base-16 (hex): digits 0–F, positions are powers of 16. Because 16 = 2⁴, one hex digit maps exactly to 4 binary bits — conversions between binary and hex are trivial." },
      { heading: "Hex arithmetic", text: "Adding: A + 7 = 11 hex (carry 1). FF + 1 = 100 hex (carry twice). Bitwise AND: FA & 0F = 0A (mask lower nibble). OR: 70 | 05 = 75. These operations are fundamental in device drivers, network code, and compression algorithms.", diagramId: "hex-table" },
      { heading: "Hex in systems programming", text: "Memory addresses: mov rax, [0xFFFF800000000000]. Bit masks: 0x80 = 10000000 (test/set MSB). Magic numbers: ELF files start with 7F 45 4C 46 (0x7F 'E' 'L' 'F'). UUID: 550e8400-e29b-41d4-a716-446655440000. Learning hex fluency is essential for low-level work.", diagramId: "hex-in-code" },
      { heading: "Two's complement in hex", text: "Signed 32-bit: 0x7FFFFFFF = max positive (2,147,483,647). 0x80000000 = min negative (-2,147,483,648). 0xFFFFFFFF = -1. 0x00000000 = 0. Reading 32-bit hex values as signed or unsigned — and knowing which applies — is a common source of bugs in C/C++ code." },
    ],
    "15-18": [
      { heading: "Positional notation proof and conversions", text: "Hex-to-binary: each hex digit maps directly to 4 bits (memorise: 0→0000, A→1010, F→1111). Decimal-to-hex: repeatedly divide by 16 and collect remainders. 2024 ÷ 16 = 126 R8, 126 ÷ 16 = 7 R14 (E), 7 ÷ 16 = 0 R7. So 2024₁₀ = 7E8₁₆." },
      { heading: "IEEE 754 hex representation", text: "float 1.0 = 0x3F800000. float -1.0 = 0xBF800000. float infinity = 0x7F800000. Reading IEEE 754 as hex immediately reveals sign (MSB), exponent (next 8 bits), and mantissa. Essential for debugging floating-point edge cases in numerics code.", diagramId: "hex-table" },
      { heading: "Hex in security and reverse engineering", text: "File signatures (magic bytes) identify formats: 50 4B = PK (ZIP). 89 PNG... IHDR. ELF headers. Network protocol inspection in Wireshark. Disassembly output shows opcodes as hex bytes: 48 B8 = mov rax. Hex fluency is a core skill in security research.", diagramId: "hex-in-code" },
      { heading: "Base-64 — the web's encoding", text: "Base-64 is NOT base-16 but deserves mention here: it encodes 3 bytes as 4 ASCII characters using A-Z, a-z, 0-9, +, /. Used for embedding binary data in text: images in HTML data URIs (data:image/png;base64,...), HTTP Basic Auth, JWT tokens. Base-64 encoding increases size by 33%." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&fit=crop",
  photoAlt: "Terminal window with hex dump showing data as hexadecimal values",
  keyFacts: [
    { emoji: "🔢", label: "Base", value: "Base-16 (0–9 then A–F)", detail: "After 9, hex uses A=10, B=11, C=12, D=13, E=14, F=15." },
    { emoji: "📦", label: "1 Byte", value: "2 hex digits (00–FF)", detail: "One byte = 8 bits = exactly two hex digits. Much easier to read than 8 binary digits." },
    { emoji: "🖥️", label: "Memory Addresses", value: "0x7FFF5FBFF8A0", detail: "RAM addresses are written in hex. The 0x prefix marks a hexadecimal number." },
    { emoji: "🎨", label: "Colors", value: "#FF5733 → R=255 G=87 B=51", detail: "Every CSS color is 3 bytes of hex: one each for red, green, and blue." },
    { emoji: "⚡", label: "1 Hex Digit", value: "Represents 4 bits", detail: "F = 1111 in binary. So every hex digit is exactly a nibble (half a byte)." },
    { emoji: "💻", label: "Used In", value: "Assembly, debuggers, color codes", detail: "Assembly language, machine code dumps, and color systems all use hexadecimal." },
  ],
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
