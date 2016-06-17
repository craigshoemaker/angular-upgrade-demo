angular.module('ng1ng2').service('ng1Service', class N1Service {
    $q: ng.IQService;

    constructor($q) {
        this.$q = $q;
    }

    getAll() {
        return this.$q.when([
            { id: 1, title: "ng1 service data item 1" },
            { id: 2, title: "ng1 service data item 2" },
            { id: 3, title: "ng1 service data item 3" },
            { id: 4, title: "ng1 service data item 4" }
        ]);
    }
});