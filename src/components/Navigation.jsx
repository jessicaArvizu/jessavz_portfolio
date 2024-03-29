import React from 'react';
import { motion } from "framer-motion"

export default function Navigation() {

    return (
        <div className="mx-auto flex flex-wrap">
            <nav className="flex flex-col text-base justify-start uppercase font-semibold text-xs">
                <motion.a
                    whileHover={{ translateX: 15 }}
                    href="#about" className="m-2 hover:text-coral">
                    <i className="fa-solid fa-chevron-right text-xs"></i> About me

                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    href="#experience" className="m-2 hover:text-coral">
                    <i class="fa-solid fa-chevron-right"></i> Experience
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    href="#my-work" className="m-2 hover:text-coral">
                    <i class="fa-solid fa-chevron-right"></i> My work
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    href="#contact" className="m-2 hover:text-coral">
                    <i class="fa-solid fa-chevron-right"></i> Let's work together! ✨
                </motion.a>
            </nav>
        </div>
    );
}