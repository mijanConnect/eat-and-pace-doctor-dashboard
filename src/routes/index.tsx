import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/main/MainLayout";
import AuthLayout from "@/layout/auth/AuthLayout";
import Login from "@/components/auth/Login";
import ForgotPassword from "@/components/auth/ForgotPassword";
import Register from "@/components/auth/Register";
import VerifyOTP from "@/components/auth/VerifyOTP";
import ResetPassword from "@/components/auth/ResetPassword";
import SetPassword from "@/components/auth/SetPassword";
import Overview from "@/components/pages/overview/Overview";
import NotFound from "@/components/NotFound";
import AppointmentsManagement from "@/components/pages/appointmentsManagement/AppointmentManagement";
import PatientManagement from "@/components/pages/patientManagement/PatientManagement";
import Transactions from "@/components/pages/transactions/Transactions";
import BusinessSettings from "@/components/pages/businessSettings/BusinessSettings";
import Schedule from "@/components/pages/schedule/Schedule";
import ContentManagement from "@/components/pages/contentManagement/ContentManagement";
import TermsConditions from "@/components/pages/termsConditions/TermsConditions";
import PrivacyPolicy from "@/components/pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "@/components/pages/aboutUs/AboutUs";
import Settings from "@/components/pages/settings/Settings";
import Message from "@/components/pages/message/Message";
import Notifications from "@/components/pages/notifications/Notifications";
import Profile from "@/components/pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "set-password",
        element: <SetPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "appointments-management",
        element: <AppointmentsManagement />,
      },
      {
        path: "patient-management",
        element: <PatientManagement />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "business-settings",
        element: <BusinessSettings />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "content-management",
        element: <ContentManagement />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
