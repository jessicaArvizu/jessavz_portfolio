import React from "react"
import { motion } from "framer-motion"

export default function Socials() {
    return (
        <div className='mt-10 mx-auto min-w-full flex md:flex-row flex-ro gap-6 space-around text-4xl'>
            <motion.div
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://github.com/jessicaArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-square-github'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.linkedin.com/in/jessica-arvizu/' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://codepen.io/Jessica-Arvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-codepen'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.frontendmentor.io/profile/jessicaArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-solid fa-code'></i>
                </a>
            </motion.div>
            <motion.div
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.2 }}>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.codecademy.com/profiles/jessArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-solid fa-graduation-cap'></i>
                </a>
            </motion.div>
        </div>
    )
}