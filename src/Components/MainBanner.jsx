import React from 'react'
import foodBanner from "../assets/banner2.jpeg"
import { Link } from 'react-router-dom'
const MainBanner = () => {
    return (
        <div className="relative mr-10 ml-10 h-[400px]">
            <img
                src={foodBanner}
                alt="banner"
                className="w-full h-full object-cover rounded-2xl"
            />

            {/* inset-0 is for the button and title shoud be displayed on the image */}
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
                <h1 className="text-3xl font-bold text-center max-w-72 leading-tight md:text-4xl lg:text-5xl md:text-left md:max-w-80 lg:max-w-105 lg:leading-15">
                    Freshness You Can Trust, Savings You Will Love!
                </h1>

                <div className="flex flex-col md:flex-row gap-4 items-center mt-6 font-medium">
                    <Link
                        to="/products"
                        className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-green-600 transition rounded text-white text-center justify-center"
                    >
                        Shop Now
                    </Link>
                    <Link
                        to="/products"
                        className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-green-600 transition rounded text-white text-center justify-center"
                    >
                        Explore Deals
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default MainBanner