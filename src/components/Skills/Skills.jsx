import React from "react";
import { sectionsEnums } from "../_enums/sectionsEnums";
import SkillItem from "./SkillItem";

export default function Skills() {
    return (
        <section id={sectionsEnums.skills} className='h-fit py-10 lg:py:20'>
            <h3 className="font-bold mb-10 text-xl text-peach">Some of my skills</h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
                <SkillItem iconClass="fa-brands fa-html5" name="HTML 5"/>
                <SkillItem iconClass="fa-brands fa-css3-alt" name="CSS 3"/>
                <SkillItem iconClass="fa-brands fa-js" name="JavaScript"/>
                <SkillItem iconClass="fa-brands fa-node-js" name="Node"/>
                <SkillItem iconClass="fa-brands fa-figma" name="Figma"/>
                <SkillItem iconClass="fa-brands fa-react" name="React"/>
                <SkillItem iconClass="fa-brands fa-git" name="Git"/>
                <SkillItem iconClass="fa-brands fa-github" name="GitHub"/>
                <SkillItem iconClass="fa-solid fa-laptop-code" name="Responsive Design"/>
                <SkillItem iconClass="fa-solid fa-gear" name="RESTful APIs"/>
                <SkillItem iconClass="fa-brands fa-sass" name="Sass"/>
                <SkillItem iconClass="fa-solid fa-hands" name="Web Accessibility"/>
                <SkillItem iconClass="fa-brands fa-wordpress" name="WordPress"/>
                <SkillItem iconClass="fa-brands fa-elementor" name="Elementor"/>
                <SkillItem iconClass="fa-brands fa-wix" name="Wix"/>
                <SkillItem iconClass="fa-brands fa-weebly" name="Weebly"/>
            </div>
        </section >
    )
}


<i class="fa-brands fa-css3-alt"></i>