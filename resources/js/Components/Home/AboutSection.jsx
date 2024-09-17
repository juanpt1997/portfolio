import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Using FontAwesome for other icons
import { faCode, faServer, faTools, faCodePullRequest } from "@fortawesome/free-solid-svg-icons"; // Importing other skill icons

const AboutSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Fade-in animation on load
    useEffect(() => {
        setTimeout(() => setIsScrolled(true), 300); // Adds delay for smooth fade-in
    }, []);

    return (
        <section
            id="about"
            className="about relative bg-white dark:bg-gray-800 py-16 min-h-screen flex items-center"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-4">
                {/* Left Column: Personal Info */}
                <div
                    className={`lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left ${
                        isScrolled ? "fade-in" : ""
                    }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        Hi! I'm{" "}
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                            Juan Tabares
                        </span>
                        , a Full Stack Developer passionate about creating
                        intuitive web applications that deliver engaging user
                        experiences.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        I specialize in frontend and backend technologies, and I
                        enjoy solving complex problems to build modern,
                        responsive, and scalable applications.
                    </p>

                    <a
                        href="#contact"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Right Column: Skills */}
                <div
                    className={`lg:w-1/2 grid grid-cols-2 gap-6 ${
                        isScrolled ? "fade-in" : ""
                    } lg:ml-10`}
                >
                    {/* Skill Box - Frontend Development */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon icon={faCode} className="text-blue-600 text-3xl mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Frontend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            React, TailwindCSS, JavaScript, HTML, CSS
                        </p>
                    </div>

                    {/* Skill Box - Backend Development */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon icon={faServer} className="text-blue-600 text-3xl mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Backend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Laravel, Node.js, PHP, MySQL
                        </p>
                    </div>

                    {/* Skill Box - Version Control (with Git SVG) */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon icon={faCodePullRequest} className="text-blue-600 text-3xl mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Version Control
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Git, GitHub
                        </p>
                    </div>

                    {/* Skill Box - Tools */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon icon={faTools} className="text-blue-600 text-3xl mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Tools
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Docker, Nginx, AWS
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center">
                <a
                    href="#projects"
                    className="animate-bounce text-gray-700 dark:text-gray-300"
                    aria-label="Scroll to projects section"
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
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-20 pointer-events-none z-0"></div>
        </section>
    );
};

export default AboutSection;
