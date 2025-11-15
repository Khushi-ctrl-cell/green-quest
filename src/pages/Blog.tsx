import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How Students Are Leading the Climate Revolution",
    excerpt: "Discover inspiring stories of young environmental activists making real change in their communities...",
    author: "Dr. Priya Mehta",
    date: "March 15, 2024",
    category: "Success Stories",
    image: "🌍",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of Renewable Energy: What Students Need to Know",
    excerpt: "Solar, wind, and hydroelectric power are transforming our world. Learn how these technologies work...",
    author: "Prof. Rajesh Kumar",
    date: "March 12, 2024",
    category: "Renewable Energy",
    image: "⚡",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Biodiversity Crisis: Why Every Species Matters",
    excerpt: "Understanding the interconnected web of life and why protecting biodiversity is crucial for our future...",
    author: "Dr. Anjali Singh",
    date: "March 10, 2024",
    category: "Conservation",
    image: "🦋",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Delhi School's Innovative Recycling Program Wins National Award",
    excerpt: "How one school transformed their waste management and inspired others to follow...",
    author: "EcoLearn Team",
    date: "March 8, 2024",
    category: "Success Stories",
    image: "♻️",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Understanding Carbon Footprints: A Student's Guide",
    excerpt: "Learn how to calculate your carbon footprint and discover practical ways to reduce it...",
    author: "Dr. Vikram Sharma",
    date: "March 5, 2024",
    category: "Climate Action",
    image: "👣",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Water Conservation: Simple Habits That Make a Big Difference",
    excerpt: "Practical tips for students to save water at home and school while making a real impact...",
    author: "Prof. Meera Patel",
    date: "March 1, 2024",
    category: "Conservation",
    image: "💧",
    readTime: "5 min read",
  },
];

const categories = [
  "All Posts",
  "Success Stories",
  "Renewable Energy",
  "Conservation",
  "Climate Action",
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Eco Blog</h1>
          <p className="text-lg text-muted-foreground">
            Latest news, insights, and success stories from the environmental movement
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant={category === "All Posts" ? "default" : "outline"}
              className="cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <Card key={post.id} className="group overflow-hidden transition-all hover:shadow-hover">
              <div className="flex h-48 items-center justify-center bg-gradient-nature text-8xl">
                {post.image}
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
