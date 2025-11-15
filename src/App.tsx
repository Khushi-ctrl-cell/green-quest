import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Lessons from "./pages/Lessons";
import Tasks from "./pages/Tasks";
import LeaderboardPage from "./pages/LeaderboardPage";
import Achievements from "./pages/Achievements";
import Certificates from "./pages/Certificates";
import Community from "./pages/Community";
import RewardsStore from "./pages/RewardsStore";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <SidebarInset>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/community" element={<Community />} />
              <Route path="/rewards" element={<RewardsStore />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SidebarInset>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
