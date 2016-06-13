(function () {
   
   'use strict';
   
    var app = angular.module('app');
    
    app.controller('Ng1Controller',
        
               ['$scope', 'Ng1Service',
        function($scope,   ng1Service){
            var $ctrl = this;

            $ctrl.title = "ng1 controller";

            ng1Service.getAll().then(function (data) {
                $ctrl.data = data;
            }, function(error){
                $ctrl.error = error;
            });
        }]);
}());