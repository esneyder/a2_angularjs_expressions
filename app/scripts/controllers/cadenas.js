'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'CadenasCtrl', 
    function ($scope) {
        var id="cadenas";
    	activeMenu(id);
    }
);