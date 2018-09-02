import React, { Component } from 'react';
import './Home.css';
import Button from './Button';
import Spaceman from './imgs/spaceman.png';


class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <h1 className='home-page-header'>Your next interactive experince</h1>
        <Button></Button>
        <img src={Spaceman} alt='Welcome'/>
        <div className='-home-page-border-line'/>
      </div>
    );
  }
}

export default Home;
