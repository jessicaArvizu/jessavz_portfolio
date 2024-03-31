import React from "react";
import { motion } from "framer-motion";

const SocialIcon = ({ icon, link }) => {
    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.90 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}

        >
            <a
                className="hover:text-coral transform transition duration-300 sm:transform-none"
                href={link}
                target="__blank"
                rel="noopener noreferrer"
            >
                {icon}
            </a>
        </motion.div>
    );
};

export default SocialIcon;