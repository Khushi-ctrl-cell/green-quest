import { Award, Download, Share2, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const certificates = [
  {
    id: 1,
    title: "Climate Champion",
    description: "Completed 5 Climate Change lessons",
    issueDate: "March 15, 2024",
    unlocked: true,
    icon: "🌍",
    progress: 100,
    requirement: "Complete 5 lessons",
  },
  {
    id: 2,
    title: "Eco Warrior",
    description: "Completed 10 real-world eco-tasks",
    issueDate: "March 10, 2024",
    unlocked: true,
    icon: "⚔️",
    progress: 100,
    requirement: "Complete 10 eco-tasks",
  },
  {
    id: 3,
    title: "Quiz Master",
    description: "Scored above 80% in 5 quizzes",
    issueDate: "March 5, 2024",
    unlocked: true,
    icon: "🎓",
    progress: 100,
    requirement: "Score >80% in 5 quizzes",
  },
  {
    id: 4,
    title: "Tree Planter",
    description: "Plant and track 20 trees",
    issueDate: "",
    unlocked: false,
    icon: "🌳",
    progress: 65,
    requirement: "Plant 20 trees",
  },
  {
    id: 5,
    title: "Renewable Energy Expert",
    description: "Master all renewable energy modules",
    issueDate: "",
    unlocked: false,
    icon: "⚡",
    progress: 50,
    requirement: "Complete all renewable energy lessons",
  },
  {
    id: 6,
    title: "Community Leader",
    description: "Help 50 students in the community forum",
    issueDate: "",
    unlocked: false,
    icon: "👥",
    progress: 24,
    requirement: "Help 50 students",
  },
];

export default function Certificates() {
  const unlockedCount = certificates.filter(c => c.unlocked).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">My Certificates</h1>
          <p className="text-lg text-muted-foreground">
            Showcase your environmental achievements
          </p>
        </div>

        <Card className="mb-8 bg-gradient-achievement">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Certificate Collection</h3>
                <p className="text-muted-foreground">
                  {unlockedCount} of {certificates.length} certificates earned
                </p>
              </div>
              <div className="text-right">
                <Award className="inline-block h-12 w-12 text-primary" />
              </div>
            </div>
            <Progress
              value={(unlockedCount / certificates.length) * 100}
              className="mt-4 h-3"
            />
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="mb-4 text-2xl font-bold">Earned Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certificates
              .filter(cert => cert.unlocked)
              .map(cert => (
                <Card key={cert.id} className="overflow-hidden border-2 border-primary/20">
                  <div className="bg-gradient-nature p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{cert.icon}</span>
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {cert.title}
                      <Badge variant="secondary">Earned</Badge>
                    </CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Issued on {cert.issueDate}
                    </p>
                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">In Progress</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates
              .filter(cert => !cert.unlocked)
              .map(cert => (
                <Card key={cert.id} className="relative opacity-90">
                  <div className="absolute right-4 top-4">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <div className="mb-2 text-4xl opacity-50">{cert.icon}</div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Requirement: {cert.requirement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
