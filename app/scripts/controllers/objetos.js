'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'ObjetosCtrl', 
    function ($scope) {
        var id="objetos";
    	activeMenu(id);
    }
);