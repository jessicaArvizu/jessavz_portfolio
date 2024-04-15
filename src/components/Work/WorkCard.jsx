import React from "react";
import { motion } from "framer-motion";


export default function WorkCard(props) {
    return (
        <a href={props.url} target='_blank' rel='noopener noreferrer my-6'>
            <motion.div
                className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 rounded hover:backdrop-blur-sm hover:bg-white/20'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.90 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <div className='lg:col-span-2'>
                    <img src={props.img} alt="Screenshot of website"  className="rounded shadow-lg"/>
                    <span className='text-md'>
                        {props.title}
                    </span>
                </div>
            </motion.div>
        </a>
    )
}