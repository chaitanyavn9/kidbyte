import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "presentations",
  title: "Presentations & PowerPoint",
  emoji: "🎯",
  category: "engineering",
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
