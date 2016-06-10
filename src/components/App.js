import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
//require('../js/app.js');

/**
 CSS
*/
require('../css/main.css');

/**
 React components
*/
import Header from './Layouts/Header';
import Profile from './Profile/Profile';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Layouts/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Profile />
				<Portfolio />
				<Footer />
			</div>
		)
	}
}

export default App;
