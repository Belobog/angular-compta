'use strict';

/* App Module */

var comptaApp = angular.module('comptaApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'saisirCourseController',
    'homeController',
    'phonecatFilters',
    'phonecatServices'
]);

comptaApp.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }).
            when('/saisir-course', {
                templateUrl: 'views/saisir-course.html',
                controller: 'SaisirCourseCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        $locationProvider.html5Mode(true);
    }]);
