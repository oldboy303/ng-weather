(function() {

  angular.module('ngWeather')
    .controller('forecastCtrl', ['$scope', '$routeParams', 'weatherService',
      
      function($scope, $routeParams, weatherService) {

        $scope.days = $routeParams.days || '1';

        $scope.city = weatherService.city;

        $scope.$watch('city', function() {
          weatherService.city = $scope.city; 
        });

        $scope.weatherResult = weatherService.forecastAPI.get({
          q: $scope.city,
          days: $scope.days
        });

        $scope.newSearch = function() {
          $scope.city = '';
        }

      }]);

}());