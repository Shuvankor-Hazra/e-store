/* eslint-disable react/prop-types */
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const MenuLinks = [
    {
        name: "Home",
        link: "/#"
    },
    {
        name: "Shop",
        link: "/#shop"
    },
    {
        name: "About",
        link: "/#about"
    },
    {
        name: "Blogs",
        link: "/#blogs"
    },
]
const DropdownLinks = [
    {
        name: "Trending Products",
        link: "/#"
    },
    {
        name: "Best Selling",
        link: "/#"
    },
    {
        name: "Top Rated",
        link: "/#"
    },
]

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex items-center justify-between">
                    {/* Logo & Links Section */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">e-store</a>

                        {/* Menu Icons */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >{data.name}
                                        </a>
                                    </li>
                                ))}
                                {/* Dropdown */}
                                <li className="relative cursor-pointer group">
                                    <a href="#"
                                        className="flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white py-2"
                                    >Quick Links
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                        </span>
                                    </a>
                                    {/* Dropdown Links */}
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-3 dark:text-white">
                                        <ul className="space-y-2">
                                            {DropdownLinks.map((data, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={data.link}
                                                        className="text-gray-500 dark:hover:text-white duration-200 p-2 hover:bg-primary/20 inline-block font-semibold rounded-md w-full">
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Navbar Right Section */}
                    <div className="flex justify-between items-center gap-4">
                        {/* Search-Bar Section */}
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="Search" name="" id=""
                                className="search-bar"
                            />
                            <IoMdSearch
                                className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
                        </div>
                        {/* Order-Button Section */}
                        <button
                            onClick={handleOrderPopup}
                            className="relative p-3">
                            <FaCartShopping
                                className="text-xl text-gray-600 dark:text-gray-400" />
                            <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute flex items-center justify-center text-xs top-0 right-0">
                                4
                            </div>
                        </button>
                        {/* Dark-Mode Section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

