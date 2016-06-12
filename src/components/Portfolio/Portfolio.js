import React from 'react';

import Filter from './Filter';
import Grid from './Grid';

class Portfolio extends React.Component {
	constructor() {
    super();

    this.state = {
      portfolio: {}
    }
  }

	render() {
		return (
			<section id="portfolio">
				<div className="container text-center">
					<h2>Portfolio</h2>
					<Filter filters={ this.state.portfolio.filters } />
				</div>{/* .containter */}

				<Grid data={ this.state.portfolio.portfolio } />
			</section>
		)
	}

	componentDidMount() {
		//retrieve data from JSON file
		var url = '/assets/data/portfolio.json';
		this.serverRequest = $.getJSON(url, function(data) {
		  this.setState({ portfolio: data });
		}.bind(this));

		if (Object.keys(this.state.portfolio).length !== 0) this.initIsotope(); //render isotope if data available
	}

	componentDidUpdate() {
		this.initIsotope();	//render isotope again because this.setState() will re-render
	}

	componentWillUnmount() {
		this.serverRequest.abort();
		this.removeIsotope();
	}

	/**
	 Initiate Isotope
	*/
	initIsotope() {
		var $grid = $('.grid'),
			$filter = $('.filter-options');

		$grid.imagesLoaded(function() {
			$grid.isotope({
				// options
				itemSelector: '.grid-item',
				layoutMode: 'masonry',
				masonry: {
				}
			});
		});

		//filter
		$filter.on('click', function(e) {
			var $this = $(this),
				$filterBy = $this.data('filter');
				
			e.preventDefault();
			$grid.isotope({ filter: $filterBy });
		});

		//after masonry complettion
		$grid.on('arrangeComplete', function() {
			//lightbox
			var $lightboxContainer = $('.grid');
			
			$lightboxContainer.magnificPopup({
				delegate: 'a', // child items selector, by clicking on it popup will open
				type: 'image',

				// Delay in milliseconds before popup is removed
	  			removalDelay: 300,

				// Class that is added to popup wrapper and background
				// make it unique to apply your CSS animations just to this exact popup
				mainClass: 'mfp-fade',

				//image properties
				image: {
					//title for image on lightbox
					titleSrc: function(item) {
						var $title = item.el.next('p.desc').text();
						return $title || null;
					}
				}
			});
		});
	}

	/**
	 Destroy Isotope
	*/
	removeIsotope() {
		$('.grid').isotope('destroy');	
	}
}

export default Portfolio