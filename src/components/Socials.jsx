import React from "react"

export default function Socials() {
    return (
        <div className='mt-10 mx-auto min-w-full flex md:flex-row flex-ro gap-6 space-around text-4xl'>
            <div>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://github.com/jessicaArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-square-github'></i>
                </a>
            </div>
            <div>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.linkedin.com/in/jessica-arvizu/' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </div>
            <div>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://codepen.io/Jessica-Arvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-brands fa-codepen'></i>
                </a>
            </div>
            <div>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.frontendmentor.io/profile/jessicaArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-solid fa-code'></i>
                </a>
            </div>
            <div>
                <a className='hover:text-coral transform transition duration-300 sm:transform-none'
                    href='https://www.codecademy.com/profiles/jessArvizu' target='__blank'
                    rel='noopener noreferrer'>
                    <i className='fa-solid fa-graduation-cap'></i>
                </a>
            </div>
        </div>
    )
}