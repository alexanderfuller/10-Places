angular.module('placesGallery')
.controller('RegisterCtrl',['$scope','$firebaseAuth','$location','User',
function($scope,$firebaseAuth,$location,User){
  $scope.signUp = function(){
    var username = $scope.user.email;
    var password = $scope.user.password;
    if (username && password){
      var auth = $firebaseAuth();
      auth.$createUserWithEmailAndPassword(username, password).then(function(){
        console.log('User succsfully created');
        $location.path('/login');
      }).catch(function(error){
        $scope.errMsg = true;
        $scope.errorMessage = error.message;
      })
    }
  }
  $scope.username = User.getUser();

  $scope.logout = function(){
  User.logoutUser();
};
}])
