import api from "../api/axios";

export const verifyCompany = (payload) =>
  api.post("/verify-by-company-name-and-password", payload);

export const saveUserDetails = (payload) =>
  api.post("/save-user-details-and-send-otp", payload);

export const verifyOtp = (payload) =>
  api.post("/verify-otp-for-user-registration", payload);

export const resendOtp = (payload) =>
  api.post("/send-otp-for-user-registration", payload);

export const getInterests = () => api.get("/viewWellnessInterest");

export const getPillars = () => api.get("/get-wellbeing-pillars/1");

export const registerUser = (payload) =>
  api.post("/user-registration", payload);
