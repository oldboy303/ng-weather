(function() {

  angular.module('ngWeather')
    .controller('homeCtrl', ['$scope', 'weatherService',
      
      function($scope, weatherService) {

        $scope.city = weatherService.city;

        $scope.$watch('city', function() {
          weatherService.city = $scope.city; 
        });
      
      }]);

}());