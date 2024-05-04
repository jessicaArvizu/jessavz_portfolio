import React from "react"
import SocialIcon from "./SocialIcon";

const socialData = [
    { icon: <i className="fa-brands fa-square-github"></i>, link: "https://github.com/jessicaArvizu" },
    { icon: <i className="fa-brands fa-linkedin"></i>, link: "https://www.linkedin.com/in/jessica-arvizu/" },
    { icon: <i class="fa-regular fa-square"></i>, link: "https://codesandbox.io/u/jessicaarvizu" },
    { icon: <i className="fa-solid fa-code"></i>, link: "https://www.frontendmentor.io/profile/jessicaArvizu" },
    { icon: <i className="fa-solid fa-graduation-cap"></i>, link: "https://www.codecademy.com/profiles/jessArvizu" }
];

export default function Socials() {
    return (
        <div className="mt-10 mx-auto min-w-full flex md:flex-row flex-ro gap-6 space-around text-4xl">
            {socialData.map((social, index) => (
                <SocialIcon key={index} icon={social.icon} link={social.link} />
            ))}
        </div>
    )
}