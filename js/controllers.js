'use strict';

/* Controllers */

angular.module('futures.controllers', [])
    .controller('NavCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('img/images/projects.json').success(function(data) {
            $scope.projects = data;
        });
    }])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

        $http.get('img/images/projects/Barrier.json').success(function(data) {
            $scope.project = data;
        });

        $scope.SampleImages = [];

        $http.get('img/images/projects.json').success(function(data) {
            for(var key in data)
            {
                $scope.SampleImages.push(data[key].SampleImage);
            }
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
