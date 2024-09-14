import React, { useState, useEffect } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Head } from "@inertiajs/react";

export default function AppLayout({ title, children }) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Toggle between light and dark mode, and save preference in localStorage
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Save preference
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Head title={title || "My Portfolio"} />
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="flex-grow container mx-auto max-w-full py-8 px-4">
                {children}
            </main>


            <Footer/>
        </div>
    );
}
