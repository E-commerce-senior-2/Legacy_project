import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./provider";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { UserContextProvider } from "@/context";
import ContextProvider from "@/MyContext";

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
        <UserContextProvider>
          <ContextProvider>
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          </ContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
