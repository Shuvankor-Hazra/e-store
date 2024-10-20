import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import Img1 from "../../assets/Products/p-1.png"
import Img2 from "../../assets/Products/p-2.png"
import Img3 from "../../assets/Products/p-3.png"
import Img4 from "../../assets/Products/p-4.png"
import Img5 from "../../assets/Products/p-5.png"
import Img6 from "../../assets/Products/p-6.png"

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Rocky Mountain",
        price: "220",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed",
        price: "420",
        aosDelay: "600",
    },
]
const ProductsData2 = [
    {
        id: 1,
        img: Img6,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img5,
        title: "Rocky Mountain",
        price: "220",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img4,
        title: "Goggles",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img3,
        title: "Printed",
        price: "420",
        aosDelay: "600",
    },
]

const Products = () => {
    return (
        <div>
            <div className="container">
                {/* Header Section */}
                <Heading title={"Our Products"} subTitle={"Explore Our Products"} />
                {/* Body Section */}
                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />
            </div>
        </div>
    )
}

export default Products