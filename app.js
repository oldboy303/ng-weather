(function() {

  angular.module('ngWeather', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {

      $routeProvider

        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        })

    }]);

}());