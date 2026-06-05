import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hard-disk",
  title: "What is a Hard Disk?",
  emoji: "💿",
  category: "storage",
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
