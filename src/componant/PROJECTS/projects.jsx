import { Component } from "react";
import Projet from "./project";
import squade from "../../img/squade.PNG";
// import green from "../../img/green.PNG";
import calcul from "../../img/calc.JPG";
import list from "../../img/lise.PNG";
import devin from "../../img/devinette.PNG";

class Projets extends Component {
  render(){
    return (
      <div id="pro">
        <h1 className="project" data-aos="fade-zoom-in">Projects</h1>
      
          <div className="flex">
            <Projet
              image={squade}
              lien="https://saraibnabbad.github.io/Squade/"
              lienG="https://github.com/SaraIBNABBAD/Squade"
              titre="Squade Free"
              description="it is an information-rich mockup that encompasses a lot of CSS property.  "
            />
            <Projet
              image={calcul}
              lien="https://saraibnabbad.github.io/Calculatrice/"
              lienG="https://github.com/SaraIBNABBAD/Calculatrice"
              titre="Calculatrice"
              description="The Calculator among the projects when we realized with HTML, CSS and JavaScript ."
              
            />
            
            <Projet
              image={devin}
              lien="https://saraibnabbad.github.io/Devinette/"
              lienG="https://github.com/SaraIBNABBAD/Devinette"
              titre="Devinette"
              description="A guessing game is a simple game in which a user has to guess a number at three different levels."
            />
            <Projet
              image={list}
              lien="https://saraibnabbad.github.io/todo-list/"
              lienG="https://github.com/SaraIBNABBAD/todo-list"
              titre="Todo List"
              description="ToDo List can be defined as a shopping or to-do list, usually written as a memory help."
            />
          </div>
          <button className="show"><a href="https://github.com/SaraIBNABBAD?tab=repositories" target="_blank" >Show More</a></button>

      </div>
    );
  }
}

export default Projets;
