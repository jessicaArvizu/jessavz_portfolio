import React from "react";
import { sectionsEnums } from "./_enums/sectionsEnums";
import ReactSkillbar from 'react-skillbars';

const skills = [
    { type: 'HTML', level: 100 },
    { type: "CSS & SCSS", level: 100 },
    { type: 'Javascript', level: 85 },
    { type: 'React', level: 75 },
    { type: 'Agile Met.', level: 90 },
    { type: 'Scrum', level: 100 },
    { type: 'WordPress', level: 80 },
    { type: 'UX/UI', level: 40 },
];

const colors = {
    bar: "#5f689f",
    title: {
        text: "#f5f0ea",
        background: "#5f689f"
    }
};

export default function Skills() {
    return (
        <section id={sectionsEnums.skills} className='h-fit py-10 lg:py:20'>
            <h3 className="font-bold mb-10 text-xl text-peach">Some of my skills</h3>
            <ReactSkillbar skills={skills} animationDelay={300} colors={colors} height={20}/>
        </section >
    )
}