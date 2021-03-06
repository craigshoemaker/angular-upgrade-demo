import { Injectable } from '@angular/core';

import { IData } from '../data.interface';

@Injectable()
export class Ng2Service {
    getAll(): Promise<IData[]> {
        return Promise.resolve([
            { id: 1, title: "ng2 service data item 1" },
            { id: 2, title: "ng2 service data item 2" }
        ]);
    }
}