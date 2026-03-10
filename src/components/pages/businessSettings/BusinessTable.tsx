import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

type PackageData = {
  id: number;
  serial: string;
  packageName: string;
  contactType: "Video Call" | "In-Person";
  schedule: string;
  price: number;
  status: "Active" | "Inactive";
  actions?: TableAction<PackageData>[];
};

const initialData: PackageData[] = [
  {
    id: 1,
    serial: "#1",
    packageName: "Basic Consultation",
    contactType: "Video Call",
    schedule: "Mon - Fri (10:00 AM - 2:00 PM)",
    price: 50,
    status: "Active",
  },
  {
    id: 2,
    serial: "#2",
    packageName: "Premium Health Plan",
    contactType: "In-Person",
    schedule: "Mon - Sat (9:00 AM - 5:00 PM)",
    price: 120,
    status: "Active",
  },
  {
    id: 3,
    serial: "#3",
    packageName: "Advanced Care",
    contactType: "Video Call",
    schedule: "Tue - Thu (1:00 PM - 6:00 PM)",
    price: 150,
    status: "Inactive",
  },
  {
    id: 4,
    serial: "#4",
    packageName: "Cardiac Package",
    contactType: "In-Person",
    schedule: "Wed - Sat (11:00 AM - 4:00 PM)",
    price: 200,
    status: "Active",
  },
  {
    id: 5,
    serial: "#5",
    packageName: "Nutrition Plan",
    contactType: "Video Call",
    schedule: "Daily (8:00 AM - 12:00 PM)",
    price: 80,
    status: "Inactive",
  },
  {
    id: 6,
    serial: "#6",
    packageName: "Diabetic Care Plan",
    contactType: "In-Person",
    schedule: "Mon - Fri (10:00 AM - 3:00 PM)",
    price: 95,
    status: "Active",
  },
  {
    id: 7,
    serial: "#7",
    packageName: "Hypertension Care",
    contactType: "Video Call",
    schedule: "Tue - Sat (9:00 AM - 1:00 PM)",
    price: 110,
    status: "Active",
  },
  {
    id: 8,
    serial: "#8",
    packageName: "Anemia Treatment Plan",
    contactType: "In-Person",
    schedule: "Wed - Sun (12:00 PM - 5:00 PM)",
    price: 95,
    status: "Inactive",
  },
  {
    id: 9,
    serial: "#9",
    packageName: "Allergy Care",
    contactType: "Video Call",
    schedule: "Mon - Fri (11:00 AM - 2:00 PM)",
    price: 70,
    status: "Active",
  },
  {
    id: 10,
    serial: "#10",
    packageName: "Arthritis Therapy",
    contactType: "In-Person",
    schedule: "Tue - Sat (10:00 AM - 4:00 PM)",
    price: 130,
    status: "Inactive",
  },
  {
    id: 11,
    serial: "#11",
    packageName: "Digestive Care Plan",
    contactType: "Video Call",
    schedule: "Mon - Thu (9:30 AM - 12:30 PM)",
    price: 85,
    status: "Active",
  },
  {
    id: 12,
    serial: "#12",
    packageName: "Vitamin Therapy",
    contactType: "In-Person",
    schedule: "Daily (8:00 AM - 11:00 AM)",
    price: 60,
    status: "Active",
  },
];

const handleRowClick = (item: PackageData) => {
  console.log("Row clicked:", item);
};

export default function PackageTable() {
  const [data, setData] = useState<PackageData[]>(initialData);

  const handleStatusToggle = (id: number, checked: boolean) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: checked ? "Active" : "Inactive" }
          : item,
      ),
    );
  };

  const columns: Column<PackageData>[] = [
    { key: "serial", label: "S.N", width: "8%" },

    { key: "packageName", label: "Package Name", width: "22%" },

    { key: "contactType", label: "Contact Type", width: "15%" },

    { key: "schedule", label: "Schedule", width: "20%" },

    {
      key: "price",
      label: "Price",
      width: "15%",
      render: (value) => <span>${String(value)}</span>,
    },

    {
      key: "status",
      label: "Status",
      width: "20%",
      render: (value) => (
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
            value === "Active"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {String(value)}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      width: "20%",
      render: (_, item) => (
        <div className="flex gap-2 items-center justify-center">
          <Switch
            checked={item.status === "Active"}
            onCheckedChange={(checked) => handleStatusToggle(item.id, checked)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable<PackageData>
      columns={columns}
      data={data}
      itemsPerPage={10}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
