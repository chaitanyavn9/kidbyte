"use client";
import { useState, useEffect, useCallback } from "react";
import { KidByteSession, AgeGroup } from "@/lib/types";
import { SESSION_KEY, getAgeGroup } from "@/lib/constants";

export function useSession() {
  const [session, setSession] = useState<KidByteSession | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  const saveSession = useCallback((data: KidByteSession) => {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
    setSession(data);
  }, []);

  const createSession = useCallback(
    (name: string, age: number, avatar: string) => {
      const s: KidByteSession = {
        name,
        age,
        avatar,
        ageGroup: getAgeGroup(age),
        visitedLessons: [],
        quizScores: {},
        startedAt: Date.now(),
      };
      saveSession(s);
      return s;
    },
    [saveSession]
  );

  const markLessonVisited = useCallback(
    (lessonId: string) => {
      if (!session) return;
      if (session.visitedLessons.includes(lessonId)) return;
      const updated = {
        ...session,
        visitedLessons: [...session.visitedLessons, lessonId],
      };
      saveSession(updated);
    },
    [session, saveSession]
  );

  const saveQuizScore = useCallback(
    (lessonId: string, score: number) => {
      if (!session) return;
      const updated = {
        ...session,
        quizScores: { ...session.quizScores, [lessonId]: score },
      };
      saveSession(updated);
    },
    [session, saveSession]
  );

  const clearSession = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setSession(null);
  }, []);

  return {
    session,
    loaded,
    createSession,
    markLessonVisited,
    saveQuizScore,
    clearSession,
  };
}
