'use strict';

angular.module('fireside.app').
controller('MainController', ['$scope', '$location',
  function($scope, $location) {
    console.log('main controller');
    $scope.config = $location.search();
  }
]);