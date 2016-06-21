import { Component } from '@angular/core';

import { Ng2ListComponent } from './ng2-list.component';
import { Ng2Service } from './ng2.service';

@Component({
    selector:       'ng2-app',
    templateUrl:    'app/ng2/app.component.html',
    directives:     [Ng2ListComponent],
    providers:      [Ng2Service]
})
export class AppComponent { }