import { Component } from "react";
import "aos/dist/aos.css";
import "./project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
class Projet extends Component {
  render() {
    return (
      <>
        <div className="card carde">
          <div>
          <img src={this.props.image} alt="img" className="imgMt" />
          </div>
          <div>
            <h4 className="text-white">{this.props.titre}</h4>
            <p className="desc">{this.props.description}</p>
          </div>
         <div className="lien">
          <a href={this.props.lien} target="_blank" className="liena"><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          <a href={this.props.lienG} target="_blank" className="liena"><FontAwesomeIcon icon={faGithub}/></a>
         </div>
        </div>
      </>
    );
  }
}

export default Projet;
