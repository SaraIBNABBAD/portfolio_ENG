import { Component } from "react";
import "./about.css";
import sara from "../../img/sara.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import cv from "../saracv.pdf";
const About = () => {
  
    
  useEffect(()=>{
    Aos.init({duration:2000});
  });
    return (
      <section className="about" id="ab">
        <h1 className="tiitre" data-aos="fade-zoom-in">About Me</h1>
        <div className="flx">
        <div className="text"  data-aos="fade-up" >
          {/* <h4 className="propos">About Me</h4> */}
          <p className="">
          My name is Sara IBN ABBAD, I am 26 years old 
            from Casablanca, Morocco. I am Full stack web developer and my passion is to create value for my clients.
          </p>
          <button className="down"><a href={cv} download className="dwn">Download</a></button>
        </div>
         
        
        </div>
      </section>
    );
  }

export default About;
