import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../../node_modules/isotope-layout/dist/isotope.pkgd.min.js');
require('../js/lib/imagesLoaded/imagesloaded.pkgd.min.js');
require('../js/lib/magnific-popup/jquery.magnific-popup.min.js');
require('../js/app.js');

/**
 CSS
*/
require('../css/magnific-popup/magnific-popup.css');
require('../css/main.css');

/**
 React components
*/
import Header from './Layouts/Header';
import Profile from './Profile/Profile';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Layouts/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Profile />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default App;
