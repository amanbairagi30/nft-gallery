import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import axios from "axios";

export const fetchNFTs = async (walletAddress: string) => {
    const connection = new Connection(
        `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_RPC_API_KEY}`,
    );
    const publicKey: any = new PublicKey(walletAddress);

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
        return nftUrls.filter((url) => url !== null) as string[];
    } catch (error: any) {
        console.log(error);
    }
}





