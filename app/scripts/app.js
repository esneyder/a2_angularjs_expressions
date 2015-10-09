'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
     .when('/numeros', {
        templateUrl: 'views/numeros.html',
        controller: 'NumerosCtrl'
      })    
     .when('/cadenas', {
        templateUrl: 'views/cadenas.html',
        controller: 'CadenasCtrl'
      })    
     .when('/objetos', {
        templateUrl: 'views/objetos.html',
        controller: 'ObjetosCtrl'
      })    
     .when('/arreglos', {
        templateUrl: 'views/arreglos.html',
        controller: 'ArreglosCtrl'
      })    
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });