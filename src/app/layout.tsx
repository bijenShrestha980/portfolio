import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "@/app/layout/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Bijen Shrestha",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen w-full">
          <div className="fixed bottom-0 md:inset-0 z-50 h-fit md:h-screen w-full md:w-72 rounded-xl transition-transform duration-300 md:translate-x-0">
            <Sidebar />
          </div>
          <div className="pl-4 pr-4 md:pr-10 pb-28 pt-12 md:pb-12 md:pt-12 md:ml-80 min-h-screen flex justify-center items-center">
            {children}
          </div>
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
