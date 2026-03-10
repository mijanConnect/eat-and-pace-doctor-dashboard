import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || localStorage.getItem("token")
          : null;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [
    "Profile",
    "Categories",
    "PendingJobs",
    "InterestedJobs",
    "HiredJobs",
    "ProfessionalProfile",
    "Leads",
  ],
  endpoints: () => ({}),
});
