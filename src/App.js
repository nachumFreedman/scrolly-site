import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';

const views = [Home, About];

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
        pageNumber: (this.state.pageNumber + direction + views.length) % views.length,
        blockScroll: true,
      }, () => {
        setTimeout(()=>{this.setState({blockScroll: false})}, 1000)
      }
      ) : null
    }
    
    this.setState({
      lastPosition: currentPosition,
    });
  };

  render() {

    const View = views[this.state.pageNumber % views.length]

    return (
      <div className="App">
        <Header selectedPage={this.state.pageNumber}
                onSelectPageNumber={(pageNumber)=>this.setState({pageNumber})}
                currentActivePage={this.state.pageNumber}/>
        { this.state.pageNumer } 
        <View />
      </div>
    );
  }
}

export default App;
