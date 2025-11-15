import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Star } from "lucide-react";

export const QuizPreview = () => {
  const quizzes = [
    {
      title: "Climate Change Basics",
      questions: 10,
      duration: "15 min",
      difficulty: "Beginner",
      points: 100,
      completed: false,
    },
    {
      title: "Renewable Energy Sources",
      questions: 15,
      duration: "20 min",
      difficulty: "Intermediate",
      points: 150,
      completed: true,
      score: 92,
    },
    {
      title: "Biodiversity & Conservation",
      questions: 20,
      duration: "30 min",
      difficulty: "Advanced",
      points: 200,
      completed: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Interactive Quizzes</h2>
          <p className="text-lg text-muted-foreground">
            Test your knowledge and earn points
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-gradient-nature">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  {quiz.completed && (
                    <Badge className="bg-success text-success-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      {quiz.score}%
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{quiz.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{quiz.questions} questions</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {quiz.duration}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge variant="outline">{quiz.difficulty}</Badge>
                  <Badge variant="secondary">{quiz.points} points</Badge>
                </div>

                <Button 
                  className="w-full" 
                  variant={quiz.completed ? "outline" : "default"}
                >
                  {quiz.completed ? "Review Answers" : "Start Quiz"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
