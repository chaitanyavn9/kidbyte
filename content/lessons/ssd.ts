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
  },
  analogy: {
    "5-7": "An SSD is your computer's cupboard — it safely stores everything even when the lights go off.",
    "8-10": "Like a super-fast USB drive that lives inside your computer permanently.",
    "11-14": "NAND flash cells storing bits as trapped electron charges — persistent non-volatile storage with no moving parts.",
  },
  funFact: "The first SSD for consumers in 1991 cost $1,000 for just 20MB of storage. Today you can buy a 2TB SSD for around ₹5,000 — that's 100,000 times more storage for the same price!",
  dos: ["Keep at least 15% of your SSD free for best performance", "Regularly back up important files — SSDs can fail too"],
  donts: ["Don't defragment an SSD — it wears out the cells faster and doesn't help", "Don't fill an SSD to 100% — it slows down dramatically"],
  quiz: [
    { for: "5-7", question: "Where does an SSD store your files?", choices: ["Inside the computer, safely even when turned off", "On the internet", "In the keyboard"], correct: 0, explanation: "The SSD keeps all your files safe — even when the computer is off!" },
    { for: "8-10", question: "What makes an SSD faster than an old HDD?", choices: ["No moving parts — uses flash memory chips", "It spins faster", "It's bigger"], correct: 0, explanation: "SSDs have no spinning disk or moving needle — flash chips respond instantly!" },
    { for: "11-14", question: "What does TBW mean for an SSD?", choices: ["Terabytes Written — total data the SSD can write before wearing out", "Transfer Bandwidth Width", "Total Backup Window"], correct: 0, explanation: "NAND cells degrade with each write cycle. TBW tells you how much total data you can write before the SSD reaches end-of-life." },
  ],
};
export default lesson;
