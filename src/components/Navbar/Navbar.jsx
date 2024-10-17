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
                <div className="container">
                    {/* Logo & Links Section */}
                    <div>
                        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">e-store</a>

                        {/* Menu Icons */}
                        <div>
                            <ul>
                                {
                                    MenuLinks.map((data, idx) => (
                                        <li key={idx}>
                                            <a href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Navbar Right Section */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;

