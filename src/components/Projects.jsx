import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Danh sách các dự án với màu nền khác nhau
const projects = [
    {
        title: "Dự Án 1",
        description: "Mô tả ngắn gọn về dự án 1.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-light-gray" // Màu nền của dự án
    },
    {
        title: "Dự Án 2",
        description: "Mô tả ngắn gọn về dự án 2.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-light-blue"
    },
    {
        title: "Dự Án 3",
        description: "Mô tả ngắn gọn về dự án 3.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-light-green"
    },
    {
        title: "Dự Án 4",
        description: "Mô tả ngắn gọn về dự án 4.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-soft-pink"
    },
    {
        title: "Dự Án 5",
        description: "Mô tả ngắn gọn về dự án 5.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-warm-orange"
    },
    {
        title: "Dự Án 6",
        description: "Mô tả ngắn gọn về dự án 6.",
        imageUrl: "https://via.placeholder.com/400",
        link: "#",
        bgColor: "bg-deep-purple"
    }
    // Thêm các dự án khác ở đây
];

export const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="min-h-screen py-16 bg-gray-100" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark text-center mb-12" data-aos="fade-up">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${project.bgColor}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="w-full h-48 relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a href={project.link} className="text-primary hover:underline">
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
