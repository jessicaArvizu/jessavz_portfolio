import React from "react";

export default function Navigation() {
    return (
        <header className="bg-cotton text-amethyst md:sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="title-font font-medium mb-4 md:mb-0 ml-3 text-xl">
                    Jessica Arvizu
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-white">
                        About me
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        My work
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Let's work together!
                </a>
            </div>
        </header>
    );
}