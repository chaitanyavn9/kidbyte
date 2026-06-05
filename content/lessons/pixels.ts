import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "pixels",
  title: "What is a Pixel?",
  emoji: "🖼️",
  category: "graphics",
  story: {
    "5-7":
      "A pixel is the tiniest dot of color on your screen! Your screen is made of millions of these tiny colored dots. When you're far away, you see a beautiful picture. But if you get very, very close — you'd see tiny colored squares. It's like a mosaic puzzle made of millions of colored tiles!",
    "8-10":
      "Pixel stands for 'Picture Element'. Every screen is a grid of tiny colored squares. A Full HD screen has 1,920 × 1,080 = over 2 million pixels! Each pixel can be any color by mixing red, green, and blue light. More pixels = sharper image = higher resolution.",
    "11-14":
      "A pixel is the smallest addressable element in a display. Each pixel contains three sub-pixels: Red, Green, Blue (RGB). Each sub-pixel has 256 intensity levels (8-bit), giving 256³ = ~16.7 million possible colors per pixel. Resolution (PPI — pixels per inch) determines sharpness. 4K = 3840×2160 = ~8.3 megapixels. Retina displays exceed 300 PPI so individual pixels are invisible to the human eye at normal viewing distance.",
  },
  analogy: {
    "5-7":
      "A mosaic artwork made of tiny colored tiles. Far away it looks like a picture. Up close, just colored squares!",
    "8-10":
      "Like a football stadium full of people holding colored cards — from far away it's a picture, up close it's just people with cards!",
    "11-14":
      "A 2D array of RGB triplets, each an 8-bit value per channel, rendered to a physical display matrix.",
  },
  funFact:
    "The word 'pixel' was first used in 1965 by NASA scientists describing images from space probes. Your phone's camera captures ~50 megapixels — 50 million tiny dots of color!",
  dos: [
    "Choose higher resolution screens for sharper images",
    "Understand that more megapixels in a camera = more detail",
    "Notice pixels by zooming into a photo on your screen",
  ],
  donts: [
    "Don't stretch small images too large — the pixels become visible (pixelation)!",
    "Don't confuse pixel count with image quality — lens and sensor matter too",
  ],
  quiz: [
    {
      for: "5-7",
      question: "A pixel is like...?",
      choices: ["A tiny colored tile in a mosaic", "A piece of paper", "A type of music"],
      correct: 0,
      explanation:
        "Millions of tiny colored dots (pixels) together make the pictures on your screen — just like tiles in a mosaic!",
    },
    {
      for: "5-7",
      question: "What happens if you zoom very close into a picture on screen?",
      choices: [
        "You see tiny colored squares",
        "The picture disappears",
        "It becomes a video",
      ],
      correct: 0,
      explanation: "Up close, you can see the individual pixels — tiny colored squares!",
    },
    {
      for: "8-10",
      question: "What does 'pixel' stand for?",
      choices: ["Picture Element", "Pixel Colour", "Point of Light"],
      correct: 0,
      explanation: "Pixel = Picture Element — the smallest element (dot) that makes up a picture!",
    },
    {
      for: "8-10",
      question: "What three colors does each pixel mix to create any color?",
      choices: ["Red, Green, Blue", "Red, Yellow, Blue", "Cyan, Magenta, Yellow"],
      correct: 0,
      explanation:
        "Each pixel has Red, Green, and Blue sub-pixels. Mixing these three creates millions of colors!",
    },
    {
      for: "11-14",
      question: "How many colors can a single pixel display using 8-bit RGB?",
      choices: ["~16.7 million (256³)", "65,536 (256²)", "~1 billion"],
      correct: 0,
      explanation:
        "Each of R, G, B has 256 levels. 256 × 256 × 256 = 16,777,216 possible colors per pixel.",
    },
    {
      for: "11-14",
      question: "What is 4K resolution?",
      choices: [
        "3840 × 2160 pixels (~8.3 megapixels)",
        "4000 × 4000 pixels",
        "4096 × 1080 pixels",
      ],
      correct: 0,
      explanation:
        "4K (UHD) = 3840 × 2160 = ~8.3 megapixels. The '4K' refers to ~4,000 horizontal pixels.",
    },
  ],
};

export default lesson;
