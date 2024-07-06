import React from 'react'
import image from '../assets/image3.png'

const WhyFocusRealm = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
                    <h2 className="text-2xl font-[600] mb-4 font-['poppins']">
                        Why need <span className="text-blue-600">Focus Realm</span> app?
                    </h2>
                    <p className="text-gray-600 mb-8 font-normal font-['poppins']">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.
                        <br />
                        <br />
                        Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 font-normal font-['poppins']">
                        <button className="bg-white text-blue-600 py-2 px-4 rounded-[25px] border-[1px] border-blue-600">
                            Get Focus Realm
                        </button>
                        <button className="bg-blue-600 text-white py-2 px-4 border border-blue-600 rounded-[25px]">
                            Start Learning
                        </button>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
                    <img src={image} alt="Responsive Design" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default WhyFocusRealm