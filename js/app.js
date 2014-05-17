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
  $routeProvider.when('/Home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/Project/:projectKey', {templateUrl: 'partials/project.html', controller: 'ProjectCtrl'});
  $routeProvider.when('/About', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.otherwise({redirectTo: '/Home'});
}]);
