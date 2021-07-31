import React from "react"
import Common from "./Common"

import img from "../src/components/about.png"

function About() {
    return (
      <>
        <Common name="Know About Me" btn="Contact me" imgsrc={img} tolink="/Contact"/>
      </>
    );
  }
  
  export default About;
  