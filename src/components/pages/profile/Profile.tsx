import { Button } from "@/components/ui/button";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import Attachments from "./Attachments";

export default function Profile() {
  return (
    <>
      <div>
        <div className="flex justify-between items-start">
          <div className="items-center gap-3 sm:flex">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="User profile"
              className="size-20 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-medium text-foreground">
                Isidro Rebelo
              </span>
              <span className="text-lg text-muted-foreground">Admin</span>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              className="mt-4 w-60 cursor-pointer border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary"
            >
              Change Password
            </Button>
          </div>
        </div>
        <PersonalInfo />
        <AcademicInfo />
        <Attachments />

        <div className="flex justify-center">
          <Button variant="default" className="w-80 mt-12 mb-8 ">
            Save Changes
          </Button>
        </div>
      </div>
    </>
  );
}
