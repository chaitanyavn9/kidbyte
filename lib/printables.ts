export interface Printable {
  id: string;
  title: string;
  emoji: string;
  description: string;
  ages: string;
  pages: number;
  file: string;
  preview: string;
  includes: string[];
  related?: { href: string; label: string };
}

export const PRINTABLES: Printable[] = [
  {
    id: "whats-inside-a-computer",
    title: "What's Inside a Computer?",
    emoji: "🖥️",
    description:
      "Match the CPU, RAM, SSD and GPU to what they're like — a brain, a study table, a cupboard and an artist — then write your name in binary using the A–Z chart!",
    ages: "5–10",
    pages: 2,
    file: "/printables/whats-inside-a-computer.pdf",
    preview: "/printables/whats-inside-a-computer-preview.jpg",
    includes: [
      "Computer parts matching sheet",
      "Write-your-name-in-binary page with A–Z chart",
      "Answer key for grown-ups",
    ],
    related: { href: "/explore", label: "Explore the lessons" },
  },
];
