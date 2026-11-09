import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "pixels",
  title: "What is a Pixel?",
  emoji: "🖼️",
  category: "graphics",
  narrative: {
    "5-7": [
      { heading: "Have you ever seen a mosaic picture up close?", text: "A mosaic is a picture made from thousands of tiny coloured tiles. From far away it looks like a smooth image. From very close, you see the individual tiles. Your computer screen works the same way — it's made of millions of tiny coloured dots called pixels." },
      { heading: "What is a pixel?", text: "Pixel stands for 'picture element'. Every screen is a grid of pixels — tiny squares each showing one colour. A 1080p screen has 1920 pixels across and 1080 pixels down. That's over 2 million pixels working together to show you an image!", diagramId: "pixel-grid" },
      { heading: "Each pixel has a colour made of red, green, and blue light", text: "Inside each pixel are three tiny lights: red, green, and blue. By mixing different amounts of these three colours, any colour can be made. Full red + full green = yellow. Full red + full blue = purple. This is how screens make millions of colours.", diagramId: "rgb-colors" },
      { heading: "In your daily life…", text: "Photos, games, videos, and even this text — everything you see on screen is made of pixels. When you zoom into a photo and see the blocks, you're seeing individual pixels. Phone screens are very dense — 400+ pixels per inch — so individual pixels are invisible to the naked eye." },
    ],
    "8-10": [
      { heading: "Screens are optical illusions", text: "Your brain sees a smooth, continuous image, but physically the screen is a grid of discrete points. The pixels are small enough that your eye blurs them together — this is called the persistence of vision. High-resolution screens (like Retina displays) have pixels so small your eye can't resolve them." },
      { heading: "Pixel colour — RGB", text: "Each pixel has three sub-pixels: Red, Green, Blue. Each sub-pixel has a brightness value from 0 (off) to 255 (full brightness). 255,0,0 = pure red. 0,255,0 = pure green. 255,255,255 = white. 0,0,0 = black. 256³ = 16.7 million possible colours per pixel.", diagramId: "rgb-colors" },
      { heading: "Resolution — how many pixels", text: "480p: 854×480. 720p (HD): 1280×720. 1080p (Full HD): 1920×1080. 1440p (QHD): 2560×1440. 4K (UHD): 3840×2160. Each step up has 4× more pixels than the previous. More pixels = sharper image, but also more GPU work and bigger file sizes.", diagramId: "pixel-grid" },
      { heading: "Pixel density — PPI", text: "PPI (Pixels Per Inch) matters more than raw resolution. A 4K TV at 55 inches has 80 PPI — you won't see individual pixels from 2m away. A phone at 6 inches with 1080p has ~400 PPI — extremely sharp. Apple's Retina displays are ~458 PPI on iPhone." },
    ],
    "11-14": [
      { heading: "Display technologies — how pixels are made", text: "LCD (Liquid Crystal Display): backlight + colour filters + liquid crystals that rotate to block/pass light. OLED (Organic LED): each sub-pixel emits its own light — no backlight, true blacks, higher contrast. MicroLED: individual inorganic LEDs per pixel — combines OLED blacks with LCD brightness." },
      { heading: "Colour depth and gamut", text: "8-bit per channel = 256 levels × 3 channels = 16.7M colours. 10-bit = 1024 levels × 3 = 1.07B colours (HDR). The colour gamut (sRGB, P3, Rec.2020) defines which colours are representable. DCI-P3 covers 25% more colours than sRGB — used in cinema and Apple displays.", diagramId: "rgb-colors" },
      { heading: "Subpixel layouts and rendering", text: "RGB stripe (most common): R-G-B vertically. PenTile (Samsung OLED): RGGB arrangement — fewer red and blue sub-pixels, shared with neighbours. Fonts and text are rendered with subpixel antialiasing (ClearType on Windows, Quartz on Mac) — using RGB positions to triple effective horizontal resolution.", diagramId: "pixel-grid" },
      { heading: "Refresh rate and motion blur", text: "Refresh rate (Hz) = how many times per second the screen redraws. 60Hz: standard. 120Hz: noticeably smoother scrolling. 240Hz: gaming — competitive advantage. Each pixel must settle to its new value before the next frame — pixel response time (ms) causes blur if slower than the refresh interval." },
    ],
    "15-18": [
      { heading: "OLED physics and quantum efficiency", text: "OLED sub-pixels use an organic compound that emits light when electrons and holes recombine. External Quantum Efficiency (EQE) measures photons out per electron in. TADF (Thermally Activated Delayed Fluorescence) materials achieve near-100% internal quantum efficiency. OLED burn-in occurs when static pixels age faster than dynamic ones." },
      { heading: "HDR and tone mapping", text: "SDR: 100 nits peak brightness, 8-bit. HDR10: 1000 nits, 10-bit, static metadata. Dolby Vision: up to 10,000 nits, 12-bit, dynamic per-scene/frame metadata. The display must tone-map HDR content to its actual peak brightness — a psychovisual optimisation challenge. Local dimming (mini-LED) increases contrast ratio to 1,000,000:1.", diagramId: "rgb-colors" },
      { heading: "Gamma, sRGB, and colour management", text: "Human vision is non-linear — we perceive changes in dark areas more sensitively than bright areas. Gamma encoding (γ=2.2 for sRGB) stores more values for darks, matching human perception. Without gamma correction, images look washed out or too dark. Display calibration with colorimeters (X-Rite i1Display) verifies colour accuracy (ΔE < 1 is imperceptible).", diagramId: "pixel-grid" },
      { heading: "Variable Refresh Rate and display tech future", text: "VRR (G-Sync/FreeSync/HDMI 2.1 VRR) syncs the monitor's refresh to the GPU's frame rate, eliminating tearing and reducing stutter. MicroLED is the next major display technology: each pixel is a tiny inorganic LED — no OLED burn-in, 10,000 nits brightness, 50+ year lifespan. Samsung's wall-sized MicroLED displays are already commercial." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=700&fit=crop",
  photoAlt: "Extreme close-up of an OLED display showing individual red, green, and blue pixels",
  keyFacts: [
    { emoji: "🔵", label: "What Is a Pixel", value: "Smallest addressable unit of a display", detail: "Pixel = picture element. Each pixel has a colour defined by red, green, and blue values." },
    { emoji: "🌈", label: "Colour Depth", value: "24-bit = 16.7 million colours", detail: "8 bits each for R, G, B = 256 × 256 × 256 = 16.7 million possible colours." },
    { emoji: "📐", label: "FHD Resolution", value: "1920 × 1080 = 2,073,600 pixels", detail: "Full HD has ~2 million pixels. 4K has 4× more: 3840 × 2160 = 8.3 million." },
    { emoji: "📏", label: "PPI", value: "iPhone 15 Pro: 460 ppi", detail: "Pixels Per Inch. Above ~300 ppi, the human eye can't distinguish individual pixels." },
    { emoji: "💡", label: "OLED Pixels", value: "Each pixel emits its own light", detail: "OLED turns off individual pixels for true black. LCD uses a backlight (always on)." },
    { emoji: "📅", label: "First Display", value: "CRT 625 lines, 1936 (BBC TV)", detail: "The first broadcast TV used electron beams painting 625 horizontal lines of pixels." },
  ],
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
