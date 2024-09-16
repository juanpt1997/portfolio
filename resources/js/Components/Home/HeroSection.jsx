import React, { useEffect, useState } from "react";
import styles from "/resources/css/hero.module.css"; // Importing CSS file

const HeroSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Fade-in animation on load
    useEffect(() => {
        setTimeout(() => setIsScrolled(true), 300); // Adds delay for smooth fade-in
    }, []);

    return (
        <section className="hero relative bg-gray-100 dark:bg-gray-900 py-20 min-h-screen flex items-center">
            <div className="container mx-auto text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                {/* Left Content */}
                <div
                    className={`lg:w-1/2 ${
                        isScrolled ? styles["fade-in"] : ""
                    }`}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Hello, I'm{" "}
                        <span className="text-blue-600">Juan Tabares</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                        Full Stack Developer crafting engaging web applications.
                    </p>

                    <a
                        href="#projects"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                    >
                        View My Projects
                    </a>
                </div>

                {/* Right Content: Image */}
                <div
                    className={`relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center z-10 ${
                        isScrolled ? styles["fade-in"] : ""
                    }`}
                >
                    <img
                        src="/img/hero-img.jpeg"
                        alt="Juan Tabares - Full Stack Developer"
                        className="w-1/2 h-1/2 rounded-t-full rounded-b-full shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center">
                <a
                    href="#projects"
                    className="animate-bounce text-gray-700 dark:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </a>
            </div>

            {/* Background Shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 pointer-events-none z-0"></div>
        </section>
    );
};

export default HeroSection;
