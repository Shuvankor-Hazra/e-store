/* eslint-disable react/prop-types */


const Heading = ({ title, subTitle }) => {
    return (
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
            <p className="text-xs text-gray-500">{subTitle}</p>
        </div>
    )
}

export default Heading