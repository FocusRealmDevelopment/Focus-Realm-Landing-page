import React from "react";

function SectionComponent() {
    const items = Array(8).fill({
        title: "Title here",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.",
    });

    return (
        <div className="py-12 bg-white font-['poppins']">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-[600] mb-4">How we are helping the students</h2>
                <p className="text-gray-600 mb-12 font-[400]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="p-4 w-230">
                            <div className="flex flex-col items-start h-[180px]">
                                <div className="mb-2 h-16 w-16 bg-gray-200 rounded-full"></div>
                                <h3 className="text-lg font-[400] text-blue-600 text-left">{item.title}</h3>
                                <p className="text-gray-600 text-left font-[300]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionComponent;
