import { Lesson } from "@/lib/types";
const lesson: Lesson = {
  id: "cooling-fan",
  title: "What is a Cooling Fan?",
  emoji: "❄️",
  category: "components",
  narrative: {
    "5-7": [
      { heading: "Have you ever touched a phone that got really hot?", text: "When your phone runs a big game for a long time, it gets warm. Inside, the tiny chip (CPU) is working so hard that it creates heat — just like how rubbing your hands together makes them warm. If the computer got too hot, it would stop working. That's why computers have fans." },
      { heading: "Heat is a natural side effect of work", text: "Every electrical component that does work creates heat. The CPU is the hardest worker, so it creates the most heat. Without cooling, a modern CPU would reach 100°C in seconds and permanently damage itself." },
      { heading: "How cooling works", text: "A metal heatsink sits on top of the CPU and absorbs the heat (like a sponge). A fan then blows air over the heatsink to carry the heat away from the chip — just like blowing on hot soup to cool it down.", diagramId: "heat-flow" },
      { heading: "Thermal paste — the secret ingredient", text: "Even surfaces that look smooth under a microscope are actually rough and bumpy. Thermal paste fills those tiny gaps between the CPU and the heatsink, letting heat transfer much more efficiently.", diagramId: "thermal-paste" },
      { heading: "In your daily life…", text: "Your laptop gets warm on the bottom — that's the fan working to push hot air out. Phone cases trap heat — that's why removing a case while gaming helps. Gaming PCs often have multiple fans and large heatsinks for extra cooling." },
    ],
    "8-10": [
      { heading: "Electricity flowing through resistance creates heat", text: "When electrons flow through the tiny transistors in a CPU, they lose energy to resistance — this energy becomes heat. A modern CPU running at full power can dissipate 65W–253W of heat. That's like having a 100-watt lightbulb inside your computer." },
      { heading: "The cooling chain: CPU → Heatsink → Fan → Air", text: "Thermal paste fills microscopic gaps between CPU and heatsink. The heatsink (usually aluminium or copper) spreads and conducts heat away from the chip. The fan blows air across the heatsink fins, carrying heat into the case. Case fans exhaust hot air outside.", diagramId: "heat-flow" },
      { heading: "Why thermal paste matters so much", text: "Even a 'flat' CPU surface has microscopic ridges. Without thermal paste, those air pockets (which are terrible heat conductors) sit between the CPU and heatsink. Good thermal paste can drop temperatures by 10–20°C.", diagramId: "thermal-paste" },
      { heading: "Liquid cooling for high-performance systems", text: "High-end CPUs use All-in-One (AIO) liquid coolers: a pump pushes water through tubes over a cold plate on the CPU, to a radiator with fans. Liquid carries heat 25× better than air. Custom water-cooling loops are used by enthusiasts for maximum performance." },
    ],
    "11-14": [
      { heading: "Thermal Design Power (TDP)", text: "TDP is the maximum heat (in watts) a cooling solution must dissipate during sustained workloads. Intel Core i9-14900K: 253W PL1 (sustained). The cooling system must handle this, plus airflow for other components. Under-spec cooling causes thermal throttling — the CPU reduces clock speed to stay within safe temperature limits." },
      { heading: "Heat transfer mechanisms", text: "Three types: Conduction (heat moves through solids — metal heatsink conducts from CPU). Convection (fans move hot air away — forced convection). Radiation (all hot objects emit infrared — minor effect in PCs). Heatsinks maximise surface area for convection.", diagramId: "heat-flow" },
      { heading: "Thermal interface materials", text: "Stock Intel/AMD TIM: mediocre. Quality aftermarket paste (MX-6, Kryonaut): 5–10°C improvement. Liquid metal (Conductonaut): 15–20°C better but electrically conductive — risky. Die direct contact (IHS-less) eliminates one interface. The IHS (Integrated Heat Spreader) on modern CPUs adds ~5°C for reliability.", diagramId: "thermal-paste" },
      { heading: "Fan speed, noise, and airflow", text: "Fan RPM determines airflow (CFM) and noise (dB). Most fans are controlled by PWM (Pulse Width Modulation) — the motherboard adjusts duty cycle to control speed. P-fans (pressure-optimised) for heatsinks. A-fans (airflow-optimised) for case exhaust. Fan curves balance temperature targets against noise." },
    ],
    "15-18": [
      { heading: "Thermal physics — Fourier's law", text: "Heat flux Q = -k × A × (ΔT/Δx): proportional to thermal conductivity (k), surface area (A), and temperature gradient (ΔT/Δx). Copper (k=385 W/m·K) conducts 2× better than aluminium (k=205). Heatpipes use phase change (liquid→vapour→liquid) to transport heat with near-zero temperature gradient — much more effective than solid metal." },
      { heading: "Vapour chambers and advanced cooling", text: "Modern CPUs use vapour chambers instead of heatpipes — a flat 2D phase-change device that spreads heat evenly across the entire IHS surface. Direct Die Contact (soldered IHS on Intel 13th Gen K-CPUs) eliminates the solder-to-IHS interface. Gallium-based liquid metal solder (used inside CPUs) has k>40 W/m·K.", diagramId: "heat-flow" },
      { heading: "Thermal throttling and power limits", text: "CPUs have multiple thermal protection layers: performance throttling (reduce frequency), voltage reduction, and emergency shutdown at Tjmax (~100°C). Intel's Power Limit 1 (PL1) and PL2 are sustained and burst limits — motherboards often ignore PL1 for maximum performance. AMD's curve optimizer fine-tunes per-core voltages for lower heat.", diagramId: "thermal-paste" },
      { heading: "Data centre cooling at scale", text: "A data centre server rack dissipates 10–50 kW. Data centres use CRAC units (Computer Room Air Conditioning) with raised floors and hot/cold aisle containment. Modern HPC clusters use direct liquid cooling (DLC) — manifolds carry coolant directly to CPUs and GPUs. Immersion cooling (servers submerged in dielectric fluid) is emerging for AI training clusters." },
    ],
  },
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
  photo: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=700&fit=crop",
  photoAlt: "PC cooling fan with RGB lighting inside a computer case",
  keyFacts: [
    { emoji: "🌡️", label: "CPU Max Temp", value: "95–100°C (thermal throttle)", detail: "Above this, the CPU slows itself down to prevent damage." },
    { emoji: "💨", label: "Fan Speed", value: "1,000–3,000 RPM", detail: "RPM = Revolutions Per Minute. Faster = more airflow but also more noise." },
    { emoji: "🧊", label: "Thermal Paste", value: "Conducts heat between CPU and cooler", detail: "Without thermal paste, air pockets reduce heat transfer by 10×." },
    { emoji: "💧", label: "Liquid Cooling", value: "AIO: 240–360mm radiator", detail: "Water conducts heat 25× better than air. Used in high-performance PCs." },
    { emoji: "🔊", label: "Noise", value: "20–50 dB (quiet to audible)", detail: "30 dB is a library, 50 dB is a conversation. Fan noise increases with RPM." },
    { emoji: "⚡", label: "Heat Generated", value: "CPU: up to 253W (desktop)", detail: "A high-end CPU under load generates as much heat as a 250W light bulb." },
  ],
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
