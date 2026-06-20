import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Nav/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Max Efforts Studios",
  description: "Creative Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
    <Navbar/>

        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}