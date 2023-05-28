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
          <div className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 fixed inset-0 z-50 h-[calc(100vh-442px)] md:h-[calc(100vh-32px)] w-full md:w-72 rounded-xl transition-transform duration-300 md:translate-x-0">
            <Sidebar />
          </div>
          <div className="px-4 pb-12 pt-40 md:pt-12 md:ml-80 min-h-screen flex justify-center items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
