export default function Button({ children, loading, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className="w-44 h-12 mx-auto block bg-[#E9E9E9] text-[#999] rounded-md"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
