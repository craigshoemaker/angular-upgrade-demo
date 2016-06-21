import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IData } from '../data.interface';

@Component({
    selector: 'ng2-item',
    templateUrl: 'app/ng2/ng2-item.component.html'
})
export class Ng2ItemComponent {
    @Input() data: IData;
    
}