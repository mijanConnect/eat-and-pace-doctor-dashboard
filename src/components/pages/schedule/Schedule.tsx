import CustomTable from "@/components/common/CustomTable";

export default function Schedule() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Schedule</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage and track your health appointments
        </p>
      </div>

      <article className="rounded-lg border border-border bg-card p-6 text-card-foreground">
        <p className="text-muted-foreground">
          Your appointments will appear here. Schedule new appointments to get
          started.
        </p>
      </article>

      <CustomTable />
    </section>
  );
}
