import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "drag-drop",
  title: "What is Drag and Drop?",
  emoji: "🖱️",
  category: "digital-world",
  narrative: {
    "5-7": [
      { heading: "Have you ever moved a photo from one folder to another?", text: "You click on it, hold the mouse button, move it somewhere else, and release. That action — click, hold, move, release — is drag and drop! It's one of the most natural ways to interact with a computer." },
      { heading: "What happens when you drag something?", text: "The computer watches your mouse at every moment. When you hold the button and move, it shows the item moving along with your cursor. When you release over a valid spot, it moves the item there. The computer is tracking every tiny movement.", diagramId: "drag-drop-demo" },
      { heading: "What events fire when you drag?", text: "The browser tracks each stage: when you start dragging, when you're dragging over things, when you drop. These stages fire events that code can listen to and respond to.", diagramId: "event-flow" },
      { heading: "In your daily life…", text: "Moving files in Finder or Explorer, reordering playlist songs, sorting tasks on a Kanban board (like Trello), rearranging icons on your phone home screen — all of these use drag and drop to make interaction feel natural and direct." },
    ],
    "8-10": [
      { heading: "Direct manipulation makes computers feel physical", text: "Before drag and drop, moving a file meant typing commands: 'mv file.txt /new/folder'. Drag and drop (invented at Xerox PARC, popularised by Mac in 1984) made computers feel physical — you pick things up and put them down, like in real life." },
      { heading: "What actually happens under the hood", text: "When you start dragging, the browser creates a 'ghost image' of the element. As you move, the browser fires 'dragover' events on whatever element is below the cursor. When you release, a 'drop' event fires on that target. Code listens to these events and updates the data.", diagramId: "drag-drop-demo" },
      { heading: "The event sequence", text: "mousedown (or touchstart) → dragstart (item grabbed) → drag (continuous while moving) → dragenter (entering a valid drop zone) → dragover (hovering over drop zone) → dragleave/drop → dragend. Each event is an opportunity for code to respond.", diagramId: "event-flow" },
      { heading: "DataTransfer — what gets carried", text: "The HTML5 Drag and Drop API has a DataTransfer object that travels with the drag. It carries the type and data being moved — a file path, text, a file object (for uploading). Drop targets check the DataTransfer to decide whether to accept the drop." },
    ],
    "11-14": [
      { heading: "HTML5 Drag and Drop API", text: "Any HTML element can be draggable (draggable='true'). Events: dragstart, drag, dragenter, dragleave, dragover, drop, dragend. The dragover handler must call event.preventDefault() to signal the element accepts drops — otherwise the drop event never fires. This is a common gotcha." },
      { heading: "DataTransfer and type negotiation", text: "event.dataTransfer.setData('text/plain', 'value') stores data to carry. On drop: getData('text/plain') retrieves it. For file drops: event.dataTransfer.files gives a FileList. Types include MIME types — multiple types can be set for different drop targets to consume whichever they understand.", diagramId: "event-flow" },
      { heading: "Visual feedback during drag", text: "setDragImage(element, x, y) customises the ghost image. CSS transforms the dragged element (opacity, border). Dragenter/dragleave change the drop zone style (highlight/unhighlight). These visual signals tell the user what will happen when they release.", diagramId: "drag-drop-demo" },
      { heading: "Touch events vs pointer events", text: "HTML5 drag and drop doesn't work on touch screens. Mobile drag uses Touch Events (touchstart/touchmove/touchend) or the newer Pointer Events API (pointerdown/pointermove/pointerup) which unifies mouse, touch, and stylus. Most drag-and-drop libraries (react-dnd, dnd-kit) abstract this complexity." },
    ],
    "15-18": [
      { heading: "Event delegation and performance", text: "Attaching dragover listeners to hundreds of elements is expensive. Event delegation: attach one listener to a parent container and check event.target to identify the actual drop zone. This reduces DOM event listeners from N to 1. Essential for large lists (hundreds/thousands of sortable items)." },
      { heading: "Virtualized drag and drop", text: "Libraries like react-beautiful-dnd render only visible items (virtualisation) but need special handling for drag-and-drop because the dragged item may scroll outside the visible window. DnD-kit and @atlaskit/pragmatic-drag-and-drop handle this with separate overlay layers.", diagramId: "drag-drop-demo" },
      { heading: "Accessibility and ARIA for drag and drop", text: "Visual drag and drop is inaccessible to keyboard and screen reader users. ARIA roles: role='listbox' + 'option' with aria-grabbed/aria-dropeffect (deprecated but still supported). Accessible alternatives: provide keyboard shortcuts (space to grab, arrow keys to move, enter to drop) alongside drag interactions.", diagramId: "event-flow" },
      { heading: "Native app drag and drop", text: "On macOS, NSItemProvider carries data between apps. On Windows, COM's IDropSource/IDropTarget interfaces implement cross-app drag. On iOS/iPadOS, UIDropInteraction enables drag between apps. Inter-app drag requires the OS to mediate data transfer — it validates that the receiving app is allowed to receive the type being dragged." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&fit=crop",
  photoAlt: "Laptop screen showing a user interface with draggable elements",
  keyFacts: [
    { emoji: "🖱️", label: "Events Fired", value: "dragstart → drag → dragover → drop", detail: "The browser fires these events in sequence during a drag-drop interaction." },
    { emoji: "📋", label: "DataTransfer API", value: "Passes data between drag source & target", detail: "event.dataTransfer.setData() stores what's being dragged; getData() retrieves it." },
    { emoji: "📅", label: "Introduced", value: "HTML5 drag-and-drop (2008)", detail: "HTML5 standardised drag-and-drop. Before that, it required complex JavaScript workarounds." },
    { emoji: "📱", label: "Touch", value: "Touch devices need separate events", detail: "HTML5 drag-drop doesn't work on mobile — touch events (touchstart/touchmove) are needed." },
    { emoji: "♿", label: "Accessibility", value: "Must have keyboard alternative", detail: "Screen reader users can't drag — always provide cut/paste or move buttons as fallback." },
    { emoji: "🎮", label: "Use Cases", value: "File upload, kanban, game pieces", detail: "Trello, Figma, and most IDEs use drag-drop for arranging cards, layers, and code blocks." },
  ],
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
