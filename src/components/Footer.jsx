/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";

export const Footer = () => {
    return (
        <footer className="bg-[#cad84a] text-white py-6" id="contact">
            <div className="container mx-auto text-center px-4">
                <div className="mb-4">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Connect with me</h2>
                    <div className="flex justify-center mt-2 space-x-4">
                        <a href="#" className="text-white hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="w-6 h-6 md:w-8 md:h-8"/>
                        </a>
                        <a href="#" className="text-white hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                            <PiInstagramLogo className="w-6 h-6 md:w-8 md:h-8"/>
                        </a>
                        <a href="tel:+039989038" className="text-white hover:text-gray-800">
                            <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8"/>
                        </a>
                    </div>
                </div>
                <div className="text-sm md:text-base lg:text-lg mt-4">
                    <p>&copy; 2024 Viet Truong. All rights reserved.</p>
                    <p>Designed by Viet Truong</p>
                </div>
            </div>
        </footer>
    )
}
