"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { SquareChevronDownIcon } from "lucide-react"

export default function BottomNav() {
  const [showBox, setShowBox] = useState(true);
  return (
    <div className="">
      <div
        className={`absolute left-0 right-0 bottom-0 bg-card p-4 shadow-lg transition-all duration-300 max-w-[600px] mx-auto w-full sm:w-auto ${
          showBox ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Enter NFT ID"
            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button>Fetch NFTs</Button>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Toggle variant="outline" aria-label="Toggle NFT box" onClick={() => setShowBox((prev) => !prev)}>
          <SquareChevronDownIcon className="h-5 w-5" />
        </Toggle>
      </div>
    </div>
  )
}
