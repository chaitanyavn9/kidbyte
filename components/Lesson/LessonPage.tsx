"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSession } from "@/hooks/useSession";
import { Lesson, AgeGroup } from "@/lib/types";
import QuizComponent from "@/components/Quiz/QuizComponent";
import StoryViewer from "@/components/Lesson/StoryViewer";
import FolderAnimation from "@/components/animations/FolderAnimation";
import CpuAnimation from "@/components/animations/CpuAnimation";
import RamAnimation from "@/components/animations/RamAnimation";
import BinaryAnimation from "@/components/animations/BinaryAnimation";
import PixelAnimation from "@/components/animations/PixelAnimation";
import DeviceAnimation from "@/components/animations/DeviceAnimation";
import AnalogyAnimation from "@/components/animations/AnalogyAnimation";
import PCComponentAnimation from "@/components/animations/PCComponentAnimation";
import ArchitectureDiagram from "@/components/animations/ArchitectureDiagram";
import PlacementGuide from "@/components/animations/PlacementGuide";
import SlotGame from "@/components/Explore/SlotGame";

/* ── Page-level background gradients per lesson ── */
const PAGE_BG: Record<string, string> = {
  folder:             "from-yellow-50 via-amber-50 to-orange-50",
  cpu:                "from-blue-50 via-indigo-50 to-blue-50",
  ram:                "from-purple-50 via-violet-50 to-purple-50",
  binary:             "from-emerald-50 via-green-50 to-teal-50",
  pixels:             "from-pink-50 via-rose-50 to-fuchsia-50",
  computer:           "from-blue-50 via-sky-50 to-indigo-50",
  laptop:             "from-violet-50 via-purple-50 to-indigo-50",
  tablet:             "from-orange-50 via-amber-50 to-yellow-50",
  phone:              "from-rose-50 via-pink-50 to-red-50",
  gpu:                "from-green-50 via-emerald-50 to-teal-50",
  rom:                "from-amber-50 via-yellow-50 to-lime-50",
  ssd:                "from-cyan-50 via-sky-50 to-blue-50",
  "cooling-fan":      "from-sky-50 via-blue-50 to-cyan-50",
  motherboard:        "from-purple-50 via-fuchsia-50 to-violet-50",
  battery:            "from-green-50 via-lime-50 to-emerald-50",
  files:              "from-yellow-50 via-amber-50 to-orange-50",
  os:                 "from-red-50 via-rose-50 to-pink-50",
  software:           "from-cyan-50 via-teal-50 to-sky-50",
  "drag-drop":        "from-orange-50 via-amber-50 to-yellow-50",
  "bits-bytes":       "from-lime-50 via-green-50 to-emerald-50",
  hexadecimal:        "from-fuchsia-50 via-purple-50 to-violet-50",
  "machine-language": "from-emerald-50 via-teal-50 to-green-50",
  rgb:                "from-red-50 via-pink-50 to-purple-50",
  "hex-colors":       "from-pink-50 via-rose-50 to-fuchsia-50",
  resolution:         "from-blue-50 via-indigo-50 to-violet-50",
  "hard-disk":        "from-slate-50 via-gray-50 to-zinc-50",
  "ssd-deep":         "from-teal-50 via-emerald-50 to-green-50",
  "memory-allocation":"from-amber-50 via-yellow-50 to-orange-50",
  "what-is-code":     "from-indigo-50 via-blue-50 to-violet-50",
  "python-intro":     "from-yellow-50 via-blue-50 to-indigo-50",
  "scratch-intro":    "from-rose-50 via-orange-50 to-amber-50",
  "pc-hardware":      "from-purple-50 via-violet-50 to-indigo-50",
  "internet-www":     "from-blue-50 via-sky-50 to-indigo-50",
  "cyber-hygiene":    "from-emerald-50 via-green-50 to-teal-50",
  "word-processing":  "from-amber-50 via-yellow-50 to-orange-50",
  "spreadsheets":     "from-green-50 via-emerald-50 to-teal-50",
  "presentations":    "from-pink-50 via-rose-50 to-fuchsia-50",
  "linux-os":         "from-gray-50 via-slate-50 to-zinc-50",
  "dual-boot":        "from-indigo-50 via-violet-50 to-purple-50",
};

const ACCENT: Record<string, string> = {
  folder:"#F59E0B", cpu:"#3B82F6", ram:"#7C3AED", binary:"#059669", pixels:"#EC4899",
  computer:"#1D7CFF", laptop:"#7B61FF", tablet:"#FF8A00", phone:"#FF4081",
  gpu:"#16A34A", rom:"#D97706", ssd:"#0891B2", "cooling-fan":"#0284C7",
  motherboard:"#9333EA", battery:"#15803D", files:"#CA8A04", os:"#E11D48",
  software:"#06B6D4", "drag-drop":"#EA580C", "bits-bytes":"#65A30D",
  hexadecimal:"#A21CAF", "machine-language":"#047857", rgb:"#DC2626",
  "hex-colors":"#BE185D", resolution:"#1E40AF", "hard-disk":"#475569",
  "ssd-deep":"#0F766E", "memory-allocation":"#B45309", "what-is-code":"#4F46E5",
  "python-intro":"#2563EB", "scratch-intro":"#FF6B35",
  "pc-hardware":"#7C3AED", "internet-www":"#1D4ED8", "cyber-hygiene":"#047857",
  "word-processing":"#B45309", "spreadsheets":"#15803D", "presentations":"#BE185D",
  "linux-os":"#374151", "dual-boot":"#4338CA",
};

/* Sidebar sections per lesson */
interface Section { id: string; label: string; emoji: string; tab: "story" | "explore" | "quiz" }
const SECTIONS: Record<string, Section[]> = {
  cpu: [
    { id: "what",    label: "What is a CPU?",        emoji: "🧠", tab: "story" },
    { id: "how",     label: "How it works",           emoji: "⚙️", tab: "explore" },
    { id: "layers",  label: "Inside the CPU",         emoji: "🔬", tab: "explore" },
    { id: "quiz",    label: "Test your knowledge",    emoji: "🧩", tab: "quiz" },
  ],
  ram: [
    { id: "what",    label: "What is RAM?",           emoji: "💾", tab: "story" },
    { id: "how",     label: "How RAM works",          emoji: "⚡", tab: "explore" },
    { id: "layers",  label: "Inside the stick",       emoji: "🔬", tab: "explore" },
    { id: "quiz",    label: "Test your knowledge",    emoji: "🧩", tab: "quiz" },
  ],
  motherboard: [
    { id: "what",    label: "What is a Motherboard?", emoji: "🟩", tab: "story" },
    { id: "how",     label: "How it connects",        emoji: "🔌", tab: "explore" },
    { id: "layers",  label: "PCB layers",             emoji: "🔬", tab: "explore" },
    { id: "quiz",    label: "Test your knowledge",    emoji: "🧩", tab: "quiz" },
  ],
  gpu: [
    { id: "what",    label: "What is a GPU?",         emoji: "🎮", tab: "story" },
    { id: "how",     label: "How rendering works",    emoji: "🖼️", tab: "explore" },
    { id: "layers",  label: "GPU anatomy",            emoji: "🔬", tab: "explore" },
    { id: "quiz",    label: "Test your knowledge",    emoji: "🧩", tab: "quiz" },
  ],
  ssd: [
    { id: "what",    label: "What is an SSD?",        emoji: "⚡", tab: "story" },
    { id: "how",     label: "How flash works",        emoji: "💡", tab: "explore" },
    { id: "layers",  label: "SSD internals",          emoji: "🔬", tab: "explore" },
    { id: "quiz",    label: "Test your knowledge",    emoji: "🧩", tab: "quiz" },
  ],
};

function getDefaultSections(lesson: Lesson): Section[] {
  return SECTIONS[lesson.id] ?? [
    { id: "what",  label: lesson.title,          emoji: lesson.emoji, tab: "story"   },
    { id: "how",   label: "See it in action",    emoji: "🔬",         tab: "explore" },
    { id: "quiz",  label: "Test your knowledge", emoji: "🧩",         tab: "quiz"    },
  ];
}

const PC_PARTS_LESSONS = new Set([
  "cpu", "motherboard", "ram", "gpu", "ssd", "hard-disk", "ssd-deep",
  "cooling-fan", "battery", "rom", "pc-hardware",
]);

/* Lessons that show the architecture block diagram */
const ARCH_LESSONS = new Set(["cpu", "gpu"]);

/* Lessons that show the placement guide (hardware with physical slots) */
const PLACEMENT_LESSONS = new Set(["cpu", "motherboard", "ram", "gpu", "ssd", "pc-hardware"]);

const ANIMATION_MAP: Record<string, React.ComponentType> = {
  folder: FolderAnimation, cpu: CpuAnimation, ram: RamAnimation,
  binary: BinaryAnimation, pixels: PixelAnimation,
  computer: () => <DeviceAnimation lessonId="computer" />,
  laptop:   () => <DeviceAnimation lessonId="laptop" />,
  tablet:   () => <DeviceAnimation lessonId="tablet" />,
  phone:    () => <DeviceAnimation lessonId="phone" />,
};

type Tab = "story" | "explore" | "quiz";

interface Props { lesson: Lesson; }

export default function LessonPage({ lesson }: Props) {
  const { session, markLessonVisited } = useSession();
  const [tab, setTab] = useState<Tab>("story");
  const [activeSection, setActiveSection] = useState("what");

  const ageGroup: AgeGroup = session?.ageGroup ?? "8-10";
  const isEngineeringMode = ageGroup === "15-18";
  const showPCAnimation = isEngineeringMode && PC_PARTS_LESSONS.has(lesson.id);
  const showArchDiagram = isEngineeringMode && ARCH_LESSONS.has(lesson.id);
  const showPlacement   = isEngineeringMode && PLACEMENT_LESSONS.has(lesson.id);
  const AnimComp = ANIMATION_MAP[lesson.id];
  const pageBg = PAGE_BG[lesson.id] ?? "from-blue-50 via-indigo-50 to-purple-50";
  const accent = ACCENT[lesson.id] ?? "#1D7CFF";
  const sections = getDefaultSections(lesson);

  useEffect(() => { markLessonVisited(lesson.id); }, [lesson.id, markLessonVisited]);

  function handleSection(s: Section) {
    setActiveSection(s.id);
    setTab(s.tab);
  }

  const avatarEmoji = session?.avatar === "robot" ? "🤖"
    : session?.avatar === "astronaut" ? "👨‍🚀"
    : session?.avatar === "scientist" ? "🧑‍🔬"
    : session?.avatar === "artist" ? "🧑‍🎨"
    : session?.avatar === "ninja" ? "🥷"
    : "🦸";

  return (
    <div className={`min-h-screen bg-gradient-to-br ${pageBg}`}>

      {/* ── Top hero banner ── */}
      <div
        className="w-full py-6 px-6"
        style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}08)`, borderBottom: `1px solid ${accent}20` }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <motion.div
              className="text-5xl drop-shadow-md"
              animate={{ y: [0, -6, 0], rotate: [0, -4, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            >
              {lesson.emoji}
            </motion.div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-black" style={{ color: "#082A63" }}>{lesson.title}</h1>
              {session && (
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold text-white"
                    style={{ background: accent }}
                  >
                    {avatarEmoji} {session.name} · Age {session.age} · {ageGroup}
                  </span>
                  {isEngineeringMode && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-black text-white bg-purple-600">
                      🎓 Engineering Mode
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <Link href="/explore">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-4 py-2 rounded-xl font-black text-sm"
              style={{ background: `${accent}18`, color: accent, border: `1.5px solid ${accent}40` }}
            >
              ← All Lessons
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ── 3-column main layout ── */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex gap-5 items-start">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="hidden lg:flex flex-col gap-1 w-56 shrink-0 sticky top-24">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 px-3 mb-2">
            Sections
          </p>
          {sections.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <motion.button
                key={s.id}
                whileHover={{ x: 3 }}
                onClick={() => handleSection(s)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all"
                style={{
                  background: isActive ? `${accent}18` : "transparent",
                  borderLeft: `3px solid ${isActive ? accent : "transparent"}`,
                }}
              >
                <span className="text-lg">{s.emoji}</span>
                <span
                  className="text-sm font-bold leading-tight"
                  style={{ color: isActive ? accent : "#64748B" }}
                >
                  {s.label}
                </span>
              </motion.button>
            );
          })}

          {/* Fun fact box */}
          {lesson.funFact && (
            <div
              className="mt-4 rounded-2xl p-4"
              style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}
            >
              <p className="text-xs font-black mb-1" style={{ color: accent }}>💡 Fun Fact</p>
              <p className="text-xs text-gray-600 leading-relaxed">{lesson.funFact}</p>
            </div>
          )}
        </aside>

        {/* ── CENTER CONTENT ── */}
        <div className="flex-1 min-w-0 flex flex-col gap-5">

          {/* Tab bar */}
          <div
            className="flex rounded-2xl p-1.5 gap-1 shadow-sm"
            style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)" }}
          >
            {(["story", "explore", "quiz"] as Tab[]).map((t) => (
              <motion.button
                key={t}
                onClick={() => setTab(t)}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-sm capitalize"
                style={{
                  background: tab === t ? accent : "transparent",
                  color: tab === t ? "white" : "#94A3B8",
                  boxShadow: tab === t ? `0 4px 12px ${accent}40` : "none",
                }}
              >
                {t === "story" ? "📖" : t === "explore" ? "🔬" : "🧩"} {t.charAt(0).toUpperCase() + t.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Mobile: show analogy animation inline above content */}
          <div className="lg:hidden">
            <RightPanel
              lesson={lesson}
              ageGroup={ageGroup}
              accent={accent}
              isEngineeringMode={isEngineeringMode}
              showPCAnimation={showPCAnimation}
              showArchDiagram={showArchDiagram}
              showPlacement={showPlacement}
              AnimComp={AnimComp}
            />
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">

            {tab === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-white/80 overflow-hidden"
              >
                <StoryViewer
                  lesson={lesson}
                  ageGroup={ageGroup}
                  onContinue={() => { setTab("explore"); setActiveSection("how"); }}
                />
              </motion.div>
            )}

            {tab === "explore" && (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5"
              >
                {/* Real photo + caption */}
                {lesson.photo && (
                  <div className="rounded-2xl overflow-hidden shadow-lg relative">
                    <img
                      src={lesson.photo}
                      alt={lesson.photoAlt ?? lesson.title}
                      className="w-full h-52 object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 px-4 py-2 text-xs text-white/80 font-medium"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                    >
                      📸 {lesson.photoAlt ?? lesson.title}
                    </div>
                  </div>
                )}

                {/* Key facts grid */}
                {lesson.keyFacts && lesson.keyFacts.length > 0 && (
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: accent }}>
                      📊 Key Facts
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {lesson.keyFacts.map((fact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="rounded-xl p-3.5 flex gap-3 items-start"
                          style={{ background: `${accent}10`, border: `1px solid ${accent}25` }}
                        >
                          <span className="text-xl mt-0.5 shrink-0">{fact.emoji}</span>
                          <div>
                            <p className="text-xs font-black text-gray-700">{fact.label}</p>
                            <p className="text-sm font-bold mt-0.5" style={{ color: accent }}>{fact.value}</p>
                            {fact.detail && (
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{fact.detail}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Drag-to-slot PC builder game — PC hardware / motherboard lessons */}
                {PC_PARTS_LESSONS.has(lesson.id) && (
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: accent }}>
                      🎮 Interactive: Build the PC
                    </p>
                    <SlotGame />
                  </div>
                )}

                {/* Do's and Don'ts */}
                {(lesson.dos || lesson.donts) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lesson.dos && (
                      <div className="bg-white/80 backdrop-blur rounded-2xl p-5 border-2 border-green-100">
                        <p className="font-black text-green-700 mb-3 flex items-center gap-2">
                          <span>✅</span> Good Practices
                        </p>
                        <ul className="flex flex-col gap-2">
                          {lesson.dos.map((d, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                              className="text-sm text-green-800 flex gap-2"
                            >
                              <span className="text-green-400 mt-0.5 shrink-0">▸</span> {d}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {lesson.donts && (
                      <div className="bg-white/80 backdrop-blur rounded-2xl p-5 border-2 border-red-100">
                        <p className="font-black text-red-700 mb-3 flex items-center gap-2">
                          <span>❌</span> Watch Out For
                        </p>
                        <ul className="flex flex-col gap-2">
                          {lesson.donts.map((d, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.07 }}
                              className="text-sm text-red-800 flex gap-2"
                            >
                              <span className="text-red-400 mt-0.5 shrink-0">▸</span> {d}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setTab("quiz"); setActiveSection("quiz"); }}
                  className="w-full text-white font-black text-lg py-4 rounded-2xl shadow-lg"
                  style={{ background: `linear-gradient(90deg, ${accent}, #7B61FF)` }}
                >
                  Take the Quiz! 🧩
                </motion.button>
              </motion.div>
            )}

            {tab === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-1 shadow-sm border border-white/80">
                  <QuizComponent lesson={lesson} ageGroup={ageGroup} onDone={() => {}} />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── RIGHT PANEL (desktop only) ── */}
        <aside className="hidden lg:block w-80 xl:w-96 shrink-0 sticky top-24">
          <RightPanel
            lesson={lesson}
            ageGroup={ageGroup}
            accent={accent}
            isEngineeringMode={isEngineeringMode}
            showPCAnimation={showPCAnimation}
            showArchDiagram={showArchDiagram}
            showPlacement={showPlacement}
            AnimComp={AnimComp}
          />
        </aside>

      </div>
    </div>
  );
}

/* ─── Right panel: multi-view with smart toggle ─── */
type PanelView = "analogy" | "architecture" | "placement" | "layers";

function RightPanel({
  lesson,
  ageGroup,
  accent,
  isEngineeringMode,
  showPCAnimation,
  showArchDiagram,
  showPlacement,
  AnimComp,
}: {
  lesson: Lesson;
  ageGroup: AgeGroup;
  accent: string;
  isEngineeringMode: boolean;
  showPCAnimation: boolean;
  showArchDiagram: boolean;
  showPlacement: boolean;
  AnimComp?: React.ComponentType;
}) {
  const [view, setView] = useState<PanelView>("analogy");

  /* Build the list of available views for this lesson */
  const views: { id: PanelView; label: string }[] = [
    { id: "analogy",      label: "🎓 How It Works" },
    ...(showArchDiagram   ? [{ id: "architecture" as PanelView, label: "📐 Architecture" }] : []),
    ...(showPlacement     ? [{ id: "placement"    as PanelView, label: "🏠 Placement" }]    : []),
    ...(showPCAnimation   ? [{ id: "layers"       as PanelView, label: "🔬 Layers" }]       : []),
  ];

  return (
    <div className="flex flex-col gap-4">

      {/* Toggle bar — shown when there are multiple views */}
      {views.length > 1 && (
        <div className="flex rounded-xl p-1 gap-1" style={{ background: "rgba(0,0,0,0.06)" }}>
          {views.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className="flex-1 py-1.5 rounded-lg text-xs font-black transition-all leading-tight text-center"
              style={{
                background: view === v.id ? "#0F172A" : "transparent",
                color: view === v.id ? "white" : "#64748B",
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {/* Panel content */}
      <AnimatePresence mode="wait">

        {view === "analogy" && (
          <motion.div
            key="analogy"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ minHeight: 320 }}
          >
            <AnalogyAnimation lessonId={lesson.id} accent={accent} />
          </motion.div>
        )}

        {view === "architecture" && showArchDiagram && (
          <motion.div
            key="architecture"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <ArchitectureDiagram lessonId={lesson.id} />
          </motion.div>
        )}

        {view === "placement" && showPlacement && (
          <motion.div
            key="placement"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <PlacementGuide lessonId={lesson.id} accent={accent} />
          </motion.div>
        )}

        {view === "layers" && showPCAnimation && (
          <motion.div
            key="layers"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <PCComponentAnimation lessonId={lesson.id} />
          </motion.div>
        )}

        {/* Legacy animations for lessons without analogy scenes and not in engineering mode */}
        {view === "analogy" && !isEngineeringMode && !AnimComp && null}
        {view === "analogy" && AnimComp && lesson.id in { folder:1, cpu:0, ram:0, binary:1, pixels:1, computer:1, laptop:1, tablet:1, phone:1 } && !isEngineeringMode && (
          <motion.div
            key="legacy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/80 rounded-2xl shadow-lg overflow-hidden"
          >
            <AnimComp />
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
