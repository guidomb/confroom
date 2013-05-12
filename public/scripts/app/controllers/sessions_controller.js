var confroom = angular.module('confroom');

function SessionsController($scope) {
  $scope.name = "Hello!";
}


confroom.controller('SessionsController', ['$scope', SessionsController]);