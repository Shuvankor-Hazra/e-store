import Headphone from "./assets/banner/headphone.png"
import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Category2 from "./components/Category/Category2"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
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

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 overflow-hidden ">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
    </div>
  )
}

export default App