import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: 35.686398,
  lng: 139.764855
};

const options = {
  zoom: 17,
  mapTypeId: 'roadmap',
  mapTypeControl: false,
  styles: [{
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi.business",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }
  ]
};
