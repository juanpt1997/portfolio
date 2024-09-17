import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import GitHub and LinkedIn icons

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-6">
            <div className="container mx-auto max-w-full px-4">
                <div className="flex justify-between items-center flex-wrap">
                    {/* Copyright */}
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Juan Tabares. All rights reserved.
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/juanpt1997"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-300"
                            aria-label="Visit Juan Tabares' GitHub profile"
                            title="Visit Juan Tabares' GitHub profile"
                        >
                            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/juan-pablo-tabares-rico-716a591b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200 transition-colors duration-300"
                            aria-label="Visit Juan Tabares' LinkedIn profile"
                            title="Visit Juan Tabares' LinkedIn profile"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
