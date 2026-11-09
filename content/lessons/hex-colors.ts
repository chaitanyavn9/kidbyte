import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "hex-colors",
  title: "Hex Color Codes",
  emoji: "🎨",
  category: "graphics",
  narrative: {
    "5-7": [
      { heading: "Every colour on a website has a secret code…", text: "Have you ever seen #FF0000 or #3B82F6 written in computer code? These strange codes — hashtag followed by 6 letters and numbers — are colour codes! They tell the computer exactly what colour to show. Every website colour has one of these codes." },
      { heading: "The code is two digits for each colour channel", text: "Remember Red, Green, Blue? A hex colour code is three pairs of hex numbers: #RRGGBB. #FF0000 means Red=FF (maximum), Green=00 (none), Blue=00 (none) — that's pure red! #0000FF is pure blue. #FFFFFF is white (all maximum).", diagramId: "hex-breakdown" },
      { heading: "Pick a colour, get its code", text: "Every digital colour has a hex code. When website designers pick colours, they use codes like #FF5733 (orange-red) or #3B82F6 (blue) so every computer shows the exact same colour. No guessing — just the precise code.", diagramId: "hex-color-wheel" },
      { heading: "In your daily life…", text: "Open any website, right-click, and choose 'Inspect'. Look at the CSS styles — you'll see colours written as hex codes like #1a1a2e or #e94560. These codes appear everywhere in web design, app design, and digital art." },
    ],
    "8-10": [
      { heading: "Designers need to communicate colour precisely", text: "If a designer says 'make the button blue', the developer needs to know exactly which blue. Hex codes solve this: #3B82F6 is a specific shade of blue, the same on every screen and in every country. It's the universal language of digital colour." },
      { heading: "Decoding #FF5733", text: "FF = Red = 255 (maximum red). 57 = Green = 87 (some green, makes it less harsh). 33 = Blue = 51 (a little blue). Result: a warm orange-red. Each hex pair is one byte (00–FF = 0–255). Exactly the same as specifying RGB(255, 87, 51).", diagramId: "hex-breakdown" },
      { heading: "Common colour codes to know", text: "#FF0000 = red. #00FF00 = lime green. #0000FF = blue. #FFFFFF = white. #000000 = black. #808080 = medium grey. #FF8C00 = dark orange. #FF69B4 = hot pink. Memorising a few helps you read code faster.", diagramId: "hex-color-wheel" },
      { heading: "Shorthand hex codes", text: "#RGB shorthand: #F00 = #FF0000, #0F0 = #00FF00. Only works when both digits of each pair are identical. CSS also supports rgba(r,g,b,a) with decimal values and an alpha channel. Modern CSS adds hex with alpha: #FF0000CC (last two digits = 80% opacity)." },
    ],
    "11-14": [
      { heading: "Hex colours in CSS and design systems", text: "CSS accepts hex (#RRGGBB, #RRGGBBAA), rgb(), hsl(), oklch(). Design systems (like Tailwind's colour palette or Material Design) define a palette of hex codes. A design token like '--color-primary: #3B82F6' gives the whole product a consistent colour language." },
      { heading: "Breaking down a hex code mathematically", text: "#FF5733: FF = 255, 57 = (5×16)+7 = 87, 33 = (3×16)+3 = 51. Result: rgb(255, 87, 51). Converting back: 255÷16=15 R15 → FF. 87÷16=5 R7 → 57. These conversions are trivial once you know hex.", diagramId: "hex-breakdown" },
      { heading: "Colour palette tools and colour theory", text: "Analogous colours (adjacent on the wheel) feel harmonious. Complementary colours (opposite) create contrast. Triadic (three equally spaced) balance vibrancy and harmony. Tools like Coolors.co generate palettes from a seed hex code. Accessibility tools check if two hex colours have enough contrast ratio (WCAG requires 4.5:1 for text).", diagramId: "hex-color-wheel" },
      { heading: "Colour accessibility — contrast ratios", text: "WCAG 2.1 defines minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text. Contrast ratio = (L1+0.05)/(L2+0.05) where L is relative luminance. #000000 on #FFFFFF is 21:1 (maximum). #777 on #FFF is ~4.48:1 (barely passes AA). Browser DevTools calculate this automatically." },
    ],
    "15-18": [
      { heading: "sRGB hex and colour science", text: "Hex colours in CSS are sRGB values — gamma-encoded, not linear. The 8-bit values 0–255 compress the gamma curve so more values are allocated to dark tones (matching human perception). For physically correct blending, you must linearise: linear = (hex/255)^2.2 before calculation, then gamma-encode the result." },
      { heading: "oklch — the modern CSS colour model", text: "oklch(L C H) is a perceptually uniform colour model. L = lightness (0–100%), C = chroma (vividness), H = hue (0–360°). Unlike HSL, equal numerical differences in oklch correspond to equal perceived differences. CSS Color Level 4 enables oklch(), which accesses the full P3 gamut on wide-gamut displays.", diagramId: "hex-breakdown" },
      { heading: "Colour in design systems at scale", text: "Large design systems (Google Material, Apple HIG, Shopify Polaris) define colour tokens as semantic names (--color-primary, --color-surface) mapped to hex values. Tokens support light/dark mode via CSS custom properties. Figma's design tokens plugin syncs colour values between design and code, keeping hex values consistent across the entire product.", diagramId: "hex-color-wheel" },
      { heading: "HDR and beyond 8-bit colour", text: "8-bit sRGB is insufficient for HDR content. 10-bit (1024 levels per channel) provides better gradients and HDR range. CSS Color Level 5 adds color(display-p3 R G B) for P3 wide gamut. Future: 12-bit rec2020 for cinema-grade colour on consumer displays. The limitation today is content, not hardware — most screens support it." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&fit=crop",
  photoAlt: "Vibrant abstract light painting showing colorful RGB light trails",
  keyFacts: [
    { emoji: "🎨", label: "Format", value: "#RRGGBB (6 hex digits)", detail: "#FF5733 means Red=255, Green=87, Blue=51. Each pair is 00–FF (0–255)." },
    { emoji: "🔢", label: "Total Colors", value: "16,777,216 (16.7 million)", detail: "256 × 256 × 256 = 16.7 million unique hex colors." },
    { emoji: "⬛", label: "Black & White", value: "#000000 and #FFFFFF", detail: "All zeros = no light (black). All F's = full light on all channels (white)." },
    { emoji: "🖥️", label: "Used In", value: "CSS, HTML, design tools", detail: "Every web page uses hex colors. Figma, Photoshop, and all design tools support them." },
    { emoji: "🔤", label: "Short Form", value: "#RGB = #RRGGBB (#F00 = #FF0000)", detail: "When both digits of each pair match, you can shorten to 3 characters." },
    { emoji: "🌈", label: "Alpha Channel", value: "#RRGGBBAA for transparency", detail: "#FF000080 is 50% transparent red. The last two hex digits are opacity (00–FF)." },
  ],
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
