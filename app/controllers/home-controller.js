'use strict';

/* Controllers */

var homeController = angular.module('homeController', []);

homeController.controller('HomeCtrl', ['$scope',
    function($scope) {
            console.log('boom');
        }]);
