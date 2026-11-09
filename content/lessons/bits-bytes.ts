import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "bits-bytes",
  title: "Bits, Bytes, KB, MB, GB...",
  emoji: "📦",
  category: "machine-world",
  narrative: {
    "5-7": [
      { heading: "What is the smallest thing a computer can remember?", text: "Imagine the tiniest LEGO brick — just one piece. In computers, the tiniest piece of information is called a bit. A bit can only be one of two things: 0 or 1 (like a light switch that's either off or on)." },
      { heading: "8 bits make a byte", text: "One bit alone can't store much. But 8 bits together (called a byte) can store one letter! The letter 'A' is stored as 01000001. The letter 'B' is 01000010. Every character, emoji, and symbol you type is stored as one or more bytes.", diagramId: "bits-bytes-sizes" },
      { heading: "How big is a file?", text: "Files are measured in bytes. A short text message is about 100 bytes. A music file is about 5 million bytes (5 megabytes or 5 MB). A movie is about 2 billion bytes (2 gigabytes or 2 GB). The more bytes, the more space it takes.", diagramId: "data-in-bits" },
      { heading: "In your daily life…", text: "Your phone has storage measured in gigabytes (GB). RAM is also measured in GB. When you upload a photo, the file size (MB) is how many bytes it takes. Understanding these sizes helps you plan your storage." },
    ],
    "8-10": [
      { heading: "Every digital thing is made of bits", text: "A bit (binary digit) is the atomic unit of digital information — it can be 0 or 1. This isn't just a convention: electronics use it because voltage is either high or low, with no ambiguity. Everything digital — text, images, sound, video — is ultimately stored as bits." },
      { heading: "The size ladder: bits to terabytes", text: "8 bits = 1 byte (one character). 1024 bytes = 1 kilobyte (a short email). 1024 KB = 1 megabyte (a song). 1024 MB = 1 gigabyte (a movie). 1024 GB = 1 terabyte (a large hard drive).", diagramId: "bits-bytes-sizes" },
      { heading: "What a byte actually stores", text: "One byte (8 bits) has 256 possible values (2⁸ = 256). ASCII uses 1 byte per character for English letters (A=65, a=97). UTF-8 uses 1–4 bytes per character — supporting every language on Earth. A single colour on screen is usually 3 bytes (Red, Green, Blue, 0–255 each).", diagramId: "data-in-bits" },
      { heading: "Bandwidth vs storage", text: "Storage size is measured in bytes (GB, TB). Network speed is measured in bits per second (Mbps, Gbps). A 100 Mbps connection transfers 100 million bits (12.5 million bytes = 12.5 MB) per second. This is why downloading a 1 GB file on a 100 Mbps connection takes about 80 seconds." },
    ],
    "11-14": [
      { heading: "Binary encoding — the foundation", text: "With n bits you can represent 2ⁿ unique values. 1 bit: 2 values. 8 bits: 256 values. 16 bits: 65,536 values. 32 bits: ~4.3 billion values. 64 bits: ~18.4 quintillion values. The choice of n for a data type (int32, int64, float32) is a fundamental design decision." },
      { heading: "Data types and their byte sizes", text: "char: 1 byte (ASCII). int32: 4 bytes. int64: 8 bytes. float32: 4 bytes (IEEE 754 single precision). float64: 8 bytes (double precision). Knowing sizes matters: a million floats = 4 MB. An HD image at 1920×1080×3 bytes = 6.2 MB uncompressed.", diagramId: "bits-bytes-sizes" },
      { heading: "What lives in a byte — the letter A", text: "The ASCII code for 'A' is 65 decimal = 0100 0001 binary. The first bit (MSB) encodes the high group, the last 7 bits encode the character value. Unicode extends this to 1,114,112 code points covering every character in human history.", diagramId: "data-in-bits" },
      { heading: "SI vs binary prefixes — the confusing truth", text: "1 KB (kilobyte) could mean 1000 or 1024 bytes. Hard drive makers use 1000 (SI), so a '1 TB' drive is actually 931 GiB. Operating systems use 1024. The IEC standard (KiB, MiB, GiB) uses 1024 exactly. This is why a '500 GB' drive shows as ~465 GB in Windows." },
    ],
    "15-18": [
      { heading: "Information theory — Shannon's bit", text: "Claude Shannon defined 1 bit as the information needed to resolve 1 binary choice. The entropy H = -Σ p(x) log₂ p(x) measures the average information per symbol. A fair coin flip: H = 1 bit. A biased coin (90% heads): H = 0.47 bits. Compression algorithms approach the theoretical minimum." },
      { heading: "IEEE 754 floating-point", text: "float32: 1 sign bit + 8 exponent bits + 23 mantissa bits. This encodes numbers from ±1.4×10⁻⁴⁵ to ±3.4×10³⁸ with ~7 decimal digits of precision. float64 has 15–17 digits. Precision errors (0.1 + 0.2 ≠ 0.3) come from representing decimal fractions in base-2.", diagramId: "data-in-bits" },
      { heading: "Memory alignment and padding", text: "CPUs read memory most efficiently when data is aligned to its size boundary: int32 at 4-byte boundaries, int64 at 8-byte. The compiler adds padding bytes between struct fields to maintain alignment. A struct {char, int32} in C is 8 bytes, not 5 — 3 bytes of padding after char.", diagramId: "bits-bytes-sizes" },
      { heading: "Compression — removing redundant bits", text: "Huffman coding assigns shorter bit patterns to frequent symbols (fewer bits for 'e' than 'z'). LZ77/LZ78 (basis of gzip, Deflate, Zstandard) find repeated byte sequences and replace them with back-references. JPEG uses DCT to convert pixel values to frequency coefficients and quantise the high frequencies (the parts you barely see)." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=700&fit=crop",
  photoAlt: "Network cables and data storage showing digital information flowing through systems",
  keyFacts: [
    { emoji: "🔵", label: "Smallest Unit", value: "1 bit = 0 or 1", detail: "A bit is a single binary digit. It can only be 0 or 1 — off or on." },
    { emoji: "📦", label: "1 Byte", value: "8 bits", detail: "1 byte stores one character of text, like the letter 'A'." },
    { emoji: "📄", label: "1 Kilobyte (KB)", value: "1,024 bytes", detail: "A short text message is about 1 KB. A page of text is 2–3 KB." },
    { emoji: "📸", label: "1 Megabyte (MB)", value: "1,024 KB ≈ 1 million bytes", detail: "A JPEG photo is 2–5 MB. A song in MP3 is ~4 MB." },
    { emoji: "💾", label: "1 Gigabyte (GB)", value: "1,024 MB", detail: "A movie is 1–4 GB. Most apps are under 500 MB." },
    { emoji: "🗄️", label: "1 Terabyte (TB)", value: "1,024 GB", detail: "A 1 TB drive holds ~200,000 songs or ~500 hours of HD video." },
  ],
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
