import { Lesson } from "@/lib/types";
import folder from "./folder";
import cpu from "./cpu";
import ram from "./ram";
import binary from "./binary";
import pixels from "./pixels";
import computer from "./computer";
import laptop from "./laptop";
import tablet from "./tablet";
import phone from "./phone";

const lessons: Record<string, Lesson> = {
  folder,
  cpu,
  ram,
  binary,
  pixels,
  computer,
  laptop,
  tablet,
  phone,
};

export default lessons;
export { folder, cpu, ram, binary, pixels, computer, laptop, tablet, phone };
