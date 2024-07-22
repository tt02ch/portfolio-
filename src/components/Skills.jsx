import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            
        });
    }, []);

    const skills = [
        "HTML5",
        "CSS3",
        "PUG",
        "SCSS",
        "TailwindCSS",
        "JavaScript",
        "ReactJS",
        "Redux",
        "NextJS",
        "TypeScript",
        "Firebase",
        "Axios",
        "Postman",
        "GIT",
        "GITHUB"
    ];

    return (
        <section className="bg-gray-200 py-12" id="skills">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark" data-aos="fade-up">
                        My Skills
                    </h2>
                    <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700" data-aos="fade-up" data-aos-delay="100">
                        Here are some of the technologies and tools I have experience with:
                    </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-primary text-white px-4 py-2 rounded-full text-center text-sm md:text-base" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
