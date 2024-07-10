import Student1 from '../images/student1.jpg';
import student2 from '../images/student2.png';

const Herosection = () => {
    return (
        <div className="relative flex py-12 bg-white font-['poppins']">
            <div className="max-w-6xl flex gap-12  mx-auto  px-4 mt-32">
                <div className="flex flex-col gap-6 w-1/2">
                    <div className="flex flex-col w-1/2 text-[36px] leading-[46px]">
                        <p className="font-semibold text-[#0148b7] text-nowrap">Online learning</p>
                        <p className="font-normal text-[#000000] text-nowrap">you can access</p>
                        <p className="inline-flex mx-auto text-center gap-2 text-[#0148b7]">anywhere<p className="text-[#000000]">easily</p></p>
                    </div>
                    <p className="text-left text-wrap">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <div className="flex gap-8 text-[14px] leading-[21px]">
                        <p className="px-4 py-2 border-[#0148b7] text-[#0148b7] rounded-[25px] border">Get Focus Realm</p>
                        <button className="text-white px-4  py-2 bg-[#0148b7] rounded-[25px]">Start learning</button>
                    </div>
                    <div className='flex mt-4 gap-4 text-nowrap'>
                        <span className='inline-flex gap-2 items-center '>
                            <p className='border flex items-center justify-center rounded-full h-6 w-6 bg-[#6f74eb] p-2 text-white'>✓
                            </p>
                            Experienced Mentor
                        </span>

                        <span className='inline-flex gap-2 items-center '>
                            <p className='border flex items-center justify-center rounded-full h-6 w-6 bg-[#6f74eb] p-2 text-white'>✓
                            </p>
                            Quality Videos
                        </span>

                        <span className='inline-flex gap-2 items-center '>
                            <p className='border flex items-center justify-center rounded-full h-6 w-6 bg-[#6f74eb] p-2 text-white'>✓
                            </p>
                            Affordabe prices
                        </span>
                    </div>
                </div>

                <div className="relative w-1/2 text-nowrap">
                    <div className="flex flex-col relative w-full">
                        <div className="relative top-[-44px] h-[260px] bg-[#4f81d1] rounded-t-full">
                            <div className='relative '>
                                <img src={Student1} alt="student1" className='md:absolute top-[-124px] left-[10px] w-[95%] h-96' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div >
                                <p className='text-[20px] leading-[30px] font-bold font-[poppins]'>30K</p>
                                <p className='font-bold text-[14px] leading-[21px] text-[#0148b7]'>Students Enrolled</p>
                            </div>

                            <div className=''>
                                <p className='text-[20px] leading-[30px] font-bold font-[poppins]'>130+</p>
                                <p className='font-bold text-[14px] leading-[21px] text-[#0148b7]'>Teachers Onboarded</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative w-1/2 text-nowrap">
                    <div className="flex flex-col relative w-full">
                        <div className="relative top-[-160px] flex flex-col gap-4">
                            <div>
                                <p className="text-[20px] leading-[30px] font-bold font-[poppins]">AI Powered</p>
                                <p className="font-bold text-[14px] leading-[21px] text-[#0148b7]">Study Sessions</p>
                            </div>
                            <div>
                                <p className="text-[20px] leading-[30px] font-bold font-[poppins]">800+</p>
                                <p className="font-bold text-[14px] leading-[21px] text-[#0148b7]">Online Classes Done</p>
                            </div>
                        </div>

                        <div className=" flex flex-col relative w-full">
                            <div className="relative  h-60 w-10/12 bg-[#0148b7] rounded-t-full"></div>
                                <img
                                    src={student2}
                                    alt="student1"
                                    className="absolute top-24 h-80   left-[43%] transform -translate-x-1/2 -translate-y-1/2  "
                                />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Herosection;
