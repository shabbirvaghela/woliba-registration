export default function Button({ children, loading, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className="mx-auto block h-12 w-44 cursor-pointer rounded-md bg-[#DA6C74] text-white disabled:bg-gray-200 disabled:text-gray-400"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
