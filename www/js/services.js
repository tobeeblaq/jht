angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('slideshow', ['$firebase',function ($firebase) {

  this.getImageUrl = function () {
    var my_url
    var file_storage = firebase.storage();
    var storageref = file_storage.ref('SlidePictures/a.jpg');
    storage_ref = storageref.getDownloadURL().then(function (url) {
      //console.log(url)
           my_url = url
      console.log(my_url)

    }).catch(function (error) {
      console.log(error)
    })
    //console.log(storage_ref.url)
    //return my_url
  }

}
    ])
.service('BlankService', [function(){
  //var name = 'tobi';
   this.return_name = function (name) {
    return name;
  }
}]);
