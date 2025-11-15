import { Trophy, Lock, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first lesson",
    icon: "🎯",
    unlocked: true,
    progress: 100,
    points: 50,
    category: "Learning",
  },
  {
    id: 2,
    title: "Tree Hugger",
    description: "Plant 5 trees",
    icon: "🌳",
    unlocked: true,
    progress: 100,
    points: 200,
    category: "Action",
  },
  {
    id: 3,
    title: "Quiz Master",
    description: "Score 100% on 3 quizzes",
    icon: "🎓",
    unlocked: true,
    progress: 100,
    points: 150,
    category: "Learning",
  },
  {
    id: 4,
    title: "Eco Warrior",
    description: "Complete 10 eco-tasks",
    icon: "⚔️",
    unlocked: false,
    progress: 70,
    points: 300,
    category: "Action",
  },
  {
    id: 5,
    title: "Knowledge Seeker",
    description: "Complete 15 lessons",
    icon: "📚",
    unlocked: false,
    progress: 53,
    points: 250,
    category: "Learning",
  },
  {
    id: 6,
    title: "Community Leader",
    description: "Help 20 students in forums",
    icon: "👥",
    unlocked: false,
    progress: 30,
    points: 400,
    category: "Community",
  },
  {
    id: 7,
    title: "Recycling Champion",
    description: "Properly recycle 50 items",
    icon: "♻️",
    unlocked: false,
    progress: 0,
    points: 350,
    category: "Action",
  },
  {
    id: 8,
    title: "Solar Scholar",
    description: "Master renewable energy module",
    icon: "☀️",
    unlocked: false,
    progress: 0,
    points: 200,
    category: "Learning",
  },
  {
    id: 9,
    title: "Water Guardian",
    description: "Save 1000 liters of water",
    icon: "💧",
    unlocked: false,
    progress: 0,
    points: 500,
    category: "Action",
  },
];

export default function Achievements() {
  const totalUnlocked = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Achievements & Badges</h1>
          <p className="text-lg text-muted-foreground">
            Track your environmental impact milestones
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="bg-gradient-achievement">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5" />
                Badges Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{totalUnlocked}/{achievements.length}</p>
              <Progress value={(totalUnlocked / achievements.length) * 100} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-nature">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Star className="h-5 w-5" />
                Total Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{totalPoints}</p>
              <p className="mt-2 text-sm text-muted-foreground">From achievements</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5" />
                Next Milestone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Eco Warrior</p>
              <Progress value={70} className="mt-2 h-2" />
              <p className="mt-1 text-sm text-muted-foreground">70% complete</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {['Learning', 'Action', 'Community'].map(category => {
            const categoryAchievements = achievements.filter(a => a.category === category);
            
            return (
              <div key={category}>
                <h2 className="mb-4 text-2xl font-bold">{category} Achievements</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryAchievements.map(achievement => (
                    <Card
                      key={achievement.id}
                      className={`relative overflow-hidden transition-all hover:shadow-hover ${
                        !achievement.unlocked ? "opacity-75" : ""
                      }`}
                    >
                      {!achievement.unlocked && (
                        <div className="absolute right-4 top-4">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className={`mb-2 text-5xl ${achievement.unlocked ? "animate-float" : ""}`}>
                          {achievement.icon}
                        </div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge variant={achievement.unlocked ? "default" : "secondary"}>
                              +{achievement.points} pts
                            </Badge>
                            {achievement.unlocked && (
                              <span className="text-sm font-medium text-success">Unlocked!</span>
                            )}
                          </div>
                          
                          {!achievement.unlocked && achievement.progress > 0 && (
                            <>
                              <Progress value={achievement.progress} className="h-2" />
                              <p className="text-sm text-muted-foreground">
                                {achievement.progress}% complete
                              </p>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
