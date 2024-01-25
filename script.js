//STL is 38.62663502630333, -90.22593800714141
var mymap = L.map('mapid').setView([38.6, -90.2], 9);

//stadia.outdoors basemap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Hi-Pointe locations
//Main
var marker1 = L.marker([38.63216702327716, -90.30549277390722]).addTo(mymap);
// no idea what is meant by "change the symbology for the points", can't figure out how to change properties of the marker itself, so here's a circle
var circle = L.circle([38.63216702327716, -90.30549277390722], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);
//Downtown
var marker2 = L.marker([38.6302982032247, -90.19033437992162]).addTo(mymap);
//Kirkwood
var marker3 = L.marker([38.5669436410231, -90.40750490322849]).addTo(mymap);
//Cottleville
var marker4 = L.marker([38.748411947091945, -90.63597850822318]).addTo(mymap);
//O'Fallon
var marker5 = L.marker([38.58894684383199, -89.92247021012386]).addTo(mymap);

marker1.bindPopup("<b>Hi-Pointe Drive-In</b><br>1033 McCausland Ave<br> St. Louis, MO 63117").openPopup();
marker2.bindPopup("<b>Hi-Pointe Drive-In Downtown</b><br>634 Washington Ave<br> St. Louis, MO 63101");
marker3.bindPopup("<b>Hi-Pointe Drive-In Kirkwood</b><br>951 S Kirkwood Rd<br> Kirkwood, MO 63122");
marker4.bindPopup("<b>Hi-Pointe Drive-In Cottleville</b><br>6015 Mid Rivers Mall Dr<br> Cottleville, MO 63304");
marker5.bindPopup("<b>Hi-Pointe Drive-In O'Fallon</b><br>630 W Hwy 50<br> O'Fallon, IL 62269");
