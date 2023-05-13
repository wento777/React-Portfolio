import React from "react";
import photo from "../img/photo.jpg";
function About() {
  return (
    <div>
      <p className="content is-large">Full Stack Web Developer & Software Engineer Student</p>
      <hr />
      <img className="my-pic" src={photo} alt="Andrei Florea"/>
      <p className="content is-italic mt-5,text-center ">
      
      Hi my name is Andrei Florea, I'm a graduate of KU Full Stack Web Developer & Software Engineer Bootcamp. In May 2023 I receive a  Certificate of Completion from the University of Kansas Jayhawk Global, which provided me a strong foundation in object-oriented programming of progressive web applications that included HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.
            </p>

    </div>
  );
}

export default About;