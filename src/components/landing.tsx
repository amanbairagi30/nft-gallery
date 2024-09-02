"use client";
import RetroGrid from '@/components/magicui/retro-grid'
import React from 'react'
import Navbar from './Navbar'
import { Input } from './ui/input'
import GithubButton from './github-button'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const mainVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
        },
    },
}

const childVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

const sectionVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'linear' } },
}


export default function Landing() {
    return (
        <div className='h-screen overflow-hidden'>
            <div className="relative flex h-full w-full flex-col overflow-hidden">
                <Navbar />
                <RetroGrid />
                <motion.main
                    className='w-full flex flex-col gap-4 z-10 items-center justify-center absolute bottom-20 px-4'
                    initial="hidden"
                    animate="visible"
                    variants={mainVariants}
                >
                    <motion.div className='max-w-[600px] flex items-center flex-col gap-6 mx-auto text-center' variants={childVariants}>
                        <GithubButton />
                        <motion.div className='flex flex-col gap-4' variants={childVariants}>
                            <motion.div className='font-heading text-4xl font-bold' variants={childVariants}>
                                Unleash the Power of Your NFTs with NFT Zone
                            </motion.div>
                            <motion.p className='font-base' variants={childVariants}>
                                Effortlessly explore and showcase your entire Solana NFT collection
                            </motion.p>
                            {/* <Input placeholder='Enter your public address' className='bg-background font-base z-4' /> */}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='z-10'
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delayChildren: 1.5,
                                },
                            },
                        }}
                    >
                        <Button onClick={()=>window.open('/gallery')} className='font-heading z-10 font-bold text-xs'>Get Started</Button>
                    </motion.div>
                </motion.main>

                <motion.section
                    className='w-full z-10 font-base flex flex-col md:flex-row md:gap-1 text-xs items-center justify-center absolute bottom-4 px-4'
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                >
                    Crafted at last moment by <Link className='hover:underline font-bold' href={'https://github.com/amanbairagi30'} target='_blank'>Aman Kumar Bairagi</Link>
                </motion.section>


                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 0.8, transition: { duration: 1, ease: 'linear' } },
                    }}
                    className='absolute bg-[radial-gradient(50%_50%_at_50%_50%,#FFD70044_0%,#FFD70000_100%)] -bottom-[38rem] opacity-80 left-[50%] translate-x-[-50%] h-[50rem] w-[50rem]'>
                </motion.div>
            </div>

        </div>
    )
}
