import React from "react";

export default function SkillItem(props) {
    return (
        <div className="text-center mb-2">
            <i className={`${props.iconClass} text-5xl mb-2 text-peach`}></i>
            <br/>
            <span>{props.name}</span>
        </div>
    );
}
