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
import gpu from "./gpu";
import rom from "./rom";
import ssd from "./ssd";
import coolingFan from "./cooling-fan";
import motherboard from "./motherboard";
import battery from "./battery";
import files from "./files";
import os from "./os";
import software from "./software";
import dragDrop from "./drag-drop";
import bitsBytesLesson from "./bits-bytes";
import hexadecimal from "./hexadecimal";
import machineLang from "./machine-language";
import rgb from "./rgb";
import hexColors from "./hex-colors";
import resolution from "./resolution";
import hardDisk from "./hard-disk";
import ssdDeep from "./ssd-deep";
import memoryAlloc from "./memory-allocation";
import whatIsCode from "./what-is-code";
import pythonIntro from "./python-intro";
import scratchIntro from "./scratch-intro";
import pcHardware from "./pc-hardware";
import internetWww from "./internet-www";
import cyberHygiene from "./cyber-hygiene";
import wordProcessing from "./word-processing";
import spreadsheets from "./spreadsheets";
import presentations from "./presentations";
import linuxOs from "./linux-os";
import dualBoot from "./dual-boot";

const lessons: Record<string, Lesson> = {
  folder, cpu, ram, binary, pixels,
  computer, laptop, tablet, phone,
  gpu, rom, ssd, "cooling-fan": coolingFan, motherboard, battery,
  files, os, software, "drag-drop": dragDrop,
  "bits-bytes": bitsBytesLesson, hexadecimal, "machine-language": machineLang,
  rgb, "hex-colors": hexColors, resolution,
  "hard-disk": hardDisk, "ssd-deep": ssdDeep, "memory-allocation": memoryAlloc,
  "what-is-code": whatIsCode, "python-intro": pythonIntro, "scratch-intro": scratchIntro,
  "pc-hardware": pcHardware, "internet-www": internetWww, "cyber-hygiene": cyberHygiene,
  "word-processing": wordProcessing, spreadsheets, presentations,
  "linux-os": linuxOs, "dual-boot": dualBoot,
};

export default lessons;
