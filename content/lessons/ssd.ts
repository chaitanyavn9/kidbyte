import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "ssd",
  title: "What is an SSD?",
  emoji: "💿",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "Imagine storing your toys in two different ways…", text: "One way: put them in a messy drawer where you have to dig around (slow). Another way: put them in labelled boxes stacked neatly (fast to find). An SSD is like the neatly labelled boxes — a modern storage device with no moving parts that finds your files almost instantly." },
      { heading: "What was before SSDs?", text: "Old computers used Hard Disk Drives (HDDs) — spinning metal discs with a tiny reading arm, like a record player. The arm had to physically move to find each file. SSDs have no moving parts — they store data in chips, like a giant USB thumb drive.", diagramId: "ssd-vs-disk" },
      { heading: "How an SSD stores data", text: "Inside an SSD are tiny cells — each cell stores bits by trapping electrical charge. Billions of these cells make up the storage. Reading them is nearly instant because there's no physical movement needed.", diagramId: "flash-memory" },
      { heading: "In your daily life…", text: "An SSD makes your computer start in 10 seconds instead of 60. Apps open instantly. Games load faster. Modern laptops and phones all use SSDs or similar flash storage because they're faster, lighter, and use less battery." },
    ],
    "8-10": [
      { heading: "Hard drives had a physical speed limit", text: "An HDD's speed was limited by how fast the metal disc could spin (5400–7200 RPM) and how quickly the arm could seek to the right position. Even at max speed, finding a random file took ~10 milliseconds. That's an eternity for a CPU waiting to load data." },
      { heading: "SSDs remove the mechanical bottleneck", text: "An SSD uses NAND flash memory — the same technology as USB drives and SD cards. No spinning disc, no moving arm. Random access is essentially instant. SSDs are 50–100× faster than HDDs for typical use.", diagramId: "ssd-vs-disk" },
      { heading: "NAND flash — storing data electrically", text: "NAND flash stores bits by trapping electrons in floating gate transistors. A charged cell = 0, an uncharged cell = 1 (in SLC). Modern SSDs stack cells vertically in 3D NAND — up to 232 layers — to pack enormous amounts of storage in a tiny chip.", diagramId: "flash-memory" },
      { heading: "SATA vs NVMe — the interface matters", text: "An SSD can be fast but if it uses an old SATA cable (designed for HDDs), it's limited to 600 MB/s. NVMe SSDs connect directly to the CPU via PCIe and can reach 7,000 MB/s — over 10× faster." },
    ],
    "11-14": [
      { heading: "NAND flash physics", text: "Each NAND cell is a floating-gate MOSFET. Writing: Fowler-Nordheim tunnelling — electrons are forced through a thin oxide layer onto the floating gate. Reading: measure the threshold voltage to determine the stored charge state. Erasing: apply high voltage to drain electrons." },
      { heading: "SLC, MLC, TLC, QLC — bits per cell trade-offs", text: "SLC: 1 bit/cell, fastest, 100K write cycles. MLC: 2 bits/cell. TLC: 3 bits/cell (most consumer SSDs). QLC: 4 bits/cell, cheapest, ~1K cycles. More bits per cell = more density and lower cost but fewer write cycles and lower performance.", diagramId: "flash-memory" },
      { heading: "HDD vs SSD performance profile", text: "HDDs are fast for sequential reads (200 MB/s) but slow for random reads (~0.5 MB/s). SSDs are fast for both: sequential reads 500–7000 MB/s, random reads ~100 MB/s (100,000 IOPS). OS and application loading is random I/O — SSDs transform the experience.", diagramId: "ssd-vs-disk" },
      { heading: "Write amplification and wear levelling", text: "NAND must erase before writing, and can only erase in large blocks (not individual cells). The SSD controller uses wear levelling — spreading writes across all cells evenly — and garbage collection to erase unused blocks in the background. This is why SSDs have a TBW (Terabytes Written) rating." },
    ],
    "15-18": [
      { heading: "3D NAND architecture", text: "Planar NAND couldn't scale below ~15nm without interference between adjacent cells. 3D NAND stacks cells vertically — Samsung V-NAND, Micron's CMOS Under Array (CuA). Current leaders stack 200+ layers. Each layer contains charge-trap flash cells (CTF) — more reliable than floating-gate at smaller geometries." },
      { heading: "NVMe protocol and PCIe lanes", text: "AHCI (designed for HDDs) allows 1 command queue of 32 commands. NVMe allows 65,535 queues each with 65,536 commands — vital for SSD parallelism. NVMe Gen 4 ×4: 7 GB/s sequential. Gen 5 ×4: 14 GB/s. The drive has hundreds of flash dies operating in parallel — the protocol must keep them all fed.", diagramId: "ssd-vs-disk" },
      { heading: "FTL — the flash translation layer", text: "The FTL maps logical block addresses (LBA) to physical NAND locations, hides the erase-before-write requirement, implements wear levelling, over-provisioning, and garbage collection. A good FTL is the difference between a fast consumer SSD and a fast enterprise SSD.", diagramId: "flash-memory" },
      { heading: "Emerging storage: PCM and MRAM", text: "Phase-Change Memory (Intel Optane, now discontinued) used chalcogenide glass — electrical resistance represents state. 10× lower latency than NAND but expensive. MRAM (Magnetoresistive RAM) uses magnetic tunnel junctions — byte-addressable, unlimited writes, non-volatile. These 'storage class memories' could bridge the RAM-SSD gap." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=700&fit=crop",
  photoAlt: "M.2 NVMe SSD and 2.5-inch SATA SSD showing the two main form factors",
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
