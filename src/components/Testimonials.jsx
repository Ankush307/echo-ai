import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { TESTIMONIALS_LIST } from "../utils/helper";

const Testimonials = () => {
    return (
        <div id="testimonials" className="p-4 bg-wood-smoke max-lg:pb-[56px] max-sm:pb-12 mb-[-2px]">
            <div className="max-w-[1150px] mx-auto">
                <h2 className="text-white text-center lg:text-[48px] sm:text-[36px] text-[30px] font-semibold leading-[57.6px] lg:pb-10 sm:pb-7 pb-3">Testimonials</h2>
                <Swiper className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 140
                        },
                        1240: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        }
                    }}>
                    {TESTIMONIALS_LIST.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <div className="w-full sm:min-w-[364px] max-w-[360px] slider-bg-color rounded-t-3xl pt-6 px-6 pb-100 mx-auto">
                                <h3 className="text-white text-2xl font-medium leading-[28.8px]">{obj.heading}</h3>
                                <p className={`text-white text-base font-normal leading-6 opacity-80 pt-2 max-md:max-w-none ${i === 1 ? "max-w-[325px]" : "max-w-[316px]"}`}>{obj.description}</p>
                                <div className={`flex items-center gap-2 ${i === 2 ? "mt-6" : "mt-[47px]"}`}>
                                    <img src={obj.user} alt="user" className="w-[60px] h-[60px]" />
                                    <div className="flex flex-col">
                                        <p className="text-white text-start font-medium sm:text-xl text-xl">{obj.useName}</p>
                                        <p className="text-white font-medium leading-6"> {obj.userPosition}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials