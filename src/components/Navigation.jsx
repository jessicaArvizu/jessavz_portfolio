import React from "react";

export default function Navigation() {
    return (
        <div className="mx-auto flex flex-wrap">
            <nav className="flex flex-col text-base justify-start uppercase font-semibold text-xs">
                <a href="#about" className="m-2 hover:text-coral">
                    About me
                </a>
                <a href="#experience" className="m-2 hover:text-coral">
                    Experience
                </a>
                <a href="#my-work" className="m-2 hover:text-coral">
                    My work
                </a>
                <a href="#contact" className="m-2 hover:text-coral">
                    Let's work together! ✨
                </a>
            </nav>
        </div>
    );
}