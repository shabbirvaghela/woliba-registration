import { Routes, Route } from "react-router-dom";

import VerifyCompany from "../pages/VerifyCompany";
import UserDetails from "../pages/UserDetails";
import OtpVerification from "../pages/OtpVerification";
import CompleteProfile from "../pages/CompleteProfile";
import InterestSelection from "../pages/InterestSelection";
import WellbeingPillars from "../pages/WellbeingPillars";
import Welcome from "../pages/Welcome";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VerifyCompany />} />

      <Route path="/user-details" element={<UserDetails />} />

      <Route path="/verify-otp" element={<OtpVerification />} />

      <Route path="/complete-profile" element={<CompleteProfile />} />

      <Route path="/interest-selection" element={<InterestSelection />} />

      <Route path="/wellbeing-pillars" element={<WellbeingPillars />} />

      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
