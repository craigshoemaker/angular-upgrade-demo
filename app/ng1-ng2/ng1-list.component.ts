angular.module('ng1ng2').component('ng1List', {
    templateUrl: 'app/ng1-ng2/ng1-list.component.html',
    controller: class ng1ListController {
        title: string;
        ng1Data: any[];
        ng2Data: any[];

        static $inject = ['ng2Service', 'ng1Service'];

        constructor(ng2Service: any, ng1Service: any) {

            this.title = 'ng1 component';

            ng1Service.getAll().then((data) => {
                this.ng1Data = data;
            });

            ng2Service.getAll().then((data) => {
                this.ng2Data = data;
            });
        }
    }
});