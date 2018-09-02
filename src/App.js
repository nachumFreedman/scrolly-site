import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {
  
  state = { lastPosition: 0,
            pageNumber: 0,
            blockScroll: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    const currentPosition = window.scrollY;
    const distance = currentPosition - this.state.lastPosition;
    const direction = distance > 0 ? 1 : -1;
    
    if (!this.state.blockScroll) {
      Math.abs(distance) > 10 ? this.setState({
        pageNumber: this.state.pageNumber + direction,
        blockScroll: true,
      }, () => {
        setTimeout(()=>{this.setState({blockScroll: false})}, 1500)
      }
      ) : null
    }
    
    this.setState({
      lastPosition: currentPosition,
    });
  };

  
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
