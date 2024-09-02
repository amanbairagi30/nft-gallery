import React from "react";
import GalleryComponent from "@/components/gallery-component";
import BottomNav from "@/components/bottom-nav";

export default function GalleryPage() {
  return (
    <main className="h-screen  relative overflow-hidden w-full">
      <GalleryComponent images={['']} />
      <BottomNav />
    </main>

  )
}