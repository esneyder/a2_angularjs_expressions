'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'ArreglosCtrl', 
    function ($scope) {
        var id="arreglos";
    	activeMenu(id);
    }
);