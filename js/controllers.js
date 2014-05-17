'use strict';

/* Controllers */

angular.module('futures.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get('img/images/projects.json').success(function(data) {
            $scope.projects = data;
        });
  }])
  .controller('ProjectCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.projectTitle = $routeParams.projectTitle;
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
