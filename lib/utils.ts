export function textToBinary(text: string): string[] {
  return text.toUpperCase().split("").map((char) => {
    const code = char.charCodeAt(0);
    return code.toString(2).padStart(8, "0");
  });
}

export function numberToBinary(n: number, bits = 8): string {
  return n.toString(2).padStart(bits, "0");
}

export function numberToHex(n: number): string {
  return "0x" + n.toString(16).toUpperCase().padStart(2, "0");
}

export function binaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}

export const EMOJI_BINARY: Array<{ emoji: string; name: string; unicode: string; binary: string }> = [
  { emoji: "😀", name: "Grinning Face", unicode: "U+1F600", binary: "000011111011000000000" },
  { emoji: "😂", name: "Tears of Joy", unicode: "U+1F602", binary: "000011111011000000010" },
  { emoji: "🥰", name: "Smiling with Hearts", unicode: "U+1F970", binary: "000011111100101110000" },
  { emoji: "😎", name: "Cool Face", unicode: "U+1F60E", binary: "000011111011000001110" },
  { emoji: "🤩", name: "Star-Struck", unicode: "U+1F929", binary: "000011111100100101001" },
  { emoji: "🥳", name: "Partying Face", unicode: "U+1F973", binary: "000011111100101110011" },
  { emoji: "🚀", name: "Rocket", unicode: "U+1F680", binary: "000011111011010000000" },
  { emoji: "⭐", name: "Star", unicode: "U+2B50", binary: "000000010101101010000" },
  { emoji: "🌈", name: "Rainbow", unicode: "U+1F308", binary: "000011111001100001000" },
  { emoji: "🎮", name: "Video Game", unicode: "U+1F3AE", binary: "000011110011101011110" },
  { emoji: "🤖", name: "Robot", unicode: "U+1F916", binary: "000011111001100010110" },
  { emoji: "💻", name: "Laptop", unicode: "U+1F4BB", binary: "000011110100101111011" },
  { emoji: "🧠", name: "Brain", unicode: "U+1F9E0", binary: "000011111001111100000" },
  { emoji: "❤️", name: "Heart", unicode: "U+2764", binary: "000000100111001100100" },
  { emoji: "🌟", name: "Glowing Star", unicode: "U+1F31F", binary: "000011110011000011111" },
];

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
