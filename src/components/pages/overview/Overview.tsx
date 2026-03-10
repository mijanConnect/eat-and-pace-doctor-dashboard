import {
  CalendarCheck,
  CircleDollarSign,
  ExternalLink,
  UserRound,
} from "lucide-react";
import AreaChartDemo from "./AreaChart";
import AppointmentList from "./AppoinmentList";
import PatientsUpdateTable from "./PatientsUpdateTable";

export default function Overview() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-blue-100 inline-block p-1 rounded-md">
            <CircleDollarSign className="size-8" stroke="#0088FF" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Revenue</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">$11,225</p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="bg-green-500 rounded-[5px] text-white px-1">
                +15%
              </span>{" "}
              vs last month
            </p>
          </div>
        </article>
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-green-100 inline-block p-1 rounded-md">
            <UserRound className="size-8" stroke="#2BB673" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">Total Patients</p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">400+</p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="bg-red-500 rounded-[5px] text-white px-1">
                -15%
              </span>{" "}
              vs last month
            </p>
          </div>
        </article>
        <article className="rounded-lg p-4 text-black shadow-[0_0_15px_4px_rgba(0,0,0,0.1)]">
          <div className="bg-[#6155F5]/10 inline-block p-1 rounded-md">
            <CalendarCheck className="size-8" stroke="#6155F5" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Total Appointments
          </p>
          <div className="flex justify-between items-baseline gap-2">
            <p className="mt-4 text-4xl font-semibold">806</p>
            <div className="flex justify-between items-baseline gap-2">
              <p className="text-sm text-gray-500 mt-1">
                <span className="bg-green-500 rounded-[5px] text-white px-1">
                  +10%
                </span>{" "}
                vs last month
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {/* LEFT SIDE - Takes 2 columns */}
        <div className="xl:col-span-2">
          <AreaChartDemo />

          <div className="shadow-[0_0_15px_4px_rgba(0,0,0,0.1)] p-4 rounded-lg bg-white text-card-foreground mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">Patients Update</h3>
              <div className="bg-gray-200 inline-block p-1 rounded-md">
                <a href="/patient-management" rel="noopener noreferrer">
                  <ExternalLink className="size-6 hover:stroke-blue-500" stroke="#9c9c9c" />
                </a>
              </div>
            </div>
            <PatientsUpdateTable />
          </div>
        </div>

        {/* RIGHT SIDE - Takes 1 column */}
        <div className="shadow-[0_0_15px_4px_rgba(0,0,0,0.1)] p-4 rounded-lg bg-white text-card-foreground">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-semibold">Today’s Appointment (10)</h3>
            <div className="bg-gray-200 inline-block p-1 rounded-md">
              <a href="/appointments-management" rel="noopener noreferrer">
                <ExternalLink className="size-6 hover:stroke-blue-500" stroke="#9c9c9c" />
              </a>
            </div>
          </div>
          <AppointmentList />
        </div>
      </div>
    </section>
  );
}
