"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomSelect from "@/components/common/CustomSelect";

export default function AcademicInfo() {
  const [medicalDegree, setMedicalDegree] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [experience, setExperience] = useState("");

  const [specialist, setSpecialist] = useState("");
  const [issuingAuthority, setIssuingAuthority] = useState("");
  const [practicingIn, setPracticingIn] = useState("");

  const specialistOptions = [
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "gynecology", label: "Gynecology" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-foreground">
        Academic Information
      </h2>

      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full space-y-4">
          {/* Medical Degree */}
          <div>
            <Label htmlFor="degree">Medical Degree</Label>
            <Input
              id="degree"
              placeholder="MBBS, MD"
              value={medicalDegree}
              onChange={(e) => setMedicalDegree(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Medical License Number */}
          <div>
            <Label htmlFor="license">Medical License Number</Label>
            <Input
              id="license"
              placeholder="Enter license number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Experience */}
          <div>
            <Label htmlFor="experience">Experience (Year)</Label>
            <Input
              id="experience"
              type="number"
              placeholder="5"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full space-y-4">
          {/* Specialist In */}
          <div>
            <Label>Specialist In</Label>
            <CustomSelect
              options={specialistOptions}
              value={specialist}
              onValueChange={setSpecialist}
              placeholder="Select specialization"
              className="w-full rounded-xl h-12.5 text-[16px]"
            />
          </div>

          {/* Issuing Authority */}
          <div>
            <Label htmlFor="authority">Issuing Authority</Label>
            <Input
              id="authority"
              placeholder="Bangladesh Medical & Dental Council"
              value={issuingAuthority}
              onChange={(e) => setIssuingAuthority(e.target.value)}
              className="rounded-xl"
            />
          </div>

          {/* Practicing In */}
          <div>
            <Label htmlFor="practice">Practicing In</Label>
            <Input
              id="practice"
              placeholder="Dhaka Medical College Hospital"
              value={practicingIn}
              onChange={(e) => setPracticingIn(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
