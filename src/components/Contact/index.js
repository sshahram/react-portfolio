import React from 'react';

function ContactForm() {
    return (
        <section>
            <div className="contact-info">
                <h1 className="contact-title">Contact Info:</h1>
                <a href="tel:818.271.6615" target="_blank" rel="noreferrer">Phone</a>
                <a id="email" href="mailto:shirin.shahram23@gmail.com">shirin.shahram23@gmail.com</a>
                <a href="https://github.com/sshahram" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/shirin-shahram" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </section>
    );
}

export default ContactForm;