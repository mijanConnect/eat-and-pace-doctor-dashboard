type AppointmentData = {
  id: number;
  name: string;
  gender?: "Male" | "Female";
  age: number;
  email?: string;
  problem?: string;
  bookingDate?: string;
  bookingTime?: string;
  package?: string;
  status?: "Completed" | "Pending" | "Cancelled";
};

interface ViewAppointmentProps {
  appointment: AppointmentData;
}

export default function AppointmentOverview({
  appointment,
}: ViewAppointmentProps) {
  return (
    <div>
      {/* Part one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-4">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
            Booking Details
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">Name</p>
              <p className="text-sm sm:text-base text-gray-500">Gender</p>
              <p className="text-sm sm:text-base text-gray-500">Age</p>
              <p className="text-sm sm:text-base text-gray-500">Problem</p>
              <p className="text-sm sm:text-base text-gray-500">
                Selected Package
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Selected Date
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Selected Hour
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.name}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.gender}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.age}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.problem}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.package}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.bookingDate}
              </p>
              <p className="text-sm sm:text-base font-semibold">
                : {appointment.bookingTime}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground border-b border-gray-300 pb-2">
            Patients Personal Information
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">Gender</p>
              <p className="text-sm sm:text-base text-gray-500">Age</p>
              <p className="text-sm sm:text-base text-gray-500">Height</p>
              <p className="text-sm sm:text-base text-gray-500">
                Health Condition
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Food Allergies
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Eat Preference
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Fitness Experience
              </p>
              <p className="text-sm sm:text-base text-gray-500">Health Goal</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">: Female</p>
              <p className="text-sm sm:text-base font-semibold">: 42</p>
              <p className="text-sm sm:text-base font-semibold">: 5.6 Feet</p>
              <p className="text-sm sm:text-base font-semibold">: Diabetes</p>
              <p className="text-sm sm:text-base font-semibold">: Beef</p>
              <p className="text-sm sm:text-base font-semibold">
                : Non Vegetarian
              </p>
              <p className="text-sm sm:text-base font-semibold">: Beginner</p>
              <p className="text-sm sm:text-base font-semibold">
                : Weight Loss
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Physical Progress
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <img
                src="https://picsum.photos/200/150?random=1"
                alt="progress-1"
                className="w-16 sm:w-20 h-20 sm:h-25 object-cover rounded-lg"
              />
              <img
                src="https://picsum.photos/200/150?random=2"
                alt="progress-2"
                className="w-16 sm:w-20 h-20 sm:h-25 object-cover rounded-lg"
              />
              <img
                src="https://picsum.photos/200/150?random=3"
                alt="progress-3"
                className="w-16 sm:w-20 h-20 sm:h-25 object-cover rounded-lg"
              />
              <img
                src="https://picsum.photos/200/150?random=4"
                alt="progress-4"
                className="w-16 sm:w-20 h-20 sm:h-25 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Part two */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-8">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-blue-500 border-b border-gray-300 pb-2">
            Diet And Nutrition
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">Diet</p>
              <p className="text-sm sm:text-base text-gray-500">
                Calorie Target
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Nutrition Status
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">: Keto Plan</p>
              <p className="text-sm sm:text-base font-semibold">: 2000</p>
              <p className="text-sm sm:text-base font-semibold">: Good</p>
            </div>
          </div>
          <p className="text-sm sm:text-base font-semibold text-primary text-center mt-5">
            05 Days Logged this week
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-[#00C8B3] border-b border-gray-300 pb-2">
            Fitness Activity
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 mt-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-500">
                Fitness Level
              </p>
              <p className="text-sm sm:text-base text-gray-500">Last Workout</p>
              <p className="text-sm sm:text-base text-gray-500">
                Weekly Workout
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base font-semibold">
                : Intermediate
              </p>
              <p className="text-sm sm:text-base font-semibold">: Yesterday</p>
              <p className="text-sm sm:text-base font-semibold">: 3/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Part three */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-8">
        <div className="flex flex-col gap-5">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-primary border-b border-gray-300 pb-2">
              Log In Activity
            </h2>
            <p className="text-base sm:text-lg font-semibold mt-4">
              05 Days Logged this week
            </p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
            <h2 className="text-lg sm:text-xl font-semibold text-red-500 border-b border-gray-300 pb-2">
              Alerts
            </h2>
            <p className="text-base sm:text-lg font-semibold mt-4">
              05 Days Logged this week
            </p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-yellow-700 border-b border-gray-300 pb-2">
            Recent Activity
          </h2>
          <div className="mt-4">
            <ul className="list-disc pl-5 space-y-3">
              <li className="text-sm sm:text-base border-b border-gray-300 pb-2">
                <span className="text-gray-500">Fitness Level:</span>{" "}
                <span className="font-semibold">Intermediate</span>
              </li>

              <li className="text-sm sm:text-base border-b border-gray-300 pb-2">
                <span className="text-gray-500">Last Workout:</span>{" "}
                <span className="font-semibold">Yesterday</span>
              </li>

              <li className="text-sm sm:text-base border-b border-gray-300 pb-2">
                <span className="text-gray-500">Weekly Workout:</span>{" "}
                <span className="font-semibold">3/5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
