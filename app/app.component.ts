import { Component } from '@angular/core';

import { Ng2Component } from './ng2/ng2.component';
import { Ng2Service } from './ng2/ng2.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [Ng2Component],
    providers: [Ng2Service]
})
export class AppComponent { }