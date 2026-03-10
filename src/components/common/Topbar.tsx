import { Button } from "@/components/ui/button";
import { Bell, Menu, MessageCircleMore } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfilePopover from "./ProfilePopover";

function formatPageTitle(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "dashboard";

  return lastSegment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [unreadNotifications] = useState(3);
  const [unreadMessages] = useState(2);

  return (
    <>
      <header className="flex h-16 items-center justify-between bg-white px-2 sm:px-4 mx-2 lg:mx-4 rounded-b-xl">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="md:hidden text-black"
            aria-label="Toggle menu"
          >
            <Menu className="size-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground sm:text-xl">
            {formatPageTitle(pathname)}
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-2">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-black cursor-pointer"
              onClick={() => navigate("/message")}
              aria-label="Open chat"
            >
              <MessageCircleMore className="size-6" />
            </Button>
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                {unreadMessages > 99 ? "99+" : unreadMessages}
              </span>
            )}
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-black cursor-pointer"
              onClick={() => navigate("/notifications")}
              aria-label="View notifications"
            >
              <Bell className="size-6" />
            </Button>
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                {unreadNotifications > 99 ? "99+" : unreadNotifications}
              </span>
            )}
          </div>

          <ProfilePopover />
        </div>
      </header>
    </>
  );
}
