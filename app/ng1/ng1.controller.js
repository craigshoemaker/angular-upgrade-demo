(function () {
   
   'use strict';
   
    var app = angular.module('app');
    
    app.controller('Ng1Controller',
        
               ['$scope', 'Ng1Service',
        function($scope,   ng1Service){
            $scope.title = "ng1 controller";

            ng1Service.getAll().then(function (data) {
                $scope.data = data;    
            }, function(error){
                $scope.error = error;
            });
        }]);
    
}(angular));