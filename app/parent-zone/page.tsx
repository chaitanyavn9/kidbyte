import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Zone — KidByte",
};

export default function ParentZonePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👨‍👩‍👧</div>
        <h1 className="text-4xl font-black text-[#082A63]">Parent Zone</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Everything you need to know about KidByte
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {[
          {
            icon: "🔒",
            title: "Privacy First — Always",
            color: "#1D7CFF",
            content: [
              "KidByte stores ZERO data on any server.",
              "The only storage used is sessionStorage in the browser — which is wiped the moment the browser window closes.",
              "No cookies. No analytics. No tracking pixels. No third-party scripts.",
              "We don't even know how many children have used KidByte.",
            ],
          },
          {
            icon: "📚",
            title: "What Your Child Learns",
            color: "#FF8A00",
            content: [
              "How computers, laptops, tablets, and phones work",
              "Hardware: CPU, GPU, RAM, ROM, SSD, Motherboard, Battery",
              "Software concepts: OS, Files, Folders, Applications",
              "Machine language: Binary, Bits, Bytes, Hexadecimal",
              "Graphics: Pixels, RGB color mixing, Resolution",
              "Storage: How files are stored on a hard disk",
              "Basic programming concepts (Python, Scratch)",
              "Digital safety — do's and don'ts",
            ],
          },
          {
            icon: "🎯",
            title: "Age-Adaptive Content",
            color: "#7B61FF",
            content: [
              "Ages 5–7: Simple analogies, big emoji, one-sentence explanations",
              "Ages 8–10: More detail, medium vocabulary, cause-and-effect",
              "Ages 11–14: Technical terms introduced, real-world context",
              "Quiz questions automatically match the selected age group",
            ],
          },
          {
            icon: "🛡️",
            title: "Safe by Design",
            color: "#8BEA00",
            content: [
              "No user accounts — no risk of account breach",
              "No external links outside the platform",
              "No chat, comments, or social features",
              "No advertisements of any kind",
              "Designed for children aged 5–14",
            ],
          },
          {
            icon: "📱",
            title: "How to Use KidByte",
            color: "#FF4081",
            content: [
              "Open KidByte in any browser — works on phones, tablets, and computers",
              "Enter your child's name and age (stored only in this browser session)",
              "Explore lessons together or let your child explore independently",
              "Take quizzes after each lesson",
              "Download the Digital Badge as a PDF souvenir!",
              "Close the browser when done — all data is gone",
            ],
          },
        ].map(({ icon, title, color, content }) => (
          <div
            key={title}
            className="bg-white rounded-3xl p-7 border-2 shadow-sm"
            style={{ borderColor: `${color}25` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{icon}</span>
              <h2 className="text-xl font-black" style={{ color }}>
                {title}
              </h2>
            </div>
            <ul className="flex flex-col gap-2">
              {content.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        <p>
          Questions? Suggestions? Found a bug?{" "}
          <span className="text-blue-500 font-bold">kidbyte@example.com</span>
        </p>
      </div>
    </div>
  );
}
