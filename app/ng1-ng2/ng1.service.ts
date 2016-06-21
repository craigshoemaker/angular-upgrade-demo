angular.module('ng1ng2').service('ng1Service', class Ng1Service {
    $q: any;

    constructor($q) {
        this.$q = $q;
    }

    getAll() {
        return this.$q.when([
            { id: 1, title: "ng1 service data item 1" },
            { id: 2, title: "ng1 service data item 2" }
        ]);
    }
});