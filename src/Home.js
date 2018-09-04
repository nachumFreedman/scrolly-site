import React, { Component } from 'react';
import './Home.css';
import Button from './Button';
import Spaceman from './imgs/spaceman.png';


class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className='home-page-tophalf'>
          <h1 className='home-page-header'>Your next <br/> interactive <br/> experince</h1>
          <Button className='home-page-hireus-button'/>
          <div className='home-page-spaceman-container'>
            <img src={Spaceman} alt='Welcome' className='home-page-spaceman-img'/>
            <div className='home-page-border-line'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
