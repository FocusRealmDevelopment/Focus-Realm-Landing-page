import React from 'react';
import human from '../images/human.jpg';
import data from './testimonialdata.jsx';

const TestimonialCard = ({ item }) => {
    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col bg-[#f6f7f9] px-8 py-6 rounded-lg w-96 h-72">
                <img
                    src={human}
                    alt="human"
                    className="w-24 h-24 absolute left-1/2 top-[-60px] transform -translate-x-1/2"
                />
                <div className='relative h-12'>
                    <p className="mt-20 text-center mb-4">{item.text}</p>
                    <div className="flex gap-4 justify-center items-center">
                        <p className="bg-[#0148b7] text-4xl text-white border px-1  rounded-full w-8 h-8">❝</p>
                        <div className="text-center">
                            <p className="text-[14px] leading-[22px] text-[#072f60] font-[heebo] font-bold text-[14px] leading-[22px]">{item.name}</p>
                            <p className="text-[12px] font-normal text-[12px] text-[#666666] leading-7">{item.designation}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;
