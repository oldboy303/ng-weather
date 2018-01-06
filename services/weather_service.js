(function() {

  angular.module('ngWeather')
    .service('weatherService', ['$resource', function($resource) {

      this.city = '';

      this.forecastAPI = $resource(
        "https://api.apixu.com/v1/forecast.json?key=b8962b87a64949129d445924180501"
      );



    }]);

}());