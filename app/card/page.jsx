"use client";

import React from "react";
import { Inter } from "next/font/google";
import CardUI from "../components/CardUI";

const inter = Inter({ subsets: ["latin"] });

export default function CardPage() {
  return (
    <div className={`min-h-screen bg-[#222222] flex items-center justify-center p-8 overflow-hidden ${inter.className}`}>
      <CardUI />
    </div>
  );
}
