/**
 * @file Implementation of the map block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the map block.
 * @return true if the block is present on the page, false otherwise
 */
let map, infoWindow, marker;
const lat = 40.7713414;
const lng = 73.9842271;

function initBlock() {
    // TODO: add code here
    const GoogleMapsLoader = require('google-maps'); // only for common js environments
    GoogleMapsLoader.KEY = 'AIzaSyBQDEK_bp8E3TJz1Sg1VMqF7jn8J3Z7Haw';
    GoogleMapsLoader.load(function(google) {
        new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: lat,
                lng: lng
            },
	        disableDefaultUI: true,
            zoom: 16,
	        center: {lat: 40.674, lng: -73.945},
	        zoom: 12,
	        styles: [
		        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
		        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
		        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
		        {
			        featureType: 'administrative.locality',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#d59563'}]
		        },
		        {
			        featureType: 'poi',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#d59563'}]
		        },
		        {
			        featureType: 'poi.park',
			        elementType: 'geometry',
			        stylers: [{color: '#263c3f'}]
		        },
		        {
			        featureType: 'poi.park',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#6b9a76'}]
		        },
		        {
			        featureType: 'road',
			        elementType: 'geometry',
			        stylers: [{color: '#38414e'}]
		        },
		        {
			        featureType: 'road',
			        elementType: 'geometry.stroke',
			        stylers: [{color: '#212a37'}]
		        },
		        {
			        featureType: 'road',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#9ca5b3'}]
		        },
		        {
			        featureType: 'road.highway',
			        elementType: 'geometry',
			        stylers: [{color: '#746855'}]
		        },
		        {
			        featureType: 'road.highway',
			        elementType: 'geometry.stroke',
			        stylers: [{color: '#1f2835'}]
		        },
		        {
			        featureType: 'road.highway',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#f3d19c'}]
		        },
		        {
			        featureType: 'transit',
			        elementType: 'geometry',
			        stylers: [{color: '#2f3948'}]
		        },
		        {
			        featureType: 'transit.station',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#d59563'}]
		        },
		        {
			        featureType: 'water',
			        elementType: 'geometry',
			        stylers: [{color: '#17263c'}]
		        },
		        {
			        featureType: 'water',
			        elementType: 'labels.text.fill',
			        stylers: [{color: '#515c6d'}]
		        },
		        {
			        featureType: 'water',
			        elementType: 'labels.text.stroke',
			        stylers: [{color: '#17263c'}]
		        }
	        ]


        });
        marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            title: 'Hello',
            icon: './img/Pin.png'
        });
    });
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
