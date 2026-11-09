import { ComponentType } from "react";

type DiagramComponent = ComponentType<{ accent?: string }>;

// OS
import OSCommunicationBarrier from "./os/OSCommunicationBarrier";
import OSBridge from "./os/OSBridge";
import OSShellKernelFlow from "./os/OSShellKernelFlow";
import OSKernelShellRings from "./os/OSKernelShellRings";
import OSBootSequence from "./os/OSBootSequence";

// CPU
import CPUWhyWeNeed from "./cpu/CPUWhyWeNeed";
import CPUFetchDecodeExecute from "./cpu/CPUFetchDecodeExecute";

// RAM
import RAMWorkspace from "./ram/RAMWorkspace";
import RAMvsSSD from "./ram/RAMvsSSD";

// GPU
import GPUvsCPU from "./gpu/GPUvsCPU";
import GPURenderPipeline from "./gpu/GPURenderPipeline";

// Binary
import BinarySwitches from "./binary/BinarySwitches";
import BinaryNumbers from "./binary/BinaryNumbers";

// Files
import FileTypes from "./files/FileTypes";
import FileSystemTree from "./files/FileSystemTree";

// Software
import SoftwareLayers from "./software/SoftwareLayers";
import AppVsOS from "./software/AppVsOS";

// Internet/WWW
import InternetPackets from "./internet-www/InternetPackets";
import DNSFlow from "./internet-www/DNSFlow";

// What is Code
import CodeAsRecipe from "./what-is-code/CodeAsRecipe";
import ProgrammingConcepts from "./what-is-code/ProgrammingConcepts";

// Motherboard
import MotherboardLayout from "./motherboard/MotherboardLayout";
import DataBus from "./motherboard/DataBus";

// SSD
import SSDvsDisk from "./ssd/SSDvsDisk";
import FlashMemory from "./ssd/FlashMemory";

// Pixels
import PixelGrid from "./pixels/PixelGrid";
import RGBColors from "./pixels/RGBColors";

// Python Intro
import PythonCode from "./python-intro/PythonCode";
import PythonVsEnglish from "./python-intro/PythonVsEnglish";

// Bits & Bytes
import BitsBytesSizes from "./bits-bytes/BitsBytesSizes";
import DataInBits from "./bits-bytes/DataInBits";

// Hexadecimal
import HexTable from "./hexadecimal/HexTable";
import HexInCode from "./hexadecimal/HexInCode";

// Machine Language
import CompilationFlow from "./machine-language/CompilationFlow";
import InstructionSet from "./machine-language/InstructionSet";

// RGB
import RGBMixer from "./rgb/RGBMixer";
import LightMixing from "./rgb/LightMixing";

// Resolution
import ResolutionComparison from "./resolution/ResolutionComparison";
import PixelDensity from "./resolution/PixelDensity";

// Hex Colors
import HexColorWheel from "./hex-colors/HexColorWheel";
import HexBreakdown from "./hex-colors/HexBreakdown";

// Folder
import FolderHierarchy from "./folder/FolderHierarchy";
import FolderVsFile from "./folder/FolderVsFile";

// Drag & Drop
import DragDropDemo from "./drag-drop/DragDropDemo";
import EventFlow from "./drag-drop/EventFlow";

// Computer
import ComputerParts from "./computer/ComputerParts";
import HowComputerWorks from "./computer/HowComputerWorks";

// Battery
import BatteryLevels from "./battery/BatteryLevels";
import ChargeCycle from "./battery/ChargeCycle";

// Cooling Fan
import HeatFlow from "./cooling-fan/HeatFlow";
import ThermalPaste from "./cooling-fan/ThermalPaste";

// ROM
import ROMvsRAM from "./rom/ROMvsRAM";
import BIOSBoot from "./rom/BIOSBoot";

// Hard Disk
import HDDvsSSD from "./hard-disk/HDDvsSSD";
import StorageSizes from "./hard-disk/StorageSizes";

// Memory Allocation
import VirtualMemory from "./memory-allocation/VirtualMemory";
import StackHeap from "./memory-allocation/StackHeap";

// Linux OS
import LinuxLayers from "./linux-os/LinuxLayers";
import TerminalCommands from "./linux-os/TerminalCommands";

// Dual Boot
import DualBootChoice from "./dual-boot/DualBootChoice";
import PartitionLayout from "./dual-boot/PartitionLayout";

// Cyber Hygiene
import PasswordStrength from "./cyber-hygiene/PasswordStrength";
import PhishingWarning from "./cyber-hygiene/PhishingWarning";

// Scratch Intro
import ScratchBlocks from "./scratch-intro/ScratchBlocks";
import ScratchVsCode from "./scratch-intro/ScratchVsCode";

// Word Processing
import DocFormatting from "./word-processing/DocFormatting";
import FileFormats from "./word-processing/FileFormats";

// Spreadsheets
import CellGrid from "./spreadsheets/CellGrid";
import Formulas from "./spreadsheets/Formulas";

// Presentations
import SlideStructure from "./presentations/SlideStructure";
import PresentationFlow from "./presentations/PresentationFlow";

// Laptop
import LaptopVsDesktop from "./laptop/LaptopVsDesktop";
import LaptopParts from "./laptop/LaptopParts";

// Phone
import SmartphoneHardware from "./phone/SmartphoneHardware";
import MobileOS from "./phone/MobileOS";

// Tablet
import TabletUseCases from "./tablet/TabletUseCases";
import TabletVsLaptop from "./tablet/TabletVsLaptop";

// PC Hardware
import PCBuildOverview from "./pc-hardware/PCBuildOverview";
import ComponentCompatibility from "./pc-hardware/ComponentCompatibility";

// SSD Deep
import NVMeProtocol from "./ssd-deep/NVMeProtocol";
import NANDTypes from "./ssd-deep/NANDTypes";

export const DIAGRAM_REGISTRY: Record<string, DiagramComponent> = {
  // OS
  "os-communication-barrier": OSCommunicationBarrier,
  "os-bridge": OSBridge,
  "os-shell-kernel-flow": OSShellKernelFlow,
  "os-kernel-shell-rings": OSKernelShellRings,
  "os-boot-sequence": OSBootSequence,

  // CPU
  "cpu-why-we-need": CPUWhyWeNeed,
  "cpu-fetch-decode-execute": CPUFetchDecodeExecute,

  // RAM
  "ram-workspace": RAMWorkspace,
  "ram-vs-ssd": RAMvsSSD,

  // GPU
  "gpu-vs-cpu": GPUvsCPU,
  "gpu-render-pipeline": GPURenderPipeline,

  // Binary
  "binary-switches": BinarySwitches,
  "binary-numbers": BinaryNumbers,

  // Files
  "file-types": FileTypes,
  "file-system-tree": FileSystemTree,

  // Software
  "software-layers": SoftwareLayers,
  "app-vs-os": AppVsOS,

  // Internet/WWW
  "internet-packets": InternetPackets,
  "dns-flow": DNSFlow,

  // What is Code
  "code-as-recipe": CodeAsRecipe,
  "programming-concepts": ProgrammingConcepts,

  // Motherboard
  "motherboard-layout": MotherboardLayout,
  "data-bus": DataBus,

  // SSD
  "ssd-vs-disk": SSDvsDisk,
  "flash-memory": FlashMemory,

  // Pixels
  "pixel-grid": PixelGrid,
  "rgb-colors": RGBColors,

  // Python Intro
  "python-code": PythonCode,
  "python-vs-english": PythonVsEnglish,

  // Bits & Bytes
  "bits-bytes-sizes": BitsBytesSizes,
  "data-in-bits": DataInBits,

  // Hexadecimal
  "hex-table": HexTable,
  "hex-in-code": HexInCode,

  // Machine Language
  "compilation-flow": CompilationFlow,
  "instruction-set": InstructionSet,

  // RGB
  "rgb-mixer": RGBMixer,
  "light-mixing": LightMixing,

  // Resolution
  "resolution-comparison": ResolutionComparison,
  "pixel-density": PixelDensity,

  // Hex Colors
  "hex-color-wheel": HexColorWheel,
  "hex-breakdown": HexBreakdown,

  // Folder
  "folder-hierarchy": FolderHierarchy,
  "folder-vs-file": FolderVsFile,

  // Drag & Drop
  "drag-drop-demo": DragDropDemo,
  "event-flow": EventFlow,

  // Computer
  "computer-parts": ComputerParts,
  "how-computer-works": HowComputerWorks,

  // Battery
  "battery-levels": BatteryLevels,
  "charge-cycle": ChargeCycle,

  // Cooling Fan
  "heat-flow": HeatFlow,
  "thermal-paste": ThermalPaste,

  // ROM
  "rom-vs-ram": ROMvsRAM,
  "bios-boot": BIOSBoot,

  // Hard Disk
  "hdd-vs-ssd": HDDvsSSD,
  "storage-sizes": StorageSizes,

  // Memory Allocation
  "virtual-memory": VirtualMemory,
  "stack-heap": StackHeap,

  // Linux OS
  "linux-layers": LinuxLayers,
  "terminal-commands": TerminalCommands,

  // Dual Boot
  "dual-boot-choice": DualBootChoice,
  "partition-layout": PartitionLayout,

  // Cyber Hygiene
  "password-strength": PasswordStrength,
  "phishing-warning": PhishingWarning,

  // Scratch Intro
  "scratch-blocks": ScratchBlocks,
  "scratch-vs-code": ScratchVsCode,

  // Word Processing
  "doc-formatting": DocFormatting,
  "file-formats": FileFormats,

  // Spreadsheets
  "cell-grid": CellGrid,
  "formulas": Formulas,

  // Presentations
  "slide-structure": SlideStructure,
  "presentation-flow": PresentationFlow,

  // Laptop
  "laptop-vs-desktop": LaptopVsDesktop,
  "laptop-parts": LaptopParts,

  // Phone
  "smartphone-hardware": SmartphoneHardware,
  "mobile-os": MobileOS,

  // Tablet
  "tablet-use-cases": TabletUseCases,
  "tablet-vs-laptop": TabletVsLaptop,

  // PC Hardware
  "pc-build-overview": PCBuildOverview,
  "component-compatibility": ComponentCompatibility,

  // SSD Deep
  "nvme-protocol": NVMeProtocol,
  "nand-types": NANDTypes,
};
