import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "python-intro",
  title: "Python — Your First Language",
  emoji: "🐍",
  category: "programming",
  narrative: {
    "5-7": [
      { heading: "Imagine talking to a very obedient robot…", text: "If you tell the robot 'print Hello', it will print the word Hello. If you tell it 'repeat this 10 times', it will repeat exactly 10 times. Python is a language you can use to give instructions to a computer — and the computer will follow them precisely." },
      { heading: "Python is designed to be easy to read", text: "Python code looks almost like English. 'print(Hello World)' prints hello world. 'if score > 90: print(You got an A!)' checks if the score is high and prints a message. The computer understands these instructions.", diagramId: "python-vs-english" },
      { heading: "What can you make with Python?", text: "Games, websites, calculators, drawing programs, chat bots, and more. Python is used by scientists, game developers, and even NASA. It's one of the most popular programming languages in the world.", diagramId: "python-code" },
      { heading: "In your daily life…", text: "Instagram, YouTube, and Spotify were all built partly in Python. AI assistants like ChatGPT use Python for training. Learning Python is like getting a superpower — you can build almost anything." },
    ],
    "8-10": [
      { heading: "Python was designed for humans, not machines", text: "Most early programming languages were designed around how computers work. Python's creator, Guido van Rossum, designed it around how humans think. That's why Python code is easy to read and write compared to languages like C." },
      { heading: "Python vs plain English", text: "print('Hello') in Python does exactly what it says. for i in range(10): repeats 10 times. if x > 5: checks a condition. The syntax is minimal — no curly braces, semicolons just where needed. Indentation is part of the language.", diagramId: "python-vs-english" },
      { heading: "Real Python programs", text: "Variables store values. Functions are named steps. Loops repeat work. Lists hold collections. Dictionaries store key-value pairs. These five building blocks can create any program.", diagramId: "python-code" },
      { heading: "Python's ecosystem", text: "PyPI has over 500,000 free libraries for everything: web development (Django, Flask), data science (NumPy, Pandas), AI (TensorFlow, PyTorch), games (Pygame), and automation. You rarely start from scratch." },
    ],
    "11-14": [
      { heading: "Python is interpreted — line by line", text: "Unlike C or Java, Python code isn't compiled to machine code ahead of time. The CPython interpreter reads your .py file line by line and executes each instruction. This makes it slower but also more interactive — you can try things in the Python REPL immediately." },
      { heading: "Python's object model", text: "In Python, everything is an object — numbers, strings, functions, even classes themselves. Objects have attributes (data) and methods (functions). This makes the language consistent and predictable.", diagramId: "python-vs-english" },
      { heading: "Data structures in Python", text: "List: ordered, mutable sequence [1,2,3]. Tuple: ordered, immutable (1,2,3). Dictionary: key-value mapping {'name': 'Alice'}. Set: unordered unique values {1,2,3}. Choosing the right structure affects both correctness and performance.", diagramId: "python-code" },
      { heading: "Python in the real world", text: "NumPy uses C extensions under the hood for fast array operations — Python calls them via the C API. This design (simple Python interface, fast C core) is why Python dominates data science despite being interpreted." },
    ],
    "15-18": [
      { heading: "CPython internals and the GIL", text: "CPython uses reference counting for memory management + a cycle detector for circular references. The Global Interpreter Lock (GIL) prevents multiple threads from running Python bytecode simultaneously — Python threads are good for I/O-bound work but not CPU-bound parallelism. Use multiprocessing or async for CPU-bound work." },
      { heading: "Python's performance trade-offs", text: "CPython is ~50-100× slower than C for CPU-bound work. Mitigation strategies: NumPy (vectorised C ops), Cython (compile Python to C), ctypes/cffi (call C libraries), PyPy (JIT compiler, 5-10× faster). For web services and ML inference, speed rarely matters — Python's ecosystem and dev speed win.", diagramId: "python-code" },
      { heading: "Advanced Python patterns", text: "Generators (yield) allow lazy evaluation of infinite sequences. Context managers (__enter__/__exit__) handle resource cleanup. Decorators modify functions at definition time (used for caching, authentication, timing). Metaclasses customise class creation — the foundation of ORMs like Django.", diagramId: "python-vs-english" },
      { heading: "Python in AI — the dominant language", text: "PyTorch defines neural network layers as Python classes (nn.Module). The forward() method defines the computation graph. Autograd tracks all operations and computes gradients automatically via backpropagation. Python's ease of experimentation made it the standard for AI research — now every AI framework has a Python API first." },
    ],
  },
  story: {
    "5-7": "Python is a programming language named after a comedy TV show (Monty Python) — not a snake! It's one of the easiest languages to learn because it reads almost like English. To make the computer say 'Hello!' you just type: print('Hello!') — and it does it! Python is used to make YouTube, Instagram, and even spacecraft software!",
    "8-10": "Python is one of the world's most popular programming languages — beginner-friendly but powerful enough for professionals. It uses indentation (spaces) instead of brackets to organise code. Core concepts you'll use: print() to show output, variables (name = 'Sam') to store data, if/else for decisions, and for loops to repeat actions. Python was created by Guido van Rossum in 1991 and is used by NASA, Google, Netflix, and Instagram.",
    "11-14": "Python is a dynamically-typed, interpreted, garbage-collected language with first-class functions and a comprehensive standard library. Key features: duck typing, list comprehensions, generators, decorators, context managers. CPython is the reference implementation; PyPy uses JIT for ~5x speedup. Python's GIL (Global Interpreter Lock) limits true multithreading — use multiprocessing or async/await for concurrency. Dominant in data science (NumPy, Pandas, PyTorch) and scripting.",
  },
  analogy: {
    "5-7": "Python is like telling the computer what to do in almost-English. print('I love coding!') — and it prints it!",
    "8-10": "Python reads like a story — if score > 10: print('You win!') — even non-programmers can almost understand it.",
    "11-14": "A high-level dynamically-typed language optimising for developer productivity and readability over runtime performance.",
  },
  photo: "https://images.unsplash.com/photo-1649180556628-9248aa7f2c64?w=700&fit=crop",
  photoAlt: "Python code with syntax highlighting in a VS Code editor on screen",
  keyFacts: [
    { emoji: "🐍", label: "Created By", value: "Guido van Rossum, 1991", detail: "Named after Monty Python, not the snake! Guido wanted a fun, readable language." },
    { emoji: "📊", label: "Popularity", value: "#1 most popular language (2024)", detail: "Python topped the TIOBE index in 2024. Used in AI, science, web, and education." },
    { emoji: "⚡", label: "Speed", value: "Interpreted — 10–100× slower than C", detail: "Python trades speed for readability. For performance-critical code, numpy uses C under the hood." },
    { emoji: "📦", label: "Libraries", value: "500,000+ packages on PyPI", detail: "numpy, pandas, tensorflow, django, flask — Python's ecosystem covers almost everything." },
    { emoji: "🤖", label: "AI & ML", value: "TensorFlow, PyTorch, scikit-learn", detail: "Most AI research is published in Python. It's the language of machine learning." },
    { emoji: "🏢", label: "Used By", value: "Google, Netflix, NASA, Instagram", detail: "Instagram's backend is Python (Django). Google uses Python extensively internally." },
  ],
  funFact: "Python is now the most popular programming language in the world (2024 TIOBE index). It's used to train AI models, analyse DNA sequences, fly drones, and power the backend of Instagram!",
  dos: ["Install Python free from python.org and try it today!", "Start with small programs: calculators, guessing games, simple animations"],
  donts: ["Don't worry about Python being 'slow' when learning — speed doesn't matter for beginners", "Don't skip understanding — copying code without knowing why it works won't help you"],
  quiz: [
    { for: "5-7", question: "What does print('Hello!') do in Python?", choices: ["Shows the word Hello! on the screen", "Prints it on paper", "Deletes a file"], correct: 0, explanation: "print() is Python's way of showing text on screen. Try it!" },
    { for: "8-10", question: "What is a variable in Python?", choices: ["A name that stores a value — like name = 'Sam'", "A type of loop", "The equals sign"], correct: 0, explanation: "Variables store data. name = 'Sam' creates a variable called 'name' that holds 'Sam'. You can use it later in your code!" },
    { for: "11-14", question: "What is Python's GIL?", choices: ["Global Interpreter Lock — prevents multiple threads from executing Python bytecode simultaneously", "A graphics library", "A type of loop"], correct: 0, explanation: "The GIL is a mutex in CPython that ensures only one thread runs Python code at a time, simplifying memory management but limiting CPU-bound parallelism." },
  ],
};
export default lesson;
