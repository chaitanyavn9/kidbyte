import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hex-colors",
  title: "Hex Color Codes",
  emoji: "🎨",
  category: "graphics",
  story: {
    "5-7": "Every color on a computer has a secret code made of 6 letters and numbers starting with a #! Red is #FF0000, blue is #0000FF, and green is #00FF00. White is #FFFFFF and black is #000000. Web designers use these secret color codes to paint websites with exactly the right colors. You can try typing them into Google — just search '#FF8A00' to see a beautiful orange!",
    "8-10": "Hex color codes look like #RRGGBB — where RR is red (in hex), GG is green, BB is blue. Each pair goes from 00 (none) to FF (full). So #FF0000 = full red + no green + no blue = Red. #1D7CFF = 1D red + 7C green + FF blue = a bright blue. Every website, app, and game uses hex codes to specify exact colours. The # symbol just means 'hexadecimal'.",
    "11-14": "CSS hex colours: #RRGGBB where each channel is 2 hex digits (00–FF = 0–255 decimal). Short form #RGB expands to #RRGGBB (e.g. #F0A = #FF00AA). RGBA adds alpha channel: rgba(29, 124, 255, 0.8). HSL(hue, saturation, lightness) is sometimes more intuitive for designers. Colour contrast ratios (WCAG) require ≥4.5:1 for normal text accessibility — computable from relative luminance of hex values.",
  },
  analogy: {
    "5-7": "Hex color codes are like secret names for colors — #FF0000 is the secret name for red!",
    "8-10": "Like a recipe card — #FF8A00 means 'use FF of red, 8A of green, and 00 of blue' to get orange.",
    "11-14": "A compact 24-bit RGB encoding expressed in base-16, used universally in CSS, SVG, HTML, and design tools.",
  },
  funFact: "The KidByte brand blue is #1D7CFF, orange is #FF8A00, and purple is #7B61FF — these are the exact hex codes used to build this website you're looking at right now!",
  dos: ["Use browser DevTools to inspect any colour on any website — right-click, Inspect, find the hex code", "Try a colour picker like coolors.co to explore hex codes"],
  donts: ["Don't forget the # before the hex code in CSS", "Don't confuse hex colour codes with hex numbers — they're the same system, just used for colours!"],
  quiz: [
    { for: "5-7", question: "What color is #FF0000?", choices: ["Red (full red, no green, no blue)", "Blue", "Yellow"], correct: 0, explanation: "#FF0000 = FF red + 00 green + 00 blue = pure red!" },
    { for: "8-10", question: "In #RRGGBB, what do the last two characters (BB) control?", choices: ["The amount of Blue", "The amount of Black", "The brightness"], correct: 0, explanation: "RR = Red amount, GG = Green amount, BB = Blue amount. Each pair is a hex number from 00 to FF (0 to 255)." },
    { for: "11-14", question: "What is the CSS short form of #FFAA00?", choices: ["#FA0", "It cannot be shortened", "#FF0"], correct: 0, explanation: "#FA0 expands to #FFAA00. Short form works only when each channel's two hex digits are identical (e.g., FF→F, AA→A, 00→0)." },
  ],
};
export default lesson;
