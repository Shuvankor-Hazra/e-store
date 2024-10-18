/* eslint-disable react/prop-types */

import Button from "../Shared/Button";


const ProductCard = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {/* Card Section */}
                {data.map((data) => (
                    <div key={data.id}
                        className="group"
                    >
                        <div className="relative">
                            <img src={data.img} alt=""
                                className="h-[180px] w-[260px] object-cover rounded-md"
                            />
                            {/* Hover Button */}
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm items-center justify-center duration-300">
                                <Button
                                    text={"Add to Cart"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{data.title}</h2>
                            <h3 className="font-bold">${data.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard;