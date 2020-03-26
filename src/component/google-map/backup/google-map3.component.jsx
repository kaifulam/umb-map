import React, { useEffect, useRef } from 'react';

import Loading from '../fetch-data/fetch-data.component';

import { connect } from 'react-redux';

// Variables
const GOOGLE_MAP_API_KEY = 'AIzaSyDXdiQnSS-qfYAhAcazLQKgQKEsWfhmF4g';

// styles
const mapStyles = {
    width: '100%',
    height: '90vh',
};

// map marker icon
var iconBld = {
    path: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",

    fillColor: 'red',
    fillOpacity: 1,
    scale: 0.02,
    strokeColor: 'black',
    strokeWeight: 0.8
}



function GoogleMaps(props) {
    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);
    const infoWindow = useRef(null);

    const gmap = null;

    // helper functions
    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: {
                lat: 47.606700, lng: -122.332500
            },
            mapTypeControl: true,
            mapTypeId: 'terrain',
            mapTypeControlOptions: {
                style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ['terrain', 'roadmap'],
                streetViewControl: true
            }
        })

    const createMarker = ([a, b, location]) =>
        new window.google.maps.Marker({
            position: { lat: a, lng: b },
            map: googleMap.current,
            location: location,
            //icon: iconBld
            icon: { url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }
        });

    // const createInfoWindow = () =>
    //     new window.google.maps.InfoWindow();


    // useEffect Hook
    useEffect(() => {
        //console.log('props.dataJson', JSON.stringify(props.dataJson))
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();

            var markerCollect = [];

            console.log(props);
            console.log(props.filteredData);


            var dataJsonLength = Object.keys(props.filteredData.features).length;
            console.log(dataJsonLength)

            for (var i = 0; i < dataJsonLength; i++) {

                var location = props.dataJson.features[i];
                if (location.geometry != null) {
                    var myLat = location.geometry.coordinates[1];
                    var myLong = location.geometry.coordinates[0];
                    var location = location
                }
                marker.current = createMarker([myLat, myLong, location])


                // infoWindow.current = createInfoWindow()

                var infowindow = new window.google.maps.InfoWindow({
                    content: 'ABCDE'
                });

                //console.log(googleMap.current)


                // window.google.maps.addListener(marker.current, 'click', (function (marker, content, infowindow) {
                //     return function () {
                //         infowindow.setContent(content);
                //         infowindow.open(googleMap.current, marker);
                //         // map.setCenter(marker.getPosition())
                //     };
                // })(marker.current, 'ABCDE', infoWindow.current));

                marker.current.addListener('click', function () {
                    // console.log('marker icon', marker.current.icon.url);
                    marker.current.icon.url = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
                    console.log(marker.current);
                    // infowindow.open(googleMap.current, marker.current);
                });
                markerCollect.push(marker.current);

            }

            console.log(markerCollect)
        })
    });

    return (
        <>
            {
                props.isFetching ? (
                    <Loading />
                ) : (
                        < div
                            id="google-map"
                            ref={googleMapRef}
                            style={mapStyles}
                        />
                    )
            }
        </>

    )

}

function mapStateToProps(state) {
    return {
        dataJson: state.data.dataJson,
        filteredData: state.data.filteredData,
        isFetching: state.data.isFetching,

        lowRisk: state.filter.lowRisk,
        mediumRisk: state.filter.mediumRisk,
        highRisk: state.filter.highRisk
    }
}

export default connect(mapStateToProps, null)(GoogleMaps);




// import React, { useEffect, useState, useRef } from 'react';

// // Variables
// const GOOGLE_MAP_API_KEY = 'AIzaSyDXdiQnSS-qfYAhAcazLQKgQKEsWfhmF4g';
// const myLocation = [{
//     lat: 43.642567,
//     lng: -79.387054
// },
// {
//     lat: 43.6433885,
//     lng: -79.3697904
// }];
// // styles
// const mapStyles = {
//     width: '100%',
//     height: '400px',
// };

// function GoogleMap(props) {
//     // refs
//     const googleMapRef = React.createRef();
//     const googleMap = useRef(null);
//     const marker = useRef(null);

//     const [locations, setLocations] = useState(null)


//     // helper functions
//     const createGoogleMap = () => {
//         console.log('create map!!');
//         new window.google.maps.Map(googleMapRef.current, {
//             zoom: 14,
//             center: {
//                 lat: myLocation[0].lat,
//                 lng: myLocation[0].lng
//             }
//         })
//     };

//     const createMarker = () => {
//         for (var i = 0; i < 2; i++) {
//             console.log(myLocation[i].lat)
//             new window.google.maps.Marker({
//                 position: { lat: myLocation[i].lat, lng: myLocation[i].lng },
//                 map: googleMap.current
//             })
//         }
//     };

//     const fetchFunc = ({shortFunc}) => {


//     }

//     // useEffect Hook
//     useEffect(() => {
//         const shortFunc = () => { console.log('shortFunc', locations) }

//         const fetchFunc = async (shortFunc) => {
//             const res = await fetch('https://data.seattle.gov/resource/54qs-2h7f.geojson')
//             const resJson = await res.json();
//             setLocations(resJson);
//             console.log('locations', locations)
//             setTimeout(shortFunc(), 3000);
//         };
//         fetchFunc(shortFunc);


//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
//         window.document.body.appendChild(googleMapScript);

//         googleMapScript.addEventListener('load', () => {
//             googleMap.current = createGoogleMap();
//             marker.current = createMarker()
//         })
//     }, [fetchFunc]);

//     return (
//         <div
//             id="google-map"
//             ref={googleMapRef}
//             style={mapStyles}
//         />
//     )

// }

// export default GoogleMap;


//https://medium.com/@PeterKassenaar/icyi-i-rewrote-the-component-as-a-functional-component-using-react-hooks-6cf644a73bdd
