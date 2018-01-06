(function() {

  angular.module('ngWeather')
    .controller('homeCtrl', ['$scope', function($scope) {

      $scope.city = 'Miami';

    }]);

}());