import React, { useState } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Your message has been sent!");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <AppLayout title="Contact">
            <div className="py-12 px-4 lg:px-20 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-2xl">
                    <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-200">
                        Get in Touch
                    </h2>
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10">
                        Feel free to reach out through the form below or connect
                        with me via {" "}
                        <a
                            href="https://www.linkedin.com/in/juan-pablo-tabares-rico-716a591b3/"
                            target="_blank"
                            aria-label="LinkedIn"
                            className="text-blue-800 dark:text-blue-500 underline"
                        >
                            LinkedIn.
                        </a>
                    </p>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg space-y-6"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                className="w-full px-4 py-2 mt-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-2 mt-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="w-full px-4 py-2 mt-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                required
                                rows="5"
                                className="w-full px-4 py-2 mt-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Media Links */}
                    <div className="mt-10 flex justify-center space-x-6">
                        <a
                            href="https://github.com/juanpt1997"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juan-pablo-tabares-rico-716a591b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Contact;
