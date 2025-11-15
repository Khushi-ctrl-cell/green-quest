import { Gift, Star, Download, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const rewards = [
  {
    id: 1,
    name: "Digital Certificate: Climate Champion",
    description: "Official certificate recognizing your climate action achievements",
    cost: 500,
    category: "Certificates",
    icon: "📜",
    available: true,
  },
  {
    id: 2,
    name: "Eco Wallpaper Collection",
    description: "Beautiful nature-themed wallpapers for your devices",
    cost: 200,
    category: "Digital",
    icon: "🖼️",
    available: true,
  },
  {
    id: 3,
    name: "Plant a Tree in Your Name",
    description: "We'll plant a real tree and send you GPS coordinates",
    cost: 1000,
    category: "Real Impact",
    icon: "🌳",
    available: true,
  },
  {
    id: 4,
    name: "Eco Sticker Pack",
    description: "Downloadable stickers for your social media and messaging",
    cost: 150,
    category: "Digital",
    icon: "🎨",
    available: true,
  },
  {
    id: 5,
    name: "Virtual Eco Badge Set",
    description: "Exclusive badges to display on your profile",
    cost: 300,
    category: "Digital",
    icon: "🏅",
    available: true,
  },
  {
    id: 6,
    name: "Ocean Cleanup Donation",
    description: "Contribute to ocean plastic removal projects",
    cost: 1500,
    category: "Real Impact",
    icon: "🌊",
    available: true,
  },
  {
    id: 7,
    name: "Solar Panel Fund Contribution",
    description: "Help schools install solar panels",
    cost: 2000,
    category: "Real Impact",
    icon: "☀️",
    available: false,
  },
  {
    id: 8,
    name: "Exclusive Eco Desktop Theme",
    description: "Premium desktop theme with nature animations",
    cost: 400,
    category: "Digital",
    icon: "💻",
    available: true,
  },
  {
    id: 9,
    name: "Wildlife Protection Donation",
    description: "Support endangered species conservation",
    cost: 1800,
    category: "Real Impact",
    icon: "🦁",
    available: true,
  },
];

export default function RewardsStore() {
  const userPoints = 2847;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Rewards Store</h1>
          <p className="text-lg text-muted-foreground">
            Redeem your eco-points for certificates, donations, and digital rewards
          </p>
        </div>

        <Card className="mb-8 bg-gradient-achievement">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Your Eco Points</p>
                <p className="text-4xl font-bold">{userPoints}</p>
              </div>
              <Wallet className="h-12 w-12 text-primary" />
            </div>
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Next milestone: 3000 points</span>
                <span>{Math.round((userPoints / 3000) * 100)}%</span>
              </div>
              <Progress value={(userPoints / 3000) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex flex-wrap gap-2">
          {["All", "Certificates", "Digital", "Real Impact"].map(category => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map(reward => {
            const canAfford = userPoints >= reward.cost;
            
            return (
              <Card
                key={reward.id}
                className={`transition-all hover:shadow-hover ${
                  !reward.available || !canAfford ? "opacity-75" : ""
                }`}
              >
                <div className="flex h-32 items-center justify-center bg-gradient-nature text-6xl">
                  {reward.icon}
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{reward.category}</Badge>
                    {!reward.available && (
                      <Badge variant="outline">Out of Stock</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{reward.name}</CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold">{reward.cost}</span>
                      <span className="text-sm text-muted-foreground">points</span>
                    </div>
                  </div>
                  <Button
                    className="mt-4 w-full"
                    disabled={!canAfford || !reward.available}
                    variant={canAfford && reward.available ? "default" : "outline"}
                  >
                    {!reward.available
                      ? "Coming Soon"
                      : !canAfford
                      ? `Need ${reward.cost - userPoints} more points`
                      : "Redeem"}
                    {canAfford && reward.available && (
                      <Gift className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
