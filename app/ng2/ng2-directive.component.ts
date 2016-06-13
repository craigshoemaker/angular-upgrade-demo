import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IData } from './data.interface';

@Component({
    selector: 'ng2-directive',
    templateUrl: 'app/ng2/ng2-directive.component.html'
})
export class Ng2DirectiveComponent {
    @Input() data: IData;
    
}