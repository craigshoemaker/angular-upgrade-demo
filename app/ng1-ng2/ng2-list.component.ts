import { Component, OnInit, Inject } from '@angular/core';

import { IData } from '../data.interface';
import { Ng2ItemComponent } from './ng2-item.component';
import { Ng2Service } from './ng2.service';
import { NG1_COMPONENTS } from './ng1.components';

interface INg1Service {
    getAll: any
}

@Component({
    selector: 'ng2-list',
    templateUrl: 'app/ng1-ng2/ng2-list.component.html',
    directives: [ NG1_COMPONENTS.ng1Item, Ng2ItemComponent ]
})
export class Ng2Component implements OnInit {
    ng1Data: IData[] = [];
    ng2Data: IData[] = [];

    title: string = 'ng2 component';
    error: any;
    
    constructor(                        private _ng2Service: Ng2Service, 
                @Inject('ng1Service')   private _ng1Service: INg1Service) {}
    
    ngOnInit() { 
        this._ng2Service.getAll().then(
            (data) => { this.ng2Data = data }, 
            (error) => { this.error = error; }
        );

        this._ng1Service.getAll().then(
            (data) => { this.ng1Data = data }, 
            (error) => { this.error = error; }
        );
    }
}