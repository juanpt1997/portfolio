import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown  } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Fade-in animation on load
    useEffect(() => {
        setTimeout(() => setIsScrolled(true), 300); // Adds delay for smooth fade-in
    }, []);

    return (
        <section
            aria-labelledby="hero-heading"
            className="hero relative bg-gray-100 dark:bg-gray-900 py-20 min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Shapes */}
            {/* Floating Gradient Blobs */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-blue-500 opacity-30 rounded-full filter blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-400 to-blue-200 opacity-40 rounded-full filter blur-3xl animate-float"></div>

            {/* Subtle Transparent Circles */}
            <div className="absolute top-0 right-1/3 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-300 opacity-20 rounded-full blur-2xl"></div>

            <div className="container mx-auto flex flex-col lg:flex-row text-center lg:text-left lg:items-center lg:justify-between">
                {/* Left Content - IMAGE */}
                <div
                    className={`relative lg:w-1/2 mt-10 lg:mt-0 order-2 lg:order-1 flex justify-center z-10 ${
                        isScrolled ? "fade-in" : ""
                    }`}
                >
                    <img
                        src="/img/hero-img.jpeg"
                        alt="Juan Tabares - Full Stack Developer"
                        className="w-1/2 h-1/2 rounded-full shadow-lg object-cover"
                    />
                </div>

                {/* Right Content */}
                <div
                    className={`lg:w-1/2 order-1 lg:order-2 ${
                        isScrolled ? "fade-in" : ""
                    }`}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Hello, I'm{" "}
                        <span className="text-blue-600">Juan Tabares</span>
                    </h1>
                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                        Full Stack Developer dedicated to building high-quality web applications.
                    </p>

                    {/* Experience/Intro Text */}
                    <p className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        I specialize in creating solutions that optimize processes and solve real-world problems. With nearly four years of experience in backend and frontend technologies, I focus on developing robust and scalable applications that deliver tangible results for businesses.
                    </p>
                    <a
                        href="#projects"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                    >
                        View My Projects
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center">
                <a
                    href="#about"
                    className="animate-bounce text-gray-700 dark:text-gray-300"
                    aria-label="Scroll to about section"
                >
                    <FontAwesomeIcon icon={faChevronDown} className="h-8 w-8" />
                </a>
            </div>

            {/* Background Gradient Shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 pointer-events-none z-0"></div>
        </section>
    );
};

export default HeroSection;
