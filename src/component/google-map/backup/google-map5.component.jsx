import React, { useEffect, useRef } from 'react';

// Variables
const GOOGLE_MAP_API_KEY = 'AIzaSyDXdiQnSS-qfYAhAcazLQKgQKEsWfhmF4g';
const myLocation = { // Seattle Public Library
    lat: 47.606700,
    lng: -122.332500
};
// styles
const mapStyles = {
    width: '100%',
    height: '92vh'
};

function GoogleMap(props) {

    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);

    const dataJson = null;

    // helper functions
    const createGoogleMap = () => {
        var gmap = new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: {
                lat: myLocation.lat,
                lng: myLocation.lng
            }
        })
        console.log('gmap1: ', gmap)
        loadData(gmap);
    }
    const loadData = async (gmap) => {
        console.log('gmap2', gmap);
        var dataJson = await fetch('https://storage.googleapis.com/mapsdevsite/json/google.json')
            .then((res) => res.json())
            .then(data => { console.log(data); return data })
    };

    // const createGoogleMap = () => {
    //     var gmap = new window.google.maps.Map(googleMapRef.current, {
    //         zoom: 14,
    //         center: {
    //             lat: myLocation.lat,
    //             lng: myLocation.lng
    //         }
    //     })
    //     console.log('gmap1: ', gmap)
    //     loadData(gmap);
    // }
    // const loadData = async (gmap) => {
    //     console.log('gmap2', gmap);
    //     var dataJson = await fetch('https://storage.googleapis.com/mapsdevsite/json/google.json')
    //         .then((res) => res.json())
    //         .then(data => { console.log(data); return data })
    // };



    const createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: myLocation.lat, lng: myLocation.lng },
            map: googleMap.current
        });

    // useEffect Hook
    useEffect(() => {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            googleMap.current = createGoogleMap();
            googleMap.current = loadData();
            //console.log(googleMap.current);
            marker.current = createMarker()
        })
    });

    //data
    const getData = () => {
        fetch()
    }

    return (
        <div
            id="google-map"
            ref={googleMapRef}
            style={mapStyles}
        />
    )

}

export default GoogleMap;


//https://medium.com/@PeterKassenaar/icyi-i-rewrote-the-component-as-a-functional-component-using-react-hooks-6cf644a73bdd


// import React, {useEffect, useRef} from 'react';

// // Variables
// const GOOGLE_MAP_API_KEY = 'YOUR_KEY_HERE';
// const myLocation = { // CN Tower Landmark
//     lat: 43.642567,
//     lng: -79.387054
// };
// // styles
// const mapStyles = {
//     width: '100%',
//     height: '400px',
// };

// function GoogleMaps(props) {
//     // refs
//     const googleMapRef = React.createRef();
//     const googleMap = useRef(null);
//     const marker = useRef(null);

//     // helper functions
//     const createGoogleMap = () =>
//         new window.google.maps.Map(googleMapRef.current, {
//             zoom: 14,
//             center: {
//                 lat: myLocation.lat,
//                 lng: myLocation.lng
//             }
//         });

//     const createMarker = () =>
//         new window.google.maps.Marker({
//             position: {lat: myLocation.lat, lng: myLocation.lng},
//             map: googleMap.current
//         });

//     // useEffect Hook
//     useEffect(() => {
//         const googleMapScript = document.createElement('script');
//         googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
//         window.document.body.appendChild(googleMapScript);

//         googleMapScript.addEventListener('load', () => {
//             googleMap.current = createGoogleMap();
//             marker.current = createMarker()
//         })
//     });

//     return (
//         <div
//             id="google-map"
//             ref={googleMapRef}
//             style={mapStyles}
//         />
//     )

// }

// export default GoogleMaps
