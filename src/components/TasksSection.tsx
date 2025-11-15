import { TaskCard } from "./TaskCard";

export const TasksSection = () => {
  const tasks = [
    {
      title: "Plant a Sapling",
      description: "Plant a tree sapling in your school garden and upload a photo",
      points: 50,
      difficulty: "Easy" as const,
      deadline: "Mar 25, 2025",
      location: "School Garden",
    },
    {
      title: "Organize Waste Segregation",
      description: "Set up a waste segregation system in your classroom with clear labels",
      points: 100,
      difficulty: "Medium" as const,
      deadline: "Mar 30, 2025",
      location: "Your Classroom",
    },
    {
      title: "Community Clean-up Drive",
      description: "Lead a local park clean-up with at least 5 volunteers",
      points: 200,
      difficulty: "Hard" as const,
      deadline: "Apr 5, 2025",
      location: "Local Park",
    },
    {
      title: "Create Eco-Posters",
      description: "Design and display posters about water conservation",
      points: 75,
      difficulty: "Easy" as const,
      deadline: "Mar 28, 2025",
      completed: true,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Real-World Eco Tasks</h2>
          <p className="text-lg text-muted-foreground">
            Complete hands-on environmental activities and earn points
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
};
