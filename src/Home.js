import React, { Component } from 'react';
import './Home.css';
import Button from './Button';
import Spaceman from './imgs/spaceman.png';


class Home extends Component {

  render() {
    return (
      <div id="object" className="home-page ExpandUp">
        <div className='home-page-tophalf'>
          <h1 className='home-page-header'>Your next <br/> interactive <br/> experince</h1>
          <Button className='home-page-hireus-button'/>
        </div>
        
        <div className='home-page-spaceman-container'>
          <img src={Spaceman} alt='Welcome' className='home-page-spaceman-img'/>
        </div>
        <div className='home-page-border-line'/>
      </div>
    );
  }
}

export default Home;
