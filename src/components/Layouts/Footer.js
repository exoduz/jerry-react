import React from 'react';

class Footer extends React.Component {

	getYear() {
		var today = new Date(),
			year = today.getFullYear();
		return (year !== '2016' ? '2016' : '2016 - ' + year);
	}

	render() {
		return (
			<footer class="container">
				Copyright &copy; { this.getYear() } <a href="mailto:jerry.yeoh1270@gmail.com">Jerry Yeoh</a>
			</footer>
	   )
	}
}

export default Footer;