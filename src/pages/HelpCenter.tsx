import { HelpCircle, Mail, MessageCircle, Book, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I earn eco-points?",
    answer: "You can earn eco-points by completing lessons, passing quizzes, finishing real-world eco-tasks, and participating in community events. Each activity has a specific point value displayed on it.",
  },
  {
    question: "What can I do with my eco-points?",
    answer: "Eco-points can be redeemed in the Rewards Store for digital certificates, wallpapers, stickers, and real-world impact like tree planting donations or ocean cleanup contributions.",
  },
  {
    question: "How does the leaderboard work?",
    answer: "The leaderboard ranks students and schools based on total eco-points earned. It updates in real-time and shows weekly, monthly, and all-time rankings. Your rank is visible on your dashboard.",
  },
  {
    question: "How do I submit proof for eco-tasks?",
    answer: "When completing an eco-task, you can upload photos or videos as proof. Our team reviews submissions to verify completion before awarding points and badges.",
  },
  {
    question: "Can I participate if my school isn't registered?",
    answer: "Yes! Individual students can join EcoLearn even if their school hasn't registered yet. You can still earn points, complete tasks, and participate in the community.",
  },
  {
    question: "Are the certificates officially recognized?",
    answer: "Our certificates are digitally signed and can be verified. While they're not government-issued, they're recognized by many educational institutions and can be added to your portfolio.",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a reset link. Follow the instructions in the email to create a new password.",
  },
  {
    question: "Can I transfer my points to another student?",
    answer: "No, eco-points are personal and cannot be transferred. However, you can participate in team tasks where points are shared among team members.",
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Help Center</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to your questions or get in touch with our support team
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles..."
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="transition-all hover:shadow-hover">
            <CardHeader className="text-center">
              <Book className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>User Guide</CardTitle>
              <CardDescription>Step-by-step tutorials and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Guides
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-hover">
            <CardHeader className="text-center">
              <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-hover">
            <CardHeader className="text-center">
              <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Get help via email</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Can't find what you're looking for?</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Your Email</label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Subject</label>
                    <Input placeholder="Brief description of your issue" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Describe your issue in detail..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full">Submit Request</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-gradient-nature">
              <CardContent className="pt-6">
                <h3 className="mb-2 font-semibold">Need Immediate Help?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Our support team is available Monday-Friday, 9 AM - 6 PM IST
                </p>
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  support@ecolearn.edu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
