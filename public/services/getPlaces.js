angular.module('placesGallery')
.factory('getPlaces',['$http',function($http){
  function getPlaces(){
    //read json data with angular http get method
    return $http.get('model/places.json');
  }
  return{
    getPlaces:getPlaces
  }
}]);
