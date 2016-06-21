import { Component, OnInit } from '@angular/core';

import { IData } from '../data.interface';
import { Ng2ItemComponent } from './ng2-item.component';
import { Ng2Service } from './ng2.service';

@Component({
    selector:       'ng2-list',
    templateUrl:    'app/ng2/ng2-list.component.html',
    directives:     [Ng2ItemComponent]
})
export class Ng2ListComponent implements OnInit {
    data: IData[] = [];

    title: string = 'ng2 component';
    error: any;
    
    constructor(private _ng2Service: Ng2Service) { }
    
    ngOnInit() { 
        this._ng2Service.getAll().then(
            (data) => { this.data = data }, 
            (error) => { this.error = error; }
        );
    }
}