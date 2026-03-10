import type { Column, TableAction } from "@/components/common/DataTable";
import DataTable from "@/components/common/DataTable";

type PatientData = {
  id: number;
  name: string;
  gender: "Male" | "Female";
  age: number;
  problem: string;
  nutrition: string;
  fitnessLevel: "Low" | "Moderate" | "High";
  healthCondition: string;
  overallScore: unknown;
};

const columns: Column<PatientData>[] = [
  { key: "id", label: "S.N", width: "6%" },

  { key: "name", label: "Name", width: "14%" },

  { key: "gender", label: "Gender", width: "8%" },

  { key: "age", label: "Age", width: "6%" },

  { key: "problem", label: "Problem", width: "14%" },

  { key: "nutrition", label: "Nutrition", width: "12%" },

  {
    key: "fitnessLevel",
    label: "Fitness Level",
    width: "12%",
    render: (value) => (
      <span
        className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
          value === "High"
            ? "bg-green-100 text-green-800 border border-green-300"
            : value === "Moderate"
              ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
              : "bg-red-100 text-red-800 border border-red-300"
        }`}
      >
        {String(value)}
      </span>
    ),
  },

  { key: "healthCondition", label: "Health Condition", width: "14%" },

  {
    key: "overallScore",
    label: "Overall Score",
    width: "10%",
    render: (value: unknown) => {
      const score = value as number;
      return (
        <span
          className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
            score >= 80
              ? "bg-green-100 text-green-800 border border-green-300"
              : score >= 60
                ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {String(score)}/100
        </span>
      );
    },
  },
];

const actions: TableAction<PatientData>[] = [
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

const patientData: PatientData[] = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    age: 34,
    problem: "Back Pain",
    nutrition: "Average",
    fitnessLevel: "Moderate",
    healthCondition: "Stable",
    overallScore: 82,
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    age: 29,
    problem: "Weight Gain",
    nutrition: "Poor",
    fitnessLevel: "Low",
    healthCondition: "Needs Monitoring",
    overallScore: 65,
  },
  {
    id: 3,
    name: "Michael Johnson",
    gender: "Male",
    age: 41,
    problem: "High Blood Pressure",
    nutrition: "Good",
    fitnessLevel: "High",
    healthCondition: "Critical",
    overallScore: 58,
  },
  {
    id: 4,
    name: "Emily Brown",
    gender: "Female",
    age: 36,
    problem: "Diabetes",
    nutrition: "Controlled Diet",
    fitnessLevel: "Low",
    healthCondition: "Stable",
    overallScore: 72,
  },
  {
    id: 5,
    name: "David Wilson",
    gender: "Male",
    age: 50,
    problem: "Heart Issue",
    nutrition: "Strict Diet",
    fitnessLevel: "Low",
    healthCondition: "Under Treatment",
    overallScore: 55,
  },
  {
    id: 6,
    name: "Sophia Taylor",
    gender: "Female",
    age: 27,
    problem: "Migraine",
    nutrition: "Good",
    fitnessLevel: "High",
    healthCondition: "Stable",
    overallScore: 88,
  },
  {
    id: 7,
    name: "James Anderson",
    gender: "Male",
    age: 45,
    problem: "Knee Pain",
    nutrition: "Average",
    fitnessLevel: "Moderate",
    healthCondition: "Improving",
    overallScore: 74,
  },
  {
    id: 8,
    name: "Olivia Thomas",
    gender: "Female",
    age: 32,
    problem: "Thyroid",
    nutrition: "Balanced",
    fitnessLevel: "Moderate",
    healthCondition: "Stable",
    overallScore: 80,
  },
  {
    id: 9,
    name: "William Martin",
    gender: "Male",
    age: 39,
    problem: "Obesity",
    nutrition: "Poor",
    fitnessLevel: "Low",
    healthCondition: "Needs Attention",
    overallScore: 60,
  },
  {
    id: 10,
    name: "Ava White",
    gender: "Female",
    age: 30,
    problem: "Stress",
    nutrition: "Balanced",
    fitnessLevel: "High",
    healthCondition: "Stable",
    overallScore: 90,
  },
  {
    id: 11,
    name: "Daniel Harris",
    gender: "Male",
    age: 48,
    problem: "Cholesterol",
    nutrition: "Strict Diet",
    fitnessLevel: "Moderate",
    healthCondition: "Under Treatment",
    overallScore: 69,
  },
  {
    id: 12,
    name: "Isabella Clark",
    gender: "Female",
    age: 26,
    problem: "Anemia",
    nutrition: "Improving",
    fitnessLevel: "Moderate",
    healthCondition: "Recovering",
    overallScore: 76,
  },
];

const handleRowClick = (item: PatientData) => {
  console.log("Row clicked:", item);
};

export default function PatientsUpdateTable() {
  return (
    <DataTable<PatientData>
      columns={columns}
      data={patientData}
      itemsPerPage={5}
      actions={actions}
      rowKey="id"
      onRowClick={handleRowClick}
    />
  );
}
