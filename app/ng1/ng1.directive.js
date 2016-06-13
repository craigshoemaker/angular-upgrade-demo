(function () {

    'use strict';

    var app = angular.module('app');

    app.directive('ng1Directive', function () {
        return {
            templateUrl: 'app/ng1/ng1.directive.html',
            restrict: 'E',
            scope: {
                data: '=',
                selectMovie: '&select'
            },
            controller: function ($scope, $element) {
                $scope.click = function () {
                    $scope.selectMovie();
                };
            }
        };
    });

} ());