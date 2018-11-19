'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

const leftNode = new Node("second", "second Irght",null,null);
  const rightNode = new Node("Rsecond", "RRsecond Irght",null,null);
  const helloNode = new Node("Hello World","goodbye",leftNode,rightNode);
  
  makeElements(helloNode);

class Lines extends React.Component {
  onClickL() {
    
  }
  onClickR() {
    () => alert('click');
  }
  render() {
    return (
    <div className="container-fluid">
      <button className="lineL" onClick={() => alert('click')}> hello
        {this.props.value.line}
      </button>
      <button className="lineR" onClick={() => this.props.onClickR}>
        {this.props.value.line2}
      </button>
    </div>
    );
  }
}
class Maze extends React.Component{
  render(i){
    return <Lines value={helloNode}/>
  }
}
ReactDOM.render(
  <Maze />,
  document.getElementById('left-turn')
);

function makeElements(node){
  const element = writePoem(node.line);
  const element2 = writePoem(node.line2);
  ReactDOM.render(
    element,
    document.getElementById('left-turn')
  );
  ReactDOM.render(
    element2,
    document.getElementById('right-turn')
  );
}
function writePoem(line) {
  return <h2>{line}</h2>;
}

function Node(value,value2,leftNode,rightNode){
  this.line = value;
  this.line2 = value2;
  this.option1 = leftNode;
  this.option2 = rightNode;
}
function DoublyList() {
    this._length = 0;
    this.head = nul
    this.tail = null;
}


