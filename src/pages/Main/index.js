import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';


export default class Main extends Component {
	state = {
		newBox: ''
	};

	handleSubmit = async e => {
		e.preventDefault();
		console.log(api)
		const response = await api.post('boxes', {
			title: this.state.newBox
		});

		console.log('Response', response.data)
	}

	handleInputChange = e => {
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
