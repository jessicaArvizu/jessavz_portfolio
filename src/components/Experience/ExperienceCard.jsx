import React from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";

function ExperienceCard(props) {
    const titleParts = props.title.split('|');

    return (
        <a href={props.url} target='_blank' rel='noopener noreferrer my-6'>
            <motion.div
                className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 rounded hover:backdrop-blur-sm hover:bg-white/20'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.90 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className='lg:col-span-1 text-peach'>
                    {props.date}
                </div>
                <div className='lg:col-span-2'>
                    <h3 className='text-md'>
                        {titleParts.length === 2 ? (
                            <span>
                                <span>{titleParts[0]}</span>
                                <span className='text-peach'>|</span>
                                <span>{titleParts[1]}</span>
                            </span>
                        ) : (
                            <span>{props.title}</span>
                        )}
                    </h3>
                    <h4 className='text-sm text-peach'>{props.subTitle}</h4>
                    <p className='text-sm'>
                        {props.description}
                    </p>
                    <Skills skills={props.skills} />
                </div>
            </motion.div>
        </a>
    );
}

export default ExperienceCard;
