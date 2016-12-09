angular.module('placesGallery')
.controller('loginCtrl',['$scope','$firebaseAuth','$location','User',function($scope,$firebaseAuth,$location,User){
  $scope.signIn = function(){
      $scope.username = User.getUser();
      var username = $scope.user.email;
      var password = $scope.user.password;
      var auth = $firebaseAuth();

      auth.$signInWithEmailAndPassword(username, password).then(function(){
        console.log('User login Succesful');
        $scope.errMsg = false;
        User.setUser($scope.user.email);
        $location.path('/home');
      }).catch(function(error){
        console.log(error);
        $scope.errMsg = true;
        $scope.errorMessage  = error.message;
      })
    }
    $scope.username = User.getUser();

    $scope.logout = function(){
    User.logoutUser();
  };
}])
