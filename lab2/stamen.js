var southWest = L.latLng(25, -125), northEast = L.latLng(49, -69), bounds = L.latLngBounds(southWest, northEast);

var map = L.map('map').fitBounds(bounds);//.setView([ 39, -97 ], 4)

var blackwhite = "http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/{z}/{x}/{y}.png";
var whiteblack = "http://{s}.sm.mapstack.stamen.com/((naip,$fff[difference],$fff[@60],$fff[hsl-saturation@90])[multiply],(mapbox-water,$fff[difference],$000[@60],$090d11[hsl-color]))/{z}/{x}/{y}.png"
var whiteblue = "http://{s}.sm.mapstack.stamen.com/(toner-lite,(watercolor,$fff%5B@0%5D,$fff%5Bhsl-saturation@50%5D,mapbox-water%5Bdestination-in%5D)%5B@50%5D/{z}/{x}/{y}.png";
var mapboxTiles = L.tileLayer(whiteblue).addTo(map);
