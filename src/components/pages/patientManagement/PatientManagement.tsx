"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import PatientTable from "./components/PatientTable";
import CustomSelect from "@/components/common/CustomSelect";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "high", label: "High Fitness" },
  { value: "low", label: "Low Fitness" },
];

interface SearchBarProps {
  onSearch?: (value: string) => void;
  onFilterChange?: (value: string) => void;
}

export default function PatientManagement({
  onSearch,
  onFilterChange,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSearchChange = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilterChange?.(value);
  };

  return (
    <div className="space-y-4">
      {/* Search + Select Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-end">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search here..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 rounded-full"
          />
        </div>

        {/* Select Dropdown */}
        <CustomSelect
          options={filterOptions}
          value={filter}
          onValueChange={handleFilterChange}
          placeholder="Filter by"
          className="rounded-full max-w-37 px-5 h-12.5 text-[16px] bg-primary text-white"
        />
      </div>

      {/* Table */}
      <PatientTable />
    </div>
  );
}
