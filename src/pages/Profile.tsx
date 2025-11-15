import { User, Mail, School, Calendar, Award, CheckCircle, BookOpen, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const userStats = {
    name: "Arjun Sharma",
    email: "arjun.sharma@school.edu",
    school: "Delhi Public School, Sector 45",
    class: "Class 10-A",
    joinDate: "January 2024",
    ecoPoints: 2847,
    badges: 8,
    tasksCompleted: 23,
    quizzesCompleted: 15,
    lessonsCompleted: 12,
    rank: "#42",
    level: "Eco Champion",
  };

  const recentAchievements = [
    { icon: "🌳", title: "Tree Hugger", date: "2 days ago" },
    { icon: "🎓", title: "Quiz Master", date: "1 week ago" },
    { icon: "🎯", title: "First Steps", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">My Profile</h1>
          <p className="text-lg text-muted-foreground">
            Track your environmental journey and achievements
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="bg-gradient-nature">
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-2xl text-primary-foreground">
                      {userStats.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4 text-center">{userStats.name}</CardTitle>
                  <Badge className="mt-2" variant="secondary">{userStats.level}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{userStats.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <School className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{userStats.school}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{userStats.class}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Joined {userStats.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-primary" />
                    Eco Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary">{userStats.ecoPoints}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Total earned</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-success" />
                    Badges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-success">{userStats.badges}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Achievements unlocked</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Tasks Completed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-accent">{userStats.tasksCompleted}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Real-world actions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-warning" />
                    Quizzes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-warning">{userStats.quizzesCompleted}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Completed successfully</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your journey across different modules</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Climate Change Basics</span>
                    <span className="text-sm text-muted-foreground">5/8 lessons</span>
                  </div>
                  <Progress value={62.5} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Renewable Energy</span>
                    <span className="text-sm text-muted-foreground">3/6 lessons</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Biodiversity & Conservation</span>
                    <span className="text-sm text-muted-foreground">4/10 lessons</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>School Ranking</CardTitle>
                <CardDescription>Your position in the leaderboard</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-lg bg-gradient-achievement p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Rank</p>
                    <p className="text-4xl font-bold">{userStats.rank}</p>
                    <p className="mt-1 text-sm">out of 500 students</p>
                  </div>
                  <div className="text-6xl">🏆</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
