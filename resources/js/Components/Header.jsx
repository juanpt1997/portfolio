import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white dark:bg-gray-800 shadow">
            <div className="container mx-auto max-w-full px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo / Branding */}
                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        <Link
                            href="/"
                            className="hover:text-gray-700 dark:hover:text-gray-300"
                            aria-label="Go to homepage"
                        >
                            Dev Juan Tabares
                        </Link>
                    </div>

                    {/* Links - Visible on Desktop */}
                    <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <Link
                            href="#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to About section"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Projects section"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Contact section"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#blog"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Blog section"
                        >
                            Blog
                        </Link>
                    </nav>

                    {/* Dark Mode Toggle Button */}
                    <div className="flex items-center space-x-4">
                        {/* Dark Mode Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-gray-900 dark:text-gray-100 focus:outline-none p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
                            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {/* Sun/Moon Icon */}
                            <FontAwesomeIcon
                                icon={darkMode ? faMoon : faSun}
                                className="h-5 w-5"
                            />
                        </button>

                        {/* Hamburger Menu - Visible on mobile */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-900 dark:text-gray-100 focus:outline-none"
                                aria-label="Toggle navigation menu"
                                title="Toggle navigation menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Visible on mobile */}
                {isOpen && (
                    <nav className="mt-4 space-y-2 md:hidden">
                        <Link
                            href="#about"
                            className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to About section"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Projects section"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Contact section"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#blog"
                            className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            aria-label="Navigate to Blog section"
                        >
                            Blog
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
