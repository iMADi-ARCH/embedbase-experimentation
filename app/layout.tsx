import SearchBar from "@/lib/components/SearchBar";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/lib/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="relative w-full min-h-full dark:bg-black dark:text-white"
      lang="en"
    >
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
