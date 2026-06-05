import { Lesson } from "@/lib/types";

const lesson: Lesson = {
  id: "phone",
  title: "What is a Smartphone?",
  emoji: "📱",
  category: "devices",
  story: {
    "5-7":
      "A smartphone is a tiny computer that fits in your pocket and also makes phone calls! It can take photos, play games, show maps, play songs, and let you video-call grandma anywhere in the world. It connects to the internet through Wi-Fi or through invisible waves in the air called mobile data. The most famous smartphones are the iPhone and Android phones!",
    "8-10":
      "A smartphone is a handheld computer that happens to make calls. It has a touchscreen, camera (front and back), GPS to know where you are, Wi-Fi and mobile data to connect to the internet, and hundreds of thousands of apps. The two main systems are iOS (iPhone) and Android. Smartphones have sensors like accelerometers (to know which way you're tilting), gyroscopes, and fingerprint readers.",
    "11-14":
      "A smartphone is a mobile computing platform running a mobile OS (iOS or Android) on an ARM SoC. Key hardware: multi-core CPU + GPU on a single chip, LPDDR RAM, UFS/NVMe storage, MIMO antenna arrays for 4G/5G, camera ISP (Image Signal Processor) for computational photography, and a battery of ~4000–5000mAh. Sensors include: accelerometer, gyroscope, magnetometer, proximity sensor, ambient light sensor, barometer.",
  },
  analogy: {
    "5-7": "A smartphone is like a tiny computer + camera + TV + telephone all squeezed into your pocket!",
    "8-10": "Like a Swiss army knife — one device that does calling, computing, navigation, photography, and entertainment.",
    "11-14": "A converged mobile computing platform: SoC + modem + ISP + sensor fusion hub in a 160g package.",
  },
  funFact:
    "The first iPhone was released in 2007. Before that, phones could only call and send texts. Today, there are over 6.8 billion smartphones in use — almost one for every person on Earth!",
  dos: [
    "Use a screen protector and case to protect from drops",
    "Keep software updated for security patches",
    "Turn on 'Do Not Disturb' during study time",
  ],
  donts: [
    "Don't use your phone while walking — accidents happen!",
    "Don't charge under a pillow — phones can overheat",
    "Don't share your password or personal details with strangers online",
  ],
  quiz: [
    {
      for: "5-7",
      question: "A smartphone can do all of these EXCEPT...?",
      choices: ["Make you breakfast", "Take photos", "Play games"],
      correct: 0,
      explanation: "Smartphones can take photos and play games — but they can't make breakfast (yet!). 😄",
    },
    {
      for: "5-7",
      question: "What are the two types of internet connection on a phone?",
      choices: ["Wi-Fi and Mobile Data", "Bluetooth and GPS", "Camera and Screen"],
      correct: 0,
      explanation: "Wi-Fi connects at home or school. Mobile data uses phone towers when you're out and about!",
    },
    {
      for: "8-10",
      question: "What does GPS do on a smartphone?",
      choices: [
        "Tells the phone exactly where in the world it is",
        "Makes calls faster",
        "Charges the battery wirelessly",
      ],
      correct: 0,
      explanation: "GPS (Global Positioning System) uses satellites to pinpoint your location — that's how maps apps know where you are!",
    },
    {
      for: "8-10",
      question: "What is the difference between iOS and Android?",
      choices: [
        "iOS runs on iPhones (Apple). Android runs on phones from Samsung, Google, and many others.",
        "iOS is faster, Android is slower",
        "They are exactly the same",
      ],
      correct: 0,
      explanation: "iOS is Apple's mobile OS — exclusive to iPhones and iPads. Android is Google's OS, used by Samsung, OnePlus, Xiaomi, and many more.",
    },
    {
      for: "11-14",
      question: "What is an ISP (Image Signal Processor) in a phone?",
      choices: [
        "A chip that processes raw camera sensor data into a final photo",
        "The internet connection chip",
        "The screen display driver",
      ],
      correct: 0,
      explanation: "The ISP converts raw sensor data into a processed image — applying noise reduction, HDR, colour correction. Modern ISPs power computational photography features like Night Mode.",
    },
    {
      for: "11-14",
      question: "What does an accelerometer measure?",
      choices: [
        "The direction and speed of device movement/tilt",
        "Screen brightness",
        "Battery temperature",
      ],
      correct: 0,
      explanation: "The accelerometer detects linear acceleration and tilt — it's why your screen rotates when you turn the phone, and how step-counters work.",
    },
  ],
};

export default lesson;
