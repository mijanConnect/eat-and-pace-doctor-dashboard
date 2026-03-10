import { useState } from "react";
import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import ViewAppointment from "./ViewAppointment";

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

const columns: Column<AppointmentData>[] = [
  { key: "id", label: "S.N", width: "6%" },

  { key: "name", label: "Name", width: "14%" },

  { key: "gender", label: "Gender", width: "8%" },

  { key: "age", label: "Age", width: "6%" },

  { key: "problem", label: "Problem", width: "14%" },

  { key: "bookingDate", label: "Booking Date", width: "12%" },

  { key: "bookingTime", label: "Booking Time", width: "10%" },

  { key: "package", label: "Package", width: "15%" },

  {
    key: "status",
    label: "Status",
    width: "10%",
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

const sampleData: AppointmentData[] = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 34,
    email: "johndoe@example.com",
    problem: "Back Pain",
    bookingDate: "2026-03-01",
    bookingTime: "10:30 AM",
    package: "Basic Consultation",
    status: "Completed",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 29,
    email: "janesmith@example.com",
    problem: "Weight Gain",
    bookingDate: "2026-03-02",
    bookingTime: "12:00 PM",
    package: "Premium Health Plan",
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Johnson",
    gender: "Male",
    age: 41,
    email: "michaeljohnson@example.com",
    problem: "High Blood Pressure",
    bookingDate: "2026-03-03",
    bookingTime: "03:15 PM",
    package: "Advanced Care",
    status: "Completed",
  },
  {
    id: 4,
    name: "Emily Brown",
    gender: "Female",
    age: 36,
    email: "emilybrown@example.com",
    problem: "Diabetes",
    bookingDate: "2026-03-04",
    bookingTime: "09:45 AM",
    package: "Diabetic Care Plan",
    status: "Cancelled",
  },
  {
    id: 5,
    name: "David Wilson",
    gender: "Male",
    age: 50,
    email: "davidwilson@example.com",
    problem: "Heart Issue",
    bookingDate: "2026-03-05",
    bookingTime: "11:20 AM",
    package: "Cardiac Package",
    status: "Pending",
  },
  {
    id: 6,
    name: "Sophia Taylor",
    gender: "Female",
    age: 27,
    email: "emilybrown@example.com",
    problem: "Migraine",
    bookingDate: "2026-03-06",
    bookingTime: "02:10 PM",
    package: "Neurology Consultation",
    status: "Completed",
  },
  {
    id: 7,
    name: "James Anderson",
    gender: "Male",
    age: 45,
    email: "emilybrown@example.com",
    problem: "Knee Pain",
    bookingDate: "2026-03-07",
    bookingTime: "04:00 PM",
    package: "Orthopedic Plan",
    status: "Pending",
  },
  {
    id: 8,
    name: "Olivia Thomas",
    gender: "Female",
    age: 32,
    email: "emilybrown@example.com",
    problem: "Thyroid",
    bookingDate: "2026-03-08",
    bookingTime: "01:30 PM",
    package: "Thyroid Monitoring",
    status: "Completed",
  },
  {
    id: 9,
    name: "William Martin",
    gender: "Male",
    age: 39,
    email: "emilybrown@example.com",
    problem: "Obesity",
    bookingDate: "2026-03-09",
    bookingTime: "10:00 AM",
    package: "Weight Loss Program",
    status: "Pending",
  },
  {
    id: 10,
    name: "Ava White",
    gender: "Female",
    age: 30,
    email: "emilybrown@example.com",
    problem: "Stress",
    bookingDate: "2026-03-10",
    bookingTime: "05:00 PM",
    package: "Mental Wellness",
    status: "Completed",
  },
  {
    id: 11,
    name: "Daniel Harris",
    gender: "Male",
    age: 48,
    email: "emilybrown@example.com",
    problem: "Cholesterol",
    bookingDate: "2026-03-11",
    bookingTime: "09:00 AM",
    package: "Heart Checkup",
    status: "Pending",
  },
  {
    id: 12,
    name: "Isabella Clark",
    gender: "Female",
    age: 26,
    email: "emilybrown@example.com",
    problem: "Anemia",
    bookingDate: "2026-03-12",
    bookingTime: "03:30 PM",
    package: "General Health Plan",
    status: "Completed",
  },
];

const handleRowClick = (item: AppointmentData) => {
  console.log("Row clicked:", item);
};

export default function AppointmentsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentData | null>(null);

  const openModal = (item: AppointmentData) => {
    setSelectedAppointment(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const actions: TableAction<AppointmentData>[] = [
    {
      label: "View",
      onClick: (item) => openModal(item),
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

  return (
    <>
      <DataTable<AppointmentData>
        columns={columns}
        data={sampleData}
        itemsPerPage={10}
        actions={actions}
        rowKey="id"
        onRowClick={handleRowClick}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Appointment Details"
        maxWidth="max-w-[1200px]"
        width="w-[60%]"
      >
        {selectedAppointment && (
          <ViewAppointment appointment={selectedAppointment} />
        )}
      </Modal>
    </>
  );
}
