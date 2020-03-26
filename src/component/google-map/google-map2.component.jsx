import React from 'react';

import Loading from '../fetch-data/fetch-data.component';

import { connect } from 'react-redux';

const GOOGLE_MAP_API_KEY = 'AIzaSyDXdiQnSS-qfYAhAcazLQKgQKEsWfhmF4g';

const mapStyles = {
    width: '100%',
    height: '90vh',
};

class GoogleMaps extends React.Component {

    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map)
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

    render() {
        return (
            <div style={{ width: 500, height: 500 }} id={this.props.id} />
        );
    }
}

export default GoogleMaps;

//https://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/






// constructor(props) {
//     super(props);
// }

// onScriptLoad() {
//     const map = new window.google.maps.Map(
//       document.getElementById('gogole-map'));
//     this.props.onMapLoad(map)
//   }

// componentDidMount() {
//     // const googleMapScript = document.createElement('script');
//     // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`
//     // window.document.body.appendChild(googleMapScript);


//     const map = new window.google.maps.Map(document.getElementById('google-map'), {
//         zoom: 14,
//         center: {
//             lat: 47.606700, lng: -122.332500
//         },
//         mapTypeControl: true,
//         mapTypeId: 'roadmap',
//     });
// }



// render() {
//     return (
//         <>
//             {
//                 this.props.isFetching ? (
//                     <Loading />
//                 ) : (
//                         < div
//                             id="google-map"
//                             //ref={googleMapRef}
//                             style={mapStyles}
//                         />
//                     )
//             }
//         </>

//     )
// }

// }

// function mapStateToProps(state) {
//     return {
//         filteredData: state.data.filteredData,
//         isFetching: state.data.isFetching,
//     }
// }

// export default connect(mapStateToProps, null)(GoogleMaps);