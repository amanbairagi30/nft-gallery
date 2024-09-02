import React from 'react'

export default function TwoDView({ nfts }: { nfts: string[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {nfts.length > 0 && (
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
            )}
        </div>
    )
}
