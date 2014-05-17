'use strict';

/* Controllers */

angular.module('futures.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('img/images/projects.json').success(function(data) {
            $scope.projects = data;
        });

        $http.get('img/images/images.json').success(function(data) {
            $scope.Images = data;
        });

  }])
  .controller('ProjectCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
        $scope.projectKey = $routeParams.projectKey;

        $http.get('img/images/projects/' + $routeParams.projectKey + '.json').success(function(data) {
            $scope.project = data;
        });

  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
