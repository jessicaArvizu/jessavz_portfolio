import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = Array.from(document.querySelectorAll('section')).map(section => {
                const rect = section.getBoundingClientRect();
                return {
                    id: section.id,
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY
                };
            });

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const currentSection = sectionOffsets.find(section => scrollPosition >= section.top && scrollPosition < section.bottom);
            setActiveSection(currentSection ? currentSection.id : null);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavLinkClick = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-w-full py-0">
            <nav className="flex flex-col text-base justify-start uppercase font-semibold text-xs">
                <motion.a
                    whileHover={{ translateX: 15 }}
                    onClick={() => handleNavLinkClick('about')}
                    className={`m-2 ${activeSection === 'about' ? 'text-coral' : ''}`}
                >
                    <i className="fa-solid fa-chevron-right text-xs"></i> About me
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    onClick={() => handleNavLinkClick('experience')}
                    className={`m-2 ${activeSection === 'experience' ? 'text-coral' : ''}`}
                >
                    <i className="fa-solid fa-chevron-right"></i> Experience
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    onClick={() => handleNavLinkClick('skills')}
                    className={`m-2 ${activeSection === 'skills' ? 'text-coral' : ''}`}
                >
                    <i className="fa-solid fa-chevron-right"></i> My Skills
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    onClick={() => handleNavLinkClick('work')}
                    className={`m-2 ${activeSection === 'work' ? 'text-coral' : ''}`}
                >
                    <i className="fa-solid fa-chevron-right"></i> My work
                </motion.a>
                <motion.a
                    whileHover={{ translateX: 15 }}
                    onClick={() => handleNavLinkClick('contact')}
                    className={`m-2 ${activeSection === 'contact' ? 'text-coral' : ''}`}
                >
                    <i className="fa-solid fa-chevron-right"></i> Let's work together! ✨
                </motion.a>
            </nav>
        </div>
    );
}
