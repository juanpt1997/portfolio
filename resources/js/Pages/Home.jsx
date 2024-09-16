import AppLayout from "@/Layouts/AppLayout";
import HeroSection from "@/Components/Home/HeroSection";

export default function Home() {
    return (
        <AppLayout>
            {/* Hero Section */}
            <HeroSection />

            {/* About Me Section */}
            <section id="about" className="about py-20">
                <div className="container mx-auto max-w-screen-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        About Me
                    </h2>
                    <p className="text-lg text-center leading-relaxed">
                        I’m a passionate Full Stack Developer with X years of
                        experience in building web applications using
                        technologies like Laravel, React, and TailwindCSS. I
                        love solving complex problems and turning ideas into
                        reality through code. My focus is on clean,
                        maintainable, and scalable solutions. I'm always
                        learning and staying up-to-date with the latest web
                        trends and tools.
                    </p>
                </div>
            </section>

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

            {/* Skills Section */}
            <section id="skills" className="skills py-20">
                <div className="container mx-auto max-w-screen-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Skills
                    </h2>
                    <div className="flex justify-center space-x-8">
                        {/* Skill 1 */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold">JavaScript</h3>
                        </div>
                        {/* Skill 2 */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold">Laravel</h3>
                        </div>
                        {/* Skill 3 */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold">React</h3>
                        </div>
                        {/* Skill 4 */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold">Tailwind CSS</h3>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
