angular.module('ng1ng2').component('ng1List', {
    templateUrl: 'app/ng1-ng2/ng1-list.component.html',
    controller: class ng1ListController {
        title: string;
        data: any[];

        static $inject = ['ng2Service'];

        constructor(ng2Service: any) {

            this.title = 'ng1 component';

            ng2Service.getAll().then((data) => {
                this.data = data;
            });
        }
    }
});