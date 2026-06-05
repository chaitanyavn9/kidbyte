import { notFound } from "next/navigation";
import lessons from "@/content/lessons";
import LessonPage from "@/components/Lesson/LessonPage";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(lessons).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lesson = lessons[slug];
  if (!lesson) return {};
  return {
    title: `${lesson.title} — KidByte`,
    description: lesson.story["8-10"],
  };
}

export default async function LessonRoute({ params }: Props) {
  const { slug } = await params;
  const lesson = lessons[slug];
  if (!lesson) notFound();
  return <LessonPage lesson={lesson} />;
}
