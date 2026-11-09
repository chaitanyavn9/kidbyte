import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "scratch-intro",
  title: "Scratch — Code With Blocks!",
  emoji: "🧱",
  category: "programming",
  narrative: {
    "5-7": [
      { heading: "What if programming was like playing with LEGO?", text: "LEGO bricks snap together in predictable ways — you can build anything by combining pieces correctly. Scratch is a programming language where code blocks snap together the same way. No typing strange symbols — just drag, snap, and run!" },
      { heading: "What is Scratch?", text: "Scratch is a visual programming language created by MIT for beginners. Instead of typing code, you drag colourful blocks and snap them together. Each block does something specific: move a character, play a sound, check a condition, repeat something 10 times.", diagramId: "scratch-blocks" },
      { heading: "Scratch and real code — same ideas", text: "The ideas in Scratch are exactly the same as in Python or JavaScript — loops, conditions, variables, functions. Learning Scratch teaches you to think like a programmer. When you're ready, moving to text-based code feels natural.", diagramId: "scratch-vs-code" },
      { heading: "In your daily life…", text: "Thousands of kids build games, animations, and interactive stories in Scratch at scratch.mit.edu — all free, no download needed. Many famous programmers started with Scratch or similar visual tools. It's the best first step into programming." },
    ],
    "8-10": [
      { heading: "Programming is abstract — visual tools make it concrete", text: "Reading code like 'for i in range(10): print(i)' is confusing for beginners. Scratch makes the same idea visual: a 'repeat 10' block containing a 'say (i)' block. The visual representation helps you understand the structure before learning syntax." },
      { heading: "Scratch block categories", text: "Motion (move sprites), Looks (change appearance), Sound (play audio), Events (when flag clicked), Control (loops and conditionals), Sensing (detect collisions, keyboard), Operators (maths and logic), Variables (store values), My Blocks (custom functions). Every programming concept is covered.", diagramId: "scratch-blocks" },
      { heading: "Scratch vs Python — same logic, different look", text: "when 🚩 clicked = start of program. repeat 10 = for i in range(10). move 10 steps = x += 10. say 'Hello!' = print('Hello!'). if touching edge? = if collision_detected(). The logic is identical — only the syntax differs.", diagramId: "scratch-vs-code" },
      { heading: "What can you build in Scratch?", text: "Platform games (like Mario), Pong clones, story animations, quiz games, art generators, music sequencers, and even simple chatbots. The MIT Scratch community has over 100 million shared projects. Remixing others' projects is encouraged — a great way to learn." },
    ],
    "11-14": [
      { heading: "Scratch as a teaching tool — the abstraction ladder", text: "Scratch sits at the top of the abstraction ladder: visual blocks → Scratch bytecode → JavaScript (Scratch 3.0 runs in-browser using JS). Understanding this helps: Scratch is real programming, just with a visual frontend. MIT researchers designed Scratch based on cognitive science — visual feedback reduces cognitive load for beginners." },
      { heading: "Event-driven programming model", text: "Scratch uses an event-driven model: 'when flag clicked', 'when key pressed', 'when this sprite clicked', 'when I receive message'. This is the same model used in JavaScript (addEventListener), iOS (UIKit), and Android. Learning events in Scratch prepares you for every GUI framework.", diagramId: "scratch-blocks" },
      { heading: "From Scratch to Python", text: "Moving from Scratch to Python: replace drag with typing, replace 'repeat 10' with 'for i in range(10):', replace 'if touching edge?' with 'if pygame.Rect.colliderect()'. The concepts are identical — you're just learning syntax. Most Python beginners find the transition natural after Scratch.", diagramId: "scratch-vs-code" },
      { heading: "Beyond Scratch — visual programming paradigms", text: "Blockly (Google) is Scratch-like but generates JavaScript/Python/Lua. MIT App Inventor uses Scratch blocks to build real Android apps. Node-RED uses visual flow programming for IoT. Unreal Engine's Blueprint is a visual scripting system for professional game development. Visual programming is mainstream, not just educational." },
    ],
    "15-18": [
      { heading: "Scratch 3.0 technical architecture", text: "Scratch 3.0 runs entirely in the browser. Frontend: React + Redux. Scratch VM: JavaScript-based interpreter for Scratch bytecode. Rendering: Scratch Render uses WebGL for hardware-accelerated graphics. Audio: Web Audio API. Extensions (like text-to-speech, translation) call external APIs. The entire runtime is open-source on GitHub." },
      { heading: "Visual programming at scale", text: "Scratch is Turing-complete — anything computable can be expressed in Scratch. Projects implement recursive algorithms, cellular automata, even simple CPUs. But maintainability suffers at scale — spaghetti block connections, no type checking, no version control. This is why production software uses text-based languages.", diagramId: "scratch-vs-code" },
      { heading: "Constructionist learning theory", text: "Scratch is built on Seymour Papert's constructionism: children learn best by making things others can interact with, not just by being taught. The design decisions in Scratch (low floor/wide walls/high ceiling) deliberately support this. Modern CS education research consistently shows making real projects beats abstract exercises.", diagramId: "scratch-blocks" },
      { heading: "The transition pathway", text: "Scratch → Python (text coding) → JavaScript (web) → C/C++ (systems) is a well-trodden path. The critical transition is Scratch → text: mastering Python data structures (lists, dicts), functions, and OOP gives the mental model for all further learning. MIT's Introduction to CS (6.0001) uses Python and starts from scratch (pun intended)." },
    ],
  },
  story: {
    "5-7": "Scratch is a way to make games and animations by snapping colourful blocks together — no typing needed! It's like LEGO bricks for coding. You pick a 'When clicked' block, add a 'Move 10 steps' block, add a 'Play sound' block — snap snap snap — and you've made something happen! Scratch was made especially for kids and you can use it free at scratch.mit.edu.",
    "8-10": "Scratch is a visual programming language made by MIT for young coders. Instead of typing code, you drag and connect colourful blocks. Blue blocks move sprites (characters). Purple blocks change looks. Yellow blocks control when things happen. Orange blocks store variables. Green blocks do maths. You can make games, animations, stories, and interactive art — all without writing a single line of text code. It teaches the same logic as real programming!",
    "11-14": "Scratch uses a block-based visual programming paradigm — each block is a high-level abstraction over imperative code constructs. Event handlers (when green flag clicked), conditionals (if/else blocks), loops (repeat/forever), and variables are all present. Scratch compiles to JavaScript in the browser. The concepts map directly to text-based programming: events → event listeners, sprites → objects, scripts → methods. Scratch 3.0 supports extensions for physical computing (micro:bit, LEGO Mindstorms).",
  },
  analogy: {
    "5-7": "Scratch is like coding LEGO — snap colourful instruction blocks together and watch your character come alive!",
    "8-10": "Like building with instruction blocks instead of writing instructions — same logic, friendlier format.",
    "11-14": "A block-based visual DSL that abstracts imperative programming constructs into a drag-and-drop interface.",
  },
  photo: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&fit=crop",
  photoAlt: "Scratch programming interface on a screen with colorful code blocks",
  keyFacts: [
    { emoji: "🐱", label: "Created By", value: "MIT Media Lab, 2003", detail: "Scratch was designed by Mitchel Resnick's team at MIT to teach kids coding through play." },
    { emoji: "👥", label: "Users", value: "100+ million registered users", detail: "Scratch is the world's largest coding community for children." },
    { emoji: "🧩", label: "Block Types", value: "Motion, Looks, Sound, Events, Control, Sensing, Operators, Variables", detail: "Snap-together blocks replace text syntax. No semicolons or parentheses needed!" },
    { emoji: "🎮", label: "What You Can Make", value: "Games, animations, stories, art", detail: "Platformers, quizzes, music, and interactive stories — all doable in Scratch." },
    { emoji: "🌐", label: "Platform", value: "Free, runs in browser", detail: "Scratch runs at scratch.mit.edu — no download needed. Works on any device." },
    { emoji: "🔄", label: "Stepping Stone", value: "Concepts transfer to Python/JS", detail: "If/else, loops, variables, events — all Scratch concepts work the same in real languages." },
  ],
  funFact: "Over 100 million Scratch projects have been shared online. Kids from 8 to 16 have used Scratch to make thousands of games, interactive art pieces, and even simple AI projects!",
  dos: ["Go to scratch.mit.edu — it's completely free, no download needed", "Remix other people's projects to learn how they made them"],
  donts: ["Don't think Scratch is 'too easy' — learning the logic of events and loops IS real programming thinking", "Don't share personal information in your Scratch project names or descriptions"],
  quiz: [
    { for: "5-7", question: "How do you code in Scratch?", choices: ["By snapping colourful blocks together", "By typing lots of words", "By drawing pictures"], correct: 0, explanation: "Scratch uses drag-and-drop blocks — no typing! Perfect for learning coding logic." },
    { for: "8-10", question: "What is a 'sprite' in Scratch?", choices: ["A character or object you control with your code blocks", "A type of block", "The background"], correct: 0, explanation: "Sprites are your characters — you attach script blocks to them to make them move, speak, and interact!" },
    { for: "11-14", question: "What text-based concept does a Scratch 'forever' loop correspond to?", choices: ["A while(true) infinite loop", "A for loop with a fixed count", "A recursive function"], correct: 0, explanation: "Scratch's 'forever' block is exactly equivalent to while(true){} in Python/JavaScript — it runs continuously until the program stops." },
  ],
};
export default lesson;
