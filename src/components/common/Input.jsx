import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef(({ label, type = "text", error, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">
      {label && (
        <label className="mb-2 block text-sm font-medium text-[#174D68]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          {...props}
          className="h-12 w-full rounded-md border border-[#CFCFCF] px-4 outline-none"
          type={isPassword ? (showPassword ? "text" : "password") : type}
        />

        {/* eye icon */}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
