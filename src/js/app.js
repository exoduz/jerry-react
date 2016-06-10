$(function() {
	var $grid = $('.grid'),
		$filter = $('.filter-options');
	//isotope
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
});