import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "ssd-deep",
  title: "How an SSD Works Inside",
  emoji: "⚡",
  category: "storage",
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
