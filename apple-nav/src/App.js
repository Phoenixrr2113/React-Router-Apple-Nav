import React, { Component } from 'react';

import Routes from './Components/Routes';
import NavBar from './Components/NavBar';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Routes />
			</div>
		);
	}
}

export default App;
