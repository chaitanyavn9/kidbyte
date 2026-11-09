export type AgeGroup = "5-7" | "8-10" | "11-14" | "15-18";

export interface KidByteSession {
  name: string;
  age: number;
  avatar: string;
  ageGroup: AgeGroup;
  visitedLessons: string[];
  quizScores: Record<string, number>;
  startedAt: number;
}

export interface QuizQuestion {
  for: AgeGroup;
  question: string;
  choices: string[];
  correct: number;
  explanation?: string;
}

export interface KeyFact {
  emoji: string;
  label: string;
  value: string;
  detail?: string;
}

/* One step in a guided narrative — text + optional inline diagram */
export interface NarrativeStep {
  /* Label shown as a chapter heading in the story */
  heading: string;
  /* The body text for this step (supports **bold** markdown) */
  text: string;
  /* Registered diagram id — rendered inline below the text */
  diagramId?: string;
}

export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  category: string;
  story: Partial<Record<AgeGroup, string>>;
  analogy: Partial<Record<AgeGroup, string>>;
  /* Structured narrative — overrides plain `story` text when present */
  narrative?: Partial<Record<AgeGroup, NarrativeStep[]>>;
  funFact?: string;
  photo?: string;       // real component image URL
  photoAlt?: string;
  keyFacts?: KeyFact[]; // shown in Explore tab
  dos?: string[];
  donts?: string[];
  quiz: QuizQuestion[];
}

export interface Avatar {
  id: string;
  label: string;
  emoji: string;
  color: string;
}
