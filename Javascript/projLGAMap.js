var mymap = L.map('mapid').setView([-33.8688, 151.2093], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHJpc3RhbnczIiwiYSI6ImNqbWN1ZmNvaTB5dWIzcHE0OXF1bWhzZm0ifQ.bjH3NyqIaJ0sTfyZ-vRaAA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


L.geoJSON(lgaData).addTo(mymap);

// function getLGAName(click) {
//     console.log(click)
//     // console.log(lgaData.features[0].properties.Name)
// };

mymap.on('click', onMapClick);

function onMapClick(e) {
    alert("You clicked the map at " + e.target);
    console.log(e.target);
}
