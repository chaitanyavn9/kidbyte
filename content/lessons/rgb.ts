import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "rgb",
  title: "How Do Screens Make Colors?",
  emoji: "🌈",
  category: "graphics",
  story: {
    "5-7": "Your screen makes every color by mixing just three colored lights: Red, Green, and Blue — called RGB! Mix red and green light together and you get yellow! Mix all three fully and you get white light! Turn them all off and you get black. Every single color on your screen is made by mixing different amounts of red, green, and blue light. It's like magic painting with light!",
    "8-10": "Every pixel on your screen contains three tiny lights: Red, Green, and Blue (RGB). Each light can be set to a brightness from 0 (off) to 255 (full brightness). By mixing different amounts: Red + Green = Yellow, Red + Blue = Magenta, Green + Blue = Cyan, all three full = White, all three off = Black. This gives 256 × 256 × 256 = over 16 million possible colors from just three lights!",
    "11-14": "RGB is an additive colour model. Each channel is 8 bits (0–255), giving 2^24 = 16,777,216 colours. The colour gamut depends on the display's primaries (sRGB vs DCI-P3 vs Rec.2020). Each sub-pixel is an OLED emitter or LCD cell with a colour filter. HDR displays extend to 10/12 bits per channel. The human eye has three types of cone cells (roughly corresponding to R, G, B sensitivity) — why RGB works so well for human perception.",
  },
  analogy: {
    "5-7": "RGB is like mixing three colored torches — point red and green together and you get yellow light! Screens do this with millions of tiny colored dots.",
    "8-10": "Like mixing coloured spotlights on a dark stage — combine red, green, and blue spotlights in different amounts to get any colour.",
    "11-14": "Additive colour synthesis matching the spectral sensitivity of the human eye's L, M, S cone photoreceptors.",
  },
  funFact: "Computer screens can display over 16 million colors — but the human eye can only distinguish about 10 million! Screens are already showing more colors than your eyes can tell apart.",
  dos: ["Use an online colour picker to experiment with RGB values", "Notice that (255,0,0) is red, (0,255,0) is green, (0,0,255) is blue"],
  donts: ["Don't confuse RGB (light/screens) with CMYK (ink/printing) — they work oppositely"],
  quiz: [
    { for: "5-7", question: "What three colors mix to make white on a screen?", choices: ["Red + Green + Blue", "Red + Yellow + Blue", "Black + White + Grey"], correct: 0, explanation: "Mix all three lights (Red + Green + Blue) at full brightness = white! Turn them all off = black." },
    { for: "8-10", question: "What does RGB(255, 255, 0) make?", choices: ["Yellow (full red + full green, no blue)", "White", "Purple"], correct: 0, explanation: "Red 255 + Green 255 + Blue 0 = Yellow! Try it in any colour picker." },
    { for: "11-14", question: "How many total colours can 8-bit RGB represent?", choices: ["~16.7 million (2^24)", "~65,000 (2^16)", "~280 trillion (2^48)"], correct: 0, explanation: "3 channels × 8 bits = 24 bits total. 2^24 = 16,777,216 colours. This is why 24-bit colour is called 'true colour'." },
  ],
};
export default lesson;
