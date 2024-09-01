"use client";
import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import axios from "axios";

interface NFTDisplayProps {
    walletAddress: string;
}

const NFTDisplay: React.FC<NFTDisplayProps> = ({ walletAddress }) => {
    const [nfts, setNfts] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchNFTs = async (walletAddress: string) => {
        const connection = new Connection(
            `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_RPC_API_KEY}`,
        );
        const publicKey: any = new PublicKey(walletAddress);
        setLoading(true);
        setError(null);

        try {
            const metaplex = Metaplex.make(connection).use(
                keypairIdentity(publicKey),
            );

            const nftList = await metaplex
                .nfts()
                .findAllByOwner({ owner: publicKey });

            const nftUrls = await Promise.all(
                nftList.map(async (nft) => {
                    if (nft.uri) {
                        try {
                            const metadata = await axios.get(nft.uri, {
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                },
                            });

                            // Check if the response is valid JSON
                            if (typeof metadata.data === "object" && metadata.data.image) {
                                return metadata.data.image;
                            }
                        } catch (error) {
                            console.error("Error fetching metadata:", error);
                            return null;
                        }
                    }
                    return null;
                }),
            );

            // Filter out null values in case some NFTs don't have an image
            setNfts(nftUrls.filter((url) => url !== null) as string[]);
        } catch (error: any) {
            setError("Error fetching NFTs: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFetchNFTs = () => {
        fetchNFTs(walletAddress);
    };

    return (
        <div className="p-6">
            <button
                onClick={handleFetchNFTs}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {loading ? "Loading..." : "Fetch NFTs"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {nfts.length > 0 ? (
                    nfts.map((nftUrl, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="relative pb-[100%] overflow-hidden">
                                <img
                                    src={nftUrl}
                                    alt={`NFT ${index}`}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600 text-lg">
                        No NFTs found
                    </p>
                )}
            </div>
        </div>
    );
};

export default NFTDisplay;
