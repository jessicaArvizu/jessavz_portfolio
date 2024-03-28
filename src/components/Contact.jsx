import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Contact() {
    return (
        <section id="contact" className="my-16">
            <h2 className="text-1xl mb-1 font-semibold">
                Let's build something <span className="font-bold text-peach">great</span> together! ⭐️
            </h2>
            <br />
            <div className="grid grid-cols-1">
                <Formik
                    initialValues={{ email: '', name: '', message: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email"
                                name="email"
                                placeholder="Your email"
                                className="bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                                placeholder-cotton focus:ring-peach focus:border-peach
                                focus:outline-none focus:ring-2" />
                            <ErrorMessage name="email" component="div" />
                            <Field name="name" placeholder="Your name"
                                className="bg-white/30 w-full py-2 px-2 rounded-xl my-2 text-peach
                                placeholder-cotton focus:ring-peach focus:border-peach
                                focus:outline-none focus:ring-2"/>
                            <ErrorMessage name="name" component="div" />
                            <Field name="message" placeholder="Write your idea here!" as={'textarea'}
                                className="bg-white/30 w-full py-2 px-2 rounded-xl my-2 
                                resize-none text-peach placeholder-cotton focus:ring-peach 
                                focus:border-peach focus:outline-none focus:ring-2" />
                            <ErrorMessage name="message" component="div" />
                            <button type="submit" disabled={isSubmitting}
                                className="w-full py-2 px-2 rounded-xl my-2 text-peach bg-amethyst
                            focus:ring-peach focus:border-peach
                            focus:outline-none focus:ring-2">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}
