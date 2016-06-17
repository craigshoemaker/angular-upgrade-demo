angular.module('ng1ng2').component('ng1List', {
    templateUrl: 'app/ng1-ng2/ng1-list.component.html',
    bindings: {},
    controller: class ng1ListController {
        ng1Service: any;
        title: string;
        data: any[];

        constructor(ng1Service) {
            this.ng1Service = ng1Service;

            this.title = 'ng1 component';
            this.ng1Service.getAll().then((data) => {
                this.data = data;
            });
        }
    }
});