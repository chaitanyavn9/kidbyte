import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "resolution",
  title: "What is Screen Resolution?",
  emoji: "🖥️",
  category: "graphics",
  story: {
    "5-7": "Resolution is how many tiny dots (pixels) are on your screen. More dots = sharper, clearer pictures! HD has 1,280×720 dots. Full HD has 1,920×1,080 dots — that's over 2 million dots! 4K has 3,840×2,160 dots — over 8 million! That's why movies on 4K TVs look so much clearer and sharper than old TVs.",
    "8-10": "Resolution is the number of pixels on a screen, written as Width × Height. HD (720p) = 1280×720. Full HD (1080p) = 1920×1080 = about 2 million pixels. 4K (UHD) = 3840×2160 = about 8 million pixels. Higher resolution = more pixels = sharper details. But resolution alone isn't everything — screen size matters too. PPI (pixels per inch) measures how dense the pixels are. More PPI = sharper at the same viewing distance.",
    "11-14": "Resolution is measured in pixels (px) horizontally × vertically. PPI = √(w² + h²) / diagonal inches. Retina displays (>300 PPI at normal viewing distance) make individual pixels invisible. Display standards: 720p (1280×720), 1080p (1920×1080), 1440p/QHD (2560×1440), 4K/UHD (3840×2160), 8K (7680×4320). Rendering pipeline considerations: higher resolutions require proportionally more GPU fill-rate. Dynamic resolution scaling adjusts in real-time to maintain framerate.",
  },
  analogy: {
    "5-7": "Resolution is like the number of tiles in a mosaic — more tiny tiles = a more detailed, clearer picture!",
    "8-10": "Like zooming into a photo — low resolution shows blocky squares, high resolution stays sharp and smooth.",
    "11-14": "A two-dimensional sampling grid — spatial resolution determines the Nyquist limit for displayable detail.",
  },
  funFact: "The human eye can distinguish about 300 PPI at a normal reading distance. Apple coined the term 'Retina display' for screens above this threshold — meaning your eye literally can't see the individual pixels!",
  dos: ["Match your monitor's native resolution for the sharpest picture", "For gaming, balance resolution with framerate — 1080p/60fps often beats 4K/20fps"],
  donts: ["Don't set resolution lower than your screen's native — images look blurry", "Don't judge a screen by resolution alone — colour accuracy, refresh rate, and panel type also matter"],
  quiz: [
    { for: "5-7", question: "What does higher resolution mean?", choices: ["More pixels = sharper, clearer pictures", "Louder sound", "Faster internet"], correct: 0, explanation: "More tiny dots = more detail = sharper images!" },
    { for: "8-10", question: "What is 4K resolution?", choices: ["3840 × 2160 pixels — about 8 million pixels", "1920 × 1080", "4000 × 4000"], correct: 0, explanation: "4K = 3840×2160 — four times as many pixels as Full HD (1920×1080)!" },
    { for: "11-14", question: "What does PPI measure?", choices: ["Pixels Per Inch — how densely packed pixels are on a screen", "Pages Per Instruction", "Processor Performance Index"], correct: 0, explanation: "PPI = pixel density. Higher PPI = pixels too small to see individually = 'Retina' quality sharpness." },
  ],
};
export default lesson;
