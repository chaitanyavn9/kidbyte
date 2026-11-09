import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "ssd",
  title: "What is an SSD?",
  emoji: "💿",
  category: "components",
  story: {
    "5-7": "An SSD is like a super cupboard inside your computer where everything is saved — your games, photos, videos, school work. Even when you turn off the computer, everything stays safe inside. An SSD is much faster than the old hard disks — opening a game that used to take 2 minutes now takes just a few seconds!",
    "8-10": "SSD stands for Solid State Drive. It's your computer's permanent storage — it saves everything even when the power is off. Unlike old hard disk drives (HDD) which had spinning metal plates and a moving needle, an SSD has no moving parts — it uses flash memory chips (like a giant USB drive). This makes it much faster, quieter, and more durable.",
    "11-14": "An SSD uses NAND flash memory to store data as electrical charges in floating-gate transistors — cells that retain state without power. NVMe SSDs connect via PCIe lanes and achieve read speeds of 3,000–7,000 MB/s vs 100–150 MB/s for HDDs. NAND cells degrade with write cycles (TBW — Terabytes Written rating). SLC, MLC, TLC, QLC cells store 1, 2, 3, 4 bits respectively — more bits per cell = higher capacity but lower endurance.",
    "15-18": "NAND flash stores data as charge in floating-gate (or charge-trap) transistors. The SSD controller is a sophisticated embedded processor managing: (1) Flash Translation Layer (FTL) — maps logical block addresses (LBA) to physical NAND pages, abstracting wear and enabling wear levelling; (2) Wear Levelling — distributes writes evenly across all blocks so no cell wears out early; (3) Garbage Collection — NAND cannot overwrite in-place; it must erase an entire block (512KB–2MB) before rewriting, so the controller consolidates live pages and reclaims blocks in background; (4) Write Amplification — the ratio of physical writes to logical writes, ideally close to 1.0; (5) TRIM command — OS tells the SSD which LBAs are deleted so they can be erased proactively. Interface evolution: SATA III (550MB/s max) → NVMe PCIe 3.0 (3,500MB/s) → NVMe PCIe 4.0 (7,000MB/s) → NVMe PCIe 5.0 (14,000MB/s). 3D NAND stacks layers vertically (96–232 layers) to achieve high density without shrinking individual cells.",
  },
  analogy: {
    "5-7": "An SSD is your computer's cupboard — it safely stores everything even when the lights go off.",
    "8-10": "Like a super-fast USB drive that lives inside your computer permanently.",
    "11-14": "NAND flash cells storing bits as trapped electron charges — persistent non-volatile storage with no moving parts.",
    "15-18": "The SSD controller is like a city manager — the FTL is city planning (organizing blocks), wear levelling is load balancing (keeping all roads equally used), and garbage collection is demolishing old buildings to make space for new ones.",
  },
  photo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&fit=crop",
  photoAlt: "M.2 NVMe SSD next to a 2.5-inch SATA SSD",
  keyFacts: [
    { emoji: "🔢", label: "Full Name", value: "Solid State Drive", detail: "No moving parts — uses flash memory chips (NAND) to store data permanently." },
    { emoji: "⚡", label: "Speed (NVMe)", value: "Up to 7,000 MB/s read", detail: "NVMe over PCIe is 10× faster than older SATA SSDs, and 100× faster than a spinning hard disk." },
    { emoji: "💽", label: "Types", value: "M.2 NVMe (fastest), 2.5\" SATA", detail: "M.2 is a small card that slots directly into the motherboard. SATA uses cables like an old hard disk." },
    { emoji: "📍", label: "Slot", value: "M.2 slot on the motherboard", detail: "One screw holds it in place. Many motherboards have 1–3 M.2 slots, often covered by a heatsink." },
    { emoji: "💾", label: "Storage Cell", value: "NAND Flash — TLC (3-bit) or QLC (4-bit)", detail: "Each cell stores 3–4 bits of data. More bits = cheaper but slightly slower and fewer write cycles." },
    { emoji: "🔄", label: "Lifespan", value: "300–1000 TB written (TBW)", detail: "SSDs wear out slowly after many writes, but for normal use a good SSD lasts 10+ years." },
  ],
  funFact: "The first SSD for consumers in 1991 cost $1,000 for just 20MB of storage. Today you can buy a 2TB SSD for around ₹5,000 — that's 100,000 times more storage for the same price!",
  dos: ["Keep at least 15% of your SSD free for best performance", "Regularly back up important files — SSDs can fail too"],
  donts: ["Don't defragment an SSD — it wears out the cells faster and doesn't help", "Don't fill an SSD to 100% — it slows down dramatically"],
  quiz: [
    { for: "5-7", question: "Where does an SSD store your files?", choices: ["Inside the computer, safely even when turned off", "On the internet", "In the keyboard"], correct: 0, explanation: "The SSD keeps all your files safe — even when the computer is off!" },
    { for: "8-10", question: "What makes an SSD faster than an old HDD?", choices: ["No moving parts — uses flash memory chips", "It spins faster", "It's bigger"], correct: 0, explanation: "SSDs have no spinning disk or moving needle — flash chips respond instantly!" },
    { for: "11-14", question: "What does TBW mean for an SSD?", choices: ["Terabytes Written — total data the SSD can write before wearing out", "Transfer Bandwidth Width", "Total Backup Window"], correct: 0, explanation: "NAND cells degrade with each write cycle. TBW tells you how much total data you can write before the SSD reaches end-of-life." },
    { for: "15-18", question: "What is the Flash Translation Layer (FTL) in an SSD?", choices: ["A mapping table that translates logical block addresses to physical NAND locations, enabling wear levelling", "The PCIe connection protocol", "The error correction algorithm"], correct: 0, explanation: "FTL abstracts NAND's physical limitations — write-before-erase, uneven wear — presenting a simple block device interface to the OS, just like a traditional disk." },
    { for: "15-18", question: "Why does the TRIM command improve SSD performance?", choices: ["It tells the SSD which pages are deleted so the controller can erase them proactively, keeping free blocks ready", "It reduces the SSD's power consumption", "It updates SSD firmware"], correct: 0, explanation: "Without TRIM, the SSD only knows a block is free when it tries to write to it, forcing a slow read-modify-write. TRIM lets it erase in the background during idle time." },
  ],
};
export default lesson;
