angular.module('app').service('ng1Service', function ($q) {
    return {
        getAll: function () {
            return $q.when([
                { id: 1, title: "ng1 service data item 1" },
                { id: 2, title: "ng1 service data item 2" },
                { id: 3, title: "ng1 service data item 3" },
                { id: 4, title: "ng1 service data item 4" }
            ]);
        }
    };
})