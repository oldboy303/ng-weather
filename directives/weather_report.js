(function() {
  angular.module('ngWeather')
    
    .directive('weatherReport', function() {

      return {
        restrict: 'E',
        templateUrl: 'directives/weather_report.html'
      };

    });

}());