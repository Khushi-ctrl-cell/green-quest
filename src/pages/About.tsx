import { Target, Eye, Users, TrendingUp, Award, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const impactNumbers = [
  { label: "Active Students", value: "5,832", icon: Users },
  { label: "Trees Planted", value: "12,450", icon: Award },
  { label: "Eco-Tasks Completed", value: "23,891", icon: TrendingUp },
  { label: "CO₂ Reduced (kg)", value: "45,678", icon: Heart },
];

const team = [
  { name: "Dr. Priya Mehta", role: "Founder & CEO", avatar: "PM" },
  { name: "Prof. Rajesh Kumar", role: "Chief Education Officer", avatar: "RK" },
  { name: "Anjali Singh", role: "Head of Technology", avatar: "AS" },
  { name: "Vikram Sharma", role: "Community Manager", avatar: "VS" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">About EcoLearn</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Empowering the next generation to build a sustainable future through gamified environmental education
          </p>
        </div>

        <div className="mb-16">
          <Card className="overflow-hidden border-0 bg-gradient-hero shadow-card">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Our Story</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground">
                EcoLearn was born from a simple observation: traditional environmental education wasn't working. 
                Students learned about climate change from textbooks but rarely took action. We created EcoLearn 
                to bridge this gap—combining interactive lessons, real-world tasks, and gamification to make 
                sustainability education engaging, practical, and impactful. Today, we're proud to be partnering 
                with schools across India to create a generation of environmental champions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Target className="mb-4 h-12 w-12 text-primary" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To transform environmental education by making it interactive, practical, and fun. 
                We empower students to learn about sustainability through hands-on experiences and 
                reward them for taking real-world action that protects our planet.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Eye className="mb-4 h-12 w-12 text-primary" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A world where every student becomes an environmental champion, equipped with the 
                knowledge, skills, and motivation to create a sustainable future. We envision 
                EcoLearn becoming the global standard for climate education.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Impact</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impactNumbers.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center transition-all hover:shadow-hover">
                  <CardContent className="pt-6">
                    <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                    <p className="mb-2 text-4xl font-bold text-primary">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-achievement text-2xl font-bold text-foreground">
                    {member.avatar}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-nature">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Why EcoLearn Works</h2>
            <div className="mx-auto max-w-3xl space-y-4 text-left">
              <div className="rounded-lg bg-background/80 p-4">
                <h3 className="mb-2 font-semibold">✅ Experiential Learning</h3>
                <p className="text-sm text-muted-foreground">
                  UNESCO research shows 70% higher retention with hands-on learning. Our real-world 
                  tasks ensure students don't just read about the environment—they actively protect it.
                </p>
              </div>
              <div className="rounded-lg bg-background/80 p-4">
                <h3 className="mb-2 font-semibold">✅ Gamification That Motivates</h3>
                <p className="text-sm text-muted-foreground">
                  Points, badges, and leaderboards turn learning into an exciting journey. Students 
                  compete to become eco-warriors while making a real difference.
                </p>
              </div>
              <div className="rounded-lg bg-background/80 p-4">
                <h3 className="mb-2 font-semibold">✅ Aligned with NEP 2020</h3>
                <p className="text-sm text-muted-foreground">
                  Fully compliant with India's National Education Policy, focusing on experiential, 
                  competency-based learning for the 21st century.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
