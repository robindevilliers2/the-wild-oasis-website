import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

import { SessionProvider } from "next-auth/react";

import { ReservationProvider } from "./_components/ReservationContext";
import { AuthProvider } from "./_components/AuthContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel , located in the heart of the Itallian Dolomites, surrounded by the beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <SessionProvider>
          <AuthProvider>
            <Header />
            <div className="grid flex-1 px-8 py-12">
              <main className="mx-auto w-full max-w-7xl">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
