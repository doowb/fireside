'use strict';

window.fireside = window.fireside || {}
window.fireside.app = angular.module('fireside.app', ['firebase']).
config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]).
run(['$rootScope', '$compile',
  function($rootScope, $compile) {
    console.log('running app');
    var html = angular.element(fireside.config.container).html();
    angular.element(fireside.config.container).html($compile(html)($rootScope));
    $rootScope.$apply();
  }]);