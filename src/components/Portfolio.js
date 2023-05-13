import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "1",
    languages: "",
    packages: "",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
  
  {
    id: 1,
    title: "2",
    languages: "",
    packages: "none",
    image: "",
    description: "",
    repo: "",
    live: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;