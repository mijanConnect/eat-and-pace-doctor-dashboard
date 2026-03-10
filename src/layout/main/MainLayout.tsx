import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Topbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F7F9FC]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-3 sm:p-4 bg-white m-2 lg:m-4 rounded-xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
