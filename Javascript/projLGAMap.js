// selFeat.feature.properties.LGA_NAME16

var selFeat = {};
var myMap = L.map('mapid').setView([-33.8688, 151.2093], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHJpc3RhbnczIiwiYSI6ImNqbWN1ZmNvaTB5dWIzcHE0OXF1bWhzZm0ifQ.bjH3NyqIaJ0sTfyZ-vRaAA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.dark',
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);


function highlightFeature(e) {
    resetHighlight(selFeat)
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    selFeat = e.target;
}


function resetHighlight(e) {
    mapper.resetStyle(e);
}

function zoomToFeature(e) {
    myMap.fitBounds(e.target.getBounds());
}

function runner(e) {
    highlightFeature(e);
    zoomToFeature(e);

}


function onEachFeature(feature, layer) {
    layer.on({
        click: runner
    });
}

mapper = L.geoJSON(lgaData, {
    fillColor: '#328F32',
    color: 'white',
    onEachFeature: onEachFeature
}).addTo(myMap);
