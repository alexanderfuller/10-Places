angular.module('placesGallery')
.controller('homeCtrl',['$scope','getPlaces','User',function($scope,getPlaces,User){
  getPlaces.getPlaces().then(function(data){
    $scope.places = data.data;
  });
  $scope.username = User.getUser();

  $scope.logout = function(){
  User.logoutUser();
};
}])
