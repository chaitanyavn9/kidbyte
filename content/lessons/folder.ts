import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "folder",
  title: "What is a Folder?",
  emoji: "📁",
  category: "digital-world",
  story: {
    "5-7":
      "A folder is like a room in your house! Just like your toy room has all your toys, a folder on a computer keeps similar files together. You can have a folder for your drawings, one for your songs, and one for your games — just like different rooms for different things!",
    "8-10":
      "A folder is a container on your computer that organizes files. Think of it like a labeled drawer in a cabinet. You can put files inside folders, and even put folders inside other folders — just like rooms inside a house that has cupboards inside rooms!",
    "11-14":
      "Folders (also called directories) are the fundamental unit of file system organization. They store references (pointers) to files and other directories, forming a tree structure. The topmost folder is called the root directory. Every file on your computer lives at a specific path like /home/user/documents/homework/math.txt",
  },
  analogy: {
    "5-7": "A folder is like a room. Similar toys go in the toy room, similar books go in the study room!",
    "8-10": "Like a labeled drawer — you know exactly where to look without searching everywhere.",
    "11-14": "A directory node in a tree data structure, storing inode references to child files and subdirectories.",
  },
  funFact:
    "The first computer file system was created in 1956 for the IBM 305 RAMAC — the world's first hard disk drive!",
  dos: [
    "Give folders clear names like 'School Photos 2024'",
    "Keep similar files together in one folder",
    "Delete folders you no longer need to free up space",
  ],
  donts: [
    "Don't save everything on the Desktop — it slows your computer!",
    "Don't use special characters like / or * in folder names",
    "Don't delete a folder without checking what's inside first",
  ],
  quiz: [
    {
      for: "5-7",
      question: "A folder on a computer is like...?",
      choices: ["A room in your house", "A piece of food", "A cloud in the sky"],
      correct: 0,
      explanation:
        "Yes! Just like a room stores similar things, a folder stores similar files together!",
    },
    {
      for: "5-7",
      question: "To open a folder, you need to...?",
      choices: ["Knock twice (double-click)", "Blow on it", "Shake the computer"],
      correct: 0,
      explanation:
        "Double-clicking is like knocking twice on a door — knock knock and the folder opens!",
    },
    {
      for: "8-10",
      question: "What do you call a folder inside another folder?",
      choices: ["Sub-folder", "Super-folder", "Mini-file"],
      correct: 0,
      explanation: "A folder inside a folder is called a sub-folder or sub-directory!",
    },
    {
      for: "8-10",
      question: "Which of these is a good folder name?",
      choices: ["School Photos 2024", "a/b/c stuff", "???files???"],
      correct: 0,
      explanation:
        "Clear names help you find files quickly. Special characters like / can cause errors!",
    },
    {
      for: "11-14",
      question: "What is the topmost folder in a file system called?",
      choices: ["Root directory", "Home directory", "Base folder"],
      correct: 0,
      explanation:
        "The root directory (/ on Linux/Mac, C:\\ on Windows) is the starting point of the entire file tree.",
    },
    {
      for: "11-14",
      question: "A folder stores which of the following?",
      choices: [
        "Pointers (references) to files and subfolders",
        "The actual file data",
        "Only images",
      ],
      correct: 0,
      explanation:
        "Directories store inode references — pointers to where the actual file data lives on disk.",
    },
  ],
};

export default lesson;
