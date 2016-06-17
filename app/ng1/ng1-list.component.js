angular.module('app').component('ng1List', {
    templateUrl: 'app/ng1/ng1-list.component.html',
    bindings: {},
    controller: function (ng1Service) {
        this.title = 'ng1 component';
        var _this = this;
        ng1Service.getAll().then(function (data) {
            _this.data = data;
        });
    }
});