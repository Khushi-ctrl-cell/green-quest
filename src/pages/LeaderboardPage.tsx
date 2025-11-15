import { Trophy, TrendingUp, Medal, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schoolRankings = [
  { rank: 1, name: "Delhi Public School", points: 45820, change: "+5", students: 450, icon: "🥇" },
  { rank: 2, name: "Ryan International", points: 43567, change: "+2", students: 420, icon: "🥈" },
  { rank: 3, name: "Modern School", points: 41234, change: "-1", students: 380, icon: "🥉" },
  { rank: 4, name: "Amity International", points: 38920, change: "+3", students: 410 },
  { rank: 5, name: "St. Xavier's School", points: 36745, change: "-2", students: 365 },
  { rank: 6, name: "DAV Public School", points: 34892, change: "0", students: 395 },
  { rank: 7, name: "Kendriya Vidyalaya", points: 32456, change: "+1", students: 440 },
  { rank: 8, name: "Bal Bharati School", points: 30234, change: "-1", students: 350 },
];

const studentRankings = [
  { rank: 1, name: "Priya Sharma", school: "Delhi Public School", points: 3847, badges: 12 },
  { rank: 2, name: "Rahul Verma", school: "Ryan International", points: 3635, badges: 11 },
  { rank: 3, name: "Anjali Patel", school: "Modern School", points: 3421, badges: 10 },
  { rank: 4, name: "Vikram Singh", school: "Amity International", points: 3198, badges: 10 },
  { rank: 5, name: "Meera Kumar", school: "St. Xavier's School", points: 2976, badges: 9 },
  { rank: 6, name: "Arjun Reddy", school: "DAV Public School", points: 2847, badges: 8 },
  { rank: 7, name: "Sarah Khan", school: "Kendriya Vidyalaya", points: 2735, badges: 8 },
  { rank: 8, name: "Kabir Shah", school: "Bal Bharati School", points: 2621, badges: 7 },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Leaderboard</h1>
          <p className="text-lg text-muted-foreground">
            See who's leading the environmental revolution
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="bg-gradient-achievement">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5" />
                Top School
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Delhi Public School</p>
              <p className="text-sm text-muted-foreground">45,820 eco-points</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-nature">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Medal className="h-5 w-5" />
                Top Student
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Priya Sharma</p>
              <p className="text-sm text-muted-foreground">3,847 eco-points</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5" />
                Your Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">#42</p>
              <p className="text-sm text-muted-foreground">out of 500 students</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="schools" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>School Rankings</CardTitle>
                <CardDescription>Based on total eco-points earned by all students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schoolRankings.map((school) => (
                    <div
                      key={school.rank}
                      className={`flex items-center gap-4 rounded-lg p-4 transition-all hover:bg-muted/50 ${
                        school.rank <= 3 ? "bg-gradient-to-r from-primary/5 to-transparent" : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                        {school.icon || `#${school.rank}`}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{school.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {school.students} active students
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">{school.points.toLocaleString()}</p>
                        <div className="flex items-center justify-end gap-1">
                          <TrendingUp
                            className={`h-3 w-3 ${
                              school.change.startsWith("+") ? "text-success" : "text-destructive"
                            }`}
                          />
                          <span className="text-sm text-muted-foreground">{school.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Students</CardTitle>
                <CardDescription>Individual student rankings across all schools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentRankings.map((student) => {
                    const initials = student.name.split(' ').map(n => n[0]).join('');
                    
                    return (
                      <div
                        key={student.rank}
                        className={`flex items-center gap-4 rounded-lg p-4 transition-all hover:bg-muted/50 ${
                          student.rank <= 3 ? "bg-gradient-to-r from-primary/5 to-transparent" : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                          #{student.rank}
                        </div>
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-achievement">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.school}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{student.points.toLocaleString()}</p>
                          <Badge variant="secondary" className="mt-1">
                            {student.badges} badges
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>This Week's Leaders</CardTitle>
                <CardDescription>Top performers from the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentRankings.slice(0, 5).map((student, index) => {
                    const initials = student.name.split(' ').map(n => n[0]).join('');
                    const weeklyPoints = Math.floor(student.points * 0.15);
                    
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-lg p-4 transition-all hover:bg-muted/50"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                          #{index + 1}
                        </div>
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-nature">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.school}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">+{weeklyPoints}</p>
                          <p className="text-xs text-muted-foreground">this week</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
