import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "resolution",
  title: "What is Screen Resolution?",
  emoji: "🖥️",
  category: "graphics",
  narrative: {
    "5-7": [
      { heading: "Imagine drawing the same picture with different-sized dot pens…", text: "If you use a thick pen, your drawing looks blocky and rough. If you use a super-fine pen, every detail comes out sharp. Screen resolution works the same way — more pixels means sharper, more detailed pictures." },
      { heading: "What is resolution?", text: "Resolution is the number of pixels (dots) on a screen. 1920 × 1080 means 1920 dots across and 1080 dots down. More dots = more detail. A 4K screen has 4 times as many pixels as 1080p — everything looks incredibly sharp.", diagramId: "resolution-comparison" },
      { heading: "Why do phones look sharper than big TVs?", text: "A phone screen is small but has lots of pixels packed tightly together. A TV is huge but the pixels are spread out. The sharpness you see depends on pixel density — how many pixels are in each inch of screen. This is measured in PPI (Pixels Per Inch).", diagramId: "pixel-density" },
      { heading: "In your daily life…", text: "When you change video quality on YouTube from 480p to 1080p, you're increasing the resolution — more pixels, more detail, but also more data to download. Photography, videos, and game graphics all use resolution as a measure of sharpness." },
    ],
    "8-10": [
      { heading: "More pixels = more information = sharper image", text: "A 480p video has 480 horizontal rows of pixels. 1080p has 1080 rows — more than double. Each extra row adds detail. 4K has 4× more pixels than 1080p — perfect for large screens or sitting very close." },
      { heading: "Resolution standards", text: "480p (SD): 854×480 — older TVs, low-quality video. 720p (HD): 1280×720 — acceptable quality. 1080p (Full HD): 1920×1080 — standard quality. 1440p (QHD): 2560×1440 — gaming monitors. 4K (UHD): 3840×2160 — premium TVs, modern phones.", diagramId: "resolution-comparison" },
      { heading: "PPI — pixels per inch matters more than resolution", text: "A 4K screen at 85 inches (TV) has 52 PPI — fine from your sofa. A 1080p phone at 6 inches has 367 PPI — far sharper per inch. Retina displays (Apple) are ~458 PPI — individual pixels invisible at normal viewing distance.", diagramId: "pixel-density" },
      { heading: "Resolution and file sizes", text: "More pixels = bigger files. An uncompressed 1080p frame is 6 MB. A 4K frame is 24 MB. This is why 4K video files are much larger than 1080p. Compression (H.264, H.265) brings 4K video to manageable sizes (10–80 GB for a movie)." },
    ],
    "11-14": [
      { heading: "Sampling theory and digital images", text: "Capturing an analogue scene as digital pixels is called sampling. The Nyquist theorem says you need at least 2× the highest spatial frequency in the scene to reconstruct it perfectly. This is why higher-resolution cameras capture finer detail — they sample at a higher frequency." },
      { heading: "Resolution vs frame rate vs colour depth", text: "These three dimensions define video quality. Resolution: 4K. Frame rate: 60 fps vs 24 fps. Colour depth: 8-bit vs 10-bit (HDR). A 4K/60fps/10-bit stream requires ~100 Mbps uncompressed. H.265/HEVC compresses 4K to 10–40 Mbps at acceptable quality.", diagramId: "resolution-comparison" },
      { heading: "PPI and the human visual system", text: "The human eye resolves about 1 arcminute of visual angle (Snellen 20/20 vision). At 30cm (phone), this corresponds to ~300 PPI — meaning >300 PPI is 'Retina' quality. At 60cm (laptop), ~150 PPI is enough. At 2m (TV), ~52 PPI suffices. Optimal PPI depends on viewing distance.", diagramId: "pixel-density" },
      { heading: "Supersampling and anti-aliasing", text: "Rendering at 4× resolution then downscaling (SSAA) eliminates jagged edges (aliasing). This is expensive — 4× more GPU work. Temporal Anti-Aliasing (TAA) uses previous frames to reconstruct detail. DLSS 3 (NVIDIA) uses AI to upscale 1080p to 4K quality using 4K's worth of image information from many frames." },
    ],
    "15-18": [
      { heading: "Display scaling and logical vs physical pixels", text: "macOS Retina displays have 2× physical pixels per logical pixel. A 2560×1600 display appears as 1280×800 — apps draw at logical resolution, the OS renders at 2× for sharpness. Windows uses DPI scaling (100%/125%/150%/200%). Web: device pixel ratio (window.devicePixelRatio) exposes this to JS." },
      { heading: "Upscaling algorithms — DLSS, FSR, XeSS", text: "DLSS 3 (NVIDIA): render at 1080p, use a convolutional neural network trained on 4K ground truth to reconstruct 4K output with temporal accumulation. AMD FSR 2: temporal upscaler using motion vectors, no ML required. Intel XeSS: ML upscaler with generic fallback. These algorithms make 4K performance accessible on mid-range GPUs.", diagramId: "resolution-comparison" },
      { heading: "HDR and resolution interaction", text: "HDR benefits from resolution because fine detail reveals more tonal information. The sweet spot: 4K/120Hz/HDR10 on a 65\" OLED (108 PPI) at 2–3m viewing distance. Consumer cameras (12–200MP) far exceed display resolution — the gap is bridged by computational photography (HDR+, computational zoom).", diagramId: "pixel-density" },
      { heading: "Light field displays and beyond", text: "Current displays produce a 2D light field — the same pixel intensity regardless of viewing angle. Light field displays (prototype stage) emit rays in controlled directions, enabling glasses-free 3D. Holographic displays reconstruct the full 3D wavefront. These require pixel densities of 10,000+ PPI and entirely new rendering pipelines." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=700&fit=crop",
  photoAlt: "Monitor showing different resolution comparisons and sharp display quality",
  keyFacts: [
    { emoji: "📐", label: "FHD", value: "1920 × 1080 (2 MP)", detail: "Full HD — standard for most monitors and TVs. 1080p means 1,080 horizontal lines." },
    { emoji: "📐", label: "4K UHD", value: "3840 × 2160 (8 MP)", detail: "4× more pixels than FHD. Each pixel is half the size — sharper, more detail." },
    { emoji: "📏", label: "PPI Matters", value: "27\" 4K = 163 ppi (sharp)", detail: "Same resolution on a bigger screen = lower PPI = less sharp. Smaller screen = crisper." },
    { emoji: "🖥️", label: "Refresh Rate", value: "60Hz, 120Hz, 165Hz, 240Hz", detail: "Hz = frames per second. 120Hz feels twice as smooth as 60Hz for gaming and scrolling." },
    { emoji: "🎬", label: "Streaming", value: "Netflix 4K needs 25 Mbps", detail: "4K video is compressed (HEVC/H.265) or it would be 50 GB per hour uncompressed." },
    { emoji: "📱", label: "Retina", value: "Apple: >300 PPI at normal viewing", detail: "Apple's 'Retina' means you can't see individual pixels at typical viewing distance." },
  ],
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
