import DataTable from "./DataTable";
import type { Column, TableAction } from "./DataTable";

interface SampleData {
  id: number;
  name: string;
  email: string;
  status: string;
  date: string;
}

const columns: Column<SampleData>[] = [
  { key: "name", label: "Name", width: "25%" },
  { key: "email", label: "Email", width: "30%" },
  {
    key: "status",
    label: "Status",
    width: "15%",
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
  { key: "date", label: "Date", width: "20%" },
];

const actions: TableAction<SampleData>[] = [
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

const sampleData: SampleData[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Completed",
    date: "2024-03-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Pending",
    date: "2024-03-02",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    status: "Completed",
    date: "2024-03-03",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    status: "Cancelled",
    date: "2024-03-04",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    status: "Pending",
    date: "2024-03-05",
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "diana@example.com",
    status: "Completed",
    date: "2024-03-06",
  },
  {
    id: 7,
    name: "Eve Frank",
    email: "eve@example.com",
    status: "Pending",
    date: "2024-03-07",
  },
  {
    id: 8,
    name: "Frank Garcia",
    email: "frank@example.com",
    status: "Completed",
    date: "2024-03-08",
  },
];

const handleRowClick = (item: SampleData) => {
  console.log("Row clicked:", item);
};

export default function CustomTable() {
  return (
    <DataTable<SampleData>
      columns={columns}
      data={sampleData}
      itemsPerPage={5}
      actions={actions}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
