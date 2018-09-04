import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    const {className=''} = this.props;
    
    return (
        <div className={className + ' basicBox '}>
          Hire us
          <svg width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
            <rect x='0' y='0' fill='none' width='130' height='65'/>
          </svg>
        </div>
    );
  }
}

export default Button;
