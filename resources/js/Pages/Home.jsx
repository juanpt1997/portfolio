import AppLayout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/Home/HeroSection";
import AboutSection from "@/Components/Home/AboutSection";

export default function Home() {
    return (
        <AppLayout title="Home">
            {/* Hero Section */}
            <HeroSection />

            {/* About Me Section */}
            <AboutSection />

            {/* Projects Section */}
            <section
                id="projects"
                className="projects bg-gray-100 dark:bg-gray-800 py-20"
            >
                <div className="container mx-auto max-w-screen-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Highlighted Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="project bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold">Project 1</h3>
                            <p className="mt-2">
                                A brief description of this project, the
                                technologies used, and what it accomplishes.
                            </p>
                            <a
                                href="https://github.com/juanpt1997/project1"
                                className="mt-4 inline-block text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                        {/* Project 2 */}
                        <div className="project bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold">Project 2</h3>
                            <p className="mt-2">
                                A brief description of this project, the
                                technologies used, and what it accomplishes.
                            </p>
                            <a
                                href="https://github.com/juanpt1997/project2"
                                className="mt-4 inline-block text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </AppLayout>
    );
}
