import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "word-processing",
  title: "Word Processing & LaTeX",
  emoji: "📝",
  category: "engineering",
  story: {
    "5-7": "Word processing is like having a magical typewriter that never makes permanent mistakes! You can type words, change them, make them bigger or smaller, add pictures, and print your work. Microsoft Word and Google Docs are the most popular ones.",
    "8-10": "Word processors like MS Word let you format text (bold, italic, different fonts), insert tables and images, use spell check, and create headers and footers. They save documents as files you can share with anyone. Features like track changes let multiple people edit the same document.",
    "11-14": "Professional word processing includes: Styles (pre-defined formatting for consistent headings/body), Table of Contents (auto-generated from heading styles), Mail Merge (combining a template letter with a data list to create personalised documents), Master Documents (linking multiple files), and LaTeX (a typesetting system where content and formatting are written as code, producing precise mathematical and academic papers).",
    "15-18": "LaTeX is a document preparation system built on TeX (Knuth, 1978). It separates content from presentation: `\\documentclass{article}` sets the document type; `\\begin{document}` ... `\\end{document}` wraps content. Mathematical notation is first-class: `$E = mc^2$` inline, or `\\[ \\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2} \\]` as display math — impossible to typeset this cleanly in Word. Key packages: `amsmath` (advanced maths), `graphicx` (images), `biblatex/natbib` (bibliography/citations), `hyperref` (hyperlinks in PDF), `geometry` (page margins), `listings` (code blocks), `tikz` (vector diagrams). LaTeX compiles to PDF via `pdflatex` or `xelatex`. Overleaf is the browser-based LaTeX editor used by millions of researchers. Markdown is a lighter alternative (GitHub, Jupyter, documentation). MS Word's `.docx` is actually a ZIP of XML files — `document.xml` holds content, `styles.xml` holds formatting — understanding this helps script bulk document generation.",
  },
  analogy: {
    "5-7": "Word processing is like a magical pen — you can erase, rearrange, and decorate your writing as much as you want.",
    "8-10": "A word processor is like having a secretary who can automatically format your document, check spelling, and generate a table of contents.",
    "11-14": "LaTeX is like writing the blueprint for a building (content and structure) while letting an architect (TeX engine) produce the final perfect rendering.",
    "15-18": "LaTeX vs Word is like programming vs using a GUI — more control, steeper learning curve, but perfect output every time, especially for maths.",
  },
  funFact: "Donald Knuth created TeX in 1977 because he was unhappy with how his book 'The Art of Computer Programming' looked in print. He spent 10 years building the most mathematically precise typesetting system ever — it outputs identically on any computer, any OS, any year.",
  dos: [
    "Use Styles in Word for headings — this enables automatic Table of Contents",
    "Use \\label and \\ref in LaTeX to auto-number equations and figures",
    "Track Changes in Word when collaborating — never send final drafts without accepting/rejecting all changes",
    "Use \\bibliography and BibTeX for citations — no more manual reference numbering",
  ],
  donts: [
    "Don't manually bold/centre each heading in Word — use Heading 1/2 styles",
    "Don't use spaces to align text — use tables or tab stops",
    "Don't forget \\usepackage{amsmath} before writing complex equations in LaTeX",
    "Don't submit LaTeX source without compiling — always send the PDF",
  ],
  quiz: [
    {
      for: "5-7",
      question: "What can a word processor do that a regular pen can't?",
      choices: ["Let you easily fix mistakes, change fonts, and add pictures", "Write with coloured ink", "Work without electricity"],
      correct: 0,
      explanation: "Word processors make editing effortless — undo, redo, spell check, and instant formatting changes!",
    },
    {
      for: "8-10",
      question: "What is 'Mail Merge' in Word?",
      choices: [
        "Automatically combining a letter template with a list of names/addresses to create personalised copies",
        "Sending emails from Word",
        "Merging two Word documents",
      ],
      correct: 0,
      explanation: "Mail merge is powerful for personalised letters, certificates, or invitations — one template, hundreds of personalised outputs!",
    },
    {
      for: "11-14",
      question: "Why do engineers and scientists prefer LaTeX over Word for papers?",
      choices: [
        "LaTeX produces perfectly typeset mathematical equations, numbered figures/equations, and auto-managed references",
        "LaTeX is easier to learn",
        "LaTeX is free but Word is not",
      ],
      correct: 0,
      explanation: "Try typesetting the quadratic formula perfectly in Word vs LaTeX — LaTeX produces publication-quality output automatically.",
    },
    {
      for: "15-18",
      question: "What does the \\ref{} command do in LaTeX?",
      choices: [
        "Inserts the auto-generated number of a \\label{} — figure, table, or equation — that updates if you add more figures earlier",
        "Creates a hyperlink",
        "Formats a reference list",
      ],
      correct: 0,
      explanation: "\\label{fig:cpu} on Figure 1, then \\ref{fig:cpu} anywhere in text auto-inserts '1'. Add a figure before it and all numbers update automatically — no manual renumbering.",
    },
    {
      for: "15-18",
      question: "What is a .docx file actually made of?",
      choices: [
        "A ZIP archive containing XML files — document.xml holds text content, styles.xml holds formatting, media/ holds images",
        "A compiled binary format only Word can read",
        "A PDF with embedded editing capability",
      ],
      correct: 0,
      explanation: "Rename any .docx to .zip and open it — you'll see XML files. This means you can generate or modify Word documents programmatically using python-docx or similar libraries.",
    },
  ],
};

export default lesson;
