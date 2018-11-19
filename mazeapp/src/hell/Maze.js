import React from 'react/addons';

const leftNode = new Node("second", "second Irght",null,null);
  const rightNode = new Node("Rsecond", "RRsecond Irght",null,null);
  const helloNode = new Node("Hello World","goodbye",leftNode,rightNode);
  
  makeElements(helloNode);


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

function Node(value,value2,leftNode,rightNode){
  this.line = value;
  this.line2 = value2;
  this.option1 = leftNode;
  this.option2 = rightNode;
}
function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

export default Maze;
