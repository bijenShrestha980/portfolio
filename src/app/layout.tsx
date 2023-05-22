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
        <main className="flex flex-col md:flex-row min-h-screen items-center justify-between">
          <div className="w-full h-[110px] md:min-h-screen md:basis-1/5">
            <Sidebar />
          </div>
          <div className="basis-5/5 md:basis-4/5 flex-initial min-h-screen w-full container flex items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
