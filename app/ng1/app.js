'use strict';

angular.module('app').config(['$locationProvider', '$routeProvider', 'ng1Service',
    function config($locationProvider, $routeProvider, ng1Service) {
        //$locationProvider.hashPrefix('!');

        $routeProvider.
            when('/data', {
                template: '<ng1-component></ng1-component>',
                resolve: {
                    ng1Service: ng1Service
                }
            }).
            when('/data/:id', {
                template: '<item-detail></item-detail>'
            }).
            otherwise('/data');
    }
]);