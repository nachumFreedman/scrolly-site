import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

setPage = (pageNumber) => {this.props.onSelectPageNumber(pageNumber)}
  
  render() {
    return (
      <div className="header-container">
        <ul className='header-ul'>
          
          <li onClick={()=>this.setPage(1)}><span>01</span><span>Home</span></li>
          <li onClick={()=>this.setPage(2)}><span>02</span><span>works</span></li>
          <li onClick={()=>this.setPage(3)}><span>03</span><span>about</span></li>
          <li onClick={()=>this.setPage(4)}><span>04</span><span>contact</span></li>
          <li onClick={()=>this.setPage(5)}><span>05</span><span>Hire us</span></li>
          
        </ul>
      </div>
    );
  }
}

export default Header;
