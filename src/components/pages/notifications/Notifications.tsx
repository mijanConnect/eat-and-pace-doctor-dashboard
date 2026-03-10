"use client";

import { Mail } from "lucide-react";

type Notification = {
  id: number;
  title: string;
  message: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    title: "Email Notification",
    message: "You have a new message from your healthcare provider.",
  },
  {
    id: 2,
    title: "Appointment Reminder",
    message: "Your appointment is scheduled for tomorrow at 10:00 AM.",
  },
  {
    id: 3,
    title: "Payment Successful",
    message: "Your recent payment has been successfully processed.",
  },
  {
    id: 4,
    title: "Package Activated",
    message: "Your premium health package has been activated.",
  },
  {
    id: 5,
    title: "Profile Updated",
    message: "Your profile information has been updated successfully.",
  },
  {
    id: 6,
    title: "New Health Tip",
    message: "Check out the latest health tips added to your dashboard.",
  },
  {
    id: 7,
    title: "Lab Report Ready",
    message: "Your lab test report is now available for download.",
  },
  {
    id: 8,
    title: "Subscription Expiring",
    message: "Your subscription will expire in 3 days. Renew now.",
  },
    {
    id: 9,
    title: "Profile Updated",
    message: "Your profile information has been updated successfully.",
  },
  {
    id: 10,
    title: "New Health Tip",
    message: "Check out the latest health tips added to your dashboard.",
  },
];

export default function Notifications() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex gap-4 border p-4 rounded-lg bg-white shadow-sm"
        >
          <div className="bg-green-100 rounded-full flex items-center justify-center p-3">
            <Mail className="size-7 text-primary" />
          </div>

          <div>
            <h2 className="text-[16px] font-medium">{notification.title}</h2>
            <p className="text-[16px] text-gray-500">{notification.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
