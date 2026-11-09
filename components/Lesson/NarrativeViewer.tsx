"use client";
import { motion } from "framer-motion";
import { Lesson, AgeGroup, NarrativeStep } from "@/lib/types";
import { DIAGRAM_REGISTRY } from "@/components/diagrams/registry";

const STEP_TYPE_STYLES: Record<string, { icon: string; label: string; labelColor: string; borderColor: string; bg: string }> = {
  hook:       { icon: "🌟", label: "Let's Start",       labelColor: "#F59E0B", borderColor: "#F59E0B40", bg: "#FFFBEB" },
  why:        { icon: "💡", label: "Why We Need This",  labelColor: "#7C3AED", borderColor: "#7C3AED40", bg: "#F5F3FF" },
  what:       { icon: "📖", label: "What It Is",        labelColor: "#0891B2", borderColor: "#0891B240", bg: "#ECFEFF" },
  how:        { icon: "⚙️", label: "How It Works",      labelColor: "#059669", borderColor: "#05966940", bg: "#F0FDF4" },
  "daily-life": { icon: "🌍", label: "In Daily Life",   labelColor: "#DC2626", borderColor: "#DC262640", bg: "#FFF1F2" },
  default:    { icon: "📌", label: "Explanation",        labelColor: "#64748B", borderColor: "#64748B40", bg: "#F8FAFC" },
};

/* Detect step type from heading keywords */
function detectType(heading: string): keyof typeof STEP_TYPE_STYLES {
  const h = heading.toLowerCase();
  if (h.includes("imagine") || h.includes("before we") || h.includes("start") || h.includes("picture")) return "hook";
  if (h.includes("why") || h.includes("problem") || h.includes("need")) return "why";
  if (h.includes("what is") || h.includes("what are") || h.includes("definition")) return "what";
  if (h.includes("how") || h.includes("works") || h.includes("inside") || h.includes("flow") || h.includes("step")) return "how";
  if (h.includes("daily") || h.includes("everyday") || h.includes("life") || h.includes("real world") || h.includes("example")) return "daily-life";
  return "default";
}

/* Inline bold/italic renderer */
function renderInlineText(text: string, accentColor: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i} className="font-black" style={{ color: accentColor }}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

function renderText(text: string, accentColor: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const paragraphs = text.split(/\n{2,}/);
  paragraphs.forEach((para, pi) => {
    const trimmed = para.trim();
    if (!trimmed) return;
    nodes.push(
      <p key={`p-${pi}`} className="text-[17px] leading-[1.9] text-gray-800 mb-4 last:mb-0">
        {renderInlineText(trimmed, accentColor)}
      </p>
    );
  });
  return nodes;
}

interface Props {
  lesson: Lesson;
  ageGroup: AgeGroup;
  accent: string;
  onContinue: () => void;
}

export default function NarrativeViewer({ lesson, ageGroup, accent, onContinue }: Props) {
  const narrative: NarrativeStep[] =
    lesson.narrative?.[ageGroup] ??
    lesson.narrative?.["11-14"] ??
    lesson.narrative?.["8-10"] ??
    [];

  if (narrative.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">

      {/* Lesson header */}
      <div className="flex items-center gap-4 px-1">
        <motion.div
          className="text-5xl"
          animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        >
          {lesson.emoji}
        </motion.div>
        <div>
          <h2 className="text-2xl font-black text-gray-900">{lesson.title}</h2>
          <p className="text-sm text-gray-500 mt-0.5">📖 Read each step — diagrams are built right in</p>
        </div>
      </div>

      {/* Narrative steps */}
      {narrative.map((step, idx) => {
        const type = detectType(step.heading);
        const style = STEP_TYPE_STYLES[type] ?? STEP_TYPE_STYLES.default;
        const DiagramComp = step.diagramId ? DIAGRAM_REGISTRY[step.diagramId] : null;

        return (
          <motion.section
            key={idx}
            id={step.diagramId ? `narrative-section-${step.diagramId}` : undefined}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: `1.5px solid ${style.borderColor}` }}
          >
            {/* Step heading */}
            <div
              className="px-6 py-3 flex items-center gap-3"
              style={{ background: style.bg, borderBottom: `1.5px solid ${style.borderColor}` }}
            >
              <span className="text-xl">{style.icon}</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest" style={{ color: style.labelColor }}>{style.label}</p>
                <h3 className="text-lg font-black text-gray-900 leading-tight">{step.heading}</h3>
              </div>
              <div className="ml-auto shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: style.labelColor }}>
                {idx + 1}
              </div>
            </div>

            {/* Step body */}
            <div className="bg-white/80 backdrop-blur-sm px-6 py-5">
              {renderText(step.text, accent)}

              {/* Inline diagram */}
              {DiagramComp && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-5"
                >
                  <DiagramComp accent={accent} />
                </motion.div>
              )}
            </div>
          </motion.section>
        );
      })}

      {/* Analogy callout */}
      {(lesson.analogy[ageGroup] ?? lesson.analogy["11-14"] ?? lesson.analogy["8-10"]) && (
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl px-6 py-5 flex gap-4 items-start"
          style={{ background: `${accent}10`, border: `2px solid ${accent}30` }}
        >
          <span className="text-3xl mt-0.5 shrink-0">💡</span>
          <div>
            <p className="text-sm font-black mb-1" style={{ color: accent }}>The One-Line Summary</p>
            <p className="text-[17px] font-semibold text-gray-700 leading-relaxed italic">
              "{lesson.analogy[ageGroup] ?? lesson.analogy["11-14"] ?? lesson.analogy["8-10"]}"
            </p>
          </div>
        </motion.div>
      )}

      {/* Fun fact */}
      {lesson.funFact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl px-6 py-5 flex gap-4 items-start bg-amber-50 border border-amber-200"
        >
          <span className="text-3xl shrink-0">🤩</span>
          <div>
            <p className="text-sm font-black text-amber-700 mb-1">Fun Fact</p>
            <p className="text-[16px] text-gray-700 leading-relaxed">{lesson.funFact}</p>
          </div>
        </motion.div>
      )}

      {/* Continue */}
      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-lg text-white shadow-lg"
        style={{ background: `linear-gradient(90deg, ${accent}, #7B61FF)` }}
      >
        Explore it in Action 🔬 →
      </motion.button>

    </div>
  );
}
