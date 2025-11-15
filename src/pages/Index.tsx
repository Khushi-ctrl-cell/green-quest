import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { QuizPreview } from "@/components/QuizPreview";
import { TasksSection } from "@/components/TasksSection";
import { Leaderboard } from "@/components/Leaderboard";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Dashboard />
      <QuizPreview />
      <TasksSection />
      <Leaderboard />
    </main>
  );
};

export default Index;
