import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppointmentCardProps {
  id: string;
  patientName: string;
  time: string;
  avatar: string;
  initials: string;
  genderAge: string;
  description: string;
}

export default function AppointmentCard({
  patientName,
  time,
  avatar,
  initials,
  genderAge,
  description,
}: AppointmentCardProps) {
  return (
    <>
      <div>
        <div className="rounded-lg bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.07)] p-4 text-card-foreground">
          <div className="flex items-center gap-4">
            <Avatar className="h-28 w-28">
              <AvatarImage src={avatar} alt={patientName} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{patientName}</h3>
                <p className="text-md text-blue-500 font-medium">{time}</p>
              </div>
              <p className="text-gray-500">{genderAge}</p>
              <p className="mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
