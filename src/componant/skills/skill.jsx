import { Component } from "react";
import './skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons'
 import { faReact,faHtml5,faCss3Alt,faSquareJs,faBootstrap,faPhp,faLaravel} 
 from '@fortawesome/free-brands-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Competence = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  });
    
        return (
          <div id="comp">
          <h1 className="comp-titre" data-aos="fade-zoom-in">Competences</h1>
          <div className="bodyy">
          <div className="contnr" data-aos="flip-left">
             <p>HTML</p>
            <div className="skills">
              <div className="skill html">90%</div>
            </div>

            <p>CSS</p>
            <div className="skills">
              <div className="skill css">85%</div>
            </div>

            <p>Bootstrap</p>
            <div className="skills">
              <div className="skill boot">80%</div>
            </div>

            <p>PHP,Laravel</p>
            <div className="skills">
              <div className="skill php">75%</div>
            </div>

            <p>JavaScript,React JS</p>
            <div className="skills">
              <div className="skill js">70%</div>
            </div>
            
            </div>
            
            <div className="corp" data-aos="flip-right">
            
                <FontAwesomeIcon icon={faHtml5} className="iconn"/>
                <FontAwesomeIcon icon={faCss3Alt} className="iicon"/>
                <FontAwesomeIcon icon={faBootstrap} className="iconn"/>
                <FontAwesomeIcon icon={faPhp}  className="iicon"/>
                <FontAwesomeIcon icon={faLaravel}  className="iconn"/> 
                <FontAwesomeIcon icon={faSquareJs}className="iicon"/>
                <FontAwesomeIcon icon={faReact} className="iconn"/>
                <FontAwesomeIcon icon={faCode} className="iicon"/>
                
            </div>
             
          

          
          </div></div>
         
            
            
            
        );
    }

 
export default Competence;