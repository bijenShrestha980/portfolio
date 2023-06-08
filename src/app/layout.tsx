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
          <div className="fixed bottom-0 z-50 h-fit w-full rounded-xl transition-transform duration-300 md:inset-0 md:h-screen md:w-72 md:translate-x-0">
            <Sidebar />
          </div>
          <div className="flex min-h-screen items-center justify-center pb-28 pl-4 pr-4 pt-12 md:ml-80 md:pb-12 md:pr-10 md:pt-12">
            {children}
          </div>
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
