import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Community Tree Plantation Drive",
    description: "Join us for a massive tree planting event at Central Park. Plant trees and earn eco-points!",
    date: "March 25, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "Central Park, Sector 12",
    participants: 156,
    maxParticipants: 200,
    points: 250,
    type: "Action",
    icon: "🌳",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Climate Change Workshop",
    description: "Interactive workshop on climate science and solutions. Expert speakers and hands-on activities.",
    date: "March 28, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "School Auditorium",
    participants: 89,
    maxParticipants: 100,
    points: 150,
    type: "Workshop",
    icon: "🌍",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Beach Cleanup Campaign",
    description: "Help clean our coastlines and protect marine life. All materials provided.",
    date: "April 2, 2024",
    time: "6:00 AM - 10:00 AM",
    location: "Juhu Beach",
    participants: 203,
    maxParticipants: 300,
    points: 300,
    type: "Action",
    icon: "🏖️",
    status: "Upcoming",
  },
  {
    id: 4,
    title: "Renewable Energy Fair",
    description: "Explore solar panels, wind turbines, and other green technologies. Live demonstrations!",
    date: "April 5, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "City Convention Center",
    participants: 412,
    maxParticipants: 500,
    points: 200,
    type: "Fair",
    icon: "⚡",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Inter-School Eco Quiz Competition",
    description: "Test your environmental knowledge and compete for prizes and glory!",
    date: "April 10, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Virtual Event",
    participants: 234,
    maxParticipants: 400,
    points: 500,
    type: "Competition",
    icon: "🏆",
    status: "Registration Open",
  },
  {
    id: 6,
    title: "Waste Segregation Training",
    description: "Learn proper waste management techniques. Hands-on training session.",
    date: "April 15, 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Community Center",
    participants: 67,
    maxParticipants: 80,
    points: 100,
    type: "Workshop",
    icon: "♻️",
    status: "Upcoming",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Environmental Events</h1>
          <p className="text-lg text-muted-foreground">
            Join eco-activities, workshops, and competitions near you
          </p>
        </div>

        <Card className="mb-8 bg-gradient-nature">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Next Event</h3>
                <p className="text-lg">Community Tree Plantation Drive</p>
                <p className="text-sm text-muted-foreground">March 25, 2024 • 8:00 AM</p>
              </div>
              <div className="text-6xl">🌳</div>
            </div>
            <Button className="mt-4 w-full" size="lg">
              Register Now
            </Button>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map(event => {
            const participationPercent = (event.participants / event.maxParticipants) * 100;
            
            return (
              <Card key={event.id} className="overflow-hidden transition-all hover:shadow-hover">
                <div className="flex h-24 items-center justify-center bg-gradient-achievement text-5xl">
                  {event.icon}
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge className="bg-success text-success-foreground">{event.status}</Badge>
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {event.participants}/{event.maxParticipants} participants
                        </span>
                      </div>
                      <span className="font-medium text-primary">+{event.points} pts</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${participationPercent}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full">
                    Register for Event
                    <ExternalLink className="ml-2 h-4 w-4" />
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
