import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "../components/common/Input";

import { verifyCompany } from "../services/registrationService";

import { setCompany } from "../redux/slices/registrationSlice";
import RegistrationCard from "../components/common/RegistrationCard";
import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import { hideLoader, showLoader } from "../redux/slices/appSlice";

export default function VerifyCompany() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // temp fix
    navigate("/user-details");
    dispatch(
      setCompany({
        id: 12,
        company_name: "Alpine Intel",
      }),
    );
    return;
    // temp fix
    try {
      dispatch(showLoader());

      const response = await verifyCompany({
        company_name: data.companyName,

        password: data.password,
      });

      dispatch(setCompany(response.data[0]));

      navigate("/user-details");
    } finally {
      dispatch(hideLoader());
    }
  };
  return (
    <RegistrationCard title="Registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Company Name"
          placeholder="Enter Company Name"
          error={errors.companyName?.message}
          {...register("companyName", {
            required: "Company name is required",
          })}
        />

        <Input
          type="password"
          label="Company Password"
          placeholder="Enter Company Password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",

            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,

              message: "Password must contain uppercase letter and number",
            },
          })}
        />
        {errors.api && <p className="mb-4 text-red-500">{errors.api}</p>}

        <Button type="submit" disabled={!isValid}>
          Next
        </Button>
      </form>
    </RegistrationCard>
  );
}
