'use strict';


// Declare app level module which depends on filters, and services
angular.module('futures', [
  'ngRoute',
  'futures.filters',
  'futures.services',
  'futures.directives',
  'futures.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Home', {templateUrl: 'partials/partial1.html', controller: 'HomeCtrl'});
  $routeProvider.when('/About', {templateUrl: 'partials/partial2.html', controller: 'AboutCtrl'});
  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
