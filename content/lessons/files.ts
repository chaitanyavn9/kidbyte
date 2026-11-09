import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "files",
  title: "What is a File?",
  emoji: "📄",
  category: "digital-world",
  narrative: {
    "5-7": [
      { heading: "Imagine if all your books had no names…", text: "If every book in the library was just a pile of pages with no title on the cover, you'd never find anything! Files on a computer are like books — they have a name and a type so you know what's inside without opening them." },
      { heading: "What is a file?", text: "A file is a bundle of information saved with a name. Photos, songs, videos, documents — they're all files. The ending of the name (like .jpg or .mp3) tells you what kind of file it is.", diagramId: "file-types" },
      { heading: "Files live in folders", text: "Just like books go on shelves in sections in a library, files go in folders. Folders can be inside other folders — like a big school bag with pockets, and pockets inside pockets.", diagramId: "file-system-tree" },
      { heading: "In your daily life…", text: "Every photo you take, every document you write, every song you download is a file. The names and types help every app know how to open them — your music player only opens .mp3 files, not .jpg photos." },
    ],
    "8-10": [
      { heading: "Before computers, offices drowned in paper", text: "Imagine managing a school's records with physical paper files — finding one student's report meant searching through thousands of folders in filing cabinets. Computer files solve this by making search instant and storage infinite." },
      { heading: "File extensions tell the type", text: ".jpg = photo, .mp4 = video, .pdf = document, .mp3 = music, .py = Python code, .exe = Windows program. The extension isn't magic — it's just a hint to the OS which app should open it. You can rename an extension but that doesn't change what's inside.", diagramId: "file-types" },
      { heading: "The file system organises everything", text: "The file system is a tree structure — a root folder at the top, with branches of folders going down. On Windows: C:\\Users\\You\\Documents\\. On Mac/Linux: /home/you/Documents/. Every file has a path — its address in the tree.", diagramId: "file-system-tree" },
      { heading: "Metadata — info about the file", text: "Every file has metadata the OS stores: name, size, type, creation date, last modified date, permissions (who can read/write). This metadata lives separately from the file contents, in the file system's index." },
    ],
    "11-14": [
      { heading: "Files are abstractions over raw bytes", text: "At the hardware level, storage is just blocks of bytes. The file system organises these into named files. When you open a file, the OS finds its blocks on disk, reads them into RAM, and hands them to the app. The app never talks to the hardware directly." },
      { heading: "MIME types and format standards", text: "MIME types (Multipurpose Internet Mail Extensions) are the universal file type system: image/jpeg, audio/mpeg, application/pdf. Web servers use Content-Type headers to tell browsers the MIME type. Magic numbers (file signatures) let the OS identify a file type by its first few bytes, independent of extension.", diagramId: "file-types" },
      { heading: "File system tree and inodes", text: "On Linux, every file and folder is an inode — a data structure storing metadata + pointers to data blocks. Directories are special inodes containing a list of (name, inode number) pairs. The root inode is inode 2. Hard links and soft links both reference inodes.", diagramId: "file-system-tree" },
      { heading: "Permissions and security", text: "POSIX permissions: owner/group/other × read/write/execute = 9 bits. chmod 755 = rwxr-xr-x. setuid bit lets a program run with the owner's privileges (how sudo works). Windows uses ACLs (Access Control Lists) for finer-grained permission control." },
    ],
    "15-18": [
      { heading: "File systems — FAT32 to ext4 to ZFS", text: "FAT32 (1977): simple 32-bit cluster table, 4GB file size limit. NTFS: journaling, ACLs, sparse files, alternate data streams. ext4: extents (contiguous block ranges), 1 EB max. ZFS: copy-on-write, checksums for every block, built-in RAID, transactional semantics. Modern file systems trade complexity for reliability." },
      { heading: "Block devices and the VFS layer", text: "Linux's Virtual File System (VFS) provides a uniform interface (open, read, write, close) regardless of the actual file system (ext4, btrfs, ntfs, procfs, tmpfs). Drivers translate VFS calls to hardware commands. This is why the same C code can read a local file, a network file (NFS), or a /proc virtual file.", diagramId: "file-system-tree" },
      { heading: "File formats — structured bytes", text: "A .jpg file starts with magic bytes FF D8 FF. A .pdf starts with %PDF. A .png with 89 50 4E 47. Inside, formats define how bytes are grouped into headers, metadata, and data sections. Understanding binary file formats is essential for reverse engineering and forensics.", diagramId: "file-types" },
      { heading: "Modern storage challenges", text: "Object storage (S3, GCS) replaces file systems for cloud-scale data — no hierarchy, just key-value pairs of (URL path, bytes). Content-addressable storage (Git, IPFS) names files by their hash — same content = same name, guaranteed. These models scale to exabytes where traditional file systems fail." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&fit=crop",
  photoAlt: "File Explorer window on a computer showing folders and various file types",
  keyFacts: [
    { emoji: "📄", label: "What Is a File", value: "Named sequence of bytes on disk", detail: "A file is bytes stored on a disk with a name, extension, and metadata." },
    { emoji: "🏷️", label: "Extension", value: ".jpg .mp3 .pdf .docx .py", detail: "The extension tells the OS what program to open the file with." },
    { emoji: "⚖️", label: "Metadata", value: "Name, size, dates, permissions", detail: "Every file has metadata: who created it, when, how big it is, who can read it." },
    { emoji: "🗂️", label: "File Types", value: "Text, binary, executable", detail: "Text files store readable characters. Binary files store raw bytes (images, executables)." },
    { emoji: "🔒", label: "Permissions", value: "Read / Write / Execute (rwx)", detail: "Unix/Linux uses rwx permissions for owner, group, and others." },
    { emoji: "🗑️", label: "Deleted Files", value: "Often recoverable until overwritten", detail: "Deleting marks space as free — the data isn't erased until new data overwrites it." },
  ],
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
