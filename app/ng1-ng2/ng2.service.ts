import { Injectable } from '@angular/core';

@Injectable()
export class Ng2Service {
    constructor() { }

    getAll(): any {

        return new Promise<any[]>((resolve, reject) => {
            resolve([
                { id: 1, title: "ng2 service data item 1" },
                { id: 2, title: "ng2 service data item 2" },
                { id: 3, title: "ng2 service data item 3" },
                { id: 4, title: "ng2 service data item 4" }
            ]);
        });
    }
}