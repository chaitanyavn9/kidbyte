import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "drag-drop",
  title: "What is Drag and Drop?",
  emoji: "🖱️",
  category: "digital-world",
  story: {
    "5-7": "You know how sometimes when you don't listen to mom, she might grab your hand or twist your ear and drag you to the place she wants you to sit? Drag and drop works the same way on a computer! You click and HOLD on a file (grab it like mom grabs your ear), then DRAG your mouse to where you want the file to go, then LET GO (drop it). The file moves to its new home!",
    "8-10": "Drag and drop is a way to move things on your computer using the mouse. Click and hold down the mouse button on a file or icon — this 'picks it up'. While still holding, move the mouse to the new location — this 'drags' it. Release the mouse button — this 'drops' it in the new place. You can use it to move files between folders, rearrange icons, or move items in apps.",
    "11-14": "Drag and drop is a UI interaction pattern implemented via mouse events: mousedown (pickup), mousemove (drag), mouseup (drop). The HTML5 Drag and Drop API provides native browser support with draggable attribute and dragstart, dragover, drop event handlers. The OS also implements drag-and-drop at system level using clipboard or IPC for cross-application transfers (e.g., dragging a file from the file manager into an email).",
  },
  analogy: {
    "5-7": "Like mom dragging you by the ear to sit somewhere — click and drag your files to where you want them!",
    "8-10": "Like physically picking up a book from one shelf and placing it on another — but on screen with your mouse.",
    "11-14": "A pointer-event sequence (mousedown → mousemove → mouseup) triggering a data transfer between source and target DOM nodes.",
  },
  funFact: "Apple's first computer with drag-and-drop was the Lisa in 1983. Before that, you had to type commands like 'MOVE FILE.TXT C:\\NEW\\' — no mouse, no clicking!",
  dos: ["Use drag and drop to organise your desktop and files quickly", "You can drag multiple files at once by selecting them first (Ctrl+click)"],
  donts: ["Don't accidentally drag system files to the trash", "Be careful dragging files near the Delete or Trash icon!"],
  quiz: [
    { for: "5-7", question: "How is drag and drop like mom pulling you to a seat?", choices: ["You click and hold (grab), drag to the new place, and let go (drop)", "You type a command", "You press a button"], correct: 0, explanation: "Click = grab, drag = pull, drop = let go! Just like mom dragging you to sit where she wants!" },
    { for: "8-10", question: "What is the correct order of drag and drop?", choices: ["Click and hold → Move mouse → Release button", "Double-click → Type name → Press Enter", "Right-click → Cut → Paste"], correct: 0, explanation: "Hold down, drag, release! That's all there is to it." },
    { for: "11-14", question: "Which mouse events make up a drag-and-drop action?", choices: ["mousedown → mousemove → mouseup", "click → dblclick → contextmenu", "focus → blur → change"], correct: 0, explanation: "mousedown picks it up, mousemove drags it, mouseup drops it. The HTML5 DnD API adds draggable and dragover/drop events on top of this." },
  ],
};
export default lesson;
