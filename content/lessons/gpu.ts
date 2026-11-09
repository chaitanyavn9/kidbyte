import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "gpu",
  title: "What is a GPU?",
  emoji: "🎨",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "Imagine painting a giant wall with a single brush…", text: "If you had to colour every dot on a huge painting one at a time, it would take forever. But what if you had thousands of tiny brushes all working at once? That's exactly how a GPU works — it draws millions of dots on your screen simultaneously." },
      { heading: "Why can't the CPU do this?", text: "The CPU is like a genius scientist who solves one hard problem at a time. But a game screen has over 2 million dots that all need new colours 60 times every second. The GPU has thousands of little workers for exactly that job.", diagramId: "gpu-vs-cpu" },
      { heading: "Watch a scene being built", text: "First the GPU figures out the shapes of everything in the scene. Then it calculates the colours — how light bounces off each surface. It all happens so fast that your eyes see smooth movement.", diagramId: "gpu-render-pipeline" },
      { heading: "In your daily life…", text: "Games, YouTube videos, and even smooth phone scrolling are all GPU work. AI image generators also use GPUs — they need millions of maths calculations happening at once, just like drawing a picture." },
    ],
    "8-10": [
      { heading: "Your screen has over 2 million pixels…", text: "A 1080p screen is 1920 × 1080 = more than 2 million dots. In a 60 fps game, the GPU must recalculate every dot's colour 60 times per second — over 120 million colour decisions every second." },
      { heading: "CPU vs GPU — expert vs team", text: "A CPU has 8–16 powerful cores that handle complex tasks one at a time. A GPU has thousands of small, simple cores. For graphics — and AI — thousands of simple workers beat a few powerful ones.", diagramId: "gpu-vs-cpu" },
      { heading: "The render pipeline", text: "Every game frame goes through stages: 3D shapes → flatten to 2D → add colours and lighting → output to screen. The GPU runs all these stages in parallel across millions of triangles and pixels.", diagramId: "gpu-render-pipeline" },
      { heading: "Beyond gaming", text: "GPUs now power AI training, video editing, and even weather simulation. Any task that can be split into millions of similar calculations benefits from a GPU." },
    ],
    "11-14": [
      { heading: "Parallelism is the GPU's core design", text: "CPU cores execute instructions sequentially and use branch prediction for speed. GPU shader cores are designed for SIMT — Single Instruction, Multiple Threads — running hundreds of threads on the same instruction simultaneously but with different data." },
      { heading: "The graphics pipeline in depth", text: "Vertex shader → Rasterisation → Fragment/Pixel shader → Output. Each stage is a mini-program (shader) in HLSL or GLSL. Modern GPUs run all stages in parallel across all triangles.", diagramId: "gpu-render-pipeline" },
      { heading: "Core count comparison", text: "An RTX 4090 has 16,384 CUDA cores. An i9 CPU has 24 cores. Each GPU core is simpler — lower clock, no branch prediction — but the sheer count overwhelms any CPU for parallel work.", diagramId: "gpu-vs-cpu" },
      { heading: "VRAM and bandwidth", text: "GPUs have their own fast RAM — GDDR6/GDDR6X — on the chip itself (8–24 GB). The 4090's 384-bit memory bus delivers ~1 TB/s bandwidth, because shaders constantly read textures and write frame buffers." },
    ],
    "15-18": [
      { heading: "SIMT and warp execution", text: "GPU threads are grouped into warps of 32 (NVIDIA) or wavefronts of 64 (AMD). All threads in a warp execute the same instruction. Branch divergence causes thread masking — inactive threads still waste cycles — so GPU code avoids if-else branching." },
      { heading: "Hardware-accelerated rasterisation and ray tracing", text: "Triangle setup, edge walking, and depth testing are fixed-function hardware. Since 2018, RT Cores (NVIDIA) and Ray Accelerators (AMD) handle BVH traversal in hardware for real-time ray tracing.", diagramId: "gpu-render-pipeline" },
      { heading: "GPGPU — GPUs for AI and science", text: "CUDA (NVIDIA) and ROCm/HIP (AMD) expose the GPU as a parallel compute engine. PyTorch and TensorFlow compile neural network operations to optimised CUDA kernels. cuBLAS handles the matrix multiplications at the core of transformer attention.", diagramId: "gpu-vs-cpu" },
      { heading: "Memory hierarchy", text: "GPU threads access: Registers (fastest, per-thread) → Shared memory/L1 cache (per SM) → L2 (chip-wide) → GDDR VRAM (~1 TB/s) → system RAM over PCIe (~32 GB/s). Coalesced memory access — threads reading adjacent addresses — is the primary GPU optimisation technique." },
    ],
  },
  story: {
    "5-7": "The GPU is like a super-fast artist inside your computer! Every time you see a picture, a game, or a video on your screen, the GPU painted it. It paints millions of tiny dots (pixels) every single second. The CPU tells it what to paint, and the GPU paints it — really, really fast!",
    "8-10": "GPU stands for Graphics Processing Unit. While the CPU is like a single brilliant brain, the GPU is like thousands of tiny workers all painting at the same time. This is why games look so smooth — the GPU redraws the entire screen 60 or more times every second! Without a GPU, your screen would look blocky and slow.",
    "11-14": "A GPU is a massively parallel processor with thousands of small cores designed for simultaneous floating-point operations. Unlike CPUs (few powerful cores for sequential tasks), GPUs excel at parallel workloads like rendering triangles, shading pixels, and matrix multiplication. Modern GPUs (NVIDIA RTX, AMD Radeon) are also used for AI/ML training because neural networks are essentially matrix maths at massive scale.",
    "15-18": "The GPU's rendering pipeline transforms 3D geometry into 2D pixels through these stages: (1) Vertex Shader — transforms 3D vertex positions using model/view/projection matrices; (2) Rasterisation — converts triangles to pixel fragments; (3) Fragment/Pixel Shader — computes final pixel colour using lighting, texture samples, and material data; (4) Output Merger — depth testing (Z-buffer), blending. NVIDIA's shader model uses CUDA cores (FP32 compute), Tensor Cores (INT8/FP16 for AI — matrix-multiply-accumulate), and RT Cores (ray-triangle intersection for ray tracing). The GPU has its own GDDR6/GDDR6X VRAM (8–24GB) on a wide memory bus (128–384 bit). GPU compute (CUDA/OpenCL/Vulkan Compute) enables general-purpose computing: machine learning training, physics simulation, video encoding. Modern APIs (Vulkan, DirectX 12, Metal) give developers low-level GPU control — explicit pipeline state, descriptor sets, and command buffer submission.",
  },
  analogy: {
    "5-7": "An artist who paints every tiny dot on your screen — millions of dots, every second!",
    "8-10": "Thousands of mini-painters working at the same time — each one colours a small piece of the screen.",
    "11-14": "A massively parallel SIMD processor — thousands of cores executing the same instruction on different data simultaneously.",
    "15-18": "The GPU is a factory assembly line — the vertex shader is the design team, rasterisation is cutting, fragment shader is the painters, and output merger is quality control — all running in parallel on thousands of pieces simultaneously.",
  },
  photo: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=700&fit=crop",
  photoAlt: "NVIDIA RTX graphics card GPU sitting on a desk",
  keyFacts: [
    { emoji: "🔢", label: "Full Name", value: "Graphics Processing Unit", detail: "Originally designed to draw 3D graphics; now also used for AI, video editing, and simulations." },
    { emoji: "🧩", label: "Cores", value: "5,000–18,000 CUDA/shader cores", detail: "Many small cores vs CPU's few powerful cores. Great for tasks that do the same thing to millions of pixels at once." },
    { emoji: "💾", label: "VRAM", value: "8–24 GB GDDR6X", detail: "The GPU's own fast memory for textures, frame buffers, and 3D scene data. Separate from system RAM." },
    { emoji: "🔌", label: "Slot", value: "PCIe x16 (longest slot on motherboard)", detail: "Plugs into the first PCIe x16 slot, closest to the CPU. Needs its own power cable from the PSU." },
    { emoji: "🌡️", label: "Heat", value: "Up to 90°C, 200–400 Watts", detail: "The hottest component in a gaming PC. Has 2–3 fans and needs good case airflow." },
    { emoji: "📺", label: "Output", value: "HDMI 2.1, DisplayPort 2.1", detail: "Directly drives your monitor. Supports up to 8K resolution and 360Hz refresh rates on high-end cards." },
  ],
  funFact: "Modern gaming GPUs have over 16,000 cores. Your CPU has maybe 16. The GPU wins by having thousands of small workers instead of a few big ones!",
  dos: ["Make sure your PC has good airflow — GPUs get very hot", "Update GPU drivers for the best game performance"],
  donts: ["Don't block the GPU's exhaust fans", "Don't run demanding games with a faulty cooling system"],
  quiz: [
    { for: "5-7", question: "What does the GPU do?", choices: ["Paints the pictures on your screen", "Stores your files", "Connects to Wi-Fi"], correct: 0, explanation: "The GPU paints every pixel you see on screen!" },
    { for: "8-10", question: "Why does a GPU have thousands of small cores?", choices: ["To paint millions of pixels at the same time", "To store more files", "To make the computer louder"], correct: 0, explanation: "Painting every pixel simultaneously requires massive parallelism — that's why GPUs have so many cores!" },
    { for: "11-14", question: "Why are GPUs used for AI training?", choices: ["Neural networks require massive matrix multiplication which GPUs excel at", "GPUs have more RAM", "GPUs are cheaper"], correct: 0, explanation: "Both graphics rendering and AI training boil down to the same maths: matrix operations at massive scale." },
    { for: "15-18", question: "What is the purpose of the Z-buffer (depth buffer) in GPU rendering?", choices: ["Stores depth (distance from camera) per pixel to correctly resolve which triangle is in front", "Stores texture data", "Buffers vertex shader output"], correct: 0, explanation: "Without a Z-buffer, the last-drawn triangle always appears on top. Z-testing ensures closer objects properly occlude farther ones, handling any draw order." },
    { for: "15-18", question: "What are Tensor Cores in NVIDIA GPUs designed for?", choices: ["Accelerating matrix-multiply-accumulate (MMA) operations for deep learning training/inference", "Ray tracing triangle intersections", "Video decode"], correct: 0, explanation: "Tensor Cores perform D = A×B + C on 4×4 matrices in a single clock cycle in FP16/INT8/FP8 precision — giving massive throughput for neural network layers." },
  ],
};
export default lesson;
