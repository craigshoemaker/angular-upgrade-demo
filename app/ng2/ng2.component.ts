import { Component, OnInit } from '@angular/core';

import { IData } from './data.interface';
import { Ng2DirectiveComponent } from './ng2-directive.component';
import { Ng2Service } from './ng2.service';

@Component({
    selector: 'ng2-component',
    templateUrl: 'app/ng2/ng2.component.html',
    directives: [Ng2DirectiveComponent]
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