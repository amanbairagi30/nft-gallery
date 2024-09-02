import Landing from "@/components/landing";
import React from "react";
// import NFTDisplay from "./components/NFTDisplay";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-full">
        {/* <NFTDisplay walletAddress="Be7rHq7SGamu8grvzK6ygR7oaZpBoz39yBHLFWazfudp" /> */}
        <Landing />
      </div>
    </main>
  );
}
