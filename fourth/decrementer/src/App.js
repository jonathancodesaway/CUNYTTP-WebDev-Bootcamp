import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Decrement extends Component {
	constructor(props){
		super(props);
		this.state = {
			num: props.num
		}
	}
  	render() {
    return (
      <div className="Decrement">
        <header className="App-header">
        <p>{this.state.num}</p>
        <button onClick={ () => this.decrem() }>Decrement</button>
        </header>
      </div>
    	);
 	}

  decrem() {
  		if (this.state.num > 0){
  			this.setState({ num: this.state.num - 1});
  		} else {
  			alert("to low");
  		}
	}
};



export default Decrement;
