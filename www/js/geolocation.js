//var geolocator = {
//    _position : null,
//    
//	getLocation: function () {
//		navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
//	},
//    
//    // onSuccess callback received a Position object	
//	onSuccess: function (position) {
//        _position = position;
////	    var element = document.getElementById('geolocation');
////	    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
////	                        'Longitude: ' + position.coords.longitude     + '<br />' +
////	                        '<hr />'      + element.innerHTML;
//    },
//
//
//	// onError Callback receives a PositionError object
//	//
//	onError: function (error) {
//	    alert('code: '    + error.code    + '\n' +
//	          'message: ' + error.message + '\n');
//	}
//};

function GeoLocation() {
    this._position = null;
};

GeoLocation.prototype.position = null; 

GeoLocation.prototype.getLocation = function() {
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
};

GeoLocation.prototype.onSuccess = function(position) {
    _position = position;
    var element = document.getElementById("geolocation");
    element.innerHTML = "Latitude: " + geoLocator.getLatitude() + "<br />" +
                        "Longitude: " + geoLocator.getLongitude() + "<br />";
    initializeMap(position);
};

GeoLocation.prototype.onError = function (error) {
    alert("code: " + error.code + "\n" +
          "message: " + error.message + "\n");
};

GeoLocation.prototype.getLatitude = function() {
    return _position == null ? 0 : _position.coords.latitude;
};

GeoLocation.prototype.getLongitude = function() {
    return _position == null? 0 : _position.coords.longitude;
};

GeoLocation.prototype.getPosition = function() {
    return _position;
};


