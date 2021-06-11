import React from 'react';
import profileImage from "../../assets/images/profile-pic.JPG"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Full Stack Engineer</h1>
            <img src={profileImage} style={{ width: "20%", height: "20%" }} alt="profile picture" />
            <div>
                <p>
                    Result-oriented and motivated Full Stack Developer with hands-on experience designing fully functional, mobile responsive and scalable applications. 
                    Enthusiastic about learning new technologies and resolving difficult challenges. 
                    Ability to lead projects and solve technical challenges, utilizing problem-solving, project management, and analytical skills . 
                    Effective team player with strong communication skills and great attention to details. 
                    Worked in a highly regulated and fast-paced environment without missing any deadlines. 
                    Having received a “Certificate” in Full Stack Web Development from UC Berkeley.
                </p>
            </div>
        </section>
    );
}

export default About;