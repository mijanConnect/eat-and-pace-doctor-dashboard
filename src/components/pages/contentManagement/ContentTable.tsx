// ContentTable.tsx
"use client";

import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type ContentData = {
  id: number;
  serial: string;
  title: string;
  category: string;
  image: string; // URL
  description: string;
  date: string; // YYYY-MM-DD
  status: "Active" | "Inactive";
  actions?: TableAction<ContentData>[];
};

const sampleData: ContentData[] = [
  {
    id: 1,
    serial: "#1",
    title: "Healthy Eating Tips",
    category: "Nutrition",
    image: "https://picsum.photos/80/60?random=1",
    description: "Tips to maintain a balanced diet and stay healthy.",
    date: "2026-03-01",
    status: "Active",
  },
  {
    id: 2,
    serial: "#2",
    title: "Morning Workouts",
    category: "Fitness",
    image: "https://picsum.photos/80/60?random=2",
    description: "Start your day with these effective exercises.",
    date: "2026-03-02",
    status: "Inactive",
  },
  {
    id: 3,
    serial: "#3",
    title: "Stress Management",
    category: "Wellness",
    image: "https://picsum.photos/80/60?random=3",
    description: "Techniques to reduce stress and improve mental health.",
    date: "2026-03-03",
    status: "Active",
  },
  {
    id: 4,
    serial: "#4",
    title: "Heart Health Tips",
    category: "Cardiac",
    image: "https://picsum.photos/80/60?random=4",
    description: "Improve heart health with these lifestyle changes.",
    date: "2026-03-04",
    status: "Inactive",
  },
  {
    id: 5,
    serial: "#5",
    title: "Evening Yoga Routine",
    category: "Fitness",
    image: "https://picsum.photos/80/60?random=5",
    description: "Relax your mind and body with this yoga routine.",
    date: "2026-03-05",
    status: "Active",
  },
  {
    id: 6,
    serial: "#6",
    title: "Mindful Eating",
    category: "Nutrition",
    image: "https://picsum.photos/80/60?random=6",
    description: "Learn how to eat mindfully for better digestion.",
    date: "2026-03-06",
    status: "Inactive",
  },
];

const handleRowClick = (item: ContentData) => {
  console.log("Row clicked:", item);
};

export default function ContentTable() {
  const [data, setData] = useState<ContentData[]>(sampleData);

  const handleStatusToggle = (id: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: checked ? "Active" : "Inactive",
            }
          : item,
      ),
    );
  };

  const actions: TableAction<ContentData>[] = [
    {
      label: "Edit",
      onClick: (item) => console.log("Edit:", item),
      variant: "outline",
      size: "sm",
    },
    {
      label: "Delete",
      onClick: (item) => console.log("Delete:", item),
      variant: "destructive",
      size: "sm",
    },
  ];

  const columns: Column<ContentData>[] = [
    { key: "serial", label: "S.N", width: "5%" },

    { key: "title", label: "Content Title", width: "25%" },

    { key: "category", label: "Category", width: "10%" },

    {
      key: "image",
      label: "Image",
      width: "10%",
      render: (value) => (
        <img
          src={value as string}
          alt="content"
          className="h-10 w-16 object-cover rounded"
        />
      ),
    },

    { key: "description", label: "Description", width: "25%" },

    { key: "date", label: "Date", width: "15%" },

    {
      key: "status",
      label: "Status",
      width: "20%",
      render: (_, item) => (
        <div className="flex gap-2 items-center">
          <Switch
            checked={item.status === "Active"}
            onCheckedChange={(checked) => handleStatusToggle(item.id, checked)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable<ContentData>
      columns={columns}
      data={data}
      itemsPerPage={10}
      actions={actions}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
