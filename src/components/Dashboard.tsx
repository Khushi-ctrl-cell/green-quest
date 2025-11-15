import { Leaf, Trophy, Target, TrendingUp } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const Dashboard = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Your Eco-Impact Dashboard</h2>
          <p className="text-lg text-muted-foreground">Track your progress and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard
            icon={Leaf}
            value="1,247"
            label="Eco Points"
            trend="+12%"
            variant="success"
          />
          <StatsCard
            icon={Trophy}
            value="23"
            label="Badges Earned"
            trend="+3"
            variant="secondary"
          />
          <StatsCard
            icon={Target}
            value="18/25"
            label="Tasks Completed"
            variant="accent"
          />
          <StatsCard
            icon={TrendingUp}
            value="#5"
            label="School Rank"
            trend="↑2"
            variant="default"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Current Goals</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-card-foreground">Complete 5 Lessons</span>
                  <span className="text-sm text-muted-foreground">3/5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-card-foreground">Plant 10 Trees</span>
                  <span className="text-sm text-muted-foreground">7/10</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-card-foreground">Score 80% in Quizzes</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Recent Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-achievement flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Tree Planter Pro</h4>
                  <p className="text-sm text-muted-foreground">Planted 50+ trees</p>
                </div>
                <Badge className="ml-auto">Gold</Badge>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-nature flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Eco Warrior</h4>
                  <p className="text-sm text-muted-foreground">Completed 10 sustainability tasks</p>
                </div>
                <Badge className="ml-auto" variant="secondary">Silver</Badge>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Quiz Master</h4>
                  <p className="text-sm text-muted-foreground">Aced 5 environmental quizzes</p>
                </div>
                <Badge className="ml-auto" variant="outline">Bronze</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
