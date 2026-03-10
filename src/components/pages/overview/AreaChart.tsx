import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from "recharts";
import CustomSelect from "@/components/common/CustomSelect";

const chartData = {
  2024: [
    {
      month: "Jan",
      revenue: 4000,
      patients: 2400,
      appointments: 2210,
    },
    {
      month: "Feb",
      revenue: 3000,
      patients: 1398,
      appointments: 2108,
    },
    {
      month: "Mar",
      revenue: 2000,
      patients: 9800,
      appointments: 2290,
    },
    {
      month: "Apr",
      revenue: 2780,
      patients: 3908,
      appointments: 2000,
    },
    {
      month: "May",
      revenue: 1890,
      patients: 4800,
      appointments: 2181,
    },
    {
      month: "Jun",
      revenue: 2390,
      patients: 3800,
      appointments: 2500,
    },
    {
      month: "Jul",
      revenue: 3490,
      patients: 4300,
      appointments: 2100,
    },
    {
      month: "Aug",
      revenue: 4200,
      patients: 5100,
      appointments: 2800,
    },
    {
      month: "Sep",
      revenue: 3800,
      patients: 4600,
      appointments: 2400,
    },
    {
      month: "Oct",
      revenue: 4500,
      patients: 5800,
      appointments: 3100,
    },
    {
      month: "Nov",
      revenue: 5200,
      patients: 6200,
      appointments: 3500,
    },
    {
      month: "Dec",
      revenue: 6100,
      patients: 7100,
      appointments: 4000,
    },
  ],
  2025: [
    {
      month: "Jan",
      revenue: 5500,
      patients: 3200,
      appointments: 2800,
    },
    {
      month: "Feb",
      revenue: 4800,
      patients: 2800,
      appointments: 2400,
    },
    {
      month: "Mar",
      revenue: 6200,
      patients: 5400,
      appointments: 3200,
    },
    {
      month: "Apr",
      revenue: 5800,
      patients: 4600,
      appointments: 2900,
    },
    {
      month: "May",
      revenue: 6500,
      patients: 5800,
      appointments: 3400,
    },
    {
      month: "Jun",
      revenue: 7200,
      patients: 6500,
      appointments: 3900,
    },
    {
      month: "Jul",
      revenue: 7900,
      patients: 7200,
      appointments: 4300,
    },
    {
      month: "Aug",
      revenue: 8200,
      patients: 7800,
      appointments: 4600,
    },
    {
      month: "Sep",
      revenue: 7600,
      patients: 7100,
      appointments: 4200,
    },
    {
      month: "Oct",
      revenue: 8800,
      patients: 8300,
      appointments: 4800,
    },
    {
      month: "Nov",
      revenue: 9200,
      patients: 8700,
      appointments: 5100,
    },
    {
      month: "Dec",
      revenue: 10100,
      patients: 9500,
      appointments: 5600,
    },
  ],
  2026: [
    {
      month: "Jan",
      revenue: 6800,
      patients: 4200,
      appointments: 3100,
    },
    {
      month: "Feb",
      revenue: 6200,
      patients: 3800,
      appointments: 2900,
    },
    {
      month: "Mar",
      revenue: 7100,
      patients: 5100,
      appointments: 3400,
    },
    {
      month: "Apr",
      revenue: 6900,
      patients: 4900,
      appointments: 3200,
    },
    {
      month: "May",
      revenue: 7600,
      patients: 5600,
      appointments: 3600,
    },
    {
      month: "Jun",
      revenue: 8300,
      patients: 6200,
      appointments: 4000,
    },
    {
      month: "Jul",
      revenue: 8900,
      patients: 6800,
      appointments: 4400,
    },
    {
      month: "Aug",
      revenue: 9300,
      patients: 7200,
      appointments: 4600,
    },
    {
      month: "Sep",
      revenue: 8700,
      patients: 6900,
      appointments: 4300,
    },
    {
      month: "Oct",
      revenue: 9800,
      patients: 7600,
      appointments: 4900,
    },
    {
      month: "Nov",
      revenue: 10200,
      patients: 8100,
      appointments: 5200,
    },
    {
      month: "Dec",
      revenue: 11100,
      patients: 8900,
      appointments: 5800,
    },
  ],
};

export default function AreaChartDemo() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const data = chartData[Number(selectedYear) as 2024 | 2025 | 2026];

  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white shadow-[0_0_15px_4px_rgba(0,0,0,0.1)] p-4 text-card-foreground">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-semibold">Earning Overview</h2>
          <CustomSelect
            options={yearOptions}
            value={selectedYear}
            onValueChange={setSelectedYear}
            placeholder="Select year"
            className="w-24"
          />
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2BB673" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2BB673" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2BB673"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <h2 className="text-lg font-semibold mb-4">
          Patient & Appointments Trends
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="colorAppointments"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="patients"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorPatients)"
            />
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="#a855f7"
              fillOpacity={1}
              fill="url(#colorAppointments)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
}
