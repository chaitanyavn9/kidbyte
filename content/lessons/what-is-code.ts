import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "what-is-code",
  title: "What is Programming?",
  emoji: "👩‍💻",
  category: "programming",
  narrative: {
    "5-7": [
      { heading: "Imagine giving directions to a robot…", text: "If you wanted a robot to make a sandwich, you'd have to give it exact step-by-step instructions: 'Pick up the bread. Open the peanut butter jar. Use the knife to spread it.' If you skip a step or say 'spread it on' without saying what to spread or where, the robot gets confused. That's exactly what code is — precise instructions for a computer." },
      { heading: "Code is a recipe for the computer", text: "A recipe tells you exactly what ingredients to use and what steps to follow. Code tells the computer exactly what to do and in what order. The computer follows every step perfectly — no guessing, no shortcuts.", diagramId: "code-as-recipe" },
      { heading: "What can code do?", text: "Code can make games, draw pictures, play music, sort lists, send messages, and control robots. Any time a computer does something, there's code telling it how. Even this website was built with code!", diagramId: "programming-concepts" },
      { heading: "In your daily life…", text: "Traffic lights, ATMs, washing machines, and even some toys follow code. Programmers are the people who write these instructions. Learning to code means you can create your own tools and games." },
    ],
    "8-10": [
      { heading: "Without precise instructions, nothing happens", text: "Computers are incredibly fast but completely literal. They do exactly what you tell them — not what you mean. A missing comma or a wrong word and the whole program stops. This is why programming is about being precise." },
      { heading: "Code mirrors the way we think about problems", text: "Every program is built from the same basic ideas: variables (storing values), conditionals (making decisions), loops (repeating things), and functions (reusable steps). These four concepts appear in every programming language.", diagramId: "programming-concepts" },
      { heading: "Recipes and algorithms", text: "An algorithm is a recipe for solving a problem — a precise sequence of steps. Bubble sort, binary search, Dijkstra's pathfinding — these are famous algorithms. Code is how we turn an algorithm into something a computer can run.", diagramId: "code-as-recipe" },
      { heading: "Many languages, same ideas", text: "Python, JavaScript, Java, C++ — different languages with different syntax, but all use variables, loops, conditions, and functions. Learning one language well means you can pick up others quickly." },
    ],
    "11-14": [
      { heading: "Programming is problem decomposition", text: "The skill isn't memorising syntax — it's breaking a big problem into smaller steps. 'Make a game' becomes: draw the screen, handle input, update game state, check for collisions, render results. Each step becomes a function. Functions become a program." },
      { heading: "The four pillars of programming", text: "Variables (named storage), Control flow (if/else, loops), Functions (reusable named steps), Data structures (arrays, dicts, trees). Every program is a combination of these. The language is just the notation.", diagramId: "programming-concepts" },
      { heading: "Code becomes machine instructions", text: "You write code in a high-level language. A compiler or interpreter translates it to machine code — binary instructions the CPU understands. Python line by line, C all at once. The result is the same: the CPU follows binary instructions.", diagramId: "code-as-recipe" },
      { heading: "Debugging — the real skill", text: "Professional programmers spend more time debugging than writing. A bug is any difference between what the code does and what you intended. Tools: print statements, debuggers (step through code line by line), unit tests (automated checks). Debugging is systematic detective work." },
    ],
    "15-18": [
      { heading: "Computation is universal", text: "Church-Turing thesis: any computation that can be described algorithmically can be computed by a Turing machine — and therefore by any general-purpose computer. This means all programming languages are equivalent in power (Turing-complete). Differences are expressiveness, performance, and safety, not fundamental capability." },
      { heading: "Type systems and correctness", text: "Static types (TypeScript, Rust, Java) catch errors at compile time. Dynamic types (Python, JS) catch errors at runtime. Dependent types (Idris, Coq) can prove program correctness mathematically. Rust's borrow checker statically prevents memory safety bugs — no GC needed.", diagramId: "programming-concepts" },
      { heading: "Abstraction layers in a real system", text: "HTTP request → framework router → handler function → ORM query → SQL → database engine → B-tree index → disk I/O → SSD firmware. Each layer hides complexity. Understanding where your code sits in this stack determines your mental model and debugging ability.", diagramId: "code-as-recipe" },
      { heading: "AI and the future of coding", text: "LLMs (Copilot, Cursor, Claude) can generate, explain, and debug code. They shift the programmer's job toward architecture, requirements clarity, and review. The fundamentals — algorithms, data structures, systems thinking — matter more, not less, because you need to evaluate what AI generates." },
    ],
  },
  story: {
    "5-7": "Programming is giving instructions to a computer — like a recipe! Just like a recipe says 'add 2 cups of flour, stir, bake for 30 minutes', a computer program says 'show this picture, wait for a click, play this sound'. Computers are very obedient — they follow instructions exactly! If you say it wrong, they do the wrong thing. If you say it right, they do amazing things!",
    "8-10": "Programming (or coding) is writing instructions for a computer in a language it can understand. There are many programming languages — Python, JavaScript, Java, C++ and more. Each language has its own words and rules (called syntax). A set of instructions is called a program or code. Programmers solve problems by breaking them into small steps and writing code for each step. All apps, games, and websites were written by programmers!",
    "11-14": "Programming is the process of designing and implementing algorithms in a formal language that can be compiled or interpreted to machine code. Core concepts: variables, control flow (if/else, loops), functions, data structures (arrays, hashmaps), and abstractions (classes, modules). Computational thinking involves decomposition, pattern recognition, abstraction, and algorithm design. Modern software is built in layers: OS → runtime → frameworks → application code.",
  },
  analogy: {
    "5-7": "Programming is like writing a recipe for the computer — tell it exactly what to do, step by step!",
    "8-10": "Like directing a very obedient but very literal robot — it does EXACTLY what you say, nothing more, nothing less.",
    "11-14": "Expressing algorithms in formal syntax that compilers/interpreters translate to executable machine instructions.",
  },
  photo: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&fit=crop",
  photoAlt: "Programming code open in a text editor showing colorful syntax highlighting",
  keyFacts: [
    { emoji: "📝", label: "What Is Code", value: "Instructions a computer can execute", detail: "Code is a precise list of steps. Computers follow them exactly — no guessing allowed." },
    { emoji: "🌐", label: "Languages", value: "700+ programming languages exist", detail: "Python, JavaScript, C++, Java, Rust, Go — each built for different purposes." },
    { emoji: "⚙️", label: "Execution", value: "Compiled or interpreted", detail: "C/Rust compile to machine code. Python/JS are interpreted line by line at runtime." },
    { emoji: "🏗️", label: "Building Blocks", value: "Variables, loops, functions, conditions", detail: "Every program ever written — from games to AI — uses just these four concepts." },
    { emoji: "🌍", label: "Who Writes It", value: "30+ million developers globally", detail: "Software developers number over 30 million worldwide. The demand keeps growing." },
    { emoji: "📅", label: "First Program", value: "Ada Lovelace, 1843", detail: "Ada Lovelace wrote the first algorithm for Charles Babbage's mechanical computer in 1843." },
  ],
  funFact: "Ada Lovelace wrote the first computer program in 1843 — over 100 years before the first computer was built! She wrote it for a hypothetical machine that had never been constructed.",
  dos: ["Start with Python — it reads almost like English", "Break every problem into small steps before coding"],
  donts: ["Don't give up when code doesn't work — debugging is half of programming!", "Don't copy code without understanding it — you won't learn"],
  quiz: [
    { for: "5-7", question: "What is programming?", choices: ["Giving step-by-step instructions to a computer", "Drawing pictures on a computer", "Turning the computer on and off"], correct: 0, explanation: "Programming = writing instructions for the computer. It follows them exactly — just like a recipe!" },
    { for: "8-10", question: "Which of these is a programming language?", choices: ["Python", "English", "HTML"], correct: 0, explanation: "Python is a programming language. HTML is a markup language. English is a human language — computers can't run it directly!" },
    { for: "11-14", question: "What is an algorithm?", choices: ["A step-by-step procedure to solve a problem", "A type of computer virus", "A programming language"], correct: 0, explanation: "An algorithm is a precise, finite set of instructions for solving a problem. All programs implement algorithms." },
  ],
};
export default lesson;
