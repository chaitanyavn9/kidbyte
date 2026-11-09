import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hard-disk",
  title: "What is a Hard Disk?",
  emoji: "💿",
  category: "storage",
  narrative: {
    "5-7": [
      { heading: "Imagine a tiny music player inside your computer…", text: "Old hard disks had spinning metal platters — like a vinyl record — with a tiny arm that read and wrote data by moving to different spots. This clever mechanical system stored huge amounts of information, but it had one big weakness: it was slow because things had to physically move." },
      { heading: "What is a hard disk?", text: "A hard disk drive (HDD) is a metal box containing spinning magnetic discs and a read/write arm. The arm moves like a record player needle, reading magnetic patterns on the disc surface. Each magnetic pattern stores bits — 0s and 1s.", diagramId: "hdd-vs-ssd" },
      { heading: "How much can a hard disk store?", text: "Modern hard disks can store enormous amounts of data. 1 terabyte (TB) can hold about 250,000 songs, or 500 movies, or 300,000 photos. And you can buy hard disks up to 20 TB.", diagramId: "storage-sizes" },
      { heading: "In your daily life…", text: "HDDs are still used for backup drives and cloud storage servers because they're cheap for large amounts of storage. Your laptop likely uses a faster SSD, but your external backup drive is probably an HDD." },
    ],
    "8-10": [
      { heading: "Magnetic storage — writing with tiny magnets", text: "Hard disk platters are coated with a magnetic material (similar to old cassette tapes). The write head magnetises tiny spots in one of two directions — North or South — to store 0 or 1. The read head detects these magnetic patterns when reading." },
      { heading: "HDD anatomy", text: "Platters: polished aluminium or glass discs coated in magnetic material. Read/write heads: one per platter surface, float nanometres above the spinning disc. Actuator arm: moves heads to the right track. Spindle motor: spins platters at 5400 or 7200 RPM.", diagramId: "hdd-vs-ssd" },
      { heading: "HDDs vs SSDs — a clear trade-off", text: "HDD: cheap (much cheaper per TB), large capacity (up to 20TB), but slow (100–200 MB/s sequential, 0.5 MB/s random). SSD: fast (500–7000 MB/s), no moving parts, silent, but more expensive per TB and lower max capacity.", diagramId: "storage-sizes" },
      { heading: "When to use an HDD today", text: "HDDs still win for cold storage — photos, videos, and backups you don't access often. Cloud storage providers (AWS S3, Google Cloud Storage) store most of their data on HDDs because cost per TB matters most at scale. Your OS and apps should be on an SSD; large media can go on an HDD." },
    ],
    "11-14": [
      { heading: "Perpendicular magnetic recording", text: "Early HDDs stored bits horizontally (longitudinal recording). After ~2005, perpendicular recording aligned magnetic domains vertically, allowing much higher areal density. Modern HDDs use SMR (Shingled Magnetic Recording) — tracks overlap like roof shingles, increasing density by ~20% but requiring larger write granularity." },
      { heading: "Performance characteristics and latency sources", text: "Seek time: arm moves to correct track (~5ms avg). Rotational latency: wait for sector to spin under the head (4ms avg at 7200 RPM). Transfer rate: once head is positioned, data flows at 100–250 MB/s. Random IOPS: ~150. These mechanical delays are HDD's fundamental limitation.", diagramId: "hdd-vs-ssd" },
      { heading: "Storage hierarchy — cost vs speed", text: "CPU registers (ps latency, bytes) → L1/L2/L3 cache (ns, MB) → RAM (100ns, 32–512 GB) → NVMe SSD (10μs, 1–8 TB) → SATA SSD (100μs, 1–4 TB) → HDD (10ms, 1–20 TB) → Tape (minutes, 100s of TB). Each level is 10–1000× slower but much cheaper per byte.", diagramId: "storage-sizes" },
      { heading: "RAID — redundancy and performance", text: "RAID 0: stripe data across drives for speed (no redundancy). RAID 1: mirror — identical copy on two drives. RAID 5: distributed parity across 3+ drives — survives one drive failure. RAID 6: survives two failures. RAID 10: mirror + stripe. Data centres use RAID to protect against drive failures." },
    ],
    "15-18": [
      { heading: "HAMR and MAMR — pushing density limits", text: "Conventional PMR can't go denser without superparamagnetic instability (bits flip randomly). HAMR (Heat-Assisted Magnetic Recording) uses a laser to heat the spot before writing, allowing high-coercivity media. Seagate ships 30+ TB HAMR drives. MAMR (Microwave-Assisted) uses microwave oscillators instead of heat." },
      { heading: "HDD internals — precision engineering", text: "The read/write head flies 5nm above the platter surface at 100+ mph (platters spinning at 7200 RPM). Air turbulence inside the sealed helium-filled enclosure is precisely controlled. The read head uses TMR (Tunnelling Magnetoresistance) — a quantum effect that detects magnetic orientation.", diagramId: "hdd-vs-ssd" },
      { heading: "Failure modes and S.M.A.R.T.", text: "HDDs fail from head crashes (head touches platter), bearing wear, motor failure, and stuck platters. S.M.A.R.T. (Self-Monitoring Analysis and Reporting Technology) tracks health metrics: reallocated sectors, spin-up time, raw read error rate. Backblaze's public drive stats show annualised failure rates of 0.5–5% depending on model.", diagramId: "storage-sizes" },
      { heading: "HDDs in the cloud era", text: "Despite SSDs, HDDs dominate cloud object storage (S3, GCS) because cost per TB is 20× lower. Hyperscalers like AWS and Google use custom HDD firmwares, shingled drives, and erasure coding instead of RAID. Object storage (3+ replicas across regions) is the successor to file systems for internet-scale storage." },
    ],
  },
  story: {
    "5-7": "A hard disk (HDD) is like a set of spinning plates inside your computer where all your files are saved! A tiny arm moves back and forth over the spinning plates and reads or writes tiny magnetic dots — that's how your files are saved and found. Hard disks are like magic spinning books that never forget, even when you turn the computer off!",
    "8-10": "A Hard Disk Drive (HDD) stores data magnetically on spinning metal platters coated with a magnetic layer. A read/write head moves across the platters like a record player needle, magnetising tiny spots to write data and sensing them to read it. HDDs are slower than SSDs because they have moving parts that need to physically position to the right spot. But they're cheaper per gigabyte, so they're great for storing large amounts of data.",
    "11-14": "HDDs use magnetic recording on rotating platters (5,400–7,200 RPM). The read/write head floats nanometres above the platter surface on an air cushion. Data is stored in concentric tracks divided into sectors (512 bytes or 4KB Advanced Format). Access time is limited by rotational latency (avg: 4–8ms) and seek time (avg: 5–12ms). Areal density has grown through perpendicular recording and HAMR (Heat-Assisted Magnetic Recording). HDDs offer the lowest $/TB but suffer from mechanical failure modes (head crash, bearing failure).',",
  },
  analogy: {
    "5-7": "An HDD is like a magical spinning music record that stores your files as tiny invisible magnetic dots!",
    "8-10": "Like a vinyl record player — the arm reads the spinning disc, but instead of music it reads your files.",
    "11-14": "A magnetomechanical storage device — rotating ferromagnetic platters with a flying read/write head, access time dominated by rotational latency and seek time.",
  },
  photo: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?w=700&fit=crop",
  photoAlt: "Open hard disk drive showing spinning platters and read/write arm",
  keyFacts: [
    { emoji: "🔵", label: "Full Name", value: "Hard Disk Drive (HDD)", detail: "Data is stored magnetically on spinning metal platters." },
    { emoji: "🔄", label: "Spin Speed", value: "5,400 or 7,200 RPM", detail: "7,200 RPM drives are faster. Server drives spin at 10,000–15,000 RPM." },
    { emoji: "⚡", label: "Speed", value: "80–160 MB/s read (SATA)", detail: "HDDs are 5–10× slower than SSDs for sequential reads. Random reads are 100× slower." },
    { emoji: "💾", label: "Capacity", value: "Up to 20 TB (consumer)", detail: "Data centres use 20 TB+ HDDs. SSDs are still much more expensive per TB." },
    { emoji: "📏", label: "Track Width", value: "~70 nanometres", detail: "The read/write head floats 3–5 nanometres above the platter — thinner than a virus." },
    { emoji: "📅", label: "Invented", value: "IBM RAMAC, 1956 (5 MB!)", detail: "The first HDD stored 5 MB, weighed a tonne, and cost $50,000 per year to lease." },
  ],
  funFact: "The first hard disk (IBM 350, 1956) was the size of a refrigerator, weighed 910kg, and stored just 5MB — about one MP3 song. Today's hard drives store 20TB in a box smaller than a paperback book!",
  dos: ["Handle external hard drives gently — they have fragile spinning parts inside", "Keep regular backups — HDDs can fail suddenly"],
  donts: ["Don't move a running desktop computer suddenly — you could crash the read head onto the platters!", "Don't keep an HDD as your only backup"],
  quiz: [
    { for: "5-7", question: "How does a hard disk save your files?", choices: ["With tiny magnetic dots on spinning plates", "By printing on paper", "By freezing electricity"], correct: 0, explanation: "HDDs write tiny magnetic spots on spinning metal plates — and read them back when you open a file!" },
    { for: "8-10", question: "Why are SSDs faster than HDDs?", choices: ["SSDs have no moving parts — no spinning or seeking needed", "SSDs are larger", "HDDs are older technology"], correct: 0, explanation: "HDDs need to physically spin the platter and move the head to find data. SSDs access any memory cell instantly — no movement needed!" },
    { for: "11-14", question: "What causes the most HDD access delay?", choices: ["Rotational latency + seek time (mechanical positioning)", "Network latency", "RAM speed"], correct: 0, explanation: "Average access time = seek time (5–12ms) + rotational latency (half revolution, ~4–8ms at 7200RPM). SSDs have <0.1ms — 100x faster." },
  ],
};
export default lesson;
