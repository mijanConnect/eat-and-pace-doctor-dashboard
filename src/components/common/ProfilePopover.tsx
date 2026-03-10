import { LogOut, User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

export default function ProfilePopover() {
  const navigate = useNavigate();
  return (
    <>
      {/* Desktop version - profile name and image */}
      <Popover>
        <PopoverTrigger asChild>
          <div className="hidden items-center gap-3 rounded-md px-2 py-1 hover:bg-accent sm:flex cursor-pointer">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-9 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-medium text-foreground">
                Isidro Rebelo
              </span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0" align="end">
          <div className="flex flex-col items-center gap-3 p-4 border-b">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-16 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">
              Isidro Rebelo
            </span>
          </div>
          <div className="space-y-2 p-4">
            <button
              onClick={() => navigate("/profile")}
              className="flex w-full items-center gap-3 rounded-md px-4 py-2 hover:bg-accent cursor-pointer"
            >
              <User className="size-5" />
              <span>View Profile</span>
            </button>
            <button
              onClick={() => navigate("/auth/login")}
              className="flex w-full items-center gap-3 rounded-md px-4 py-2 hover:bg-destructive hover:text-white cursor-pointer"
            >
              <LogOut className="size-5" />
              <span>Logout</span>
            </button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Mobile version - only profile image */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="sm:hidden">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-8 rounded-full object-cover"
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0" align="end">
          <div className="flex flex-col items-center gap-3 p-4 border-b">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-16 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">
              Isidro Rebelo
            </span>
          </div>
          <div className="space-y-2 p-4">
            <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 hover:bg-accent">
              <User className="size-5" />
              <span>View Profile</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 hover:bg-destructive hover:text-destructive-foreground">
              <LogOut className="size-5" />
              <span>Logout</span>
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
