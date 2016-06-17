angular.module('ng1ng2').component('ng1Item', {
    templateUrl: 'app/ng1-ng2/ng1-item.component.html',
    bindings: {
        data: '='
    },
    controller: function () {
        this.title = 'ng1 component directive';
    }
});