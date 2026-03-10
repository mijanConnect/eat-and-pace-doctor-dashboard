import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  X,
  LogOut,
  Users,
  CreditCard,
  Briefcase,
  Clock,
  FileText,
  FileCheck,
  Shield,
  Info,
} from "lucide-react";
import logo from "@/assets/logo.png";

const featureRoutes = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  {
    label: "Appointment Management",
    path: "/appointments-management",
    icon: Calendar,
  },
  { label: "Patient Management", path: "/patient-management", icon: Users },
  { label: "Transactions", path: "/transactions", icon: CreditCard },
  {
    label: "Business Settings",
    path: "/business-settings",
    icon: Briefcase,
  },
  { label: "Schedule", path: "/schedule", icon: Clock },
  {
    label: "Content Management",
    path: "/content-management",
    icon: FileText,
  },
  {
    label: "Terms & Conditions",
    path: "/terms-conditions",
    icon: FileCheck,
  },
  { label: "Privacy Policy", path: "/privacy-policy", icon: Shield },
  { label: "About Us", path: "/about-us", icon: Info },
  // { label: "Settings", path: "/settings", icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "flex h-screen flex-col bg-white text-sidebar-foreground transition-all duration-300",
          isOpen
            ? "fixed left-0 top-0 z-40 w-68 md:static"
            : "static w-16 md:w-68",
        )}
      >
        <div
          className={cn(
            "flex items-center py-4 relative",
            isOpen ? "justify-center px-5" : "justify-center px-3 md:px-5",
          )}
        >
          <img
            src={logo}
            alt="Company Logo"
            className={cn("w-auto", isOpen ? "h-24 md:h-24" : "h-10 md:h-24")}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const text = document.createElement("p");
              text.className = "text-lg font-semibold tracking-tight";
              text.textContent = "Logo";
              (e.target as HTMLImageElement).parentElement?.appendChild(text);
            }}
          />
          <LayoutDashboard className="hidden" />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={cn(
              "absolute right-2 top-2 text-black",
              isOpen ? "block md:hidden" : "hidden",
            )}
          >
            <X className="size-5 mx-auto" />
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {featureRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <NavLink
                key={route.label}
                to={route.path}
                onClick={() => {
                  if (isOpen) {
                    onClose();
                  }
                }}
                className={({ isActive }) =>
                  cn(
                    buttonVariants({
                      variant: isActive ? "secondary" : "ghost",
                    }),
                    "w-full gap-3 py-5 px-4 rounded-lg transition-colors",
                    isOpen
                      ? "justify-start"
                      : "justify-center px-2 md:justify-start md:px-4",
                    isActive
                      ? "bg-primary text-white hover:text-black"
                      : "text-black hover:bg-gray-100 hover:text-black",
                  )
                }
              >
                <Icon className="size-5 shrink-0" />
                <span className={cn(!isOpen && "hidden md:inline")}>
                  {route.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        <div className="p-3">
          <Button
            className={cn(
              "w-full cursor-pointer py-5 px-4 bg-accent text-black hover:bg-red-500 hover:text-white justify-start rounded-lg",
              !isOpen && "aspect-square w-10 md:w-full",
            )}
            onClick={() => navigate("/auth/login")}
          >
            <LogOut className={cn("size-5", !isOpen ? "md:mr-2" : "mr-2")} />
            <span className={cn(!isOpen && "hidden md:inline")}>Logout</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
