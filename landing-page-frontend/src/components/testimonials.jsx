import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialCard from '../testimonial/testimonialcard.jsx';
import data from '../testimonial/testimonialdata.jsx';

const Testimonial = () => {
    return (
        <div className="flex flex-col max-w-6xl items-center justify-center mt-8 px-4">
            <div className="flex flex-col items-center justify-center text-center w-full max-wxl mx-8">
                <h1 className="font-normal text-[26px] leading-[32px] text-[#0148b7] mb-4">What our customers say</h1>
                <p className="font-normal text-[18px] leading-[25px] text-[#444444] mb-2 w-full">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                </p>
            </div>

            <div className="my-16 mx-auto h-[400px] w-full flex items-center justify-center">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    className="w-full max-w-7xl relative"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className='relative'>
                            <TestimonialCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonial;
