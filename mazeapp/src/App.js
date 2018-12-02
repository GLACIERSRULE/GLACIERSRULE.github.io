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

// Creating Usable Map from mappy.json
var map2 = mappy2;
const mappy3 = new Map();
for (var key in map2) {
  // skip loop if the property is from prototype
  // if (!mappy2.hasOwnProperty(key)) continue;

  var obj = map2[key];
  var counter = 0;
  // mappy3.set(obj,obj[prop]);
  for (var prop in obj) {
      // skip loop if the property is from prototype
      if(!obj.hasOwnProperty(prop)) continue;

      // creates map from mappy.json
      mappy3.set(counter,obj[prop]);
      counter++;
  }
}



// In the case of leaving the map in this file
// const mappy = new Map([[0,"start",[1,2]],[1,["a poem line",[2,3]]],[2,["second poem line",[3,4]]],[3,["third poem",[4,1]]],[4,["forth",[1,2]]]]);
class App extends Component {

  constructor() {
    super();
    this.state = {
      currentNode: mappy3.get(0),
      showMessage: false,
      rightText: mappy3.get(1)[0],
      rightNum: mappy3.get(0)[1][0],
      leftText: mappy3.get(2)[0],
      leftNum: mappy3.get(0)[1][1]
      };
  }
  updateNode(nodeNum) {
    this.setState({
      currentNode: mappy3.get(nodeNum)});
    console.log(this.state.currentNode);
  }
  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }


// may be used if we make currentNode a value and not just a key




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
            <button onClick={this.updateNode(this.state.rightNum)}>{this.state.rightText}</button>
            <button onClick={this.updateNode(this.state.leftNum)}>{this.state.leftText}</button>
            { this.state.showMessage && (<div>{this.returnSecret(messages)}</div>) }

          </div>
        </header>

      </div>

    );
  }
}

export default App;
