import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "battery",
  title: "What is a Battery?",
  emoji: "🔋",
  category: "components",
  story: {
    "5-7": "A battery is like a tank of electricity that your laptop or phone carries around! When it's full, you can use your device anywhere. When it runs out, you plug it in to refill it — just like filling a water bottle. The battery lets your device work without being connected to the wall all the time.",
    "8-10": "Laptops and phones use rechargeable lithium-ion (Li-ion) batteries. They store energy as chemical reactions and release it as electricity. Battery capacity is measured in mAh (milliampere-hours) — the higher the number, the longer it lasts. Over time, batteries wear out — after 500+ charge cycles, they hold less charge than when new. That's why old phones don't last as long!",
    "11-14": "Lithium-ion batteries work through electrochemical reactions — lithium ions move between anode (graphite) and cathode (lithium metal oxide) through an electrolyte. Capacity is measured in Wh (Watt-hours) or mAh. Battery health degrades with charge cycles due to lithium plating and SEI layer growth. Modern device OSes implement charge limiting (e.g., 80% cap) to extend cycle life. Fast charging uses higher wattage but generates more heat, accelerating degradation.",
  },
  analogy: {
    "5-7": "A battery is like a water tank — full means hours of play, empty means time to plug in!",
    "8-10": "Like a fuel tank in a car — fills up at the petrol station (charger), slowly empties as you drive (use the device).",
    "11-14": "An electrochemical energy storage cell — lithium-ion intercalation chemistry with cycle-dependent capacity fade.",
  },
  funFact: "A modern smartphone battery can charge from 0% to 50% in just 15 minutes with fast charging. But charging slowly (overnight) is actually healthier for the battery's long-term life!",
  dos: ["Charge your device before it drops below 20%", "Remove the case if your phone gets hot while charging"],
  donts: ["Don't leave devices charging all night every night — it stresses the battery", "Don't expose batteries to extreme heat — it permanently reduces capacity"],
  quiz: [
    { for: "5-7", question: "What does a battery do for a laptop?", choices: ["Lets it work without being plugged in", "Makes it faster", "Connects to the internet"], correct: 0, explanation: "The battery stores electricity so you can use your laptop anywhere — without a wire!" },
    { for: "8-10", question: "What happens to a battery after hundreds of charge cycles?", choices: ["It holds less charge — the device doesn't last as long", "It gets bigger", "It charges faster"], correct: 0, explanation: "Batteries degrade over time. After ~500 cycles, they hold maybe 80% of original capacity — that's why old phones need charging more often!" },
    { for: "11-14", question: "Why does fast charging generate more heat?", choices: ["Higher wattage = more current = more resistive heating in the battery", "It uses a different type of lithium", "The CPU works harder"], correct: 0, explanation: "P=I²R — more current through internal resistance means more heat. Heat accelerates lithium plating and degrades battery life faster." },
  ],
};
export default lesson;
