import React, { Component } from 'react';
import Button from './Button.js'
// mappy2 is if I am using external place for poems
import * as mappy2 from './mappy.json';
import './App.css';

const messages= ["i love you",
"i think you are cute",
"you look like a monster fish",
"every day we stray further from god's light",
"hot take: salmons are gods way of making up for capitalism",
"sometimes I lick my hands and rub them all over my body"];
var map2 = mappy2;

// attempt to read a json of poems into a map format
// HashMap<String,Object> result = new ObjectMapper().readValue(mappy2, HashMap.class);

// UGH.. MAKING THIS JSON INTO A MAP IS BROKEN AFFFFFF
const mappy3 = new Map();
for (var key in map2) {
  // skip loop if the property is from prototype
  // if (!mappy2.hasOwnProperty(key)) continue;

  var obj = mappy2[key];
  // mappy3.set(obj,obj[prop]);
  for (var prop in obj) {
      // skip loop if the property is from prototype
      if(!obj.hasOwnProperty(prop)) continue;

      // your code
      mappy3.set(obj,obj[prop]);
  }
}


// In the case of leaving the map in this file
const mappy = new Map([[0,"start",[1,2]],[1,["a poem line",[2,3]]],[2,["second poem line",[3,4]]],[3,["third poem",[4,1]]],[4,["forth",[1,2]]]]);


console.log(mappy2);
console.log("after");
console.log(mappy3);
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
            <Button value={mappy3}/>
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
