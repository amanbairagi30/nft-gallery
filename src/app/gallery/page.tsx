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
import { toast } from "sonner";


export default function GalleryPage() {
  const [showBox, setShowBox] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const [nfts, setNfts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selection, setSelection] = useState("2D")

  const isValidAddress = (address: string) => {
    // Solana public addresses are typically 44 characters long and use Base58 characters
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return solanaAddressRegex.test(address);
  };

  const fetchNFT = async () => {

    if (!walletAddress) {
      toast.warning('Please fill in the public address to continue');
      return;
    }

    if (!isValidAddress(walletAddress.trim())) {
      toast.error('Invalid public address. Please check and try again.');
      return;
    }
    setLoading(true);
    const response: any = await fetchNFTs(walletAddress.trim());
    if (response.length === 0) {
      toast.error('No NFTs found for this address');
    } else {
      setNfts(response);
    }
    setLoading(false);
  }

  return (
    <main className="h-screen max-w-[1280px] mx-auto px-4 relative overflow-hidden w-full">
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
                  We&apos;re sorry, but there are no NFTs available at this time. Please wnter wallet address and then fetch again.
                </p>
              </div>
            </div>
          </>
        )
      }
      {/* <BottomNav /> */}
      <div
        className={`absolute flex flex-col gap-4 md:flex-row items-center justify-between left-0  right-0 bottom-0 p-4 shadow-lg  mx-auto w-full sm:w-auto `}
      >
        <div className=" flex-1 hidden md:block z-10">
          <Toggle variant="outline" aria-label="Toggle NFT box" onClick={() => setShowBox((prev) => !prev)}>
            <SquareChevronDownIcon className="h-5 w-5" />
          </Toggle>
        </div>

        <div className={`flex justify-center w-full md:w-[600px]  flex-1 transition-all duration-300 items-center gap-4 ${showBox ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
          }`}>
          <Input
            type="text"
            placeholder="Enter public address"
            onChange={(e) => setWalletAddress(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetchNFT();
              }
            }}
            className="w-full md:w-[300px] rounded-md border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button onClick={fetchNFT} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : 'Fetch NFTs'}
          </Button>
        </div>
        <div className=" flex-1 flex items-center justify-end w-full md:w-auto z-10">
          <Select value={selection} onValueChange={setSelection}>
            <SelectTrigger className="w-full md:w-[180px]">
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
      </div>

    </main>
  )
}
