angular.module('placesGallery')
.controller('placeCtrl',['$scope','$routeParams','getPlaces','$firebaseArray','User',function($scope,$routeParams,getPlaces,$firebaseArray,User){
  getPlaces.getPlaces().then(function(data){
    $scope.places = data.data;
    $scope.whichPlace = $routeParams.placeId;
  });
  var ref = firebase.database().ref().child('Comments');
  $scope.comments=$firebaseArray(ref);

  $scope.createComment = function(){
    var comment = $scope.comment.post;
    var placeId = $routeParams.placeId;
    var user = $scope.username;
    $scope.comments.$add({
      comment:comment,
      placeId:placeId,
      user:user,
    }).then(function(ref){
      console.log(ref);
    }, function(error){
      console.log(error);
    });
    $scope.comment.post='';
  };

  $scope.username = User.getUser();

  $scope.logout = function(){
  User.logoutUser();
}
}])
