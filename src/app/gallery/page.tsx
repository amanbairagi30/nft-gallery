"use client"
import React, { useState } from "react";
import GalleryComponent from "@/components/gallery-component";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { CuboidIcon, Loader2, SquareChevronDownIcon } from "lucide-react"
import { fetchNFTs } from "@/lib";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import TwoDView from "@/components/two-dimen";


// Loader component
const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
  </div>
);

export default function GalleryPage() {
  const [showBox, setShowBox] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const [nfts, setNfts] = useState<any>([]);
  const [loading, setLoading] = useState(false);  // For loader state
  const [error, setError] = useState<string | null>(null);  // For error state
  const [selection, setSelection] = useState("2D")

  const fetchNFT = async () => {
    setLoading(true);
    setError(null);
    // try {
    const response: any = await fetchNFTs(walletAddress);
    if (response.length === 0) {
      setError("No NFTs found.");
    } else {
      setNfts(response);
    }
    setLoading(false);
    // } catch (err) {
    //   setError("An error occurred while fetching NFTs.");
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <main className="h-screen max-w-[1280px] mx-auto relative overflow-hidden w-full">
      <h1 className="my-4 font-heading font-bold text-3xl">Gallery ({nfts.length})</h1>
      {
        nfts.length > 0 ? (

          <div className="h-[80vh] overflow-y-scroll no-scrollbar">
            {
              selection === '3D' ?
                <GalleryComponent nfts={nfts} />
                :
                <TwoDView nfts={nfts} />
            }
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-md text-center">
                <CuboidIcon className="mx-auto h-12 w-12 text-muted" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">No NFTs Available</h1>
                <p className="mt-4 text-muted-foreground">
                  We're sorry, but there are no NFTs available at this time. Please wnter wallet address and then fetch again.
                </p>
              </div>
            </div>
          </>
        )
      }
      {/* <BottomNav /> */}
      <div
        className={`absolute left-0 right-0 bottom-0 p-4 shadow-lg transition-all duration-300 max-w-[600px] mx-auto w-full sm:w-auto ${showBox ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Enter NFT ID"
            onChange={(e) => setWalletAddress(e.target.value)}
            className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button onClick={fetchNFT} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : 'Fetch NFTs'}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Toggle variant="outline" aria-label="Toggle NFT box" onClick={() => setShowBox((prev) => !prev)}>
          <SquareChevronDownIcon className="h-5 w-5" />
        </Toggle>
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <Select value={selection} onValueChange={setSelection}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select View" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2D">2D View</SelectItem>
              <SelectItem value="3D">3D View</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </main>
  )
}
