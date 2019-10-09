import React, {Component} from 'react';
import "./menu.css";

class Menu extends Component {
  render(){
    return (
      <nav >
        <div className="menu">
          <a href="http://" target="_blank" rel="noopener noreferrer">About</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Details</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
      </nav>
    )
  }
}

export default Menu;