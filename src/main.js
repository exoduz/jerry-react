import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import NotFound from './components/Errors/NotFound';

/*
	Routes
*/
var routes = ( 
	<Router history={ browserHistory } >
		<Route path="/" component={ App } />
		<Route path="*" component={ NotFound }/>
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
