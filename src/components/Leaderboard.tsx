import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

export const Leaderboard = () => {
  const schools = [
    { name: "Green Valley High School", points: 12450, rank: 1, members: 245 },
    { name: "Sunrise Academy", points: 11230, rank: 2, members: 198 },
    { name: "Future Leaders School", points: 10890, rank: 3, members: 215 },
    { name: "Bright Minds Institution", points: 9560, rank: 4, members: 187 },
    { name: "Rainbow International", points: 8920, rank: 5, members: 203 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-8 h-8 text-secondary" />;
      case 2:
        return <Medal className="w-8 h-8 text-muted-foreground" />;
      case 3:
        return <Award className="w-8 h-8 text-earth" />;
      default:
        return <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">{rank}</div>;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">School Leaderboard</h2>
          <p className="text-lg text-muted-foreground">
            Compete with other schools and climb to the top
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-card border-border/50">
            <div className="bg-gradient-nature p-6">
              <h3 className="text-2xl font-bold text-white">Top Schools This Month</h3>
            </div>
            
            <div className="divide-y divide-border">
              {schools.map((school) => (
                <div 
                  key={school.rank}
                  className={`p-6 flex items-center gap-6 hover:bg-muted/50 transition-colors ${
                    school.rank === 1 ? 'bg-secondary/10' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    {getRankIcon(school.rank)}
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-card-foreground">{school.name}</h4>
                    <p className="text-sm text-muted-foreground">{school.members} active students</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-nature bg-clip-text text-transparent">
                      {school.points.toLocaleString()}
                    </div>
                    <Badge variant="outline" className="mt-1">
                      Eco Points
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Rankings update every Monday. Keep taking action to climb higher!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
