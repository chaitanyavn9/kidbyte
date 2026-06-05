import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "what-is-code",
  title: "What is Programming?",
  emoji: "👩‍💻",
  category: "programming",
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
