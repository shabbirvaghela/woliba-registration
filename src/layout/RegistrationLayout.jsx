import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";
import BackgroundIllustrations from "../components/common/BackgroundIllustrations";

export default function RegistrationLayout() {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-white p-4 sm:p-8 2xl:p-13">
      <BackgroundIllustrations />
      <div className="relative z-1 flex w-full flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center py-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
