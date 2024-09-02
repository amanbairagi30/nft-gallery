import Image from 'next/image'
import React from 'react'
import NFT_LOGO from "../../public/nft_logo.svg"
import { ThemeToggler } from './theme-toggler'

export default function Navbar() {
    return (
        <header className='max-w-[880px] mx-auto w-full h-[5rem] mt-4'>
            <nav className=' h-full flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <Image className='w-[1.5rem] h-[1.5rem]' src={NFT_LOGO} width={500} height={500} alt='nft_logo' />
                    <h1 className='font-heading font-bold'>NFT Taiiki</h1>
                </div>
                <ThemeToggler />
            </nav>
        </header>
    )
}