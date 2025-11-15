import { Button } from "@/components/ui/button";
import { Leaf, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Learn • Act • Lead</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Education into
              <span className="block bg-gradient-nature bg-clip-text text-transparent mt-2">
                Environmental Action
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              EcoLearn makes sustainability engaging through gamified lessons, real-world tasks, 
              and school competitions. Aligned with NEP 2020, we turn students into eco-champions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                For Schools
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold text-foreground">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-secondary" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Schools</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-success" />
                  <span className="text-2xl font-bold text-foreground">1M+</span>
                </div>
                <p className="text-sm text-muted-foreground">Trees Planted</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover animate-float">
              <img 
                src={heroImage} 
                alt="Students engaging in environmental activities" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
