import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
  render() {
    return (
      <div id="main-container">
        <form action="">
					<img src={logo} alt=""></img>
					<input type="text" placeholder="Criar um box" />
					<button type="submit">Criar</button>
				</form>
      </div>
    )
  }
}
