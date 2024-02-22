// import Image from "next/image";
import DashBoard from "./templates/Dashboard";
import React from "react";

export default function Home() {
  return (    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashBoard />
    </main>
  );
}
