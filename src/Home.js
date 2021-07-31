import React from "react"
import  "bootstrap"
import "../src/App.css"
import Common from "./Common";
import img from "../src/components/imgg.svc"
function Home() {
  return (
    <>
     <Common name="LET'S FLY TOGETHER" btn="Let's Start" imgsrc={img} tolink="/Service" />
    </>
  );
}

export default Home
