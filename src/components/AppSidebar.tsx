import { 
  Home, BookOpen, Trophy, User, Award, Newspaper, 
  Calendar, MessageSquare, Gift, TrendingUp, Info, HelpCircle,
  FileCheck
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Lessons", icon: BookOpen, url: "/lessons" },
  { title: "Eco Tasks", icon: FileCheck, url: "/tasks" },
  { title: "Leaderboard", icon: TrendingUp, url: "/leaderboard" },
  { title: "Achievements", icon: Trophy, url: "/achievements" },
  { title: "Certificates", icon: Award, url: "/certificates" },
  { title: "Community", icon: MessageSquare, url: "/community" },
  { title: "Rewards Store", icon: Gift, url: "/rewards" },
  { title: "Events", icon: Calendar, url: "/events" },
  { title: "Blog", icon: Newspaper, url: "/blog" },
  { title: "Profile", icon: User, url: "/profile" },
  { title: "About Us", icon: Info, url: "/about" },
  { title: "Help Center", icon: HelpCircle, url: "/help" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/50 bg-gradient-nature p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <span className="text-2xl">🌱</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">EcoLearn</h2>
            <p className="text-xs text-muted-foreground">Save the Planet</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} activeClassName="bg-sidebar-accent">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="text-xs text-muted-foreground">
          <p>© 2024 EcoLearn</p>
          <p>Building a sustainable future</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
