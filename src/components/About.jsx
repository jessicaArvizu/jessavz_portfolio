import React from 'react'
import {sectionsEnums} from './_enums/sectionsEnums'

export default function About() {
    return (
        <section id={sectionsEnums.about} className='h-fit py-16 lg:py:20'>
            <h3 className="font-bold text-xl text-peach">Greetings! 🌟</h3>
            <p className="my-5">
                A decade ago, my journey into the enchanting world of frontend development began with the humble act
                of
                transforming Tumblr themes using the magic of HTML and CSS. Fast forward to today, and I
                find myself immersed in the dynamic realms of <span className="font-bold">React</span>,
                <span className="font-bold"> JavaScript</span>,
                <span className="font-bold"> Bootstrap</span>,
                and <span className="font-bold"> Tailwind</span> – the
                tools
                that bring my digital dreams to life.
            </p>
            <p className="my-5">
                I consider myself being more of a people-person than your typical introvert.
                I thrive in the delicate dance between the symphony of creating a project from its inception,
                conversing with clients to breathe life into their ideas,
                and the serene solitude of coding, where the magic truly unfolds.
            </p>
            <p className="my-5">
                There&apos;s a poetic charm in crafting not just beautiful, but impeccably engineered projects.
                I find joy in the delicate balance of <span>design</span> and <span>engineering</span>,
                where aesthetics and functionality waltz together seamlessly.
            </p>
            <p className="my-5">
                When I&apos;m not weaving digital wonders, you&apos;ll find me lost in the vibrant world of reading, embracing
                the tactile beauty of crocheting and embroidery, or nurturing my ever-growing collection of plants.
                Because, let&apos;s face it, life is just more enjoyable when it&apos;s bursting with
                <span className='font-bold'>
                    <span className='text-red-200'> c</span>
                    <span className='text-orange-200'>o</span>
                    <span className='text-yellow-200'>l</span>
                    <span className='text-green-200'>o</span>
                    <span className='text-blue-00'>r</span>
                </span>! 🌈✨
            </p>
        </section>
    )
}
