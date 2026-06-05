import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "memory-allocation",
  title: "How Files Are Stored",
  emoji: "🗂️",
  category: "storage",
  story: {
    "5-7": "When you save a drawing on a computer, it's like the computer cuts it up into small pieces and stores each piece in a different tiny box on the hard disk. It keeps a special list that says where each piece is hidden so it can find them all and put your drawing back together when you want to see it. It's like a treasure hunt that happens in milliseconds!",
    "8-10": "When you save a file, the OS splits it into chunks called 'blocks' and stores them across the storage device. A special table (the file system) keeps track of which blocks belong to each file. This is why deleting a file is fast — the OS just marks those blocks as 'available' without erasing the data. When files get scattered across the disk, it's called fragmentation — SSDs handle this efficiently, but it slowed down old HDDs.",
    "11-14": "File systems (NTFS, ext4, APFS) manage storage allocation. Files are divided into fixed-size blocks (clusters/extents). The file system maintains metadata structures: MFT (NTFS), inodes (ext4), or B-tree nodes (APFS). Allocation strategies: first-fit, best-fit, worst-fit for block assignment. Journaling file systems write a transaction log before committing changes — preventing corruption on crash. Copy-on-Write (CoW) file systems (APFS, Btrfs) write new data to unused blocks rather than overwriting.",
  },
  analogy: {
    "5-7": "Saving a file is like breaking a puzzle into pieces, storing each piece in a different box, then keeping a map of where each piece went.",
    "8-10": "Like storing a book in a library by tearing its pages apart and putting each page in a random shelf — with a catalogue that knows exactly where each page is.",
    "11-14": "Block-based allocation with a metadata index (inode/MFT) — the file system as an on-disk database mapping names to data block addresses.",
  },
  funFact: "When you 'delete' a file, the computer doesn't actually erase it — it just removes it from the index! The data stays there until new files overwrite it. That's why file recovery software can sometimes get deleted files back!",
  dos: ["Use SSDs for your OS and apps — they handle block allocation far more efficiently than HDDs", "Empty the Recycle Bin when you want files truly gone"],
  donts: ["Don't assume 'delete' means 'erased' for sensitive files — use a secure erase tool if needed"],
  quiz: [
    { for: "5-7", question: "When you save a file, what does the computer do?", choices: ["Breaks it into pieces and stores them with a map to find them", "Prints it out", "Sends it to the internet"], correct: 0, explanation: "Files are split into blocks and stored with an index — the file system keeps track of every piece!" },
    { for: "8-10", question: "What is file fragmentation?", choices: ["When a file's blocks are scattered across the disk instead of stored together", "When a file gets corrupted", "When the file is too large"], correct: 0, explanation: "Fragmentation happens over time as files are created, deleted, and resized. HDDs slow down because the head has to jump around to read all the scattered pieces." },
    { for: "11-14", question: "What does a journaling file system do?", choices: ["Writes a transaction log before changes to prevent corruption on crash", "Keeps a diary of all file accesses", "Automatically compresses all files"], correct: 0, explanation: "Journaling writes what it's about to do before doing it. If the system crashes mid-write, the journal allows the file system to recover to a consistent state." },
  ],
};
export default lesson;
