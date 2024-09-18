import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faServer,
    faTools,
    faCodePullRequest,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "/resources/css/about.module.css";

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
            {/* Background Lines */}
            <div className={`absolute inset-0 ${styles['bg-stripes-light']} dark:${styles['bg-stripes']} opacity-40 pointer-events-none z-0`}></div>

            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-4 z-10">
                {/* Left Column: Personal Info */}
                <div
                    className={`lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left ${isScrolled ? "fade-in" : ""}`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-6">
                        About Me
                    </h2>

                    {/* Break text into sections with subtle headings */}
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                        Introduction
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                        Hi! I'm{" "}
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                            Juan Tabares
                        </span>
                        , a Full Stack Developer from Colombia with nearly four
                        years of experience creating scalable, user-friendly web
                        applications. My journey into full stack development
                        began in 2019 before I graduated with a degree in
                        Computer Systems Engineering. From the start, I’ve been
                        passionate about solving complex problems with clean,
                        efficient code and delivering high-quality software.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                        Career Highlights
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                        I began my career at <strong>CO&TEX S.A.S.</strong>,
                        where I initially worked with PHP, building a strong
                        foundation in OOP, MySQL, jQuery, and Bootstrap. As I
                        progressed, I expanded my skills in MVC architecture,
                        database management, Laravel, and Livewire. I worked
                        with a team responsible for creating and managing an
                        integrated system that optimized processes across
                        various departments.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                        Later, I led a project at <strong>TECNOLAB</strong>{" "}
                        focused on a transportation management system. I
                        implemented GPS tracking using Node.js and managed the
                        backend with Laravel, while leading the team as SCRUM
                        Master. I trained the team on industry best practices,
                        including SCRUM and Git, to ensure the project was
                        completed on time and to a high standard.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                        Skills and Interests
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                        I’m passionate about continuously expanding my skill
                        set. Currently, I’m learning React with Inertia.js.
                        While I have foundational knowledge in AWS and REST
                        APIs, I’m excited to deepen my expertise in these areas
                        as well. Outside of work, I enjoy hiking, playing
                        volleyball, and keeping up with the latest tech trends.
                        I believe in the power of teamwork and collaboration,
                        and I’m always looking forward to the next challenge in
                        software development.
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
                    className={`lg:w-1/2 grid grid-cols-2 gap-6 lg:sticky lg:top-20 lg:self-start mb-16 ${isScrolled ? "fade-in" : ""} lg:ml-10`}
                >
                    {/* Skill Box - Frontend Development */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon
                            icon={faCode}
                            className="text-blue-600 text-3xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Frontend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Bootstrap, TailwindCSS, JavaScript (ES14), jQuery, React (Inertia.js), HTML5, CSS, AJAX
                        </p>
                    </div>

                    {/* Skill Box - Backend Development */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon
                            icon={faServer}
                            className="text-blue-600 text-3xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Backend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            PHP, Laravel, Node.js, MySQL, MariaDB, OOP, Livewire, REST APIs
                        </p>
                    </div>

                    {/* Skill Box - Version Control */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon
                            icon={faCodePullRequest}
                            className="text-blue-600 text-3xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Version Control
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Git, GitHub, Gitea, Continuous Integration (CI), Code Reviews and Pull Requests
                        </p>
                    </div>

                    {/* Skill Box - Tools */}
                    <div className="skill-box bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                        <FontAwesomeIcon
                            icon={faTools}
                            className="text-blue-600 text-3xl mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                            Tools
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Docker, AWS, SCRUM, Jira, Test-Driven Development (TDD)
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center z-10">
                <a
                    href="#projects"
                    className="animate-bounce text-gray-700 dark:text-gray-300"
                    aria-label="Scroll to projects section"
                >
                    <FontAwesomeIcon icon={faChevronDown} className="h-8 w-8" />
                </a>
            </div>

            {/* Background Gradient and Stripes */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-20 pointer-events-none z-0"></div>
        </section>
    );
};

export default AboutSection;
