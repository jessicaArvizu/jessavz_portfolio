import * as React from 'react';
import Navigation from './Navigation';
import Socials from './Socials'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section>
            <div className='mx-auto min-w-full flex md:flex-col flex-col p-16 lg:p-24'>
                <div className='flex flex-col md:items-start md:text-left md:mb-0 items-center text-center'>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='title-font sm:text-4xl text-3xl lg:mb-4 font-bold text-coral'>
                        Hi! I&apos;m Jessica Arvizu
                    </motion.h1>

                    <h2 className='sm:text-2xl text-2xl mb-4 font-bold text-peach'>
                        And I love to build amazing apps.
                    </h2>
                    <h3 className='mb-8 leading-relaxed text-cotton font-bold font-2xl'>
                        Passionate Front-End Developer <span className='font-2xl text-coral'>•</span> React Enthusiast <span className='font-2xl text-coral'>•</span>
                        <br /> Agile Advocate <span className='font-2xl text-coral'>•</span> Scrum Master 🚀
                    </h3>
                </div>
                <div className='lg:mt-2'>
                    <Navigation />
                </div>
                <div className='lg:mt-12'>
                    <Socials />
                </div>
            </div>
        </section>
    )
}
