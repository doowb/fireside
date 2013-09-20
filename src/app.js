'use strict';

window.fireside = window.fireside || {}
window.fireside.app = angular.module('fireside.app', ['firebase']).
config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]).
run(function() {
  console.log('running app');
});