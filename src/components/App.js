import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources-techcrunch'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      }
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Top headlines from TechCrunch</h1>
          <p>News feed API is "fetched()" and converted.</p>
        </header>
        <div className="wrapper">
          
          <News />
        </div>
        
      </div>
    );
  }
}

export default App;
