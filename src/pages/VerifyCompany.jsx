import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../components/common/Input";

import { verifyCompany } from "../services/registrationService";

import { setCompany } from "../redux/slices/registrationSlice";
import Button from "../components/common/button";
import RegistrationLayout from "../layout/RegistrationLayout";
import RegistrationCard from "../components/common/RegistrationCard";

export default function VerifyCompany() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const validatePassword = (value) => {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
  };

  const validate = () => {
    const newErrors = {};

    if (!companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Password must contain uppercase letter, number and minimum 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await verifyCompany({
        company_name: companyName,
        password,
      });

      if (response?.status === "success") {
        const company = response.data?.[0];

        dispatch(setCompany(company));

        navigate("/user-details");
      }
    } catch (error) {
      setErrors({
        api: error?.response?.data?.error || "Verification failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegistrationCard title="Registration">
      <form onSubmit={handleSubmit}>
        <Input
          label="Company Name"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          error={errors.companyName}
        />

        <Input
          type="password"
          label="Company Password"
          placeholder="Enter Company Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors.api && <p className="mb-4 text-red-500">{errors.api}</p>}

        <Button
          type="submit"
          loading={loading}
          disabled={!companyName || !password}
        >
          Continue
        </Button>
      </form>
    </RegistrationCard>
  );
}
