(function() {

  angular.module('ngWeather')
    .controller('forecastCtrl', ['$scope', '$routeParams', 'weatherService',
      
      function($scope, $routeParams, weatherService) {

        $scope.days = $routeParams.days || '7';

        $scope.city = weatherService.city;

        $scope.forecast = weatherService.forecastAPI.get({
          q: $scope.city,
          days: $scope.days
        });

        console.log($scope.forecast);

      }]);

}());