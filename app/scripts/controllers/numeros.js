'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'NumerosCtrl', 
    function ($scope) {
        var id="numeros";
    	activeMenu(id);
    }
);