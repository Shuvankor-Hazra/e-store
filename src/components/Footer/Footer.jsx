import { FaMobileAlt } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6"
import Button from "../Shared/Button"


const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },
    {
        id: 2,
        title: "About",
        link: "/#about"
    },
    {
        id: 3,
        title: "Contact",
        link: "/#contact"
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog"
    },
]


const Footer = () => {
    return (
        <div className="dark:bg-gray-950">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/* Company Details */}
                    <div className="py-8 px-4">
                        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">e-store</a>
                        <p className="text-gray-600 dark:text-white/70 lg:pr-20 pt-3">Credibly parallel task holistic paradigms without experiences. Efficiently brand 24/7 with multimedia based.</p>
                        <p className="text-gray-500 my-4">Made with 💖 by Shuvankor Hazra</p>
                        <Button
                            text={"Visit My Portfolio"}
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                        />
                    </div>
                    {/* Footer Links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        {/* First Col Links */}
                        <div className="py-8 px-4">
                            <h2 className="text-xl font-bold sm:text-left mb-3">Important Links</h2>
                            <ul className="space-y-2">
                                {FooterLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            className="text-gray-600 dark:text-gray-400  dark:hover:text-white hover:text-black duration-300"
                                            href={data.link}>
                                            {data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Second Col Links */}
                        <div className="py-8 px-4">
                            <h2 className="text-xl font-bold sm:text-left mb-3">Quick Links</h2>
                            <ul className="space-y-2">
                                {FooterLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            className="text-gray-600 dark:text-gray-400  dark:hover:text-white hover:text-black duration-300"
                                            href={data.link}>
                                            {data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Address Section */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h2 className="text-xl font-bold sm:text-left mb-3">Address</h2>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Khulna, Bangladesh</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt />
                                    <p>+88-01234-567890</p>
                                </div>
                                {/* Social Links */}
                                <div className="flex items-center gap-4 pt-3">
                                    <a href="#"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
                                    <a href="#"><FaFacebook className="text-3xl hover:text-primary duration-300" /></a>
                                    <a href="#"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer