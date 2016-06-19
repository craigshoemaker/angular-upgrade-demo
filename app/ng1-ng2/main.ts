import { Ng2Service } from './ng2.service';
import { AppComponent } from './app.component';
import upgradeAdapter from './upgradeAdapter';

upgradeAdapter.addProvider(Ng2Service);

let app = angular.module('ng1ng2');
app.factory('ng2Service', upgradeAdapter.downgradeNg2Provider(Ng2Service));
app.directive('myApp', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));

upgradeAdapter.bootstrap(document.documentElement, ['ng1ng2']);