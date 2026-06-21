import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import RegistrationCard from "../components/common/RegistrationCard";
import { setUserDetails } from "../redux/slices/registrationSlice";
import { verifyCompany } from "../services/registrationService";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
  const company = useSelector((state) => state.registration.company);
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
      const payload = {
        company_id: company.id,
        mail: data.email,
        fname: data.firstName,
        lname: data.lastName,
      };

      const response = await saveUserDetails(payload);

      dispatch(
        setUserDetails({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        }),
      );

      dispatch(setOtpToken(response.data.token));
      navigate("/verify-otp");
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    if (!company) {
      navigate("/");
    }
  }, [company, navigate]);

  return (
    <RegistrationCard title="Registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email Address"
          placeholder="Enter Email Address"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",

            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />

        <Input
          label="First Name"
          placeholder="Enter First Name"
          error={errors.firstName?.message}
          {...register("firstName", {
            required: "First name is required",

            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only letters allowed",
            },
          })}
        />

        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          error={errors.lastName?.message}
          {...register("lastName", {
            required: "Last name is required",

            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only letters allowed",
            },
          })}
        />

        <Input
          label="Company Name"
          value={company?.company_name || ""}
          readOnly
        />

        <Button type="submit" disabled={!isValid}>
          Next
        </Button>
      </form>
    </RegistrationCard>
  );
}
