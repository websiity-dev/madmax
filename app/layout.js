import {
  Geist,
  Geist_Mono,
  Inconsolata,
  Boldonse,
  Bubbler_One
  
} from "next/font/google";
 

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

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});
const bubblerOne = Bubbler_One({
  variable: "--font-bubbler_one",
  subsets: ["latin"],
  weight: "400",
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Max Efforts Studios",
  description: "Creative Digital Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${inconsolata.variable}
        ${boldonse.variable}
        ${bubblerOne.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}