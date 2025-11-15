import { MessageSquare, ThumbsUp, Reply, Clock, User, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const forumTopics = [
  {
    id: 1,
    title: "How to start a composting program at school?",
    author: "Priya Sharma",
    category: "Waste Management",
    replies: 23,
    likes: 45,
    timeAgo: "2 hours ago",
    solved: false,
    trending: true,
  },
  {
    id: 2,
    title: "Best apps for tracking carbon footprint?",
    author: "Rahul Verma",
    category: "Climate Action",
    replies: 18,
    likes: 32,
    timeAgo: "5 hours ago",
    solved: true,
    trending: false,
  },
  {
    id: 3,
    title: "Ideas for World Environment Day celebration",
    author: "Anjali Patel",
    category: "Events",
    replies: 56,
    likes: 89,
    timeAgo: "1 day ago",
    solved: false,
    trending: true,
  },
  {
    id: 4,
    title: "How to convince parents to install solar panels?",
    author: "Vikram Singh",
    category: "Renewable Energy",
    replies: 34,
    likes: 67,
    timeAgo: "1 day ago",
    solved: false,
    trending: false,
  },
  {
    id: 5,
    title: "Looking for teammates for tree plantation drive",
    author: "Meera Kumar",
    category: "Eco Tasks",
    replies: 12,
    likes: 28,
    timeAgo: "2 days ago",
    solved: false,
    trending: false,
  },
  {
    id: 6,
    title: "Help needed: Biodiversity project ideas",
    author: "Arjun Reddy",
    category: "Projects",
    replies: 41,
    likes: 53,
    timeAgo: "3 days ago",
    solved: true,
    trending: false,
  },
];

const topContributors = [
  { name: "Sarah Khan", points: 2847, rank: 1, avatar: "SK" },
  { name: "Raj Malhotra", points: 2635, rank: 2, avatar: "RM" },
  { name: "Ananya Iyer", points: 2421, rank: 3, avatar: "AI" },
  { name: "Kabir Shah", points: 2198, rank: 4, avatar: "KS" },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Community Forum</h1>
          <p className="text-lg text-muted-foreground">
            Connect with fellow eco-warriors, share ideas, and get help
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <Button className="w-full" size="lg">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start a New Discussion
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {forumTopics.map(topic => (
                <Card key={topic.id} className="transition-all hover:shadow-hover">
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{topic.category}</Badge>
                      {topic.solved && (
                        <Badge className="bg-success text-success-foreground">Solved</Badge>
                      )}
                      {topic.trending && (
                        <Badge variant="outline" className="border-warning text-warning">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="cursor-pointer hover:text-primary">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{topic.author}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{topic.timeAgo}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Reply className="h-4 w-4" />
                        <span>{topic.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{topic.likes} likes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-nature">
              <CardHeader>
                <CardTitle>Forum Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Discussions</span>
                  <span className="text-2xl font-bold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Members</span>
                  <span className="text-2xl font-bold">5,832</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Solutions Found</span>
                  <span className="text-2xl font-bold">892</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>This month's most helpful members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map(contributor => (
                  <div key={contributor.rank} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                      #{contributor.rank}
                    </div>
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-achievement text-sm">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {contributor.points} points
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Climate Action",
                  "Renewable Energy",
                  "Waste Management",
                  "Eco Tasks",
                  "Events",
                  "Projects",
                ].map(category => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="mr-2 cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {category}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
