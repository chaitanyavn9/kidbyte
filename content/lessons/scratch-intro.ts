import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "scratch-intro",
  title: "Scratch — Code With Blocks!",
  emoji: "🧱",
  category: "programming",
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
