'use strict';

angular.module('fireside.app').
controller('CommentsController', ['$scope', 'angularFire',
  function($scope, angularFire) {
    console.log('comment controller');
    $scope.comments = [];

    var ref = new Firebase('https://roosevelt.firebaseio.com/fireside');
    angularFire(ref, $scope, 'comments');
    $scope.username = 'Guest' + Math.floor(Math.random()*101);
    $scope.addComment = function() {
      $scope.comments.push({
        from: $scope.username,
        comment: $scope.comment
      });
      $scope.comment = '';
    };
    
  }
]);