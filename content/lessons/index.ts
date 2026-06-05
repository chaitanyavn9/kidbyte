import { Lesson } from "@/lib/types";
import folder from "./folder";
import cpu from "./cpu";
import ram from "./ram";
import binary from "./binary";
import pixels from "./pixels";

const lessons: Record<string, Lesson> = {
  folder,
  cpu,
  ram,
  binary,
  pixels,
};

export default lessons;
export { folder, cpu, ram, binary, pixels };
