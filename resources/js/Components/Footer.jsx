const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-6">
            <div className="container mx-auto max-w-full px-4">
                <div className="flex justify-between items-center flex-wrap">
                    {/* Copyright */}
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Juan Tabares. All
                        rights reserved.
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.205 11.49c.6.111.82-.26.82-.577v-2.022c-3.338.726-4.038-1.616-4.038-1.616-.545-1.38-1.332-1.748-1.332-1.748-1.087-.743.083-.728.083-.728 1.203.084 1.835 1.235 1.835 1.235 1.07 1.83 2.808 1.3 3.492.993.108-.775.419-1.301.762-1.6-2.665-.303-5.467-1.334-5.467-5.93 0-1.311.469-2.384 1.235-3.224-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.512 11.512 0 013.006-.404 11.513 11.513 0 013.006.404c2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.768.84 1.235 1.913 1.235 3.224 0 4.606-2.805 5.624-5.475 5.92.431.372.816 1.106.816 2.23v3.307c0 .32.218.694.824.576A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 448 512"
                                fill="currentColor"
                            >
                                <path d="M100.28 448H7.4V148.9h92.88zm-46.14-342.2C24.28 105.8 0 81.1 0 50.3A50.35 50.35 0 0 1 50.47 0c27.77 0 50.34 22.62 50.34 50.3 0 30.8-24.39 55.5-46.67 55.5zM447.8 448h-92.86V302.4c0-34.7-12.43-58.4-43.52-58.4-23.74 0-37.86 16-44.08 31.5-2.27 5.5-2.84 13.2-2.84 20.9V448H172.7s1.24-263.7 0-290.1h92.77v41.1c-1.85 3.1-4.07 6.1-5.97 9.1h5.97v-9.1c12.34-19.1 34.44-46.4 83.71-46.4 61.1 0 106.9 39.8 106.9 125.3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
