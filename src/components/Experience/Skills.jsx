import React from "react";

function Skills({ skills }) {
    return (
        <div className="my-2 flex flex-wrap">
            {skills && skills.map((skill, index) => (
                <p key={index} className="bg-amethyst rounded-xl px-4 py-1 text-xs text-peach m-2">{skill}</p>
            ))}
        </div>
    );
}

export default Skills;
