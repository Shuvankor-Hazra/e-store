import Img1 from "../../assets/partners/partner-1.png"
import Img2 from "../../assets/partners/partner-2.png"
import Img3 from "../../assets/partners/partner-3.png"
import Img4 from "../../assets/partners/partner-4.png"
import Img5 from "../../assets/partners/partner-5.png"

const Partners = () => {
    return (
        <div data-aos="zoom-out" className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
            <div className="container">
                <div className="grid grid-cols-5 gap-4 place-items-center opacity-50">
                    <img src={Img1} alt=""
                        className="w-[80px] dark:invert" />
                    <img src={Img2} alt=""
                        className="w-[80px] dark:invert" />
                    <img src={Img3} alt=""
                        className="w-[80px] dark:invert" />
                    <img src={Img4} alt=""
                        className="w-[80px] dark:invert" />
                    <img src={Img5} alt=""
                        className="w-[80px] dark:invert" />
                </div>
            </div>
        </div>
    )
}

export default Partners