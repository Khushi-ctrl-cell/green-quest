import { TasksSection } from "@/components/TasksSection";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Eco Tasks</h1>
          <p className="text-lg text-muted-foreground">
            Take action in the real world and earn eco-points
          </p>
        </div>
        <TasksSection />
      </div>
    </div>
  );
}
