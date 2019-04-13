import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';


export default class Main extends Component {
	state = {
		newBox: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('box', this.state.newBox);
	}

	handleInputChange = (e) => {
		this.setState({	newBox: e.target.value });
	}

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
					<img src={logo} alt=""></img>
					<input
						value={this.state.newBox}
						type="text" 
						placeholder="Criar um box"
						onChange={this.handleInputChange}
					/>
					<button type="submit">Criar</button>
				</form>
      </div>
    )
  }
}
