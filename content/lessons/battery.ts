import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "battery",
  title: "What is a Battery?",
  emoji: "🔋",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "What if your phone needed to be plugged in all the time?", text: "Imagine carrying your phone everywhere with a long wire attached to the wall — you couldn't go to school, play outside, or ride in a car with it! Batteries let your phone store electricity so you can carry it anywhere. The battery is like a small jar that holds energy." },
      { heading: "What is a battery?", text: "A battery is a device that stores chemical energy and converts it to electrical energy. Inside your phone is a flat lithium-ion battery. When you charge it, you're filling up that energy jar. When you use your phone, you're emptying it.", diagramId: "battery-levels" },
      { heading: "The charge cycle", text: "Charging fills the battery. Using the phone drains it. This is called a charge cycle. Modern phone batteries can handle 300–500 full charge cycles before they noticeably hold less charge.", diagramId: "charge-cycle" },
      { heading: "In your daily life…", text: "Keeping your phone between 20% and 80% charged extends its battery life. Extreme heat damages batteries quickly. The % shown on screen is an estimate of how much energy is left in the chemical jar." },
    ],
    "8-10": [
      { heading: "Portable electronics changed everything", text: "Before rechargeable batteries, laptops and phones had to be plugged in constantly. The lithium-ion battery (developed in the 1990s) made modern smartphones and laptops possible — it's light, rechargeable, and stores a lot of energy." },
      { heading: "How batteries work", text: "A battery has two electrodes (anode and cathode) separated by an electrolyte. When discharging, lithium ions move from anode to cathode through the electrolyte, releasing energy. Charging reverses the flow. This movement of ions is what stores and releases electricity.", diagramId: "battery-levels" },
      { heading: "The charge cycle in detail", text: "Charging in stages: Constant Current phase (fast charging, up to ~80%) → Constant Voltage phase (slow charging from 80–100% to avoid stress). Fast chargers (65W+) use high current in the CC phase. Overnight charging is designed to trickle charge after 100% to avoid overcharging.", diagramId: "charge-cycle" },
      { heading: "Battery health and degradation", text: "Each charge cycle slightly degrades the battery's capacity. After ~500 cycles, a lithium-ion battery typically holds ~80% of its original capacity. High temperatures accelerate degradation. Apple's Battery Health feature shows this percentage." },
    ],
    "11-14": [
      { heading: "Lithium-ion electrochemistry", text: "Li-ion batteries use a graphite anode, lithium metal oxide cathode (LiCoO₂, LiMnO₂, or NMC), and a liquid electrolyte. During discharge, lithium ions deintercalate from the anode, travel through electrolyte, and intercalate into the cathode. Electrons flow through the external circuit (that's your electricity)." },
      { heading: "Energy density and capacity", text: "Battery capacity is measured in mAh (milliamp-hours) or Wh (watt-hours). iPhone 15 Pro: 3,274 mAh at 3.86V = ~12.6 Wh. MacBook Pro 16: 100 Wh. Li-ion energy density: ~250–300 Wh/kg. For comparison, petrol is ~12,000 Wh/kg — this is why EVs need such large battery packs.", diagramId: "battery-levels" },
      { heading: "Charging protocols — USB Power Delivery", text: "USB Power Delivery (PD) negotiates voltage and current between charger and device. Up to 240W (USB PD 3.1). Qualcomm Quick Charge uses higher voltage (up to 20V) for fast charging. Apple MagSafe uses inductive charging (Qi2) at up to 15W. Fast charging generates heat — a trade-off between speed and long-term battery health.", diagramId: "charge-cycle" },
      { heading: "Battery Management System (BMS)", text: "The BMS monitors individual cell voltages, temperature, and state of charge. It balances cells in multi-cell packs, prevents overcharging (>4.2V per cell) and deep discharge (<3V), and manages thermal protection. Modern phones with 5000 mAh use multiple cells managed by a sophisticated BMS." },
    ],
    "15-18": [
      { heading: "Li-ion degradation mechanisms", text: "Three main degradation paths: SEI (Solid Electrolyte Interphase) layer growth on anode consumes lithium, increasing impedance. Lithium plating at fast charge rates deposits metallic lithium (irreversible). Cathode structural degradation (NMC cracking under volume change). Calendar aging (20°C vs 40°C storage makes a large difference in cycle life)." },
      { heading: "Solid-state batteries — the next generation", text: "Replace liquid electrolyte with solid ceramic or polymer. Benefits: no flammable electrolyte (safer), enables lithium metal anode (~10× higher energy density than graphite), wider temperature range. Toyota plans solid-state EVs for 2027–2028. Manufacturing at scale remains the main challenge.", diagramId: "charge-cycle" },
      { heading: "BMS and state estimation algorithms", text: "Accurate State of Charge (SoC) estimation uses a Kalman filter or Extended Kalman Filter on voltage, current, and temperature data. State of Health (SoH) tracks capacity fade and impedance growth. Coulomb counting (integrating current over time) gives SoC but drifts without voltage correction. These algorithms run on a dedicated microcontroller.", diagramId: "battery-levels" },
      { heading: "EVs and grid-scale storage", text: "Tesla Model Y uses 4,680 cylindrical cells in a structural battery pack (cells are part of the floor). Cell-to-pack design eliminates modules. BYD's Blade Battery uses prismatic LFP cells in a pack without modules. Grid-scale storage (utility BESS) uses LFP chemistry for its 3000+ cycle life and thermal stability despite lower energy density." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=700&fit=crop",
  photoAlt: "Lithium-ion battery pack showing cells and connections",
  keyFacts: [
    { emoji: "🔋", label: "Chemistry", value: "Lithium-Ion (Li-ion)", detail: "Uses lithium ions moving between graphite anode and metal oxide cathode." },
    { emoji: "⚡", label: "iPhone 15 Capacity", value: "3,274 mAh / ~12.6 Wh", detail: "Wh = capacity × voltage. MacBook Pro 16\" has 100 Wh — 8× more." },
    { emoji: "🔄", label: "Cycle Life", value: "~500 full cycles to 80%", detail: "After 500 cycles, battery typically holds 80% of original capacity." },
    { emoji: "🌡️", label: "Sweet Spot", value: "20°C–25°C storage", detail: "Heat is the #1 enemy. Never leave a phone in a hot car — it accelerates aging." },
    { emoji: "⚡", label: "Fast Charging", value: "Up to 240W (USB PD 3.1)", detail: "More watts = faster charge but more heat. Slower charging is gentler on the battery." },
    { emoji: "📅", label: "Invented", value: "Commercial Li-ion in 1991", detail: "Sony commercialised lithium-ion in 1991. Before that, devices used heavy NiCd batteries." },
  ],
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
