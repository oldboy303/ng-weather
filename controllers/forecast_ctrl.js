(function() {

  angular.module('ngWeather')
    .controller('forecastCtrl', ['$scope', 'weatherService', 
      
      function($scope, weatherService) {

        $scope.city = weatherService.city;

      }]);

}());