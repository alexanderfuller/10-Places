angular.module('placesGallery')
.service('User',['$location','$firebaseAuth', function($location, $firebaseAuth){
  var user="";
  var auth = $firebaseAuth();
  return{
    getUser:function(){
      if(user==""){
        user = localStorage.getItem('userEmail');
      }
      return user;
    },
    setUser:function(value){
      localStorage.setItem('userEmail', value);
      user = value;
    },
    logoutUser: function(){
      auth.$signOut();
      user='';
      localStorage.removeItem('userEmail');
      $location.path('/home');
    }
  };
}]);
