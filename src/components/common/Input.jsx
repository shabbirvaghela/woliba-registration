import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({ label, type = "text", error, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">
      {label && (
        <label className="text-secondary mb-3 block text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          className="text-secondary h-12 w-full rounded-md border border-[#BDBDBD] px-4 text-base outline-none read-only:text-[#bdbdbd]"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-2xl text-[#F37F7F]"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
