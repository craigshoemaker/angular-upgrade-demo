import { Component, OnInit } from '@angular/core';

import { IData } from '../data.interface';
import { Ng2DirectiveComponent } from './ng2-directive.component';
import { Ng2Service } from './ng2.service';
import { NG1_COMPONENTS } from './ng1.components';

@Component({
    selector: 'ng2-component',
    templateUrl: 'app/ng1-ng2/ng2.component.html',
    directives: NG1_COMPONENTS
})
export class Ng2Component implements OnInit {
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