import { useState } from "react";
import { Building2, Users, Calendar, Map, Gift, Award } from "lucide-react";
interface SidebarProps {
  onSectionClick: (sectionId: string) => void;
  activeSection: string;
}
const navigation = [{
  id: "platanus",
  label: "🍌 Platanus",
  icon: Building2
}, {
  id: "nosotros",
  label: "Un poco de nosotros",
  icon: Building2
}, {
  id: "forum",
  label: "Platanus Forum",
  icon: Calendar
}, {
  id: "asistentes",
  label: "👥 Asistentes",
  icon: Users
}, {
  id: "tech-week",
  label: "Chile Tech Week",
  icon: Calendar
}, {
  id: "agenda",
  label: "Agenda Paralela",
  icon: Map
}, {
  id: "cabalgata",
  label: "🐎 Cabalgata",
  icon: Gift
}, {
  id: "2024",
  label: "📸 2024",
  icon: Award
}, {
  id: "confirmados",
  label: "Confirmados 2025",
  icon: Users
}];
export function PlatanusSidebar({
  onSectionClick,
  activeSection
}: SidebarProps) {
  return <div className="fixed left-0 top-0 h-full w-80 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-sidebar-foreground mb-2">
            Platanus Forum '25
          </h1>
          
        </div>

        <nav className="space-y-2">
          {navigation.map(item => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return <button key={item.id} onClick={() => onSectionClick(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${isActive ? "bg-sidebar-accent text-sidebar-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent/50"}`}>
                {item.label.includes("🍌") || item.label.includes("👥") || item.label.includes("🐎") || item.label.includes("📸") ? <span className="text-lg">{item.label.split(" ")[0]}</span> : <Icon className="h-4 w-4" />}
                <span className="text-sm font-thin">
                  {item.label.includes("🍌") || item.label.includes("👥") || item.label.includes("🐎") || item.label.includes("📸") ? item.label.split(" ").slice(1).join(" ") : item.label}
                </span>
              </button>;
        })}
        </nav>

        

        
      </div>
    </div>;
}