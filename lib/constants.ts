import { Avatar, AgeGroup } from "./types";

export const BRAND = {
  name: "KidByte",
  tagline: "Touch • Play • Learn • Discover",
  colors: {
    blue: "#1D7CFF",
    orange: "#FF8A00",
    purple: "#7B61FF",
    lime: "#8BEA00",
    navy: "#082A63",
    bg: "#F8FBFF",
    card: "#FFFFFF",
  },
};

export const AVATARS: Avatar[] = [
  { id: "robot", label: "Robot", emoji: "🤖", color: "#1D7CFF" },
  { id: "astronaut", label: "Astronaut", emoji: "👨‍🚀", color: "#7B61FF" },
  { id: "scientist", label: "Scientist", emoji: "🧑‍🔬", color: "#8BEA00" },
  { id: "artist", label: "Artist", emoji: "🧑‍🎨", color: "#FF8A00" },
  { id: "ninja", label: "Ninja", emoji: "🥷", color: "#082A63" },
  { id: "superhero", label: "Hero", emoji: "🦸", color: "#FF4081" },
];

export function getAgeGroup(age: number): AgeGroup {
  if (age <= 7) return "5-7";
  if (age <= 10) return "8-10";
  return "11-14";
}

export const SESSION_KEY = "kidbyte_session";

export const CATEGORIES = [
  {
    id: "devices",
    label: "Explore Devices",
    emoji: "💻",
    color: "#1D7CFF",
    description: "Computers, Laptops, Tablets & Phones",
    lessons: ["computer", "laptop", "tablet", "phone"],
  },
  {
    id: "components",
    label: "Inside the Machine",
    emoji: "⚙️",
    color: "#FF8A00",
    description: "CPU, GPU, RAM, SSD and more",
    lessons: ["cpu", "gpu", "ram", "rom", "ssd", "cooling-fan", "motherboard", "battery"],
  },
  {
    id: "digital-world",
    label: "Digital World",
    emoji: "🌐",
    color: "#7B61FF",
    description: "Files, Folders, OS & Software",
    lessons: ["folder", "files", "os", "software", "drag-drop"],
  },
  {
    id: "machine-world",
    label: "Machine Language",
    emoji: "🔢",
    color: "#8BEA00",
    description: "Binary, Bits, Bytes & Hex",
    lessons: ["binary", "bits-bytes", "hexadecimal", "machine-language"],
  },
  {
    id: "graphics",
    label: "Graphics & Colors",
    emoji: "🎨",
    color: "#FF4081",
    description: "Pixels, RGB & How colors work",
    lessons: ["pixels", "rgb", "hex-colors", "resolution"],
  },
  {
    id: "storage",
    label: "Storage & Memory",
    emoji: "💾",
    color: "#00BCD4",
    description: "How files are stored & retrieved",
    lessons: ["hard-disk", "ssd-deep", "memory-allocation"],
  },
  {
    id: "programming",
    label: "Programming",
    emoji: "👩‍💻",
    color: "#4CAF50",
    description: "Python, Scratch & how code works",
    lessons: ["what-is-code", "python-intro", "scratch-intro"],
  },
];
