import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "rom",
  title: "What is ROM?",
  emoji: "📖",
  category: "components",
  story: {
    "5-7": "ROM is like a book that you can only read — you cannot write in it or change it! Your computer's ROM has very special instructions written inside it that tell the computer how to wake up when you press the power button. These instructions never change and never disappear, even when you turn the computer off.",
    "8-10": "ROM stands for Read-Only Memory. Unlike RAM which forgets everything when you turn off the computer, ROM keeps its data forever — even without power. It stores the BIOS or UEFI firmware — the startup instructions that run the moment you press the power button. It checks all the hardware is working before handing over to your operating system.",
    "11-14": "ROM is non-volatile memory that retains data without power. Modern computers use EEPROM (Electrically Erasable Programmable ROM) for UEFI firmware — technically rewritable with special software but not during normal operation. The UEFI/BIOS firmware performs POST (Power-On Self Test), initialises hardware, and boots the OS bootloader. Flash storage in USB drives and SSDs is also a form of ROM-derived technology.",
  },
  analogy: {
    "5-7": "ROM is like a printed book — you can read it but you can't change what's written inside.",
    "8-10": "Like the instructions printed on a machine — they're always there, always the same, telling it how to start.",
    "11-14": "Non-volatile EEPROM storing immutable firmware — persistent across power cycles, readable at all times.",
  },
  funFact: "The BIOS in early computers was stored on actual ROM chips that couldn't be changed at all. Today's UEFI firmware is stored on flash memory — still called 'ROM' but can be updated via firmware upgrades!",
  dos: ["Update your computer's BIOS/UEFI only from the manufacturer's official website", "Don't interrupt a BIOS update — it can brick your computer"],
  donts: ["Never flash BIOS firmware during a power cut", "Don't update BIOS unless there's a specific reason to"],
  quiz: [
    { for: "5-7", question: "What does ROM do?", choices: ["Stores special startup instructions that never disappear", "Paints pictures on screen", "Connects to the internet"], correct: 0, explanation: "ROM holds the permanent instructions your computer needs to start up!" },
    { for: "8-10", question: "What is the difference between ROM and RAM?", choices: ["ROM keeps data forever, RAM forgets when power is off", "ROM is faster than RAM", "RAM is bigger than ROM"], correct: 0, explanation: "ROM = Read Only, permanent. RAM = temporary working memory, wiped when power off." },
    { for: "11-14", question: "What does POST stand for?", choices: ["Power-On Self Test", "Permanent Operating System Transfer", "Processor Output System Test"], correct: 0, explanation: "POST runs from ROM/UEFI at startup — it checks RAM, CPU, storage and other hardware before booting the OS." },
  ],
};
export default lesson;
