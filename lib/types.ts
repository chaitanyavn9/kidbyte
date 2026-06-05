export type AgeGroup = "5-7" | "8-10" | "11-14";

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

export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  category: string;
  story: Record<AgeGroup, string>;
  analogy: Record<AgeGroup, string>;
  funFact?: string;
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
