import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";

type BookingData = {
  id: number;
  bookingId: string;
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  package: string;
  price: number;
  status: "Completed" | "Pending" | "Cancelled";
};

const columns: Column<BookingData>[] = [
  { key: "bookingId", label: "Booking ID", width: "10%" },

  { key: "name", label: "Name", width: "14%" },

  { key: "email", label: "Email", width: "18%" },

  { key: "bookingDate", label: "Booking Date", width: "12%" },

  { key: "bookingTime", label: "Booking Time", width: "10%" },

  { key: "package", label: "Package", width: "14%" },

  {
    key: "price",
    label: "Price",
    width: "8%",
    render: (value) => <span>${String(value)}</span>,
  },

  {
    key: "status",
    label: "Status",
    width: "12%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          value === "Completed"
            ? "bg-green-100 text-green-800 border border-green-300"
            : value === "Pending"
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
              : "bg-red-100 text-red-800 border border-red-300"
        }`}
      >
        {String(value)}
      </span>
    ),
  },
];

const actions: TableAction<BookingData>[] = [
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

const sampleData: BookingData[] = [
  {
    id: 1,
    bookingId: "#B1001",
    name: "John Doe",
    email: "john@example.com",
    bookingDate: "2026-03-01",
    bookingTime: "10:30 AM",
    package: "Basic Consultation",
    price: 50,
    status: "Completed",
  },
  {
    id: 2,
    bookingId: "#B1002",
    name: "Jane Smith",
    email: "jane@example.com",
    bookingDate: "2026-03-02",
    bookingTime: "12:00 PM",
    package: "Premium Health Plan",
    price: 120,
    status: "Pending",
  },
  {
    id: 3,
    bookingId: "#B1003",
    name: "Michael Lee",
    email: "michael@example.com",
    bookingDate: "2026-03-03",
    bookingTime: "03:15 PM",
    package: "Advanced Care",
    price: 150,
    status: "Completed",
  },
  {
    id: 4,
    bookingId: "#B1004",
    name: "Emily Brown",
    email: "emily@example.com",
    bookingDate: "2026-03-04",
    bookingTime: "09:45 AM",
    package: "Diabetic Care Plan",
    price: 90,
    status: "Cancelled",
  },
  {
    id: 5,
    bookingId: "#B1005",
    name: "David Wilson",
    email: "david@example.com",
    bookingDate: "2026-03-05",
    bookingTime: "11:20 AM",
    package: "Cardiac Package",
    price: 200,
    status: "Pending",
  },
  {
    id: 6,
    bookingId: "#B1006",
    name: "Olivia Martinez",
    email: "olivia@example.com",
    bookingDate: "2026-03-06",
    bookingTime: "02:00 PM",
    package: "Nutrition Plan",
    price: 80,
    status: "Completed",
  },
  {
    id: 7,
    bookingId: "#B1007",
    name: "Daniel Anderson",
    email: "daniel@example.com",
    bookingDate: "2026-03-07",
    bookingTime: "04:30 PM",
    package: "Hypertension Care",
    price: 110,
    status: "Pending",
  },
  {
    id: 8,
    bookingId: "#B1008",
    name: "Sophia Taylor",
    email: "sophia@example.com",
    bookingDate: "2026-03-08",
    bookingTime: "01:15 PM",
    package: "Anemia Treatment Plan",
    price: 95,
    status: "Completed",
  },
  {
    id: 9,
    bookingId: "#B1009",
    name: "James Thomas",
    email: "james@example.com",
    bookingDate: "2026-03-09",
    bookingTime: "10:00 AM",
    package: "Allergy Care",
    price: 70,
    status: "Cancelled",
  },
  {
    id: 10,
    bookingId: "#B1010",
    name: "Isabella White",
    email: "isabella@example.com",
    bookingDate: "2026-03-10",
    bookingTime: "11:45 AM",
    package: "Arthritis Therapy",
    price: 130,
    status: "Completed",
  },
  {
    id: 11,
    bookingId: "#B1011",
    name: "William Harris",
    email: "william@example.com",
    bookingDate: "2026-03-11",
    bookingTime: "03:00 PM",
    package: "Digestive Care Plan",
    price: 85,
    status: "Pending",
  },
  {
    id: 12,
    bookingId: "#B1012",
    name: "Ava Clark",
    email: "ava@example.com",
    bookingDate: "2026-03-12",
    bookingTime: "09:30 AM",
    package: "Vitamin Therapy",
    price: 60,
    status: "Completed",
  },
];

const handleRowClick = (item: BookingData) => {
  console.log("Row clicked:", item);
};

export default function TransactionsTable() {
  return (
    <DataTable<BookingData>
      columns={columns}
      data={sampleData}
      itemsPerPage={10}
      actions={actions}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
