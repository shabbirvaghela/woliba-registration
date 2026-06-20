import { Routes, Route } from "react-router-dom";

import VerifyCompany from "../pages/VerifyCompany";
import UserDetails from "../pages/UserDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VerifyCompany />} />
      <Route path="/user-details" element={<UserDetails />} />
    </Routes>
  );
}