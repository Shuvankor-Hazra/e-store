import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Headphone from "./assets/banner/headphone.png"
import Smartwatch from "./assets/banner/smartwatch.png"
import Banner from "./components/Banner/Banner"
import Blogs from "./components/Blogs/Blogs"
import Category from "./components/Category/Category"
import Category2 from "./components/Category/Category2"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Partners from "./components/Partners/Partners"
import Popup from "./components/Popup/Popup"
import Products from "./components/Products/Products"
import Services from "./components/Services/Services"

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Competently actualize interactive leadership vis-a-vis team driven informers. Compellingly enhance.",
  bgColor: "#f42c37",
}
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: Smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Competently actualize interactive leadership vis-a-vis team driven informers. Compellingly enhance.",
  bgColor: "#2dcc6f",
}

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden ">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App