import React, { Component } from 'react';

class Button extends React.Component{
	render(){
		return (
			<div className="container-fluid">
      <button className="lineL" onClick={() => alert('click')}>
        {this.props.value.get(1)}
      </button>
    	</div>
			);
	}
}


export default Button;