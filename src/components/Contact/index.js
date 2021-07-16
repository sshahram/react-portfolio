import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // this function will sync the internal state of the component formState with the use input from the DOM
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            {/* <h1>Contact Form</h1> */}
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} row="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="button-submit" type="submit">Submit</button>
            </form> */}
            <div className="contact-info">
                <h1 className="contact-title">Contact Info:</h1>
                <button><a href="tel:818.271.6615" target="_blank" rel="noreferrer">Phone</a></button>
                <button><a id="email" href="mailto:shirin.shahram23@gmail.com">Email</a></button>
                <button><a href="https://github.com/sshahram" target="_blank" rel="noreferrer">GitHub</a></button>
                <button><a href="https://www.linkedin.com/in/shirin-shahram" target="_blank" rel="noreferrer">Linkedin</a></button>
            </div>
        </section>
    );
}

export default ContactForm;