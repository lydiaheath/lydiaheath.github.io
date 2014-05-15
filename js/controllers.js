'use strict';

/* Controllers */

angular.module('futures.controllers', [])
  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2' }
    ];
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
