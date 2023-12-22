import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./provider";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
// import { UserContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FancyMama",
  description:
    "Developed By El Rojlaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <UserContextProvider> */}
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        {/* </UserContextProvider> */}
      </body>
    </html>
  );
}
