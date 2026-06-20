export default function RegistrationCard({ title, children }) {
  return (
    <div className="w-full max-w-150 rounded-2xl border border-[#efefef] bg-white px-4 py-5">
      <h1 className="mb-8 text-center text-4xl font-bold text-[#134A67]">
        {title}
      </h1>

      {children}
    </div>
  );
}
