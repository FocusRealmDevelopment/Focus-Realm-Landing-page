import React from 'react';
import human from '../images/human.jpg';

const TestimonialCard = ({ item }) => {
    return (
        <div className="flex justify-center mt-16">
            <div className="relative flex flex-col bg-[#f6f7f9] px-8 py-6 rounded-lg w-96 mb-12">
                <img
                    src={human}
                    alt="human"
                    className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 top-[-60px] transform -translate-x-1/2"
                />
                <div className='relative mt-16'>
                    <p className="text-center mb-4 text-gray-700">{item.text}</p>
                    <div className="flex gap-4 justify-center items-center">
                        <p className="bg-[#0148b7] text-4xl text-white border px-1 rounded-full w-8 h-8">❝</p>
                        <div className="text-center">
                            <p className="text-[14px] leading-[22px] text-[#072f60] font-bold">{item.name}</p>
                            <p className="text-[12px] font-normal text-[#666666] leading-7">{item.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
