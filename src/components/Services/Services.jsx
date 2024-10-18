import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide, FaWallet } from "react-icons/fa6";


const ServicesData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
        title: 'Free Shipping',
        description: "Free Shipping On All Orders"
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title: 'Safe Money',
        description: "30 Days Money Back"
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
        title: 'Secure Payment',
        description: "All Payment Secure"
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
        title: 'Online Support 24/7',
        description: "Technical Support 24/7"
    },
]

const Services = () => {
    return (
        <div>
            <div className="container my-14 md:my-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServicesData.map((data) => (
                        <div
                            className="flex flex-col sm:flex-row items-start gap-4"
                            key={data.id}>
                            {data.icon}
                            <div>
                                <h2 className="lg:text-xl font-bold">{data.title}</h2>
                                <p className="text-gray-400 text-sm">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;