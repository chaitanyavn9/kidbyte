import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "ssd-deep",
  title: "How an SSD Works Inside",
  emoji: "⚡",
  category: "storage",
  narrative: {
    "5-7": [
      { heading: "Imagine a USB stick — now make it 100 times faster", text: "You've used a USB stick to copy files. Inside, it uses the same technology as an SSD — flash memory chips. But a laptop SSD is connected much more directly to the CPU, uses a faster interface, and runs at incredible speeds. This deeper look explores why some SSDs are 10× faster than others." },
      { heading: "NVMe vs SATA — the highway upgrade", text: "An older SSD using the SATA cable (designed for hard drives from the 1990s) is limited to 600 MB/s. An NVMe SSD connects through PCIe — a faster highway directly to the CPU — and can reach 7,000 MB/s. The same flash chips, but a completely different road to get there.", diagramId: "nvme-protocol" },
      { heading: "What type of flash memory inside?", text: "Not all flash memory is equal. SLC stores 1 bit per tiny cell — very fast and long-lasting. MLC stores 2 bits. TLC stores 3 bits (most common, good value). QLC stores 4 bits — cheapest but slowest and shortest-lived. The more bits per cell, the more data per chip — but at a cost.", diagramId: "nand-types" },
      { heading: "In your daily life…", text: "An NVMe SSD makes your computer feel snappy — games load faster, videos edit smoothly. When you buy a laptop, NVMe is a key spec to look for. SATA SSDs are still faster than hard drives, but NVMe is the standard for modern machines." },
    ],
    "8-10": [
      { heading: "SATA was designed for spinning disks — not flash", text: "SATA (Serial ATA) was invented for hard drives in 2003. Its maximum speed (600 MB/s) was fine for HDDs at the time. But flash memory became so fast that SATA became the bottleneck. NVMe (Non-Volatile Memory Express) was designed from scratch in 2011 specifically for flash storage over PCIe." },
      { heading: "NVMe vs SATA — a speed difference you can feel", text: "SATA SSD: 550 MB/s read. NVMe Gen 3: 3500 MB/s. NVMe Gen 4: 7000 MB/s. That's 4–12× faster. For loading an OS or large game, this translates to seconds of real-world difference. For tiny files (like web browsing cache), the difference is less noticeable.", diagramId: "nvme-protocol" },
      { heading: "NAND flash types", text: "SLC (1 bit/cell): fastest, 100,000 write cycles, enterprise use. MLC (2 bits/cell): fast, durable. TLC (3 bits/cell): balanced — most consumer SSDs. QLC (4 bits/cell): densest, cheapest — good for large archive drives. The choice of NAND type determines the SSD's speed, durability, and price.", diagramId: "nand-types" },
      { heading: "Write endurance — TBW rating", text: "Every SSD has a TBW (Terabytes Written) rating. A Samsung 980 Pro 1TB is rated 600 TBW. If you write 100 GB per day, the SSD will outlast its warranty in ~16 years. For most users, TBW is not a concern. But write-heavy server workloads require enterprise-grade SSDs with higher TBW ratings." },
    ],
    "11-14": [
      { heading: "The PCIe connection — why NVMe is faster", text: "AHCI (the protocol HDDs/SATA SSDs use): 1 command queue × 32 deep = 32 commands simultaneously. NVMe protocol: 65,535 queues × 65,536 commands = over 4 billion simultaneous I/O operations. Modern SSDs have hundreds of flash dies operating in parallel — NVMe can keep them all busy. AHCI could not." },
      { heading: "NAND physics — cells and endurance", text: "Each NAND cell is a floating-gate MOSFET or charge-trap MOSFET. Programming: Fowler-Nordheim tunnelling forces electrons through a thin oxide layer. TLC stores 8 voltage states (2³) — the threshold voltage determines the stored value. More states = less voltage margin between states = more read errors = ECC overhead.", diagramId: "nand-types" },
      { heading: "3D NAND — stacking for density", text: "Planar NAND couldn't scale below ~15nm without cell-to-cell interference. 3D NAND stacks cells vertically: Samsung V-NAND, Micron's CMOS Under Array (CuA), Kioxia/WD BiCS. Current leaders: 200+ layers. 3D structure allows returning to larger cell geometry (more reliable) while still achieving higher density than planar.", diagramId: "nvme-protocol" },
      { heading: "FTL — the hidden complexity", text: "NAND must erase before writing, only in large blocks (512KB–4MB). The FTL (Flash Translation Layer) maps logical block addresses to physical pages, hides erase granularity, implements garbage collection (reclaiming stale pages), wear levelling (distributing writes evenly), and over-provisioning (spare capacity for GC). The FTL is the most complex software in a consumer storage device." },
    ],
    "15-18": [
      { heading: "NVMe protocol internals", text: "NVMe commands are 64-byte entries in a Submission Queue (SQ). The host writes commands and rings the SQ tail doorbell (MMIO write). The controller processes commands and writes 16-byte Completion Queue (CQ) entries. The host reads CQ and rings the CQ head doorbell. This direct MMIO protocol has ~2μs latency — 100× lower than SATA's AHCI with its legacy register interface." },
      { heading: "NAND error correction — LDPC", text: "Advanced flash uses LDPC (Low-Density Parity-Check) codes. LDPC iteratively corrects raw bit error rates (RBER) of 10⁻² back to output BER of 10⁻¹⁵. SSD controllers run BCH or LDPC hardware engines at line rate. As cells age, RBER increases — the controller increases ECC strength (latency trade-off). Read disturb and retention loss are the main aging failure modes.", diagramId: "nand-types" },
      { heading: "Zoned Namespace (ZNS) SSDs", text: "Traditional SSDs hide flash complexity behind LBA abstraction — requiring FTL and over-provisioning. ZNS exposes the zone structure to the host: zones must be written sequentially (like SMR HDDs). The host (or file system like F2FS, or RocksDB) performs placement decisions. Result: 10-30% less over-provisioning, dramatically lower write amplification, predictable latency. Used in hyperscaler storage." },
      { heading: "CXL-attached memory and storage class memory", text: "CXL.mem (Compute Express Link) enables adding DDR5-equivalent latency memory over PCIe 5.0 slots — more DRAM without CPU socket limits. CXL.cache allows accelerators to cache host memory. Storage Class Memory (SCM) bridges DRAM and NAND: Optane (Intel, now discontinued) used PCM for 10μs latency and byte-addressability. MRAM and ReRAM are the candidates for a future Optane-replacement." },
    ],
  },
  story: {
    "5-7": "Inside an SSD are millions of tiny boxes that can hold either a little bit of electricity or no electricity at all. 'Has electricity' = 1, 'No electricity' = 0. Your file is stored as millions of 1s and 0s spread across these tiny electric boxes. When you open the file, the SSD reads all those boxes super fast and gives your file back!",
    "8-10": "An SSD stores data in NAND flash chips — millions of cells that trap or release electrons to represent 1s and 0s. Unlike a hard disk, there are no moving parts — data is read electronically at high speed. SSDs have a controller chip that manages where data goes, fixes errors, and moves data around to keep the whole drive wearing evenly (called 'wear levelling'). This is why SSDs are faster, quieter, and more shock-resistant than hard disks.",
    "11-14": "NAND flash cells use floating-gate or charge-trap transistors. Writing traps electrons via Fowler-Nordheim tunnelling; reading measures threshold voltage. Cell types: SLC (1 bit, most durable), MLC (2 bits), TLC (3 bits), QLC (4 bits). The SSD controller manages FTL (Flash Translation Layer — maps logical to physical addresses), garbage collection, wear levelling, and ECC (Error Correcting Code). NVMe protocol over PCIe 4.0/5.0 offers 4–14GB/s sequential reads vs ~550MB/s for SATA SSDs.",
  },
  analogy: {
    "5-7": "SSD cells are like tiny batteries — charged = 1, empty = 0. Billions of these tiny batteries store your files!",
    "8-10": "Like millions of light switches that can be ON (1) or OFF (0), but switching happens at the speed of electricity.",
    "11-14": "Floating-gate MOSFET cells forming a programmable non-volatile NAND array, managed by an FTL controller.",
  },
  photo: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=700&fit=crop",
  photoAlt: "M.2 NVMe SSD showing NAND flash chips and controller",
  keyFacts: [
    { emoji: "⚡", label: "NVMe Speed", value: "PCIe 5.0: up to 14,000 MB/s", detail: "PCIe 5.0 NVMe SSDs can read at 14 GB/s — a 100 GB file in 7 seconds." },
    { emoji: "🔵", label: "NAND Types", value: "SLC > MLC > TLC > QLC (density vs endurance)", detail: "SLC stores 1 bit/cell (most durable). QLC stores 4 bits/cell (most dense, least durable)." },
    { emoji: "🏗️", label: "Controller", value: "Phison, Samsung, Silicon Motion", detail: "The SSD controller handles FTL mapping, wear leveling, and ECC correction." },
    { emoji: "📏", label: "Write Endurance", value: "TBW: 150–600 TB (consumer SSDs)", detail: "TBW = Terabytes Written lifetime. A 500 GB SSD typically has 150–300 TBW." },
    { emoji: "🔄", label: "Wear Leveling", value: "Distributes writes evenly across cells", detail: "NAND cells wear out after 1,000–10,000 writes. The FTL spreads writes to maximise life." },
    { emoji: "🧮", label: "DRAM Cache", value: "Speeds up FTL table lookups", detail: "High-end SSDs include DRAM to cache the Flash Translation Layer map for faster access." },
  ],
  funFact: "NVMe SSDs can read data at over 7,000 MB per second — fast enough to copy the entire contents of a DVD in less than one second!",
  dos: ["Enable TRIM on your SSD — it helps the drive clean up deleted data efficiently", "Check SSD health periodically with tools like CrystalDiskInfo"],
  donts: ["Don't defragment an SSD — it wastes write cycles and doesn't improve speed", "Don't fill an SSD above 90% capacity — performance drops significantly"],
  quiz: [
    { for: "5-7", question: "How does an SSD store data?", choices: ["With tiny electric charges — 1 for charged, 0 for empty", "With spinning plates", "With magnets"], correct: 0, explanation: "SSD cells trap or release electrons — no moving parts, no spinning, just electronics!" },
    { for: "8-10", question: "What is 'wear levelling' in an SSD?", choices: ["Spreading writes evenly across all cells so no area wears out faster", "Cleaning dust off the SSD", "Sorting files alphabetically"], correct: 0, explanation: "NAND cells can only be written a limited number of times. Wear levelling ensures all cells are used evenly, extending the SSD's lifespan." },
    { for: "11-14", question: "What is the Flash Translation Layer (FTL)?", choices: ["A layer that maps logical block addresses to physical NAND locations, hiding the complexity of flash from the OS", "The interface between PCIe and NVMe", "The ECC correction algorithm"], correct: 0, explanation: "The FTL abstracts NAND's erase-before-write requirement, handles garbage collection and wear levelling, presenting a clean block-device interface to the OS." },
  ],
};
export default lesson;
