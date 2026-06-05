import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "files",
  title: "What is a File?",
  emoji: "📄",
  category: "digital-world",
  story: {
    "5-7": "A file is like a piece of paper where information is written down! A drawing you made is saved as a picture file. A song is saved as a music file. A video is saved as a video file. Every piece of information on your computer lives inside a file. Files live inside folders, just like papers live inside a folder in your school bag.",
    "8-10": "A file is a collection of data stored on your computer with a name and a type (called extension). The extension tells the computer what kind of file it is: .jpg is a photo, .mp3 is music, .mp4 is video, .pdf is a document, .exe is a program. Each file has a size (measured in KB, MB, GB), a name, and a location (the folder path where it lives).",
    "11-14": "A file is a named collection of data stored on a file system, referenced by an inode containing metadata (size, permissions, timestamps, pointers to data blocks). The file extension signals the MIME type to the OS for application association. File systems (NTFS, ext4, APFS) manage allocation of storage blocks. File operations (create, read, write, delete) are handled by the OS kernel through system calls. Deleted files have their inode marked free but data persists until overwritten — the basis of file recovery.",
  },
  analogy: {
    "5-7": "A file is like a piece of paper — it has information written on it and lives inside a folder.",
    "8-10": "Like a labelled envelope — the name tells you what's inside, the extension tells you what type of content it is.",
    "11-14": "A named inode entry in the file system tree, pointing to allocated data blocks on the storage device.",
  },
  funFact: "The word 'file' in computing came from paper filing systems in offices. When computers were invented, people just used the same word! The first computer files were stored on magnetic tape reels in the 1950s.",
  dos: ["Use clear names like 'Birthday_Photo_2024.jpg' — not just 'image1.jpg'", "Back up important files to a cloud or external drive"],
  donts: ["Don't delete files without checking what they are", "Don't rename system files — it can break programs"],
  quiz: [
    { for: "5-7", question: "What is a file?", choices: ["Information saved on the computer — like a digital piece of paper", "A type of folder", "The power button"], correct: 0, explanation: "Every photo, song, and document on your computer is a file!" },
    { for: "8-10", question: "What does the file extension '.mp3' mean?", choices: ["It's a music/audio file", "It's a picture file", "It's a video file"], correct: 0, explanation: ".mp3 is the audio format. .jpg = photo, .mp4 = video, .pdf = document, .exe = program." },
    { for: "11-14", question: "What happens to file data when you 'delete' a file?", choices: ["The inode is marked free but data remains until overwritten", "Data is immediately erased", "Data moves to the cloud"], correct: 0, explanation: "Deleting just removes the directory entry and marks the inode free. The actual data blocks remain until new data overwrites them — that's how file recovery tools work!" },
  ],
};
export default lesson;
