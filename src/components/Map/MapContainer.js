import React from 'react';

import MyLocationMap from './MyLocationMap';

class MapContainer extends React.Component {
	render() {
		return (
			<section id="my-location">
				<h2>Currently in Petaluma, CA</h2>
				<MyLocationMap />
			</section>
		)
	}
}

export default MapContainer;