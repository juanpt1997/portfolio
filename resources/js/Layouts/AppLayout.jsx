import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function AppLayout({ title, children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Head title={title || "My Portfolio"} />
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Copyright */}
                        <div className="text-sm">
                            &copy; {new Date().getFullYear()} Juan Tabares. All
                            rights reserved.
                        </div>

                        {/* Social Media Links */}
                        <div className="space-x-4">
                            {/* GitHub Link */}
                            <a
                                href="https://github.com/juanpt1997"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline-block"
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
                                className="text-gray-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline-block"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-10h2.5v10zm-1.25-11.29c-.83 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5-.67 1.5-1.5 1.5zm13.25 11.29h-2.5v-5.56c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.91v5.66h-2.5v-10h2.4v1.37h.03c.34-.64 1.17-1.31 2.41-1.31 2.58 0 3.06 1.7 3.06 3.91v6.03z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
