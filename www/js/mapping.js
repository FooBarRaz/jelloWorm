var map = null; 

var initializeMap = function (position) {
        var mapOptions = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    dropMarker(position);
}; 

var dropMarker = function (position) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: map,
        title: "This is your location!",
        animation: google.maps.Animation.DROP
    });
};