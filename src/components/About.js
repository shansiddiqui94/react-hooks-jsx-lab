import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
            <h2>About</h2>
            <p>As a software engineer, I thrive on the challenge of turning complex problems into elegant solutions. Every line of code I write is a step towards building something meaningful, whether it's crafting a user-friendly 
              interface or optimizing algorithms for maximum efficiency</p>
            <img src={image} alt="I made this" />

        </div>;
}

export default About;
