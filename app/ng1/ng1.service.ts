angular.module('app').service('ng1Service', class Ng1Service {
    $q: any;

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