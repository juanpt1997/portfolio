import AppLayout from "@/Layouts/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            {/* Hero Section */}
            <section className="hero relative bg-gray-100 dark:bg-gray-900 py-20 min-h-screen flex items-center">
                <div className="container mx-auto text-center lg:text-left lg:flex lg:items-center lg:justify-between">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Hello, I'm{" "}
                            <span className="text-blue-600">Juan Tabares</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                            Full Stack Developer crafting engaging web
                            applications.
                        </p>

                        <a
                            href="#projects"
                            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-300"
                        >
                            View My Projects
                        </a>
                    </div>

                    {/* Right Content: Image */}
                    <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
                        <img
                            src="/images/hero-image.png"
                            alt="Juan Tabares - Full Stack Developer"
                            className="w-64 h-64 rounded-full shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Background Shape */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 pointer-events-none"></div>
            </section>

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
