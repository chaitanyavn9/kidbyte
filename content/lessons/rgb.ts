import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "rgb",
  title: "How Do Screens Make Colors?",
  emoji: "🌈",
  category: "graphics",
  narrative: {
    "5-7": [
      { heading: "Three colours can make any colour in the world…", text: "Artists mix paints to make new colours. But computer screens work differently — they mix light. And the amazing thing about light is that just three colours — Red, Green, and Blue — can make every colour you see on screen." },
      { heading: "Red + Green + Blue = White?", text: "With paint, mixing all colours makes black (muddy). With light, mixing all colours makes white! This is because light works by adding brightness, not subtracting it. Turn all three full on and you get bright white. Turn all off and you get black.", diagramId: "light-mixing" },
      { heading: "Pick any colour you want", text: "Each of the three colours (R, G, B) can be set from 0 (off) to 255 (maximum). R=255, G=0, B=0 is pure red. R=255, G=255, B=0 is yellow. R=128, G=0, B=128 is purple. By mixing different amounts, you get over 16 million different colours!", diagramId: "rgb-mixer" },
      { heading: "In your daily life…", text: "Every photo on your phone, every website, every game uses RGB colours. When you pick a colour for text in a document, you're picking RGB values. Graphic designers and artists need to understand RGB to create correct digital colours." },
    ],
    "8-10": [
      { heading: "Light is different from paint", text: "Subtractive colour (paint/ink): mixing absorbs more wavelengths → darker. Additive colour (light/screens): mixing adds more wavelengths → brighter. Screen pixels use additive RGB. Printers use subtractive CMYK (Cyan, Magenta, Yellow, blacK). This is why a photo looks different on screen vs printed." },
      { heading: "RGB values and the colour space", text: "Each channel (R, G, B) is an 8-bit value: 0–255. Combined, they form a 24-bit colour (16.7 million possible colours). R=0, G=255, B=255 = Cyan. R=255, G=0, B=255 = Magenta. R=255, G=255, B=0 = Yellow. These are the CMYK primaries!", diagramId: "rgb-mixer" },
      { heading: "Light mixing in action", text: "Three overlapping circles of coloured light show how RGB additive mixing works. Where all three overlap, you get white. The overlapping pairs give you cyan, magenta, and yellow — the same primaries used in printing.", diagramId: "light-mixing" },
      { heading: "Transparency — the fourth channel", text: "RGBA adds an Alpha channel (0=transparent, 255=opaque) for transparency. Blending: final_colour = src_alpha × src_colour + (1-src_alpha) × dst_colour. This is used for overlapping UI elements, translucent windows, and anti-aliased text edges." },
    ],
    "11-14": [
      { heading: "CIE XYZ and perceptual colour spaces", text: "RGB is device-dependent — the same (255,0,0) looks different on different monitors. CIE XYZ is a device-independent colour space matching human colour perception. sRGB and DCI-P3 are defined as transformations of CIE XYZ. Proper colour management uses ICC profiles to convert between colour spaces." },
      { heading: "Linear RGB vs sRGB gamma", text: "sRGB applies gamma encoding: physical_light ≈ (sRGB_value/255)^2.2. Linear RGB is the physical energy. Blending and lighting calculations must be done in linear space — doing them in gamma-encoded space gives wrong results (too dark). This is why games and 3D renderers work in linear space and convert to sRGB for display.", diagramId: "rgb-mixer" },
      { heading: "Additive vs subtractive colour models", text: "Additive (RGB): used for light emission — screens, LEDs, projectors. Subtractive (CMYK): used for ink/pigment absorption. HSL/HSB (Hue-Saturation-Lightness/Brightness): perceptual model — intuitive for colour picking. Lab (CIE L*a*b*): perceptually uniform — equal numerical distances mean equal perceived difference.", diagramId: "light-mixing" },
      { heading: "Wide colour gamuts", text: "sRGB covers ~35% of perceptible colours. DCI-P3 covers ~45% (used in cinema, Apple displays). Rec.2020 covers ~75% (target for HDR). Wider gamuts show more vivid colours but require compatible displays, content, and colour management. Saturated reds in P3 genuinely look more vivid than sRGB." },
    ],
    "15-18": [
      { heading: "Colour science foundations", text: "Human colour vision uses three cone types (L, M, S — roughly Red, Green, Blue sensitive). The CIE 1931 colour matching functions (x̄, ȳ, z̄) map wavelengths to tristimulus values. The chromaticity diagram shows all perceivable colours — the horseshoe shape. All reproducible colours on a display are a triangle (gamut) within this space." },
      { heading: "HDR and tone mapping", text: "SDR assumes 100 nits peak display brightness. HDR10 targets 1000 nits (10-bit, static metadata). Dolby Vision targets 10,000 nits (12-bit, dynamic per-frame metadata). Content mastered at 4000 nits must be tone-mapped for a 1000 nit display — a non-trivial perceptual optimisation problem.", diagramId: "light-mixing" },
      { heading: "Colour management pipeline in graphics", text: "Texture sampling: sRGB → linearise. Lighting calculation: linear RGB space. Final compositing: linear. Gamma encode: linear → sRGB for the framebuffer. The GPU's sRGB framebuffer format handles final gamma encoding in hardware. Skipping any step gives perceptually incorrect results.", diagramId: "rgb-mixer" },
      { heading: "Spectral rendering and beyond RGB", text: "RGB is a tristimulus approximation of continuous spectral reflectance. For physically accurate rendering (spectral path tracing), represent light as full spectral power distributions (380–780nm sampled at 5–10nm intervals). This handles metamerism correctly — two surfaces with different spectra that look identical under one light source but different under another." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&fit=crop",
  photoAlt: "Red, green, and blue spotlights mixing together on a stage showing additive color",
  keyFacts: [
    { emoji: "🔴", label: "Additive Colour", value: "RGB = light mixing (not paint)", detail: "RGB adds light together. R+G+B = white. This is opposite to paint (CMY subtractive)." },
    { emoji: "🔢", label: "Range", value: "0–255 per channel (8-bit)", detail: "rgb(255, 0, 0) = red. rgb(0, 255, 0) = green. rgb(128, 128, 128) = mid grey." },
    { emoji: "🌈", label: "Total Colours", value: "256³ = 16.7 million", detail: "With 256 values per channel × 3 channels = 16.7 million unique colours." },
    { emoji: "💡", label: "Display Pixels", value: "Each screen pixel has R, G, B subpixels", detail: "Zoom into a screen and you'll see tiny red, green, and blue dots for each pixel." },
    { emoji: "🖨️", label: "CMYK for Print", value: "Cyan, Magenta, Yellow, Black", detail: "Printers subtract light — CMYK is used instead of RGB for physical ink." },
    { emoji: "🎮", label: "RGB Lighting", value: "PC fans/keyboards — same principle", detail: "PC RGB lighting uses the same 0–255 red-green-blue values to show any colour." },
  ],
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
