import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "bits-bytes",
  title: "Bits, Bytes, KB, MB, GB...",
  emoji: "📦",
  category: "machine-world",
  story: {
    "5-7": "One tiny 0 or 1 is called a BIT — the smallest piece of information! 8 bits together make a BYTE — enough to store one letter. 1000 bytes = 1 Kilobyte (KB). 1000 KB = 1 Megabyte (MB). 1000 MB = 1 Gigabyte (GB). A photo is about 3 MB. A song is about 5 MB. A movie is about 1,500 MB (1.5 GB). Your phone might have 128 GB — enough for LOTS of songs and photos!",
    "8-10": "Bit = 0 or 1 (smallest unit). Byte = 8 bits = 1 character. Kilobyte (KB) = 1,024 bytes. Megabyte (MB) = 1,024 KB. Gigabyte (GB) = 1,024 MB. Terabyte (TB) = 1,024 GB. A text message is a few KB. A photo is 2–5 MB. A 4K movie is 50–100 GB. A hard drive is 1–4 TB. Understanding these units helps you know if something will fit on your device!",
    "11-14": "Bit (binary digit) is the atomic unit of information. 8 bits = 1 byte. Kilo = 2^10 = 1,024 (binary convention) or 1,000 (SI). Storage manufacturers use SI (1 GB = 10^9 bytes); OSes use binary (1 GiB = 2^30 bytes) — causing apparent size discrepancy. Network speeds are in bits/sec (Mbps, Gbps); storage sizes in bytes. Shannon's information theory defines a bit as log₂(2) = 1 bit of entropy.",
  },
  analogy: {
    "5-7": "Bit = one drop of water. Byte = a small cup. KB = a glass. MB = a bucket. GB = a bathtub!",
    "8-10": "Like measuring rice: grain (bit), spoonful (byte), cup (KB), bag (MB), sack (GB), warehouse (TB).",
    "11-14": "Hierarchical powers of 2: bit → byte(2³) → KB(2¹⁰) → MB(2²⁰) → GB(2³⁰) → TB(2⁴⁰).",
  },
  funFact: "The entire text of all books ever written in human history is estimated to be about 50 Petabytes. That's 50,000,000 GB — and a modern data centre can store that!",
  dos: ["Check file sizes before sending — large files need email attachment limits", "Know your device storage (GB) vs how much you're using"],
  donts: ["Don't confuse Mb (megabits, for internet speed) with MB (megabytes, for file size)"],
  quiz: [
    { for: "5-7", question: "How many bits make one byte?", choices: ["8", "4", "16"], correct: 0, explanation: "8 bits = 1 byte. This is one of the most important numbers in computing!" },
    { for: "8-10", question: "Which is the biggest unit?", choices: ["Terabyte (TB)", "Gigabyte (GB)", "Megabyte (MB)"], correct: 0, explanation: "TB > GB > MB > KB > Byte > Bit. 1 TB = 1,024 GB = over a million MB!" },
    { for: "11-14", question: "Why does a 1TB hard drive show as ~931GB in Windows?", choices: ["Manufacturers use SI (10^12 bytes) but Windows uses binary (2^40 bytes)", "Windows is wrong", "Some space is used for formatting"], correct: 0, explanation: "1TB (SI) = 10^12 bytes. 1TiB (binary) = 2^40 = 1.0995×10^12 bytes. The difference causes the apparent ~7% discrepancy." },
  ],
};
export default lesson;
