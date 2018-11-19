import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super(); 
    this.state = { showMessage: false }
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <p>
            Sweet loaf what have you done... <br />
            Wanna know a secret? 
          </p>
          <div>
            <button onClick={this._showMessage.bind(null, true)}>show</button>
            <button onClick={this._showMessage.bind(null, false)}>hide</button>
            { this.state.showMessage && (<div>I love you</div>) }
          </div>
        </header>

      </div>

    );
  }
}

export default App;
