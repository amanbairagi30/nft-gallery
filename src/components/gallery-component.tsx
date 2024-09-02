'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { CuboidIcon } from "lucide-react";


const GalleryComponent = ({ images }: { images: string[] }) => {

    return (
        <main className="max-w-[1280px] mx-auto px-4">
            <h1 className="my-4 font-heading font-bold text-3xl">Gallery</h1>
            <div className="h-fit mt-[50px]  p-4">
                {

                    images.length < 0 ? (

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            effect={"coverflow"}
                            grabCursor={true}
                            slidesPerView={3}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper"
                        >
                            {/* Multiple SwiperSlides with the same image */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <img src={'https://metadata.y00ts.com/y/4894.png'} alt={`slide${index + 1}`} className="photos" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )

                        :
                        (
                            <>
                                <div className="flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
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

            </div>

        </main>

    );
};

export default GalleryComponent;
