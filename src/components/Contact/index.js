import React from 'react';
import resume from "../../assets/Resume-Shirin Shahram.pdf";

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
            <h1 className="skill-header" id="myResume">My Resume:</h1>
            <div className="container"><a href={resume} id="resume" target="_blank" rel="noreferrer">Resume</a></div>
            <h1 className="skill-header">Technical Skills:</h1>
            <div className="skills">
                <p>Git, HTML5, CSS, JQuery, Javascript</p>
                <p>Bootstrap, AJAX, Agile development</p>
                <p>MySQL, MS SQL, Express.js, Node.js</p>
                <p>Sequelize, React, Handlebars.js, MERN</p>
                <p>SPSS, Tableau, Visio, Minitab, AutoCAD</p>
                <p>R, REST APIs, MongoDB, NoSQL</p>
            </div>
        </section>
    );
}

export default ContactForm;