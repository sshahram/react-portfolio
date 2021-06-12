import React from 'react';
import resume from "../../assets/Resume-Shirin Shahram.pdf";

function Resume() {
    return (
        <section>
            <h1>My Resume:</h1>
            <a href={resume} id="resume" target="_blank">Resume</a>
            <h1>Technical Skills:</h1>
            <ul>
                <li className="skills">Git, HTML5, CSS, JQuery, Javascript</li>
                <li className="skills">Bootstrap, AJAX, Agile development</li>
                <li className="skills">MySQL, MS SQL, Express.js, Node.js</li>
                <li className="skills">Sequelize, React, Handlebars.js, MERN</li>
                <li className="skills">SPSS, Tableau, Visio, Minitab, AutoCAD</li>
                <li className="skills">R, REST APIs, MongoDB, NoSQL</li>
            </ul>
        </section>
    );
}

export default Resume;



