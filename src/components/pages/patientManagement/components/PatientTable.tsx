import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import ViewPatient from "./ViewPatient";

type PatientsData = {
  id: number;
  serial: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  problem: string;
  nutrition: string;
  fitnessLevel: string;
  healthCondition: string;
  overallScore: string;
};

const columns: Column<PatientsData>[] = [
  { key: "serial", label: "S.N", width: "8%" },

  { key: "name", label: "Name", width: "14%" },

  { key: "gender", label: "Gender", width: "10%" },

  { key: "age", label: "Age", width: "8%" },

  { key: "problem", label: "Problem", width: "14%" },

  {
    key: "nutrition",
    label: "Nutrition",
    width: "12%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          value === "On track"
            ? "text-green-600"
            : value === "Improving"
              ? "text-yellow-600"
              : "text-red-600"
        }`}
      >
        {String(value)}
      </span>
    ),
  },

  {
    key: "fitnessLevel",
    label: "Fitness Level",
    width: "12%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          Number(value) >= 75
            ? "text-green-600"
            : Number(value) >= 60
              ? "text-yellow-600"
              : "text-red-600"
        }`}
      >
        {String(value)}%
      </span>
    ),
  },
  {
    key: "healthCondition",
    label: "Health Condition",
    width: "12%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          value === "Good"
            ? "text-green-600"
            : value === "Average"
              ? "text-yellow-600"
              : "text-red-600"
        }`}
      >
        {String(value)}
      </span>
    ),
  },
  {
    key: "overallScore",
    label: "Overall Score",
    width: "10%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          Number(value) >= 80
            ? "bg-green-100 text-green-800 border border-green-300"
            : Number(value) >= 50
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
              : "bg-red-100 text-red-800 border border-red-300"
        }`}
      >
        {String(value)}/100
      </span>
    ),
  },
];

const sampleData: PatientsData[] = [
  {
    id: 1,
    serial: "#1001",
    name: "Jhone Doe",
    gender: "Male",
    age: 42,
    problem: "High fever",
    nutrition: "On track",
    fitnessLevel: "75",
    healthCondition: "Good",
    overallScore: "80",
  },
  {
    id: 2,
    serial: "#1002",
    name: "Jane Smith",
    gender: "Female",
    age: 35,
    problem: "Back Pain",
    nutrition: "Improving",
    fitnessLevel: "60",
    healthCondition: "Average",
    overallScore: "72",
  },
  {
    id: 3,
    serial: "#1003",
    name: "Michael Lee",
    gender: "Male",
    age: 29,
    problem: "Migraine",
    nutrition: "Good",
    fitnessLevel: "82",
    healthCondition: "Stable",
    overallScore: "85",
  },
  {
    id: 4,
    serial: "#1004",
    name: "Emily Brown",
    gender: "Female",
    age: 31,
    problem: "Thyroid",
    nutrition: "Balanced",
    fitnessLevel: "70",
    healthCondition: "Good",
    overallScore: "78",
  },
  {
    id: 5,
    serial: "#1005",
    name: "David Wilson",
    gender: "Male",
    age: 50,
    problem: "Diabetes",
    nutrition: "Strict Diet",
    fitnessLevel: "55",
    healthCondition: "Under Control",
    overallScore: "68",
  },
  {
    id: 6,
    serial: "#1006",
    name: "Olivia Martinez",
    gender: "Female",
    age: 27,
    problem: "Asthma",
    nutrition: "Balanced",
    fitnessLevel: "65",
    healthCondition: "Stable",
    overallScore: "74",
  },
  {
    id: 7,
    serial: "#1007",
    name: "Daniel Anderson",
    gender: "Male",
    age: 45,
    problem: "Hypertension",
    nutrition: "Low Sodium",
    fitnessLevel: "58",
    healthCondition: "Average",
    overallScore: "69",
  },
  {
    id: 8,
    serial: "#1008",
    name: "Sophia Taylor",
    gender: "Female",
    age: 33,
    problem: "Anemia",
    nutrition: "Iron Rich Diet",
    fitnessLevel: "77",
    healthCondition: "Improving",
    overallScore: "82",
  },
  {
    id: 9,
    serial: "#1009",
    name: "James Thomas",
    gender: "Male",
    age: 38,
    problem: "Allergy",
    nutrition: "Normal",
    fitnessLevel: "73",
    healthCondition: "Good",
    overallScore: "79",
  },
  {
    id: 10,
    serial: "#1010",
    name: "Isabella White",
    gender: "Female",
    age: 41,
    problem: "Arthritis",
    nutrition: "Supplemented",
    fitnessLevel: "52",
    healthCondition: "Under Treatment",
    overallScore: "64",
  },
  {
    id: 11,
    serial: "#1011",
    name: "William Harris",
    gender: "Male",
    age: 36,
    problem: "Gastritis",
    nutrition: "Controlled Diet",
    fitnessLevel: "68",
    healthCondition: "Stable",
    overallScore: "76",
  },
  {
    id: 12,
    serial: "#1012",
    name: "Ava Clark",
    gender: "Female",
    age: 30,
    problem: "Vitamin Deficiency",
    nutrition: "Improving",
    fitnessLevel: "80",
    healthCondition: "Good",
    overallScore: "83",
  },
];
const handleRowClick = (item: PatientsData) => {
  console.log("Row clicked:", item);
};

export default function PatientTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<PatientsData | null>(null);

  const openModal = (item: PatientsData) => {
    setSelectedAppointment(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const actions: TableAction<PatientsData>[] = [
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
      <DataTable<PatientsData>
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
        title="Patient Details"
        maxWidth="max-w-[1200px]"
        width="w-[60%]"
      >
        {selectedAppointment && <ViewPatient patient={selectedAppointment} />}
      </Modal>
    </>
  );
}
