angular.module('app').component('ng1List', {
    templateUrl: 'app/ng1/ng1-list.component.html',
    bindings: {},
    controller: class ng1ListController {
        title: string = 'ng1 component';
        data: any[];

        constructor(private ng1Service) {
            this.ng1Service.getAll().then((data) => {
                this.data = data;
            });
        }
    }
});