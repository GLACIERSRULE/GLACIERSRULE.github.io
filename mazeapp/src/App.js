import React, { Component } from 'react';
import './App.css';

const messages= ["i love you", 
"i think you are cute", 
"you look like a monster fish", 
"every day we stray further from god's light", 
"hot take: salmons are gods way of making up for capitalism", 
"sometimes I lick my hands and rub them all over my body"];

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

  returnSecret = (secrets) => {
    return secrets[Math.floor(Math.random(secrets.length)*secrets.length)];
  }
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <p>
            Sweet loaf what have you done... <br />
            I have some secrets... are you interested?
          </p>
          <div>
            <button onClick={this._showMessage.bind(null, true)}>another secret</button>
            <button onClick={this._showMessage.bind(null, false)}>no</button>
            { this.state.showMessage && (<div>{this.returnSecret(messages)}</div>) }
          </div>
        </header>

      </div>

    );
  }
}

export default App;
