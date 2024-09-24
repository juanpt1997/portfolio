import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub icon

const ProjectSection = () => {
    const projects = [
        {
            title: "CO&TEX S.A.S.",
            description: "An integrated system to optimize processes across departments such as HR, Quality Control, and Planning. Technologies: PHP, MySQL, jQuery, Bootstrap, Laravel, Livewire.",
            imageUrl: "/img/coytex-logo.jpg", // Add a path to the CO&TEX logo or a relevant image
            link: "https://app.siocoytex.com/", // No link to GitHub
            isConfidential: true,
            ariaLabel: "CO&TEX Project",
        },
        {
            title: "Tecnolab - Transportation Management System",
            description: "A transportation system that tracks vehicles such as buses and vans in real-time using GPS. Technologies: Node.js, Laravel, MySQL, Bootstrap.",
            imageUrl: "/img/tecnolab-logo.jpeg", // Add a path to the Tecnolab logo or a relevant image
            link: "https://apps.tecnolab.com.co/sit/",
            isConfidential: true,
            ariaLabel: "Tecnolab Project",
        },
        {
            title: "PDC International Corporation",
            description: "A freelance project built with PHP, jQuery, Bootstrap, and MySQL. The code is available on GitHub.",
            imageUrl: "/img/pdc-logo.jpg", // Add a path to a relevant PDC logo or image
            link: "https://www.lnrdigital.com/lnrdigital.com/jpablo/",
            isConfidential: false,
            ariaLabel: "PDC International Corporation Project",
        },
    ];

    const [currentProject, setCurrentProject] = React.useState(0);

    const handlePrev = () => {
        setCurrentProject((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentProject((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section id="projects" className="projects bg-gray-100 dark:bg-gray-900 py-20" aria-labelledby="projects-heading">
            <div className="container mx-auto max-w-screen-lg px-4">
                {/* Section Title */}
                <h2 id="projects-heading" className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                    Highlighted Projects
                </h2>

                {/* Project Carousel */}
                <div className="relative w-full">
                    {/* Project Card */}
                    <div
                        className="project flex flex-col items-center text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
                        onClick={() => window.open(projects[currentProject].link, "_blank")}
                        aria-label={projects[currentProject].ariaLabel}
                        role="button"
                        tabIndex="0"
                    >
                        <img
                            src={projects[currentProject].imageUrl}
                            alt={`${projects[currentProject].title} - Project Image`}
                            className="w-2/3 h-auto object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {projects[currentProject].title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {projects[currentProject].description}
                        </p>
                        {projects[currentProject].isConfidential && (
                            <p className="text-gray-500 dark:text-gray-400 italic">
                                This project is confidential, so the code cannot be shared.
                            </p>
                        )}
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Project"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Project"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Enhanced GitHub Invitation */}
                <div className="mt-12 text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                    <div className="flex justify-center items-center mb-4">
                        <FontAwesomeIcon icon={faGithub} className="text-5xl text-blue-600 dark:text-blue-400 mr-4" />
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            Explore More Projects on GitHub
                        </h3>
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Want to see more of my open-source work? Check out my GitHub profile where I share my repositories, learning projects, and experiments.
                    </p>
                    <a
                        href="https://github.com/juanpt1997"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Juan Tabares' GitHub profile"
                    >
                        Visit My GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
