import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "cooling-fan",
  title: "What is a Cooling Fan?",
  emoji: "❄️",
  category: "components",
  story: {
    "5-7": "When the CPU works very hard — like when you play a big game — it gets really hot, just like you get sweaty when you run fast! The cooling fan is like a tiny electric fan that blows cool air over the hot parts to keep them cool. Without the fan, the CPU would get too hot and the computer would shut down to protect itself!",
    "8-10": "A cooling fan moves air over a heatsink (a metal block with lots of thin fins) that sits on top of the CPU. Heat from the CPU travels into the heatsink, and the fan blows it out of the case. Modern computers also have fans on the GPU and in the case itself. The hotter your CPU gets, the faster the fans spin — that's why your computer sounds louder when you're gaming!",
    "11-14": "CPU thermal management uses a heatsink-fan (HSF) assembly or AIO liquid cooler. Thermal paste between the CPU lid and heatsink maximises thermal conductivity. Modern CPUs run TDP (Thermal Design Power) of 65W–250W. The BIOS uses fan curves — increasing RPM as temperatures rise. Thermal throttling kicks in if cooling is insufficient, reducing clock speed to prevent damage. Junction temperature limits are typically 95–100°C for modern CPUs.",
  },
  analogy: {
    "5-7": "Like blowing on hot food to cool it down — the fan blows cool air on the hot CPU!",
    "8-10": "Like a mini electric fan on a hot summer day — it keeps the CPU cool so it can keep working at full speed.",
    "11-14": "A thermodynamic system maintaining CPU junction temperature below TJ-max via forced convection cooling.",
  },
  funFact: "The fastest CPU fans can spin at 4,000 RPM (revolutions per minute). Some high-end cooling fans spin so fast they sound like a jet engine!",
  dos: ["Keep your computer in a well-ventilated area", "Clean dust from fans every 6 months with compressed air"],
  donts: ["Don't block the air vents on your laptop or PC case", "Don't put your laptop on a blanket or pillow — it blocks airflow"],
  quiz: [
    { for: "5-7", question: "Why does a computer have a cooling fan?", choices: ["To stop the CPU from getting too hot", "To make music", "To charge the battery"], correct: 0, explanation: "The CPU gets hot when it works hard — the fan keeps it cool!" },
    { for: "8-10", question: "What happens to fan speed when you play a demanding game?", choices: ["Fans spin faster because the CPU gets hotter", "Fans stop completely", "Fan speed stays the same"], correct: 0, explanation: "More CPU work = more heat = fans spin faster to cool it down. That's why you hear the computer get louder!" },
    { for: "11-14", question: "What is thermal throttling?", choices: ["CPU reducing its clock speed to prevent overheating damage", "The fan spinning too fast", "RAM slowing down when hot"], correct: 0, explanation: "When cooling can't keep up, the CPU reduces its speed (throttles) to lower heat output and stay within safe temperature limits." },
  ],
};
export default lesson;
