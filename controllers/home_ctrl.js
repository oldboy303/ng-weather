(function() {

  angular.module('ngWeather')
    .controller('homeCtrl', ['$scope', '$location', 'weatherService',
      
      function($scope, $location, weatherService) {

        $scope.city = weatherService.city;

        $scope.$watch('city', function() {
          weatherService.city = $scope.city; 
        });

        $scope.submit = function() {
          $location.path('/forecast');
        };
      
      }]);

}());