import React from 'react';
import resume from "../../assets/Resume-Shirin Shahram.pdf";

function Resume() {
    return (
        <section>
            <h1 className="skill-header">My Resume:</h1>
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

export default Resume;



