angular.module('app.controllers', [])

.controller('aUDIOCtrl', ['$scope', '$stateParams', '$firebaseObject','$http','slideshow',
  function ($scope, $stateParams, $firebaseObject,$http,slideshow) {

    var fb = new Firebase('https://jhtapp-95e09.firebaseio.com/audio');
    $scope.audioAugust = $firebaseObject(fb.child('August'));
    $scope.audioSeptember = $firebaseObject(fb.child('September'));
    $scope.audioOctober = $firebaseObject(fb.child('October'));
    //console.log($scope.audio);

}])

.controller('vIDEOCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('hOMECtrl', ['$scope', '$stateParams','$firebaseObject','$http','slideshow', function ($scope, $stateParams, $firebaseObject,$http,slideshow) {
  var fb = new Firebase('https://jhtapp-95e09.firebaseio.com');

  $scope.variable = $firebaseObject(fb.child('slidepictures'));










}])

.controller('eVENTCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('aBOUTUSCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('tRANSPORTCtrl', ['$scope', '$stateParams','$cordovaGeolocation',
function ($scope, $stateParams,$cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
        var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });

    });

  }, function(error){
    console.log("Could not get location");
  });
}])
