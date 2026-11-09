import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "folder",
  title: "What is a Folder?",
  emoji: "📁",
  category: "digital-world",
  narrative: {
    "5-7": [
      { heading: "Imagine if all your school papers were in one giant pile…", text: "Homework, test papers, art projects, notes — all mixed together in one massive pile. Finding anything would take forever! Folders on a computer solve exactly this problem. They let you organise files into groups so you can find them quickly." },
      { heading: "A folder is like a physical folder", text: "Just like a paper folder holds related papers together, a computer folder (also called a directory) holds related files together. You can put a folder inside another folder — like a binder with sections inside it.", diagramId: "folder-vs-file" },
      { heading: "Folders create a tree of organisation", text: "On your computer there's a main folder (called root or Home). Inside are folders for Documents, Downloads, Pictures, Music, and more. Inside Documents you might have School and Personal folders. This tree of folders helps you find any file quickly.", diagramId: "folder-hierarchy" },
      { heading: "In your daily life…", text: "Your phone has folders for Photos, Videos, Downloads, and Apps. Your computer's Downloads folder is probably a mess — that's what happens without organisation! Creating folders by subject or project keeps everything findable." },
    ],
    "8-10": [
      { heading: "Without folders, every file would be at the same level", text: "A flat list of thousands of files with no organisation would be unusable. Folders create a hierarchical structure — a tree — that mirrors how humans naturally organise information: by category, project, date, or type." },
      { heading: "Files vs folders — what's different?", text: "Files contain data — text, images, code, music. Folders are containers — they hold files and other folders but contain no data themselves (just a list of what's inside them). The key difference: files are leaves, folders are branches.", diagramId: "folder-vs-file" },
      { heading: "Path: the address of any file", text: "Every file has a path — its precise location in the folder tree. Windows: C:\\Users\\You\\Documents\\essay.docx. Mac/Linux: /home/you/Documents/essay.docx. The backslash (Windows) or forward slash (Mac/Linux) separates folder names. The path uniquely identifies every file on the computer.", diagramId: "folder-hierarchy" },
      { heading: "Hidden folders and system folders", text: "Some folders are hidden — they store system files that shouldn't be accidentally deleted. On Mac: ~/Library/. On Windows: C:\\Windows\\System32\\. Linux: /etc/ (config), /var/ (variable data), /bin/ (programs). These are there but hidden from regular users." },
    ],
    "11-14": [
      { heading: "Directories are just special files", text: "In Linux, everything is a file — including directories. A directory is a file that contains a list of (filename, inode number) pairs. The root directory is inode 2. Creating a folder creates a new inode with an empty list. This uniformity simplifies the kernel." },
      { heading: "Relative vs absolute paths", text: "Absolute path: starts from root (/home/user/docs/file.txt or C:\\Users\\User\\docs\\file.txt). Relative path: starts from current directory (docs/file.txt or ../other/file.txt). The . refers to current directory, .. to parent. Shell navigation uses these constantly.", diagramId: "folder-hierarchy" },
      { heading: "Folder hierarchy in a typical OS", text: "Linux FHS (Filesystem Hierarchy Standard): / (root) → /bin (binaries), /etc (config), /home (users), /var (logs/spool), /tmp (temporary), /proc (virtual kernel data), /dev (device files), /mnt (mount points). Understanding this hierarchy is essential for system administration.", diagramId: "folder-vs-file" },
      { heading: "Hard links and symbolic links", text: "A hard link creates a second directory entry pointing to the same inode — both names point to the same file. A symlink (soft link) is a special file containing a path — like a shortcut. Deleting the original hard link target doesn't remove data if other hard links exist. Deleting the symlink target breaks the symlink." },
    ],
    "15-18": [
      { heading: "File system internals — inodes and dentries", text: "Linux ext4: an inode stores metadata (uid, gid, permissions, timestamps, block pointers) but NOT the filename. Filenames live in directory entries (dentries) that map name → inode number. The dentry cache (dcache) in the kernel caches recently accessed directory entries for fast path resolution." },
      { heading: "Mount points and the VFS namespace", text: "Linux uses a single unified namespace. External drives, network shares (NFS), and even virtual filesystems (/proc, /sys) all mount onto the directory tree at a mount point. The VFS (Virtual File System) layer presents a uniform interface. Containers use Linux namespaces to give each container its own root filesystem view.", diagramId: "folder-hierarchy" },
      { heading: "Directory traversal attacks", text: "If user input is used in a file path without sanitisation, an attacker can inject ../ sequences to navigate outside the intended directory. Path traversal (CVE-2021-41773 in Apache) has compromised many web servers. Defence: canonicalise the path, then verify it starts with the allowed base directory before accessing it.", diagramId: "folder-vs-file" },
      { heading: "Object storage vs file systems", text: "Traditional file systems have hierarchy (folders). Object storage (S3, GCS) has a flat namespace — objects are accessed by bucket + key (a path-like string). No real directories — just keys containing slashes. At exabyte scale, hierarchical metadata becomes a bottleneck. Object storage solves this by eliminating the hierarchy." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&fit=crop",
  photoAlt: "Real manila file folders organized in a filing cabinet",
  keyFacts: [
    { emoji: "📁", label: "What Is a Folder", value: "A container for files and subfolders", detail: "Also called a directory. It holds references to files but contains no data itself." },
    { emoji: "🌳", label: "Structure", value: "Tree — root → branches → leaves", detail: "The file system is a tree. The root (/ on Linux, C:\\ on Windows) is the top level." },
    { emoji: "📍", label: "Path", value: "/home/user/docs/essay.txt", detail: "Every file has a unique path. Slashes (/) separate folder names in the address." },
    { emoji: "🔗", label: "Symlinks", value: "Shortcuts pointing to another path", detail: "A symbolic link is a file that points to another file or folder — like an alias." },
    { emoji: "🔒", label: "Permissions", value: "rwxr-xr-x (Linux)", detail: "Folder permissions control who can list, enter, or create files inside it." },
    { emoji: "📅", label: "First File System", value: "IBM RAMAC, 1956", detail: "The first disk-based file system was invented for the IBM 305 RAMAC hard drive." },
  ],
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
