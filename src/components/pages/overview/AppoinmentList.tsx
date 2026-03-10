import AppointmentCard from "./AppointmentCard";

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  avatar: string;
  initials: string;
  genderAge: string;
  description: string;
}

const dummyAppointments: Appointment[] = [
  {
    id: "APT003",
    patientName: "Sarah Williams",
    time: "11:00 AM",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    initials: "SW",
    genderAge: "Female, 42 Years",
    description: "Regular checkup and blood pressure monitoring required...",
  },
  {
    id: "APT004",
    patientName: "James Smith",
    time: "11:30 AM",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    initials: "JS",
    genderAge: "Male, 55 Years",
    description: "Follow-up consultation for diabetes management...",
  },
  {
    id: "APT005",
    patientName: "Emma Davis",
    time: "02:00 PM",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    initials: "ED",
    genderAge: "Female, 31 Years",
    description: "Back pain issues. Need physical therapy assessment...",
  },
  {
    id: "APT006",
    patientName: "David Martinez",
    time: "02:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    initials: "DM",
    genderAge: "Male, 48 Years",
    description: "Allergy consultation and prescription refill needed...",
  },
  {
    id: "APT007",
    patientName: "Lisa Anderson",
    time: "03:00 PM",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    initials: "LA",
    genderAge: "Female, 26 Years",
    description: "Skin condition assessment and treatment plan...",
  },
  {
    id: "APT008",
    patientName: "Robert Brown",
    time: "03:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    initials: "RB",
    genderAge: "Male, 60 Years",
    description: "Annual health checkup and lab tests review...",
  },
  {
    id: "APT009",
    patientName: "Jennifer Taylor",
    time: "04:00 PM",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    initials: "JT",
    genderAge: "Female, 38 Years",
    description: "Joint pain and arthritis management consultation...",
  },
  {
    id: "APT010",
    patientName: "Christopher Lee",
    time: "04:30 PM",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    initials: "CL",
    genderAge: "Male, 52 Years",
    description: "Weight management and nutrition counseling session...",
  },
  {
    id: "APT001",
    patientName: "Angelina Joseph",
    time: "10:00 AM",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    initials: "AJ",
    genderAge: "Female, 28 Years",
    description:
      "Last few days I'm suffering from high fever. Could you please assist me...",
  },
  {
    id: "APT002",
    patientName: "Michael Chen",
    time: "10:30 AM",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    initials: "MC",
    genderAge: "Male, 35 Years",
    description:
      "Experiencing persistent headaches and fatigue. Need consultation...",
  },
];

export default function AppointmentList() {
  return (
    <div className="space-y-3 h-208.75 overflow-y-auto px-2 py-4 custom-scrollbar">
      {dummyAppointments.map((appointment) => (
        <AppointmentCard
          key={appointment.id}
          id={appointment.id}
          patientName={appointment.patientName}
          time={appointment.time}
          avatar={appointment.avatar}
          initials={appointment.initials}
          genderAge={appointment.genderAge}
          description={appointment.description}
        />
      ))}
    </div>
  );
}
