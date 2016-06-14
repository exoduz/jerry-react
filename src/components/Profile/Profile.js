import React from 'react';

class Profile extends React.Component {
	render() {
		return (
			<section id="intro" className="container">
				<img src="assets/img/profile/jerry-profile.jpg" alt="Jerry Profile Picture" id="profile-picture" className="img-circle img-responsive" />

				<div className="row">
					<div className="col-md-12 social">
						<a href="mailto:jerry.yeoh1270@gmail.com" className="icon email">
							<i className="fa fa-envelope fa-2x"></i>
						</a>

						<a href="tel:+1-415-902-6204" className="icon phone">
							<i className="fa fa-phone-square fa-2x"></i>
						</a>

						<a href="https://www.linkedin.com/in/jerry-yeoh-aa6a872" target="_blank" className="icon linkedin">
							<i className="fa fa-linkedin-square fa-2x"></i>
						</a>
					</div>{/* .col-md-12 .social */}
				</div>{/* .row */}

				<h2>About Me</h2>
				<p>Jerry Yeoh has worked in print for over 15 years. He is highly skilled in all levels of production from imaging to layout to preflighting to troubleshooting. He is both a conceptual and analytical problem solver who strives for funtional design aesthetics.</p>
				<p>In addition to his graphic design and production skills, Jerry brings a focused commitment to all the projects he is involved in and has proven himself an invaluable asset time and again. He is adaptive and can work within creative style guides.</p>
				<p>Jerry has enjoyed working with clients in various industries, from consumer packaged goods companies to retailers and small businesses. He fits into a variety of corporate structures providing different levels of creative solutions in communications, production management and design-related issues.</p>

				<div className="row">
					<div className="col-md-12 cv">
						<strong className="downloads-heading">Download my</strong>
						<a href="assets/files/JerryYeoh_resume_041016.pdf" target="_blank" className="icon phone">
							<i className="fa fa-file-text fa-2x"></i> Resume
						</a>

						<a href="assets/files/jerry-yeoh-portfolio.pdf" target="_blank" className="icon phone">
							<i className="fa fa-file fa-2x"></i> Portfolio
						</a>				
					</div>{/* .col-md-12 .cv */}
				</div>{/* .row */}
				<div className="dot-separator"></div>
			</section>
		)
	}
}

export default Profile;