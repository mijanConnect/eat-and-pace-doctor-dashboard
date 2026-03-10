import { Outlet } from "react-router-dom";
import { Heart } from "lucide-react";

interface AuthLayoutProps {
  title?: string;
  description?: string;
}

export default function AuthLayout({
  title = "Welcome to Health & Wellness",
  description = "Your journey to better health starts here. Track your appointments, monitor your progress, and achieve your wellness goals.",
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      {/* Right Side - Branded Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg">
          <div className="mb-8 flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Heart className="size-10" fill="white" />
            </div>
            <h1 className="text-3xl font-bold">Health & Wellness</h1>
          </div>

          <h2 className="text-4xl font-bold mb-6 leading-tight">{title}</h2>
          <p className="text-lg text-white/90 leading-relaxed">{description}</p>

          {/* Feature Points */}
          <div className="mt-12 space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-white/20 rounded-full">
                <div className="size-2 bg-white rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Track Your Progress</h3>
                <p className="text-sm text-white/80">
                  Monitor your health metrics and see your improvement over time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-white/20 rounded-full">
                <div className="size-2 bg-white rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Manage Appointments</h3>
                <p className="text-sm text-white/80">
                  Keep all your health appointments organized in one place
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-white/20 rounded-full">
                <div className="size-2 bg-white rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Personalized Nutrition</h3>
                <p className="text-sm text-white/80">
                  Get customized meal plans tailored to your health goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
