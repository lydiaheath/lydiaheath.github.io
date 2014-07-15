'use strict';

/* Controllers */

angular.module('futures.controllers', [])
    .controller('NavCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('img/images/projects.json').success(function(data) {
            $scope.projects = data;
        });
    }])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.Projects = [];

        $http.get('img/images/projects.json').success(function(data) {
            for(var key in data)
            {
                var flatProject = data[key].SampleImage;
                flatProject.ProjectKey = key;
                flatProject.ProjectTitle = data[key].ProjectTitle;
                flatProject.Summary = data[key].Summary;
                flatProject.SampleImage = data[key].SampleImage;
                $scope.Projects.push(flatProject);
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
