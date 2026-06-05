import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "python-intro",
  title: "Python — Your First Language",
  emoji: "🐍",
  category: "programming",
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
