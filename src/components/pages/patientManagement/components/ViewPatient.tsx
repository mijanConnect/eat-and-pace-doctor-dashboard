import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppointmentOverview from "./AppointmentOverview";
import DailyActivities from "./DailyActivities";
import { X, Send, Image as ImageIcon } from "lucide-react";

type PatientData = {
  id: number;
  serial?: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  problem: string;
  nutrition?: string;
  fitnessLevel?: string;
  healthCondition?: string;
  overallScore?: string;
  email?: string;
  bookingDate?: string;
  bookingTime?: string;
  package?: string;
  status?: "Completed" | "Pending" | "Cancelled";
};

interface ViewPatientProps {
  patient: PatientData;
}

export default function ViewPatient({ patient }: ViewPatientProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "activities">(
    "overview",
  );
  const [messageText, setMessageText] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          setSelectedImages((prev) => [...prev, result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSendMessage = () => {
    if (messageText.trim() || selectedImages.length > 0) {
      console.log("Message:", messageText);
      console.log("Images:", selectedImages);
      // Reset after sending
      setMessageText("");
      setSelectedImages([]);
    }
  };

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
                {patient.name}{" "}
                <span className="bg-primary/10 rounded-full px-2 py-1 text-xs font-semisemibold text-gray-500 mt-2 sm:mt-0 sm:ml-2">
                  Member Since: Jan 2024 |{" "}
                  <span className="text-primary">Premium Plan</span>
                </span>
              </span>
              <span className="text-sm sm:text-md text-muted-foreground">
                Age: {patient.age}
              </span>
              <span className="text-sm sm:text-lg text-muted-foreground">
                Email: {patient.email || "example@gmail.com"}
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
          {/* Patient Overview */}
          {activeTab === "overview" && (
            <AppointmentOverview appointment={patient} />
          )}
          {activeTab === "activities" && <DailyActivities />}
        </div>
        <div className="p-4 space-y-3 mt-10 bg-gray-50 rounded-2xl">
          <h4 className="text-lg font-semibold mb-4">Send Message</h4>
          {/* Image previews */}
          {selectedImages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedImages.map((img, index) => (
                <div key={index} className="relative inline-block">
                  <img
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                    aria-label="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Message input area */}
          <div className="flex gap-2 items-center">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-full transition flex items-center justify-center shrink-0"
              aria-label="Attach image"
              title="Attach images"
            >
              <ImageIcon className="w-6 h-6 text-gray-600" />
            </button>
            <Input
              type="text"
              placeholder="Type your message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="flex-1 rounded-full border-gray-300"
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageSelect}
              className="hidden"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="w-12 h-12 rounded-full p-0 shrink-0"
              disabled={!messageText.trim() && selectedImages.length === 0}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
