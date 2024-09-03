'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { CuboidIcon } from "lucide-react";


const GalleryComponent = ({ nfts }: { nfts: string[] }) => {

    return (
        <main className="max-w-[1280px] mx-auto px-4">
            <div className="h-fit mt-[50px]  p-4">

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
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: "auto", // Auto slides per view on mobile and tablets
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides per view on larger screens
                        },
                    }}
                    className="mySwiper"
                >
                    {/* Multiple SwiperSlides with the same image */}
                    {/* Multiple SwiperSlides with the same image */}
                    {nfts.length > 0 ? (
                        nfts.map((nftUrl, index) => (
                            <SwiperSlide key={index}>
                                <img src={nftUrl} alt={`slide${index + 1}`} className="photos" />
                            </SwiperSlide>
                        ))
                    ) : (
                        null // Optional: handle the case where there are no NFTs
                    )}


                </Swiper>


            </div>

        </main>

    );
};

export default GalleryComponent;
