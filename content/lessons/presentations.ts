import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "presentations",
  title: "Presentations & PowerPoint",
  emoji: "🎯",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "Imagine telling a story with pictures on a big screen…", text: "Instead of just reading from a paper, you show your ideas on a big screen — with pictures, big titles, and bullet points. Each page of your story is called a slide. Put many slides together and you have a presentation!" },
      { heading: "What is a presentation?", text: "A presentation (like a PowerPoint, Google Slides, or Keynote file) is a series of slides shown one after another on a screen. Each slide has a title, a few key points, and usually a picture or diagram. It helps your audience follow along and remember your ideas.", diagramId: "slide-structure" },
      { heading: "A presentation tells a story", text: "Good presentations follow a structure: start with a title slide (what is this about?), then introduce the topic, then give your key points, then give examples, then wrap up with a summary. This journey guides the audience.", diagramId: "presentation-flow" },
      { heading: "In your daily life…", text: "School projects, science fairs, business meetings — presentations happen everywhere. Learning to make clear, visual slides is one of the most useful skills in school and work. Tools like Google Slides are free and easy to start with." },
    ],
    "8-10": [
      { heading: "A presentation amplifies your message", text: "When you just talk, people can't follow along easily or take notes. When you show slides, the visual reinforces your words, your audience has something to look at, and key points are highlighted. Research shows people remember 65% of information when it's paired with an image vs 10% from text alone." },
      { heading: "Anatomy of a great slide", text: "One clear message per slide. Big, readable title. 3–5 bullet points (not full sentences). One supporting image or diagram. Enough white space — don't cram. Consistent fonts and colours throughout. Less is more — a slide that takes 5 seconds to read is better than one that takes 30.", diagramId: "slide-structure" },
      { heading: "Presentation structure", text: "Opening: hook the audience (surprising fact, question, story). Content: your key points with evidence. Closing: summary, call to action, memorable line. Good presentations have a clear beginning, middle, and end — just like a story.", diagramId: "presentation-flow" },
      { heading: "Delivery matters as much as slides", text: "Even great slides can't save a poor delivery. Know your material (don't read from the slides). Make eye contact. Speak clearly and vary your pace. Use pauses. Practice 3+ times. The slides are your visual aid, not your script." },
    ],
    "11-14": [
      { heading: "Design principles for presentations", text: "Signal vs noise: remove everything that doesn't serve the message. Contrast: important things should stand out. Alignment: elements should line up — visual chaos confuses. Proximity: related things should be near each other. Repetition: consistent colours/fonts across slides look professional." },
      { heading: "Visual hierarchy in slide design", text: "The eye moves to: largest element first, then highest contrast, then top-left corner. Use these principles: title is largest, most important point has highest contrast, diagrams draw the eye where you want. White space is not wasted space — it makes content breathable.", diagramId: "slide-structure" },
      { heading: "Slide structure and narrative arc", text: "Opening hook (attention): surprising stat, provocative question, or personal story. Rising tension (problem): why does this matter? What's at stake? Resolution (solution/insight): your key message. Proof (evidence): data, examples, visuals. Closing (call to action/summary): what should they do next?", diagramId: "presentation-flow" },
      { heading: "Presentation file formats", text: ".pptx: PowerPoint format, most compatible. .key: Keynote (Apple), beautiful transitions, Mac only. .gslides: Google Slides, cloud-native, easy to share. Export to PDF for universal sharing (loses animations). Export to MP4 for video. PPTX is the universal exchange format." },
    ],
    "15-18": [
      { heading: "The science of persuasive presentations", text: "Aristotle's rhetorical triangle: Logos (logic/evidence), Ethos (credibility/trust), Pathos (emotion/story). Effective presentations balance all three. Research shows the first 30 seconds determine whether the audience is engaged. The 'curse of knowledge' — presenters assume too much prior knowledge — is the most common failure mode." },
      { heading: "Data visualisation in presentations", text: "Charts in presentations need to be simpler than in reports — one insight per chart, clearly labelled, meaningful colours. Edward Tufte's data-ink ratio: maximise data, minimise non-data ink. Bar charts for comparisons, line charts for trends, scatter plots for correlations. Avoid 3D charts — they distort data.", diagramId: "slide-structure" },
      { heading: "Presentation as a communication design problem", text: "Great presentations (Apple keynotes, TED talks) are designed with cinematic attention to detail: every word chosen deliberately, every slide timed to the spoken word, every image licensed and high-quality. The deck is a visual script. Steve Jobs rehearsed keynotes for weeks. Delivery and design are inseparable.", diagramId: "presentation-flow" },
      { heading: "Beyond slide decks — interactive and narrative formats", text: "Prezi uses a spatial canvas instead of linear slides — zooming between sections. Miro and FigJam allow collaborative whiteboard presentations. Scrollytelling (journalism/data viz) uses scroll position to trigger animations. Notion/Craft documents can serve as 'living' presentations updated in real time. The linear slideshow is one of many presentation formats." },
    ],
  },
  story: {
    "5-7": "A presentation is a way to show your ideas to an audience using slides — like a picture book but on a big screen! Each slide has text and pictures, and you click to go to the next one. PowerPoint and Google Slides are the most popular tools for making presentations.",
    "8-10": "PowerPoint slides are used in school projects, business meetings, and science fairs to explain ideas visually. You can add text boxes, images, shapes, charts, and animations. Slide layouts let you quickly format slides consistently. Speaker notes help you remember what to say for each slide.",
    "11-14": "Professional presentations use: Slide Masters (define consistent fonts, colours, logos across all slides without editing each one), custom slide layouts, embedded charts from Excel that update live, animations (entrance/emphasis/exit with timing), transitions (Morph for smooth object movement), hyperlinks between slides for non-linear navigation. Rule of thumb: one idea per slide, 6×6 rule (max 6 bullets × 6 words each).",
    "15-18": "High-impact presentations follow the 'assertion-evidence' design (Alley, Penn State): title is the key assertion (not just 'CPU Architecture' but 'Modern CPUs Execute Instructions Out of Order for 30% Higher IPC'), body is visual evidence (diagram, data). Slide Master in PowerPoint/Keynote sets design language — theme colours (XML-based .thmx), custom fonts, master layout. Morph transition animates object movement between slides — name objects identically (!!obj) for perfect tracking. Embedded Excel charts (Paste Special → Link) update when source data changes. For technical talks: code slides use monospace font, syntax highlighting via shape fills. PPTX is a ZIP of XML+media — `prs/slides/slide1.xml` holds content, `prs/theme/theme1.xml` holds colours. Python-pptx can generate slides programmatically — useful for data-driven reports. Prezi uses pan-and-zoom on a canvas rather than linear slides. Presentation anxiety: structure as 'Opening Hook → Problem → Solution → Evidence → Call to Action', practice 10× more than you think you need.",
  },
  analogy: {
    "5-7": "A presentation is like a picture book you show on a big screen — each page (slide) tells part of your story.",
    "8-10": "Slides are like visual arguments — each one makes a point and shows evidence for it.",
    "11-14": "Slide Masters are like a template for all your slides — change the master and every slide updates at once.",
    "15-18": "Great presentations are like trailers for a film — they make the audience want to know more, using visuals to show what words alone can't.",
  },
  photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&fit=crop",
  photoAlt: "Speaker presenting slides to an audience at a conference",
  keyFacts: [
    { emoji: "📊", label: "Format", value: ".pptx (PowerPoint Open XML)", detail: ".pptx is a ZIP archive containing XML files, images, and media — rename it to .zip to see!" },
    { emoji: "📏", label: "Slide Ratio", value: "16:9 widescreen standard", detail: "Modern presentations use 16:9 (1920×1080 or 1280×720). Older slides used 4:3." },
    { emoji: "🎨", label: "Design Rule", value: "6×6 rule — max 6 lines, 6 words", detail: "Keep slides simple. Audiences read OR listen — not both at the same time." },
    { emoji: "📱", label: "Tools", value: "PowerPoint, Keynote, Google Slides", detail: "Google Slides is free and auto-saves to the cloud. Keynote is Apple-only." },
    { emoji: "⚡", label: "Animations", value: "Use sparingly — max 1 per slide", detail: "Too many animations distract from the message. Simple fade-ins work best." },
    { emoji: "📅", label: "PowerPoint Age", value: "Created in 1987 by Forethought", detail: "Microsoft bought PowerPoint for $14 million in 1987. It's been used in every company since." },
  ],
  funFact: "PowerPoint was originally created by Robert Gaskins and Dennis Austin in 1987 for the Mac — it was called 'Presenter'. Microsoft bought it for $14 million that same year. It's now used in 500 million presentations every day worldwide!",
  dos: [
    "One key idea per slide — if it needs two ideas, make two slides",
    "Use Slide Master to set colours/fonts once instead of editing every slide",
    "Use speaker notes — the audience sees slides, you see your notes",
    "Use Morph transition for smooth cinematic animations between slides",
  ],
  donts: [
    "Don't put paragraphs of text on slides — bullets max 6 words each",
    "Don't use more than 2 fonts or 3 colours in one presentation",
    "Don't read directly from the slide — the audience can read faster than you speak",
    "Don't use distracting animations on every element — save motion for emphasis",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What is a 'slide' in a presentation?",
      choices: ["One page of a presentation shown to the audience", "A type of picture", "A keyboard shortcut"],
      correct: 0,
      explanation: "Each slide is one page — click the mouse or press an arrow key to advance to the next one!",
    },
    {
      for: "8-10",
      question: "What are 'Speaker Notes' in PowerPoint?",
      choices: [
        "Notes only the presenter sees — reminders of what to say for each slide",
        "Notes the audience can read",
        "Notes automatically recorded from your speech",
      ],
      correct: 0,
      explanation: "Speaker notes are hidden from the audience but visible on your presenter view — perfect for remembering key points without reading from the slide!",
    },
    {
      for: "11-14",
      question: "What is a Slide Master and why use it?",
      choices: [
        "A master template that defines fonts, colours, and layout for all slides — change it once to update every slide",
        "The first slide of every presentation",
        "A shortcut to duplicate slides",
      ],
      correct: 0,
      explanation: "Without a Slide Master you'd change fonts/colours on every slide separately. With it, one change cascades everywhere — consistent, professional, and fast.",
    },
    {
      for: "15-18",
      question: "What is the 'assertion-evidence' slide structure?",
      choices: [
        "Title states the key conclusion as a complete sentence; body shows visual evidence (data, diagram) — not a list of bullet points",
        "Every slide must have a title and 5 bullets",
        "Assertions are made in the introduction; evidence in the conclusion",
      ],
      correct: 0,
      explanation: "Research (Alley, Garner) shows audiences remember conclusions better when slides state them explicitly ('CPUs without branch prediction run 30% slower') rather than neutral titles ('Branch Prediction').",
    },
    {
      for: "15-18",
      question: "What is the Morph transition in PowerPoint and when is it most powerful?",
      choices: [
        "Animates object positions/sizes between slides — most powerful when you name objects identically (!!name) across slides to create cinematic reveal effects without animation panes",
        "A fade transition for text",
        "A transition that works only with video content",
      ],
      correct: 0,
      explanation: "Morph detects objects with the same name across consecutive slides and smoothly animates the transformation — moving a diagram across a slide, zooming into a chart, or revealing a UI step-by-step.",
    },
  ],
};

export default lesson;
