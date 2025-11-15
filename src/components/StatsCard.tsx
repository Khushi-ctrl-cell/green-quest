import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  trend?: string;
  variant?: "default" | "success" | "secondary" | "accent";
}

export const StatsCard = ({ 
  icon: Icon, 
  value, 
  label, 
  trend,
  variant = "default" 
}: StatsCardProps) => {
  const gradientMap = {
    default: "bg-gradient-nature",
    success: "bg-success",
    secondary: "bg-gradient-achievement",
    accent: "bg-accent",
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-border/50">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-foreground">{value}</h3>
            {trend && (
              <span className="text-sm font-medium text-success">
                {trend}
              </span>
            )}
          </div>
        </div>
        <div className={`p-3 rounded-xl ${gradientMap[variant]}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};
