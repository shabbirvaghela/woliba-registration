import loaderVideo from "../../assets/loader.mp4";
import { useSelector } from "react-redux";

export default function GlobalLoader() {
  const loading = useSelector((state) => state.app.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f8f8f8]">
      <video autoPlay loop muted playsInline className="h-1/3 w-auto">
        <source src={loaderVideo} type="video/mp4" />
      </video>
    </div>
  );
}
