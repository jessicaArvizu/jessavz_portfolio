import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        });

        Object.values(sectionRefs.current).forEach(sectionRef => {
            observer.observe(sectionRef);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleNavLinkClick = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-w-full px-16 py-0 lg:px-24">
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
