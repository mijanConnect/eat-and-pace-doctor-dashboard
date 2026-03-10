"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/common/CustomSelect";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

interface FilterProps {
  onFilterChange?: (value: string) => void;
}

export default function PersonalInfo({ onFilterChange }: FilterProps) {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [filter, setFilter] = useState("male");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState<Date | undefined>();

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange?.(value);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-foreground">
        Personal Information
      </h2>

      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full space-y-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="full-name">Full Name</Label>
            <Input
              id="full-name"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Gender */}
          <div>
            <Label>Gender</Label>
            <CustomSelect
              options={genderOptions}
              value={filter}
              onValueChange={handleFilterChange}
              placeholder="Select gender"
              className="w-full rounded-xl h-12.5 text-[16px]"
            />
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full space-y-4">
          {/* Designation */}
          <div>
            <Label>Designation</Label>
            <Input
              placeholder="Intern Doctor"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <Label>Date of Birth</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal rounded-xl border-gray-200 text-gray-500 hover:text-gray-500 bg-[#F7F9FC] hover:bg-[#F7F9FC] focus:ring-[#F7F9FC] h-12.5 text-[16px]"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />

                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Contact */}
          <div>
            <Label>Contact Number</Label>
            <Input
              type="tel"
              placeholder="+880 1XXXXXXXXX"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
