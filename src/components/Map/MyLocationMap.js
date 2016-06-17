import React from 'react';
import GoogleMap from 'google-map-react';

import MyCurrentLocation from './MyCurrentLocation';

class MyLocationMap extends React.Component {
	constructor(props) {
		super(props);
	}

	_mapOptions() {
		return {
      scrollwheel: false,
		}
	}

	render() {
		return (
			<div id="map">
				<GoogleMap
	        defaultCenter={ this.props.center }
	        defaultZoom={ this.props.zoom }
	        options={ this._mapOptions() }
	       >
	       	<MyCurrentLocation { ...this.props.currentLocation } />
	        </GoogleMap>
       </div>
		)
	}
}

MyLocationMap.defaultProps = {
	key: 'AIzaSyBMJ3dbPJo_R1bbAd9Sj2eIrnlWlNqSQOA',
  center: { lat: 38.2324, lng: -122.6367 }, //Petaluma
  currentLocation: { lat: 38.2324, lng: -122.6367 }, //Petaluma
  zoom: 10
};

MyLocationMap.propTypes = {
	key: React.PropTypes.string.isRequired,
	center: React.PropTypes.object,
	currentLocation: React.PropTypes.object,
  zoom: React.PropTypes.number
}

export default MyLocationMap;