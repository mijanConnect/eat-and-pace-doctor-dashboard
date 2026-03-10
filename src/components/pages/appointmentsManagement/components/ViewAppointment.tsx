import { useState } from "react";
import { Button } from "@/components/ui/button";
import AppointmentOverview from "./AppointmentOverview";
import DailyActivities from "./DailyActivities";

type AppointmentData = {
  id: number;
  name: string;
  gender: "Male" | "Female";
  age: number;
  email: string;
  problem: string;
  bookingDate: string;
  bookingTime: string;
  package: string;
  status: "Completed" | "Pending" | "Cancelled";
};

interface ViewAppointmentProps {
  appointment: AppointmentData;
}

export default function ViewAppointment({ appointment }: ViewAppointmentProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "activities">(
    "overview",
  );

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-20 sm:size-30 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none gap-2 text-center sm:text-left">
              <span className="text-lg sm:text-xl font-medium text-foreground flex flex-col sm:flex-row items-center gap-2">
                {appointment.name}{" "}
                <span className="bg-primary/10 rounded-full px-2 py-1 text-xs font-semisemibold text-gray-500 mt-2 sm:mt-0 sm:ml-2">
                  Member Since: Jan 2024 |{" "}
                  <span className="text-primary">Premium Plan</span>
                </span>
              </span>
              <span className="text-sm sm:text-md text-muted-foreground">
                Age: {appointment.age}
              </span>
              <span className="text-sm sm:text-lg text-muted-foreground">
                Email: {appointment.email || "example@gmail.com"}
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="">
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button
                variant={activeTab === "overview" ? "default" : "outline"}
                size="lg"
                className="w-45"
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </Button>
              <Button
                variant={activeTab === "activities" ? "default" : "outline"}
                size="lg"
                className="w-55"
                onClick={() => setActiveTab("activities")}
              >
                View Daily Activities
              </Button>
            </div>
          </div>
          {/* Appointment Overview */}
          {activeTab === "overview" && (
            <AppointmentOverview appointment={appointment} />
          )}
          {activeTab === "activities" && <DailyActivities />}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Button variant="default" className="w-75">
              Join Meeting
            </Button>
            <Button variant="outline" className="w-75">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
