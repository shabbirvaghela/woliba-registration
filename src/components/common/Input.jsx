import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({ label, type = "text", error, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">
      {label && (
        <label className="mb-3 block text-xl font-medium text-[#174D68]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className="h-[68px] w-full rounded-xl border border-[#CFCFCF] px-5 text-xl outline-none"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl text-[#F37F7F]"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
