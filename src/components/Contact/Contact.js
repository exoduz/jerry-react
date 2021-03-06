import React from 'react';

import ContactForm from './ContactForm';
import MapContainer from '../Map/MapContainer'

class Contact extends React.Component {
	render() {
		return (
			<section id="contact">
		    <div className="container">
		      <div className="row">
						<div className="col-md-6">
							<MapContainer />
						</div>{/* .col-md-6 */}

		      	<div className="col-md-6">
			        <ContactForm />
						</div>{/* .col-md-6 */}
		      </div>{/* .row */}
		    </div>{/* .container */}
		  </section>
		)
	}
}


export default Contact;