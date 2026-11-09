import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "memory-allocation",
  title: "How Files Are Stored",
  emoji: "🗂️",
  category: "storage",
  narrative: {
    "5-7": [
      { heading: "Imagine the computer's memory as a giant shelf…", text: "Every program that runs needs to store its information somewhere in RAM. The computer has to carefully decide: where on the shelf does each program's data go? And when the program is done, that space should be freed up for the next program. This careful planning is called memory allocation." },
      { heading: "Stack vs heap — two different areas", text: "RAM is split into sections. The stack is like a neat pile of plates — things get added on top and removed from the top in order. The heap is like a big open warehouse where things can be stored anywhere and retrieved in any order.", diagramId: "stack-heap" },
      { heading: "Virtual memory — everyone gets their own space", text: "The OS gives every program its own private chunk of memory, as if it had the whole computer to itself. Programs can't accidentally read each other's memory. This is called virtual memory — it's not real separate hardware, just a clever illusion.", diagramId: "virtual-memory" },
      { heading: "In your daily life…", text: "When a program uses too much memory, your computer slows down (it uses the hard drive as extra memory). When a program leaks memory (never frees what it allocated), it eventually crashes. Good programmers always clean up after themselves." },
    ],
    "8-10": [
      { heading: "Every variable needs a home", text: "When a program runs, every variable, every list, every object needs to be stored somewhere in RAM. The operating system and the program's runtime work together to decide where things go — this is memory allocation." },
      { heading: "Stack: fast, automatic, limited", text: "Local variables and function calls go on the stack. When you call a function, its variables are pushed onto the stack. When the function returns, they're automatically cleaned up (popped off). The stack is fast but limited in size (~1–8 MB).", diagramId: "stack-heap" },
      { heading: "Heap: flexible, manual, larger", text: "Dynamic allocations (new, malloc) go on the heap — the large memory area managed by the OS. The heap can be gigabytes. But unlike the stack, heap memory must be explicitly freed when done. Forgetting to free it causes a 'memory leak' — the program gradually eats more and more RAM.", diagramId: "virtual-memory" },
      { heading: "Virtual memory — the illusion of infinite RAM", text: "Each process thinks it has its own private address space (usually 0 to 2⁴⁸ bytes on 64-bit). The OS maps virtual addresses to real physical RAM. If RAM fills up, rarely-used pages are swapped to disk. This lets you run more programs than your RAM could normally hold, at the cost of speed." },
    ],
    "11-14": [
      { heading: "Process address space layout", text: "A process's virtual address space has distinct segments: text (executable code, read-only), data (global variables), BSS (uninitialised globals), heap (dynamic allocations, grows up), stack (call frames, grows down). ASLR (Address Space Layout Randomisation) randomises segment positions to make exploits harder.", diagramId: "virtual-memory" },
      { heading: "Stack frames and the call convention", text: "Each function call pushes a stack frame: return address, saved registers, local variables. RSP (stack pointer) points to the top of the stack. When a function is called, RSP decreases; when it returns, RSP increases. Stack overflow happens when recursion is too deep and RSP reaches the stack's limit.", diagramId: "stack-heap" },
      { heading: "malloc/free and the heap allocator", text: "malloc() requests a chunk of heap memory from the allocator (glibc ptmalloc, jemalloc, tcmalloc). The allocator maintains free lists and uses mmap/sbrk system calls to get pages from the OS. free() returns the chunk. Fragmentation and cache behaviour make allocator choice a performance concern." },
      { heading: "Garbage collection vs manual management", text: "C/C++/Rust: manual memory management — programmer controls allocation/deallocation. Java/Python/Go: garbage collector automatically finds and frees unreachable objects. GC pause times (stop-the-world) can be a problem in real-time systems. Rust's ownership model provides memory safety with zero GC overhead." },
    ],
    "15-18": [
      { heading: "Virtual memory and the page table", text: "Virtual addresses are translated to physical addresses by the MMU (Memory Management Unit) using page tables. A 4-level page table (PML4 on x86-64) maps 48-bit virtual addresses to physical pages (4KB each). The TLB (Translation Lookaside Buffer) caches recent translations — a TLB miss causes a page table walk (~100 ns).", diagramId: "virtual-memory" },
      { heading: "Memory safety vulnerabilities", text: "Buffer overflow: writing past an array's end overwrites adjacent memory. Use-after-free: accessing memory after it's been freed (may contain new data or attacker-controlled content). Double-free: freeing the same pointer twice corrupts the allocator's free lists. These are the most common RCE (Remote Code Execution) vulnerability classes in C/C++ programs." },
      { heading: "Rust's ownership model", text: "Rust enforces memory safety at compile time via ownership rules: each value has one owner, ownership is transferred (moved) on assignment, and borrowed references obey lifetime rules. The borrow checker guarantees no dangling pointers, no use-after-free, and no data races without garbage collection.", diagramId: "stack-heap" },
      { heading: "Huge pages and NUMA", text: "Normal pages are 4KB. Huge pages (2MB, 1GB) reduce TLB pressure — fewer entries needed. Critical for databases (PostgreSQL, Redis) with large working sets. NUMA (Non-Uniform Memory Access): on multi-socket servers, RAM is split between CPU sockets. Local memory accesses are 2–3× faster than remote. Allocating memory local to the CPU running the thread is a key HPC optimisation." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=700&fit=crop",
  photoAlt: "RAM memory modules installed in a motherboard showing physical computer memory",
  keyFacts: [
    { emoji: "📚", label: "Stack", value: "Auto-managed, LIFO, ~1–8 MB", detail: "Local variables live on the stack. Automatically freed when function returns." },
    { emoji: "🏗️", label: "Heap", value: "Manual/GC, any size, slow allocation", detail: "malloc/new allocates heap memory. Must be freed manually in C, or GC in Java/Python." },
    { emoji: "💥", label: "Stack Overflow", value: "Infinite recursion → crash", detail: "Each function call adds a stack frame. Too many = stack overflow error." },
    { emoji: "🕳️", label: "Memory Leak", value: "Heap allocated but never freed", detail: "Forgetting to free heap memory causes leaks. Browsers and long-running apps suffer most." },
    { emoji: "🗺️", label: "Virtual Memory", value: "Each process sees its own address space", detail: "The OS gives each process a private virtual address space. The MMU translates to physical RAM." },
    { emoji: "📏", label: "Pointer Size", value: "64-bit address (8 bytes on x64)", detail: "On a 64-bit system, a pointer is 8 bytes, addressing up to 16 exabytes of virtual space." },
  ],
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
