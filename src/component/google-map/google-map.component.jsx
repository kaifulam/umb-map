import React from 'react';

import { connect } from 'react-redux';

// production API key
const GOOGLE_MAP_API_KEY = 'AIzaSyCinvpyTbzEbiWJCtAalDLKhPRiBCnnl3k';

const mapStyles = {
    width: '100%',
    height: '90vh',
};

const mapOptions = {
    center: {
        lat: 47.606700, lng: -122.332500
    },
    zoom: 13,
    mapTypeControl: true,
    mapTypeId: 'roadmap'
}

const createInfoWindowText = (location) => {

    var address =
        "<h4><b>" + location.properties.preliminary_risk_category + "<b/></h4><hr />"
        + "<h4>" + location.properties.address + "</h4><br />"
    // + ', ' + location.properties.city 
    // + ', ' + location.properties.state 
    // + ' ' + location.properties.zip_code + "</h3> <hr />" ;

    var bldDetails =
        "<p ALIGN=LEFT>" + 'Neighborhood: ' + location.properties.neighborhood + "</p>" +
        "<p ALIGN=LEFT>" + 'Year Built: ' + location.properties.year_built + "</p>" +
        "<p ALIGN=LEFT>" + 'Number of stories: ' + location.properties.no_stories + "</p>" +
        "<p ALIGN=LEFT>" + 'Retrofit Level: ' + location.properties.retrofit_level + "</p>" +
        "<p ALIGN=LEFT>" + 'Occupants (Estimated): ' + location.properties.estimated_number_of_occupants + "</p>" +
        "<p ALIGN=LEFT>" + 'Building Use: ' + location.properties.building_use + "</p>" + "<hr />" +
        "<p>" + 'Confirmation source: ' + location.properties.confirmation_source + "</p>" +
        "<a href='https://www.google.com/maps/search/?api=1&query=" + location.properties.address + "," + location.properties.city + "," + location.properties.state + " " + location.properties.zip_code + "' target='_blank'> View On Google Map</a>"

    return address + bldDetails;

}

var mapHolder = null;

class GoogleMaps extends React.Component {

    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this);
    }

    onScriptLoad() {
        mapHolder = new window.google.maps.Map(
            document.getElementById('google-map'),
            mapOptions);
        var filteredDataLength = Object.keys(this.props.filteredData.features).length;
        const markerCollect = [];

        var infowindow = new window.google.maps.InfoWindow();

        for (var i = 0; i < filteredDataLength; i++) {

            var location = this.props.filteredData.features[i];
            if (location.geometry != null) {
                var marker = new window.google.maps.Marker({
                    position: {
                        lat: location.geometry.coordinates[1],
                        lng: location.geometry.coordinates[0]
                    },
                    map: mapHolder,
                    icon: { url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' },
                    location: location
                })
                window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        // infowindow.setContent(JSON.stringify(marker.location));
                        infowindow.setContent(createInfoWindowText(marker.location));
                        infowindow.open(mapHolder, marker);

                    }
                })(marker, i))
                markerCollect.push(marker);
            };
        }
    }


    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    componentDidUpdate() {
        this.onScriptLoad()
    }

    render() {
        return (
            <div style={mapStyles} id='google-map' />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filteredData: state.data.filteredData
    }
}

export default connect(mapStateToProps, null)(GoogleMaps);


//https://gist.github.com/parth1020/4481893