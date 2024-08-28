import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Medical",
  description: "Next Js 14. Doctor Appointment Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="md:px-40 mx-auto max-w-screen-2xl">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
