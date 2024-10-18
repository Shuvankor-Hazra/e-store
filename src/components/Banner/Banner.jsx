/* eslint-disable react/prop-types */

import Button from "../Shared/Button"


const Banner = ({ data }) => {
    return (
        <div className="min-h-[550px] flex items-center justify-center py-12">
            <div className="container">
                <div
                    style={{ backgroundColor: data.bgColor }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    {/* First col */}
                    <div className="p-6 sm:p-8 space-y-2">
                        <p className="text-sm">{data.discount}</p>
                        <h2 className="uppercase text-4xl lg:text-7xl font-bold">{data.title}</h2>
                        <p className="text-sm">{data.date}</p>
                    </div>
                    {/* Second col */}
                    <div className="w-full flex items-center">
                        <img
                            className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
                            src={data.image} alt="" />
                    </div>
                    {/* Third col */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <h3 className="text-xl font-bold">{data.title2}</h3>
                        <h2 className="text-3xl sm:text-5xl font-bold">{data.title3}</h2>
                        <p className="text-sm tracking-wide leading-5">{data.title4}</p>
                        <div>
                            <Button
                                text={"Shop Now"}
                                bgColor={"bg-white"}
                                textColor={"text-primary"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner