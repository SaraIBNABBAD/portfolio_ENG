import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faUser,faPhone,faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeMenu: false,
        };
      }
  render() {
    let { activeMenu } = this.state;
    return (
      <div className="nav">
        
        <h1 className="port" data-aos="fade-zoom-in"> Portfo<span>lio</span></h1>
       
      <div>
        <ul className={activeMenu ? "active" : ""}>
          <li>
            <a href="#ab" className="ahref"><FontAwesomeIcon icon={faUser} className="symbol"/>
              &nbsp; About Me
            </a>
          </li>
          <li>
            <a href="#comp"  className="ahref"><FontAwesomeIcon icon={faBars} className="symbol"/>
            &nbsp; Competence
            </a>
          </li>
          <li>
            <a href="#pro"  className="ahref"><FontAwesomeIcon icon={faFolderOpen} className="symbol"/>
            &nbsp;
              Project
            </a>
          </li>
          <li>
            <a href="#call"  className="ahref"><FontAwesomeIcon icon={faPhone} className="symbol"/>
            &nbsp;Contact
            </a>
          </li>
        </ul>
        <button className="btn-menu" onClick={() => {
              this.setState({ activeMenu: !activeMenu });
            }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        
      </div>
      </div>
      
    );
  }
}
export default Nav;
