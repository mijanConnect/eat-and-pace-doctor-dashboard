"use client";

import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import BusinessTable from "./BusinessTable";
import CustomButton from "@/components/common/CustomButton";

interface SearchBarProps {
  onSearch?: (value: string) => void;
  onFilterChange?: (value: string) => void;
}

export default function BusinessSettings({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setQuery(value);
    onSearch?.(value);
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

        {/* Create Button */}
        <CustomButton variant="default" size="default">
          <Plus className="h-5 w-5 white" />
          Create Package
        </CustomButton>
      </div>

      {/* Table */}
      <BusinessTable />
    </div>
  );
}
