var iconBld = {
    path: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",

    fillColor: 'red',
    fillOpacity: 1,
    scale: 0.02,
    strokeColor: 'black',
    strokeWeight: 0.8
}


//var map
var dataJson = null;
var dataJsonLength = null;



const fetchData = fetch('https://data.seattle.gov/resource/54qs-2h7f.geojson')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        dataJson = data;
        console.log(dataJson);
        return dataJson;
    }).then((data) => {
        //initMap();

        const ggmap = () => {
            console.log("I'm here 2!")
            var imported = document.createElement('script');
            imported.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDXdiQnSS-qfYAhAcazLQKgQKEsWfhmF4g&callback=initMap";
            imported.async = true;
            imported.defer = true;
            document.head.appendChild(imported);
            console.log('inside ggmap', dataJson);
        }
        setTimeout(ggmap, 0);

    })
console.log('fetchData', fetchData);

function initMap() {
    console.log("I'm here!!!")

    //initialize map

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 47.606700, lng: -122.332500 }
    });

    var dataJsonLength = Object.keys(dataJson.features).length;
    console.log('features.length', dataJsonLength)

    var infowindow = new google.maps.InfoWindow()

    // set markers

    for (i = 0; i < dataJsonLength; i++) {
        var myLat = 0; var myLong = 0;
        var location = dataJson.features[i];
        if (location.geometry != null) {
            myLat = location.geometry.coordinates[1];
            myLong = location.geometry.coordinates[0];
        }
        // missing one coordinate.. maybe should ask google to search for position...

        var marker = new google.maps.Marker({
            position: { lat: myLat, lng: myLong },
            map: map,
            title: "Hello World!",
            icon: iconBld
        });

        var address = "<h1>" +
            location.properties.address + ', ' +
            location.properties.city + ', ' +
            location.properties.state + ' ' +
            location.properties.zip_code + "</h1> <hr />" +
            "<h3>" + location.properties.preliminary_risk_category + "</h3>";

        var bldDetails =
            "<p>" + 'Neighborhood: ' + location.properties.neighborhood + "</p>" +
            "<p>" + 'Year Built: ' + location.properties.year_built + "</p>" +
            "<p>" + 'Estimated number of occupants: ' + location.properties.estimated_number_of_occupants + "</p>" +
            "<p>" + 'Number of stories: ' + location.properties.no_stories + "</p>" +
            "<p>" + 'Retrofit Level: ' + location.properties.retrofit_level + "</p>" +
            "<p>" + 'Building Use: ' + location.properties.building_use + "</p>" + "<hr />" +
            "<p>" + 'Confirmation source: ' + location.properties.confirmation_source + "</p>"


        var content = address + bldDetails;

        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
            return function () {
                infowindow.setContent(content);
                infowindow.open(map, marker);
                // map.setCenter(marker.getPosition())
            };
        })(marker, content, infowindow));
    }





    console.log('features.length', dataJsonLength)
    console.log('item 0 coordinates: ', dataJson.features[1].geometry.coordinates[0])
}