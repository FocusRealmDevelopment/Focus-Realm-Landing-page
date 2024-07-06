import React from 'react';
import clientLogo1 from '../assets/image4.png';
import clientLogo2 from '../assets/image5.png';
import clientLogo3 from '../assets/image6.png';
import clientLogo4 from '../assets/image7.png';

function BannerComponent() {
    return (
        <div className="py-12 font-['poppins']" style={{ backgroundColor: '#0148B70D' }}>
            <div className="max-w-6xl mx-auto flex flex-wrap items-center px-4">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-left">
                    <h2 className="text-3xl font-[600] mb-4 text-blue-600">Our Clients</h2>
                    <p className="text-gray-600 w-[424px] h-[81px]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-around items-center flex-wrap">
                    <img src={clientLogo2} alt="Client 1" className="h-28 mb-4 lg:mb-0 p-1" />
                    <img src={clientLogo3} alt="Client 3" className="h-28 mb-4 lg:mb-0 p-1" />
                    <img src={clientLogo1} alt="Client 2" className="h-28 mb-4 lg:mb-0 p-1" />
                    <img src={clientLogo4} alt="Client 4" className="h-28 mb-4 lg:mb-0 p-1" />
                    <img src={clientLogo2} alt="Client 5" className="h-28 mb-4 lg:mb-0 p-1" />
                </div>
            </div>
        </div>
    );
}

export default BannerComponent;
