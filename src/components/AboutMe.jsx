import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
           
        });
    }, []);

    return (
        <section className="bg-light min-h-screen flex items-center justify-center pt-16 md:pt-20 lg:pt-[80px]" id="about-me">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Phần Giới Thiệu */}
                    <div className="lg:w-1/2 bg-light-gray p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark" data-aos="fade-up">
                            About Me
                        </h2>
                        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700" data-aos="fade-up" data-aos-delay="100">
                            Hello Human Resources, I am Nguyễn Viết Trường, a final year student and the job I pursue is a Frontend programmer.
                        </p>
                        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700" data-aos="fade-up" data-aos-delay="200">
                            With a background in Information Technology and hands-on experience in various projects, I am dedicated to delivering high-quality and innovative solutions. I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
                        </p>
                    </div>

                    {/* Phần Hình Ảnh */}
                    <div className="lg:w-1/2 bg-light p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 mt-8 lg:mt-0" data-aos="fade-left">
                        <img 
                            src="https://via.placeholder.com/400" 
                            alt="Nguyễn Viết Trường" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}