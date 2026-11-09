import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "word-processing",
  title: "Word Processing & LaTeX",
  emoji: "📝",
  category: "engineering",
  narrative: {
    "5-7": [
      { heading: "Before computers, writers used typewriters — and there was no Ctrl+Z", text: "On a typewriter, once you typed a letter, it was stuck on the paper. Making a mistake meant starting the whole page again. Word processing software changed everything — you can type, delete, move, and format text before printing. It's like a magical paper that lets you rewrite endlessly." },
      { heading: "What is a word processor?", text: "A word processor is a program for writing documents. Microsoft Word, Google Docs, and LibreOffice Writer are examples. You type text, choose how it looks (font, size, bold, colour), organise it into sections, and save or print it.", diagramId: "doc-formatting" },
      { heading: "Different formats for different purposes", text: ".docx is the editable Word format. .pdf looks the same on every device and is hard to edit — perfect for sharing. .txt is plain text with no formatting. Knowing which to use in which situation is an important skill.", diagramId: "file-formats" },
      { heading: "In your daily life…", text: "School essays, letters, reports, CVs — all made in word processors. Google Docs lets multiple people edit the same document at the same time, which is perfect for group projects. Learning keyboard shortcuts (Ctrl+B for bold, Ctrl+S to save) makes writing much faster." },
    ],
    "8-10": [
      { heading: "Before word processors, publishing was manual labour", text: "Before word processors, documents were typed on typewriters (no editing), typeset by hand, or written entirely by hand. Revisions meant retyping the whole document. Word processing — pioneered in the 1970s — made iteration effortless and transformed how people write." },
      { heading: "Formatting — controlling how text looks", text: "Formatting means changing the appearance of text: headings (large, bold), body text, fonts, sizes, colours, line spacing, margins, alignment. Styles apply consistent formatting across the document. Good formatting makes documents easier to read and look professional.", diagramId: "doc-formatting" },
      { heading: "File formats — choosing the right one", text: ".docx (Office Open XML): editable, Microsoft Word native. .pdf: fixed layout, universal, hard to edit. .odt: open-source format for LibreOffice. .txt: no formatting, universal. When emailing a résumé, use PDF. When sharing for editing, use DOCX or Google Docs link.", diagramId: "file-formats" },
      { heading: "Collaboration — the revolution of cloud docs", text: "Google Docs stores documents in the cloud and shows all editors in real time. Changes are synced instantly. Version history lets you see every change ever made. This transformed team writing — no more emailing 'essay_v3_FINAL_v2.docx'." },
    ],
    "11-14": [
      { heading: "Rich text formats — structured content", text: ".docx is a zip file containing XML. Unzip a .docx and you'll find word/document.xml (content), word/styles.xml (style definitions), _rels/ (relationships). PDF uses a page description language specifying exact positions of every glyph. RTF (Rich Text Format) uses plain text with escape codes — works in almost any app." },
      { heading: "Style systems and semantic markup", text: "Professional word processing separates content from presentation. Heading 1 style = semantic meaning (this is a chapter title). The style definition applies formatting (bold, 24pt, blue). Changing the style updates all text using it. This is exactly like CSS — this is why HTML+CSS separates content from presentation.", diagramId: "doc-formatting" },
      { heading: "Document formats — interoperability challenges", text: "DOCX opened in LibreOffice may look different. PDF/A is the archive standard (embeds fonts, no external references). PDF/X for print. PDF/UA for accessibility. Converting between formats loses information — formatting, comments, track changes, embedded objects. The 'best' format depends on the use case.", diagramId: "file-formats" },
      { heading: "Collaborative editing — operational transformation", text: "Google Docs real-time collaboration uses Operational Transformation (OT) — transforms conflicting edits so both users' changes are applied correctly. User A inserts 'hello' at position 5. User B deletes the character at position 3. OT adjusts User A's insertion index to account for B's deletion. This is the core algorithm that makes real-time collaboration work." },
    ],
    "15-18": [
      { heading: "DOCX internals — OOXML", text: "DOCX is Office Open XML: a ZIP archive with XML parts. document.xml holds content in WordprocessingML tags (<w:p> paragraph, <w:r> run, <w:t> text). relationships/.rels files link resources. styles.xml holds style definitions. Changes tracked in revisions. OOXML is an ECMA/ISO standard — but implementations differ (the classic document format interoperability problem)." },
      { heading: "PDF — a page description language", text: "PDF (Portable Document Format) describes pages in terms of graphics, text, and embedded resources. PDF 1.7 / ISO 32000 defines the spec. Text is positioned using a matrix transformation. Fonts are embedded as subsets. PDF/A-3 allows embedding arbitrary files (invoices as XML inside PDF). PDF's immutability and device-independence make it the standard for legal, financial, and archival documents.", diagramId: "file-formats" },
      { heading: "CRDT — the future of collaborative editing", text: "OT (Operational Transformation) requires a central server to order operations. CRDTs (Conflict-free Replicated Data Types) allow peer-to-peer collaboration with no central authority — edits are mathematically guaranteed to converge. Automerge and Yjs are CRDT libraries used in collaborative editors. Figma, Linear, and Obsidian use CRDTs.", diagramId: "doc-formatting" },
      { heading: "Document processing at scale — Pandoc and LaTeX", text: "Pandoc converts between 40+ document formats using an abstract document model. Academic and scientific writing uses LaTeX — a typesetting system where content and formatting are defined in a plain-text DSL. LaTeX produces typographically perfect PDFs. Journals require LaTeX submissions for reproducible formatting. Markdown compiles to HTML, PDF (via Pandoc+LaTeX), DOCX, and more." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&fit=crop",
  photoAlt: "Person typing a document on a laptop keyboard with writing tools",
  keyFacts: [
    { emoji: "📄", label: "Format", value: ".docx (Word Open XML)", detail: ".docx is a ZIP archive with XML files inside. The text, styles, and images are separate files." },
    { emoji: "🖋️", label: "Rich Text", value: "Bold, italic, fonts, tables, images", detail: "Rich text stores formatting metadata alongside the text. Plain .txt has no formatting." },
    { emoji: "📏", label: "Styles", value: "Heading 1–6, Normal, Title, etc.", detail: "Styles apply consistent formatting. Use Heading 1 for titles — it generates a Table of Contents." },
    { emoji: "🌐", label: "Tools", value: "Word, Google Docs, LibreOffice", detail: "Google Docs saves to cloud automatically. Word is standard in most workplaces." },
    { emoji: "🔤", label: "Autocorrect", value: "Spell check + grammar (Grammarly/AI)", detail: "Modern word processors use AI for grammar suggestions — not just red squiggly lines." },
    { emoji: "📅", label: "First Word Processor", value: "WordStar, 1978", detail: "WordStar was the first popular word processor. Microsoft Word launched in 1983." },
  ],
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
