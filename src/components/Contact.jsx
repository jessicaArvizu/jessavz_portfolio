import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { sectionsEnums } from './_enums/sectionsEnums';
import { motion } from 'framer-motion';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5pg8wb9', 'template_jpwlsek', form.current, {
                publicKey: 'zYPqLFyVdK7Xptdhx',
            })
            .then(
                () => {
                    console.log('Email sent!');
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    };

    return (
        <section id={sectionsEnums.contact} className='h-fit py-10 lg:py:20'>
            <form ref={form} onSubmit={sendEmail}
                name={sectionsEnums.contact}>
                <h3 className='text-1xl mb-1 font-bold'>
                    Interested in working with me? Let's build something <span className='uppercase text-peach'>great</span> together!
                </h3>
                <br />
                <div className='relative mb-4'>
                    <input
                        type='text'
                        id='name'
                        name='from_name'
                        required
                        placeholder='Name'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2'                    />
                </div>
                <div className='relative mb-4'>
                    <input
                        type='email'
                        id='email'
                        required
                        name='from_email'
                        placeholder='Email'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2'                    />
                </div>
                <div className='relative mb-4'>
                    <textarea
                        id='message'
                        name='message'
                        required
                        placeholder='Tell me your ideas!'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2'                    />
                </div>
                <motion.button
                    type='submit'
                    className='w-full py-2 px-2 rounded-xl my-2 text-peach bg-amethyst
                            focus:ring-peach focus:border-peach
                            focus:outline-none focus:ring-2'
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.90 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    Submit
                </motion.button>
            </form>
        </section>
    );
}


