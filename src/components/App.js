import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=techcrunch'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      }
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Top headlines from TechCrunch and BBC News</h2>
          <p>News feed API is "fetched()" and converted.</p>
        </header>
        <div className="container">
          <div className="row"> 
            <News news={this.state.news1} />
            <News news={this.state.news2} />
            <News news={this.state.news3} />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
