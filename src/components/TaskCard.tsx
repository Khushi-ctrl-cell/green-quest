import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, MapPin } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  points: number;
  difficulty: "Easy" | "Medium" | "Hard";
  deadline: string;
  location?: string;
  completed?: boolean;
}

export const TaskCard = ({
  title,
  description,
  points,
  difficulty,
  deadline,
  location,
  completed = false,
}: TaskCardProps) => {
  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-secondary text-secondary-foreground",
    Hard: "bg-destructive text-destructive-foreground",
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50 relative overflow-hidden">
      {completed && (
        <div className="absolute top-4 right-4">
          <CheckCircle2 className="w-6 h-6 text-success" />
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-card-foreground pr-8">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className={difficultyColors[difficulty]}>{difficulty}</Badge>
          <Badge variant="outline" className="gap-1">
            <Leaf className="w-3 h-3" />
            {points} points
          </Badge>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Due: {deadline}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>

        <Button 
          className="w-full" 
          variant={completed ? "outline" : "default"}
          disabled={completed}
        >
          {completed ? "Completed" : "Start Task"}
        </Button>
      </div>
    </Card>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </svg>
);
