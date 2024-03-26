import * as React from 'react';

export default function Hero() {

    return (
        <section id="about" className="bg-amethyst bg-gradient-to-r from-amethyst to-lavender h-[calc(100vh-74px)]">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-cotton">
                        Hi! I&apos;m Jessica
                    </h1>
                    <h2 className='sm:text-4xl text-3xl mb-4 font-bold text-coral'>
                        And I love to build amazing apps.
                    </h2>
                    <h3 className="mb-8 leading-relaxed text-cotton font-bold font-2xl">
                        Passionate Front-End Developer <span className='font-2xl text-coral'>•</span> React Enthusiast <span className='font-2xl text-coral'>•</span>
                        <br /> Agile Advocate <span className='font-2xl text-coral'>•</span> Scrum Master 🚀
                    </h3>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex py-2 px-10 rounded bg-coral text-cotton shadow-xl">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-cotton border-0 py-2 px-6 focus:outline-none hover:text-peach rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
