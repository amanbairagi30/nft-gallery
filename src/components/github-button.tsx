"use client";;
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function GithubButton() {
    const router= useRouter();
    return (
        <button onClick={() => router.push('https://github.com/amanbairagi30/nft-gallery')} className="bg-background no-underline group mb-4 cursor-pointer relative rounded-full p-px font-semibold leading-6 inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#FFD70044_0%,#FFD70000_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="flex gap-2 items-center z-10 rounded-full bg-background py-2 px-4 ring-1 ring-white/10 ">
                <Star className='text-yellow-300' size={18} />
                <p className='font-base font-bold text-xs'>Star on Github</p>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-yellow-400/90 to-blue-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
    )
}
