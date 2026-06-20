export default function Button({ children, loading, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className="mx-auto block h-12 w-44 rounded-md bg-[#DA6C74] text-[#999]"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
