import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { sectionsEnums } from './_enums/sectionsEnums';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
    const [messageSent, setMessageSent] = useState(false);
    const form = useRef();

    useEffect(() => {
        let timeout;
        if (messageSent) {
            timeout = setTimeout(() => {
                setMessageSent(false);
            }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [messageSent]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5pg8wb9', 'template_jpwlsek', form.current, {
                publicKey: 'zYPqLFyVdK7Xptdhx',
            })
            .then(
                () => {
                    console.log('Email sent!');
                    setMessageSent(true);
                    setFormValues({ name: '', email: '', message: '' });
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
            <form ref={form} onSubmit={sendEmail} name={sectionsEnums.contact}>
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
                        value={formValues.name}
                        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                        placeholder='Name'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2' />
                </div>
                <div className='relative mb-4'>
                    <input
                        type='email'
                        id='email'
                        required
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        name='from_email'
                        placeholder='Email'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2' />
                </div>
                <div className='relative mb-4'>
                    <textarea
                        id='message'
                        name='message'
                        required
                        value={formValues.message}
                        onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                        placeholder='Tell me your ideas!'
                        className='bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                        placeholder-cotton focus:ring-peach focus:border-peach
                        focus:outline-none focus:ring-2' />
                </div>
                <motion.button
                    type='submit'
                    className='w-full py-2 px-2 rounded-xl my-2 text-peach bg-amethyst
                            focus:ring-peach focus:border-peach
                            focus:outline-none focus:ring-2'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    Submit
                </motion.button>
                {messageSent && (
                    <div className="mt-6 p-4 bg-coral/30 items-center text-white leading-none lg:rounded-full flex lg:inline-flex w-full" role="alert">
                        <span className="font-semibold mr-2 text-left flex-auto">Message sent!</span>
                    </div>
                )}
            </form>
        </section>
    );
}
