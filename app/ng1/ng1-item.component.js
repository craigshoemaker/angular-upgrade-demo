angular.module('app').component('ng1Item', {
    templateUrl: 'app/ng1/ng1-item.component.html',
    bindings: {
        data: '='
    },
    controller: function () {
        this.title = 'ng1 component directive';
    }
});