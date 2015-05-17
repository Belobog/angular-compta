'use strict';

/* App Module */

var comptaApp = angular.module('comptaApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'saisirCourseController',
  'phonecatFilters',
  'phonecatServices'
]);

comptaApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/saisir-course', {
        templateUrl: 'views/saisir-course.html',
        controller: 'SaisirCourseCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/saisir-course'
      });
      $locationProvider.html5Mode(true);
  }]);
