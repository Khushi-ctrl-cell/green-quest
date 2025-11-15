import { BookOpen, Lock, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const lessonCategories = [
  {
    id: 1,
    title: "Climate Change Basics",
    description: "Understand the fundamentals of climate change and global warming",
    lessons: 8,
    completed: 5,
    points: 320,
    icon: "🌍",
    locked: false,
  },
  {
    id: 2,
    title: "Renewable Energy",
    description: "Learn about solar, wind, and other clean energy sources",
    lessons: 6,
    completed: 3,
    points: 240,
    icon: "⚡",
    locked: false,
  },
  {
    id: 3,
    title: "Biodiversity & Conservation",
    description: "Explore ecosystems and wildlife protection",
    lessons: 10,
    completed: 0,
    points: 400,
    icon: "🦋",
    locked: false,
  },
  {
    id: 4,
    title: "Waste Management",
    description: "Master the 3Rs: Reduce, Reuse, Recycle",
    lessons: 7,
    completed: 0,
    points: 280,
    icon: "♻️",
    locked: true,
  },
  {
    id: 5,
    title: "Sustainable Living",
    description: "Build eco-friendly habits for daily life",
    lessons: 9,
    completed: 0,
    points: 360,
    icon: "🌿",
    locked: true,
  },
  {
    id: 6,
    title: "Water Conservation",
    description: "Protect our most precious resource",
    lessons: 5,
    completed: 0,
    points: 200,
    icon: "💧",
    locked: true,
  },
  {
    id: 7,
    title: "Carbon Footprint Reduction",
    description: "Calculate and minimize your environmental impact",
    lessons: 6,
    completed: 0,
    points: 240,
    icon: "👣",
    locked: true,
  },
];

export default function Lessons() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Learning Modules</h1>
          <p className="text-lg text-muted-foreground">
            Master environmental concepts through interactive lessons
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-gradient-nature p-6 text-foreground shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Your Learning Journey</h3>
              <p className="text-sm text-muted-foreground">8 of 51 lessons completed</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">760</p>
              <p className="text-sm">Eco Points Earned</p>
            </div>
          </div>
          <Progress value={16} className="mt-4 h-2" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessonCategories.map((category) => {
            const progress = (category.completed / category.lessons) * 100;
            
            return (
              <Card
                key={category.id}
                className={`group relative overflow-hidden transition-all hover:shadow-hover ${
                  category.locked ? "opacity-60" : "cursor-pointer"
                }`}
              >
                {category.locked && (
                  <div className="absolute right-4 top-4 z-10">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="mb-2 text-4xl">{category.icon}</div>
                  <CardTitle className="flex items-center gap-2">
                    {category.title}
                    {category.completed === category.lessons && !category.locked && (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    )}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>{category.lessons} Lessons</span>
                      </div>
                      <Badge variant="secondary">+{category.points} pts</Badge>
                    </div>
                    
                    {!category.locked && (
                      <>
                        <Progress value={progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          {category.completed}/{category.lessons} completed
                        </p>
                      </>
                    )}
                    
                    {category.locked && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Complete previous modules to unlock</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
