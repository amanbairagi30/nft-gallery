import RetroGrid from '@/components/magicui/retro-grid'
import React from 'react'
import Navbar from './Navbar'
import { Input } from './ui/input'
import { Star } from 'lucide-react'

export default function Landing() {
    return (
        <div className='h-screen'>
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-lg  md:shadow-xl">
                <Navbar />
                {/* <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    Retro Grid
                </span> */}
                {/* <div className='h-[800px]'> */}
                <RetroGrid />
                {/* </div> */}
                <main className='w-full flex items-center justify-center absolute bottom-20 px-4'>
                    <div className='max-w-[600px] flex items-center flex-col gap-4 mx-auto text-center'>
                        <div className='flex bg-background shadow-lg py-2 px-4 cursor-pointer rounded-full items-center gap-2'>
                            <Star className='text-yellow-300' size={18} />
                            <p>Star on Github</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='font-heading text-4xl font-bold'>
                                Unleash the Power of Your NFTs with NFT Taiiki
                            </div>
                            <p className='font-base'> Effortlessly explore and showcase your entire Solana NFT collection</p>

                            <Input placeholder='Enter your public address' className='bg-background z-4' />
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}
