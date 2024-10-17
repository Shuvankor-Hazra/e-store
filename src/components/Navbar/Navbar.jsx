import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

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

const Navbar = () => {
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
                                {
                                    MenuLinks.map((data, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={data.link}
                                                className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                            >{data.name}
                                            </a>
                                        </li>
                                    ))
                                }
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
                                className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                            />
                        </div>

                        {/* Order-Button Section */}
                        <button>
                            <FaCartShopping />
                        </button>
                        {/* Dark-Mode Section */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

