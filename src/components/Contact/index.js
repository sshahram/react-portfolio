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
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/javascript--v2.png" alt="JavaScript"/> <p>JavaScript</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/nodejs.png" alt="Node.js"/> <p>Node.js</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/react-native.png" alt="React"/> <p>React</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/mongodb.png" alt="MongoDB"/> <p>MongoDB</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/mysql-logo.png" alt="MySQL"/> <p>MySQL</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/html-5--v1.png"alt="HTML"/> <p>HTML</p></div>
                <div className="skill-block"><img src="https://img.icons8.com/color/144/000000/css3.png" alt="CSS"/> <p>CSS</p></div>
                {/* <p>Git, HTML5, CSS, JQuery, Javascript</p>
                <p>Bootstrap, AJAX, Agile development</p>
                <p>MySQL, MS SQL, Express.js, Node.js</p>
                <p>Sequelize, React, Handlebars.js, MERN</p>
                <p>SPSS, Tableau, Visio, Minitab, AutoCAD</p>
                <p>R, REST APIs, MongoDB, NoSQL</p> */}
            </div>
        </section>
    );
}

export default ContactForm;